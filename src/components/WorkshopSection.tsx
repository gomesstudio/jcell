import React, { useState, useEffect } from 'react';
import { STORE_INFO, IMAGES, WORKSHOP_SERVICES } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';

export const WorkshopSection: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Fechar modal com tecla Esc e travar rolagem do body quando aberto
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  return (
    <section id="oficina" className="py-12 sm:py-20 lg:py-28 relative text-white">
      {/* Fundo escuro premium da Oficina com transição orgânica e gradual contínua, sem demarcações ou linhas */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(20, 20, 20, 0.72) 14%, #141414 28%, #141414 72%, rgba(20, 20, 20, 0.72) 86%, transparent 100%)'
        }}
        aria-hidden="true"
      />

      {/* Realce luminoso suave de profundidade técnica */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(215, 25, 45, 0.08) 0%, transparent 60%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho de Seção */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <span className="eyebrow-dark block mb-2 text-[#D7192D]">Oficina Especializada</span>
          <h2 className="text-section-title font-heading text-white">
            Assistência técnica para celulares e tablets
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            Diagnóstico e reparo realizados com técnicos especializados.
          </p>
        </div>

        {/* Grade de 2 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Coluna de Serviços (cards de assistência e botão de orçamento) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WORKSHOP_SERVICES.map((serv, index) => (
                <div
                  key={index}
                  className="premium-card-dark p-4 sm:p-5 flex items-start gap-3.5"
                >
                  <div 
                    className="w-10 h-10 rounded-xl bg-[#D7192D] text-white flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <i className={`fa-solid ${serv.icon} text-base`}></i>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-white mb-1">
                      {serv.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed m-0">
                      {serv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botão de contato exclusivo da oficina */}
            <div className="pt-2 flex flex-col items-center sm:items-start">
              <a
                href={`https://wa.me/${STORE_INFO.phoneWorkshopRaw}?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20na%20oficina%20da%20J%27Cell.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#D7192D] hover:bg-[#B71525] text-white py-2.5 px-6 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow text-decoration-none group"
              >
                <i className="fa-brands fa-whatsapp text-base text-white" aria-hidden="true"></i>
                <span>Pedir Orçamento</span>
              </a>

              <p className="text-xs text-neutral-400 mt-2.5 flex items-center justify-center sm:justify-start gap-1.5 text-center sm:text-left">
                <i className="fa-solid fa-clock text-xs text-[#D7192D]" aria-hidden="true"></i>
                <span>Atendimento direto com o técnico responsável.</span>
              </p>
            </div>
          </div>

          {/* Coluna da Imagem Técnica Completa (primeiro no mobile: order-1, à direita no desktop: lg:order-2) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[380px]">
              <div className="relative group">
                {/* Aura sutil luminosa de fundo */}
                <div 
                  className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#D7192D]/30 via-white/10 to-[#D7192D]/30 opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  aria-hidden="true"
                />

                {/* Imagem Completa com Bordas Arredondadas, Efeito de Flutuação e Sombra */}
                <div 
                  onClick={() => setIsFullscreen(true)}
                  className="relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 animate-float-frame hover:-translate-y-2 hover:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.85)] bg-neutral-900/80"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsFullscreen(true);
                    }
                  }}
                  aria-label="Ver imagem da bancada de assistência técnica em tela cheia"
                  title="Clique para ver em tela cheia"
                >
                  <ImageWithFallback
                    src={IMAGES.assistenciaTecnica}
                    fallbackSrc={IMAGES.cdn.assistenciaTecnica}
                    alt="Bancada de assistência técnica especializada em celulares e tablets da J'Cell"
                    className="w-full h-auto aspect-[941/1672] object-contain object-center block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                    fallbackLabel="Bancada Técnica J'Cell"
                  />
                </div>

                {/* Sombra Projetada Flutuante */}
                <div 
                  className="w-[85%] mx-auto h-5 mt-2 rounded-full bg-black/40 blur-xl animate-float-shadow pointer-events-none" 
                  aria-hidden="true" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL TELA CHEIA - SOBREPÕE O CABEÇALHO (z-[9999]) */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-3 sm:p-6 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Imagem da bancada de assistência técnica em tela cheia"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Barra Superior com Informação e Botão X na Extremidade */}
          <div 
            className="w-full max-w-5xl flex items-center justify-between py-3 px-2 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D7192D] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-neutral-300">
                Assistência Técnica J'Cell
              </span>
            </div>

            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#D7192D] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#D7192D]"
              aria-label="Fechar modo tela cheia"
              title="Fechar (Esc)"
            >
              <i className="fa-solid fa-xmark text-lg sm:text-xl w-6 h-6 flex items-center justify-center" aria-hidden="true"></i>
            </button>
          </div>

          {/* Imagem em Destaque Centralizada e 100% Completa */}
          <div 
            className="relative flex items-center justify-center max-h-[82vh] max-w-[92vw] overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={IMAGES.assistenciaTecnica} 
              alt="Bancada de assistência técnica especializada da J'Cell em tela cheia"
              className="max-h-[82vh] max-w-[92vw] w-auto h-auto object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
