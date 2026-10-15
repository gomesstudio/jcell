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

  // Componente da Arte Promocional Vertical
  const renderPromotionalArt = (isMobile = false) => (
    <div className={`w-full ${isMobile ? 'max-w-[280px] xs:max-w-[320px] mx-auto my-5' : 'max-w-[380px] lg:max-w-[420px] xl:max-w-[450px] mx-auto'}`}>
      <div className="relative group">
        {/* Glow atmosférico suave vermelho */}
        <div 
          className="absolute -inset-1.5 rounded-[26px] sm:rounded-[32px] bg-gradient-to-tr from-[#E7192D]/35 via-white/10 to-[#E7192D]/30 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
          aria-hidden="true"
        />

        {/* Moldura da Arte com Cantos Arredondados e Sombra Profunda */}
        <div 
          onClick={() => setIsFullscreen(true)}
          className="relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border border-white/15 bg-black/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_35px_70px_-15px_rgba(231,25,45,0.3)]"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsFullscreen(true);
            }
          }}
          aria-label="Ver arte da assistência técnica em tela cheia"
          title="Clique para ampliar"
        >
          <ImageWithFallback
            src={IMAGES.assistenciaTecnica}
            fallbackSrc={IMAGES.cdn.assistenciaTecnica}
            alt="Assistência Técnica Especializada em Celulares e Tablets J'Cell"
            className="w-full h-auto aspect-[941/1672] object-contain object-center block select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
            fallbackLabel="Arte Assistência J'Cell"
          />

          {/* Dica de clique sobreposta sutil */}
          <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5">
            <i className="fa-solid fa-expand text-[10px]" aria-hidden="true"></i>
            <span>Ampliar</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="oficina" className="pt-14 sm:pt-20 lg:pt-24 pb-14 sm:pb-20 lg:pb-24 relative text-white overflow-hidden bg-transparent">
      
      {/* 1. FUNDO VERMELHO ELEGANTE COM TRANSIÇÃO CONTÍNUA & GLOWS EM VERMELHO VIVO DA MARCA */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'linear-gradient(180deg, #760816 0%, #850A19 25%, #9E0D1F 55%, #850A19 80%, #720815 100%)'
        }}
        aria-hidden="true"
      />

      {/* Luz atmosférica superior esquerda com pulso suave */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none animate-ambient-2"
        style={{
          background: 'radial-gradient(circle, rgba(231, 25, 45, 0.35) 0%, rgba(200, 16, 36, 0.12) 45%, transparent 70%)',
          filter: 'blur(85px)',
        }}
        aria-hidden="true"
      />

      {/* Luz atmosférica inferior direita com pulso suave */}
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none animate-ambient-1"
        style={{
          background: 'radial-gradient(circle, rgba(240, 45, 65, 0.30) 0%, rgba(133, 10, 25, 0.10) 45%, transparent 70%)',
          filter: 'blur(90px)',
        }}
        aria-hidden="true"
      />

      {/* Realce luminoso suave focado atrás do flyer técnico */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(231, 25, 45, 0.22) 0%, transparent 60%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMPOSIÇÃO INTEGRADA EM DUAS COLUNAS PRINCIPAIS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 xl:gap-14 items-center">
          
          {/* COLUNA ESQUERDA — CONTEÚDO COMERCIAL, GRADE E AÇÃO */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* 1. Pequeno Rótulo Superior com Filete Vermelho */}
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-3 sm:mb-3.5">
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-white/90 font-heading">
                OFICINA ESPECIALIZADA
              </span>
              <span className="h-[2px] w-10 sm:w-12 bg-[#E7192D] rounded-full inline-block" aria-hidden="true" />
            </div>

            {/* 2. Título Principal Alinhado à Esquerda */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold font-heading text-white leading-[1.14] tracking-tight mb-2.5 text-center sm:text-left">
              Assistência técnica para celulares e tablets
            </h2>

            {/* 3. Subtítulo */}
            <p className="text-[#D2CACC] text-sm sm:text-base leading-relaxed max-w-xl mb-6 sm:mb-7 text-center sm:text-left mx-auto sm:mx-0">
              Diagnóstico e reparo realizados com técnicos especializados.
            </p>

            {/* NA VERSÃO MOBILE: Exibe a Arte Promocional logo após o Subtítulo */}
            <div className="block lg:hidden">
              {renderPromotionalArt(true)}
            </div>

            {/* 4. Grade dos Seis Serviços em cards escuros #222020 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-7 sm:mb-8">
              {WORKSHOP_SERVICES.map((serv, index) => (
                <div
                  key={index}
                  className="h-full flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#222020]/90 hover:bg-[#222020] border border-white/15 hover:border-[#E7192D]/60 transition-all duration-200 shadow-sm group"
                >
                  {/* Ícone Quadrado Vermelho da Marca */}
                  <div 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#E7192D] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#E7192D]/30 transition-transform duration-200 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <i className={`fa-solid ${serv.icon} text-lg sm:text-xl`}></i>
                  </div>
                  
                  {/* Textos: Título e Descrição */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading font-bold text-sm sm:text-[15px] text-white mb-0.5 leading-snug">
                      {serv.title}
                    </h3>
                    <p className="text-xs text-[#D2CACC] leading-relaxed m-0">
                      {serv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 5 e 6. Botão de Conversão "Pedir Orçamento" e Texto Auxiliar */}
            <div className="flex flex-col items-center sm:items-start gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/${STORE_INFO.phoneWorkshopRaw}?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20na%20oficina%20da%20J%27Cell.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#E7192D] hover:bg-[#C81024] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#E7192D]/30 hover:shadow-xl hover:shadow-[#E7192D]/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-98 group/btn text-decoration-none min-h-[48px]"
              >
                <i className="fa-brands fa-whatsapp text-lg sm:text-xl text-white" aria-hidden="true"></i>
                <span>Pedir Orçamento</span>
                <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover/btn:translate-x-1" aria-hidden="true"></i>
              </a>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D2CACC] pl-1">
                <span className="w-2 h-2 rounded-full bg-[#E7192D] shrink-0" aria-hidden="true"></span>
                <span>Atendimento direto com o técnico responsável.</span>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA — ARTE PROMOCIONAL VERTICAL (No Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center xl:justify-end">
            {renderPromotionalArt(false)}
          </div>

        </div>

      </div>

      {/* MODAL TELA CHEIA - SOBREPÕE O CABEÇALHO (z-[9999]) */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-3 sm:p-6 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Imagem da assistência técnica em tela cheia"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Barra Superior com Informação e Botão X na Extremidade */}
          <div 
            className="w-full max-w-5xl flex items-center justify-between py-3 px-2 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E7192D] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-neutral-300">
                Assistência Técnica J'Cell
              </span>
            </div>

            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#E7192D] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E7192D] cursor-pointer"
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
