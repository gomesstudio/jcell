import React from 'react';
import { STORE_INFO } from '../data/mockData';

export const WhatsAppFloating: React.FC = () => {
  return (
    <aside 
      aria-label="Atendimento rápido pelo WhatsApp" 
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
    >
      <a
        href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20J%27Cell.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp da J'Cell"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        <i className="fa-brands fa-whatsapp text-3xl text-white" aria-hidden="true"></i>
      </a>
    </aside>
  );
};
