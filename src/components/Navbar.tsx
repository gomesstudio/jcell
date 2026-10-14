import React, { useState, useEffect, useRef } from 'react';
import { STORE_INFO, IMAGES } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';
import { ShareModal } from './ShareModal';

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
            ? 'bg-[#18181b]/80 backdrop-blur-md shadow-xl shadow-black/25 border-b border-white/10' 
            : 'bg-[#18181b]/60 backdrop-blur-md border-b border-white/10'
        }`}
        aria-label="Navegação principal"
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-14 sm:h-14' : 'h-16'
        }`}>
          {/* Logo Oficial J'Cell com Engrenagens em cápsula translúcida sofisticada */}
          <a 
            href="#inicio" 
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg transition-transform duration-200 hover:scale-[1.02]"
            aria-label="J'Cell Acessórios e Variedades - Ir para o início"
          >
            <div className="rounded-md overflow-hidden flex items-center transition-all shadow-sm">
              <ImageWithFallback
                src={IMAGES.logo}
                fallbackSrc={IMAGES.cdn.logo}
                alt={STORE_INFO.name}
                className="h-5 sm:h-6 w-auto object-contain rounded-md"
                fallbackLabel="J'Cell"
              />
            </div>
          </a>

          {/* Links Desktop refinados para máxima legibilidade e sofisticação */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-[13px] sm:text-sm font-medium transition-all duration-200 py-1 border-b-2 tracking-normal ${
                  activeSection === item.id
                    ? 'text-white border-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
                    : 'text-white/80 border-transparent hover:text-white hover:border-white/50 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Botão Compartilhar Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsShareOpen(true)}
              aria-label="Compartilhar site da J'Cell por link ou redes sociais"
              className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-neutral-100 text-[#D7192D] font-semibold text-xs sm:text-[13px] px-3.5 sm:px-4 min-h-[34px] sm:min-h-[36px] rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
            >
              <i className="fa-solid fa-share-nodes text-xs sm:text-sm text-[#D7192D]" aria-hidden="true"></i>
              <span>Compartilhar</span>
            </button>
          </div>

          {/* Controles Mobile: Botão Compartilhar ao lado do Ícone do Menu de Seções */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Símbolo de Compartilhar Mobile */}
            <button
              type="button"
              onClick={() => setIsShareOpen(true)}
              aria-label="Compartilhar site da J'Cell"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white border border-white/20 backdrop-blur-sm shadow-sm"
            >
              <i className="fa-solid fa-share-nodes text-base text-white" aria-hidden="true"></i>
            </button>

            {/* Ícone do Menu de Seções Mobile */}
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={mobileMenuOpen ? 'Fechar menu de seções' : 'Abrir menu de seções'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              onClick={toggleMenu}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white border border-white/20 backdrop-blur-sm shadow-sm"
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
            className="lg:hidden bg-[#18181b]/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 shadow-2xl animate-fadeIn"
          >
            <div className="flex flex-col">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center min-h-[46px] text-base font-semibold ${
                    index < NAV_ITEMS.length - 1 ? 'border-b border-white/10' : ''
                  } transition-colors ${
                    activeSection === item.id ? 'text-white pl-2 border-l-2 border-l-white font-bold' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Modal Interativo de Compartilhamento */}
      <ShareModal 
        isOpen={isShareOpen} 
        onClose={() => setIsShareOpen(false)} 
      />
    </header>
  );
};
