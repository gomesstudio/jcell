import React from 'react';
import { STORE_INFO, IMAGES } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative text-white pt-14 pb-12 overflow-hidden border-t border-white/10">
      {/* Fundo escuro premium com gradiente sofisticado e iluminação sutil centralizada */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(231, 25, 45, 0.16) 0%, rgba(23, 19, 19, 0.98) 55%, #120e0f 100%)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal direction="up" distance={20} duration={0.7}>
          {/* 1. Marca Centralizada com Logo e Tagline de Confiança */}
          <div className="flex flex-col items-center justify-center space-y-3.5 mb-8">
            <a 
              href="#inicio" 
              className="group inline-flex items-center justify-center p-2 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#E7192D]/40 hover:bg-white/[0.08] transition-all duration-300 shadow-lg shadow-black/40"
              aria-label="J'Cell - Voltar ao início"
            >
              <ImageWithFallback
                src={IMAGES.logo}
                fallbackSrc={IMAGES.cdn.logo}
                alt={STORE_INFO.name}
                className="h-10 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(231,25,45,0.35)] group-hover:scale-105 transition-transform duration-300"
                fallbackLabel="J'Cell"
              />
            </a>

            <div className="max-w-xl mx-auto space-y-1.5">
              <h3 className="font-heading font-bold text-white text-base sm:text-lg tracking-wide uppercase">
                {STORE_INFO.name}
              </h3>
              <p className="text-[#D2CACC] text-xs sm:text-sm leading-relaxed font-normal">
                Uma história construída com você, todos os dias. Atendimento com transparência, qualidade e confiança.
              </p>
            </div>
          </div>

          {/* Horário Comercial Centralizado */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#D2CACC]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Seg a Sex: 08:00 às 18:00 | Sáb: 08:00 às 12:00</span>
            </div>
          </div>

          {/* Linha Final de Copyright & Back to Top (Padrão Corporativo Americano) */}
          <div className="pt-6 border-t border-white/10 flex flex-col items-center justify-center gap-3 text-center">
            <p className="text-[11px] sm:text-xs text-[#D2CACC] m-0 tracking-wide font-normal">
              © {new Date().getFullYear()} {STORE_INFO.name}. Todos os direitos reservados.
            </p>

            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 text-[11px] text-[#D2CACC] hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 rounded-full transition-all duration-200 group"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <i className="fa-solid fa-arrow-up text-[10px] text-[#FF5C6C] group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
