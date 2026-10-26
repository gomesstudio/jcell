import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { STORE_INFO, IMAGES } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';

// Code-splitting do modal de compartilhamento, baixado apenas sob demanda
const ShareModal = lazy(() => import('./ShareModal').then(m => ({ default: m.ShareModal })));

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio', id: 'inicio' },
  { label: 'Sobre', href: '#sobre', id: 'sobre' },
  { label: 'Produtos', href: '#produtos', id: 'produtos' },
  { label: 'Assistência Técnica', href: '#oficina', id: 'oficina' },
  { label: 'Conheça a Loja', href: '#video', id: 'video' },
  { label: 'Localização', href: '#localizacao', id: 'localizacao' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Monitora scroll para efeito de sombra no navbar e detecção contínua da seção ativa
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Se o usuário acabou de clicar em um item de menu, não sobrescreve a marcação durante a rolagem
      if (isClickScrollingRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Se estiver no topo da página
          if (window.scrollY < 120) {
            setActiveSection('inicio');
            ticking = false;
            return;
          }

          // Se estiver no final da página (rodapé/localização)
          if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
            setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id);
            ticking = false;
            return;
          }

          // Posição de leitura com margem compensatória do cabeçalho
          const scrollPosition = window.scrollY + 140;

          // Verifica de baixo para cima qual seção está visível no DOM
          for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
            const item = NAV_ITEMS[i];
            const el = document.getElementById(item.id);
            if (el) {
              const top = el.offsetTop;
              if (scrollPosition >= top) {
                setActiveSection(item.id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Executa na inicialização e após a montagem dos componentes
    handleScroll();
    const timer = setTimeout(handleScroll, 400);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  // Navegação ao clicar em qualquer item: atualiza a linha branca imediatamente e rola suavemente
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    // Trava temporariamente a detecção automática durante o scroll
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 900);

    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 64;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${id}`);
    } else {
      window.location.hash = id;
    }
  };

  // Close on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !menuButtonRef.current?.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Cabeçalho Principal com acabamento Dark Gray Translúcido Premium */}
      <nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-[#171313]/90 backdrop-blur-md shadow-xl shadow-black/30 border-b border-white/10' 
            : 'bg-[#171313]/65 backdrop-blur-md border-b border-white/10'
        }`}
        aria-label="Navegação principal"
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-14 sm:h-14' : 'h-16'
        }`}>
          {/* Logo Oficial J'Cell */}
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, 'inicio')}
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg transition-transform duration-200 hover:scale-[1.02] shrink-0"
            aria-label="J'Cell Acessórios e Variedades - Ir para o início"
          >
            <div className="flex items-center">
              <ImageWithFallback
                src={IMAGES.logo}
                fallbackSrc={IMAGES.cdn.logo}
                alt={STORE_INFO.name}
                width={140}
                height={32}
                loading="eager"
                decoding="async"
                className="h-7 sm:h-8 w-auto object-contain drop-shadow-sm"
                fallbackLabel="J'Cell"
              />
            </div>
          </a>

          {/* Links Desktop refinados para máxima legibilidade e sofisticação */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm font-medium transition-all duration-200 py-1.5 border-b-2 tracking-normal whitespace-nowrap shrink-0 ${
                  activeSection === item.id
                    ? 'text-white border-white font-semibold'
                    : 'text-white/80 border-transparent hover:text-white hover:border-white/40'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Botão Compartilhar Desktop com Alto Contraste WCAG (6.0:1) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsShareOpen(true)}
              aria-label="Compartilhar site da J'Cell por link ou redes sociais"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-[#C81024] font-semibold text-xs sm:text-[13px] px-4 py-2 min-h-[36px] rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer whitespace-nowrap shrink-0"
            >
              <i className="fa-solid fa-share-nodes text-xs sm:text-sm text-[#C81024]" aria-hidden="true"></i>
              <span>Compartilhar</span>
            </button>
          </div>

          {/* Controles Mobile: Botão Compartilhar e Menu Hambúrguer */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsShareOpen(true)}
              aria-label="Compartilhar site da J'Cell"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white border border-white/20 backdrop-blur-md shadow-sm"
            >
              <i className="fa-solid fa-share-nodes text-base text-white" aria-hidden="true"></i>
            </button>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label={mobileMenuOpen ? 'Fechar menu de seções' : 'Abrir menu de seções'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              onClick={toggleMenu}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white border border-white/20 backdrop-blur-md shadow-sm"
            >
              <i 
                className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg text-white`} 
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown com as seções de navegação */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu-drawer"
            className="lg:hidden bg-[#171313]/98 backdrop-blur-2xl border-t border-white/10 px-5 py-4 shadow-2xl animate-fadeIn max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="flex flex-col py-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center justify-between min-h-[48px] px-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === item.id 
                      ? 'bg-white/10 text-white font-semibold' 
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <i className="fa-solid fa-chevron-right text-xs text-white/40" aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Modal Interativo de Compartilhamento carregado sob demanda */}
      {isShareOpen && (
        <Suspense fallback={null}>
          <ShareModal 
            isOpen={isShareOpen} 
            onClose={() => setIsShareOpen(false)} 
          />
        </Suspense>
      )}
    </header>
  );
};
