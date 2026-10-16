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
  { label: 'Películas', href: '#pelicula', id: 'pelicula' },
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

  // Monitor scroll for shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlight
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    });

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg transition-transform duration-200 hover:scale-[1.02] shrink-0"
            aria-label="J'Cell Acessórios e Variedades - Ir para o início"
          >
            <div className="flex items-center">
              <ImageWithFallback
                src={IMAGES.logo}
                fallbackSrc={IMAGES.cdn.logo}
                alt={STORE_INFO.name}
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
                  onClick={closeMenu}
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

            {/* Ações Rápidas no Menu Mobile com Contraste WCAG Aprovado */}
            <div className="pt-3 mt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20na%20J%27Cell.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-sm py-3 rounded-xl transition-all shadow-md active:scale-98"
              >
                <i className="fa-brands fa-whatsapp text-lg" aria-hidden="true"></i>
                <span>Falar no WhatsApp</span>
              </a>
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-sm py-2.5 rounded-xl border border-white/15 transition-all"
              >
                <i className="fa-brands fa-instagram text-base text-pink-400" aria-hidden="true"></i>
                <span>Instagram: {STORE_INFO.instagramUser}</span>
              </a>
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
