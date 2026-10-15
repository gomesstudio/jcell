import React from 'react';
import { STORE_INFO, IMAGES } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="relative text-white pt-10 sm:pt-12 pb-8 sm:pb-10">
      {/* Transição suave para o rodapé em grafite elegante (#171313) encerrando o site com harmonia */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'linear-gradient(180deg, #42050C 0%, #26050A 30%, #171313 75%, #171313 100%)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(231, 25, 45, 0.25) 0%, transparent 65%)'
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" distance={16} duration={0.65}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 pb-5 border-b border-white/10 text-xs">
            {/* Marca compacta */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
              <ImageWithFallback
                src={IMAGES.logo}
                fallbackSrc={IMAGES.cdn.logo}
                alt={STORE_INFO.name}
                className="h-8 sm:h-9 w-auto object-contain rounded filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                fallbackLabel="J'Cell"
              />
              <div>
                <p className="font-heading font-bold text-white text-sm tracking-wide m-0">
                  {STORE_INFO.name}
                </p>
                <p className="text-xs text-[#D2CACC] m-0 mt-0.5">
                  {STORE_INFO.address}
                </p>
              </div>
            </div>

            {/* Links de contato compactos apenas com ícones */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-neutral-300">
              <a 
                href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20J%27Cell.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 hover:border-emerald-400/50 flex items-center justify-center transition-all duration-200 text-white shadow-sm hover:scale-105 active:scale-95 group"
                title={`WhatsApp Loja: ${STORE_INFO.phoneStore}`}
                aria-label={`WhatsApp Loja: ${STORE_INFO.phoneStore}`}
              >
                <i className="fa-brands fa-whatsapp text-emerald-400 text-base group-hover:scale-110 transition-transform" aria-hidden="true"></i>
              </a>

              <a 
                href={`https://wa.me/${STORE_INFO.phoneWorkshopRaw}?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20na%20oficina%20da%20J%27Cell.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 hover:border-amber-400/50 flex items-center justify-center transition-all duration-200 text-white shadow-sm hover:scale-105 active:scale-95 group"
                title={`WhatsApp Oficina: ${STORE_INFO.phoneWorkshop}`}
                aria-label={`WhatsApp Oficina: ${STORE_INFO.phoneWorkshop}`}
              >
                <i className="fa-solid fa-wrench text-amber-400 text-sm group-hover:scale-110 transition-transform" aria-hidden="true"></i>
              </a>

              <a 
                href={STORE_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 hover:border-pink-400/50 flex items-center justify-center transition-all duration-200 text-white shadow-sm hover:scale-105 active:scale-95 group"
                title={`Instagram: ${STORE_INFO.instagramUser}`}
                aria-label={`Instagram: ${STORE_INFO.instagramUser}`}
              >
                <i className="fa-brands fa-instagram text-pink-400 text-base group-hover:scale-110 transition-transform" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Linha Final de Copyright Ultra-compacta */}
          <div className="pt-2.5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#D2CACC] gap-1 text-center">
            <p className="m-0">
              © {new Date().getFullYear()} {STORE_INFO.name} • Nanuque/MG
            </p>
            <p className="m-0 text-[#D2CACC]/80">
              Acessórios, eletrônicos e assistência técnica especializada.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
