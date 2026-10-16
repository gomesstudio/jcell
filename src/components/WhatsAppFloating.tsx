import React from 'react';
import { STORE_INFO } from '../data/mockData';

export const WhatsAppFloating: React.FC = () => {
  return (
    <aside 
      aria-label="Atendimento rápido pelo WhatsApp" 
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group"
    >
      {/* Tooltip flutuante no desktop */}
      <span className="hidden sm:inline-block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-xs font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl transform translate-x-2 group-hover:translate-x-0">
        Atendimento no WhatsApp
      </span>

      {/* Aura luminosa sutil */}
      <div 
        className="absolute -inset-1 rounded-full bg-[#15803D]/40 blur-md animate-pulse pointer-events-none" 
        aria-hidden="true" 
      />

      <a
        href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20J%27Cell.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp da J'Cell"
        title="Fale conosco no WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#15803D] hover:bg-[#166534] text-white flex items-center justify-center shadow-2xl shadow-black/40 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white border border-white/30"
      >
        <i className="fa-brands fa-whatsapp text-3xl text-white drop-shadow-sm" aria-hidden="true"></i>
      </a>
    </aside>
  );
};
