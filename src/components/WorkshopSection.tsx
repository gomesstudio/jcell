import React, { useState, useEffect } from 'react';
import { STORE_INFO, IMAGES, WORKSHOP_SERVICES } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from './ScrollReveal';

export const WorkshopSection: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [expandedServices, setExpandedServices] = useState<Record<number, boolean>>({});

  const toggleService = (index: number) => {
    setExpandedServices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const areAllExpanded = WORKSHOP_SERVICES.every((_, idx) => !!expandedServices[idx]);

  const toggleAllServices = () => {
    if (areAllExpanded) {
      setExpandedServices({});
    } else {
      const all: Record<number, boolean> = {};
      WORKSHOP_SERVICES.forEach((_, idx) => {
        all[idx] = true;
      });
      setExpandedServices(all);
    }
  };

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
            
            {/* 1. Pequeno Rótulo Superior e Título Principal com Scroll Reveal */}
            <ScrollReveal direction="up" distance={20} duration={0.7}>
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

              {/* 3. Subtítulo com instrução de clique */}
              <p className="text-[#D2CACC] text-sm sm:text-base leading-relaxed max-w-xl mb-6 sm:mb-7 text-center sm:text-left mx-auto sm:mx-0">
                Diagnóstico e reparo realizados com técnicos especializados. Toque em qualquer serviço para ver a descrição completa.
              </p>
            </ScrollReveal>

            {/* NA VERSÃO MOBILE: Exibe a Arte Promocional logo após o Subtítulo */}
            <div className="block lg:hidden">
              {renderPromotionalArt(true)}
            </div>

            {/* Cabeçalho da Grade com Contador e Controle de Expansão */}
            <div className="flex items-center justify-between mb-3 px-1 text-xs text-white/80">
              <span className="font-semibold uppercase tracking-wider text-[11px] text-white/90">
                Serviços Disponíveis
              </span>
              <button
                type="button"
                onClick={toggleAllServices}
                className="text-xs font-medium text-white/80 hover:text-white underline decoration-white/40 hover:decoration-white transition-all cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded px-1"
                aria-label={areAllExpanded ? 'Recolher todas as descrições' : 'Expandir todas as descrições'}
              >
                {areAllExpanded ? 'Recolher todas' : 'Ver todas as descrições'}
              </button>
            </div>

            {/* 4. Grade dos Oito Serviços em cards escuros #222020 com Stagger Reveal e Acordeão Interativo */}
            <ScrollRevealStagger staggerDelay={0.08} delayChildren={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-7 sm:mb-8">
              {WORKSHOP_SERVICES.map((serv, index) => {
                const isExpanded = !!expandedServices[index];
                return (
                  <ScrollRevealItem key={index}>
                    <div
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                      aria-controls={`service-desc-${index}`}
                      onClick={() => toggleService(index)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleService(index);
                        }
                      }}
                      className={`w-full p-4 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl shadow-black/30 hover:-translate-y-0.5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white select-none ${
                        isExpanded
                          ? 'bg-[#222020] border border-[#C81024]/70 shadow-lg shadow-black/40 ring-1 ring-[#C81024]/40'
                          : 'bg-[#222020]/80 hover:bg-[#222020] border border-white/15 hover:border-white/35'
                      }`}
                    >
                      {/* Topo do Card: Ícone, Título e Indicador de Expansão */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3.5 min-w-0 flex-1">
                          {/* Ícone Quadrado Vermelho da Marca com Alto Contraste */}
                          <div 
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#C81024] border border-white/20 text-white flex items-center justify-center shrink-0 shadow-md shadow-black/30 transition-transform duration-300 group-hover:scale-105"
                            aria-hidden="true"
                          >
                            <i className={`fa-solid ${serv.icon} text-lg sm:text-xl text-white`}></i>
                          </div>
                          
                          {/* Título do Serviço e Dica de Ação */}
                          <div className="min-w-0 flex-1">
                            <h3 className="font-heading font-bold text-sm sm:text-[15px] text-white mb-0.5 leading-snug tracking-tight">
                              {serv.title}
                            </h3>
                            {!isExpanded && (
                              <span className="text-[11px] text-white/55 group-hover:text-white/85 transition-colors inline-flex items-center gap-1">
                                <span>Ver descrição</span>
                                <i className="fa-solid fa-chevron-right text-[9px] opacity-70 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Seta Chevron Indicadora de Estado */}
                        <div 
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all shrink-0 ${
                            isExpanded 
                              ? 'bg-[#C81024] text-white shadow-sm' 
                              : 'bg-white/10 group-hover:bg-white/20 text-white/70 group-hover:text-white'
                          }`}
                          aria-hidden="true"
                        >
                          <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      </div>

                      {/* Breve Descrição que Aparece Suavemente ao Clicar */}
                      <div 
                        id={`service-desc-${index}`}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded 
                            ? 'max-h-48 opacity-100 mt-3 pt-3 border-t border-white/10' 
                            : 'max-h-0 opacity-0 pointer-events-none'
                        }`}
                      >
                        <p className="text-xs sm:text-[13px] text-[#D2CACC] leading-relaxed m-0 font-normal">
                          {serv.description}
                        </p>
                      </div>
                    </div>
                  </ScrollRevealItem>
                );
              })}
            </ScrollRevealStagger>

            {/* 5 e 6. Botão de Conversão "Pedir Orçamento" com Alto Contraste WCAG (10.3:1) e Texto Auxiliar com Scroll Reveal */}
            <ScrollReveal direction="up" distance={18} duration={0.7} delay={0.2} className="flex flex-col items-center sm:items-start gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/${STORE_INFO.phoneWorkshopRaw}?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20na%20oficina%20da%20J%27Cell.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-white hover:bg-neutral-100 text-[#C81024] font-bold text-sm sm:text-base shadow-xl shadow-black/35 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-98 group/btn text-decoration-none min-h-[48px]"
              >
                <i className="fa-brands fa-whatsapp text-lg sm:text-xl text-[#15803D]" aria-hidden="true"></i>
                <span>Pedir Orçamento</span>
                <i className="fa-solid fa-arrow-right text-xs text-[#C81024] transition-transform group-hover/btn:translate-x-1" aria-hidden="true"></i>
              </a>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/95 font-medium pl-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" aria-hidden="true"></span>
                <span>Atendimento direto com o técnico responsável.</span>
              </div>
            </ScrollReveal>

          </div>

          {/* COLUNA DIREITA — ARTE PROMOCIONAL VERTICAL (No Desktop) com Scroll Reveal */}
          <ScrollReveal direction="up" distance={28} duration={0.8} delay={0.15} className="hidden lg:flex lg:col-span-5 items-center justify-center xl:justify-end">
            {renderPromotionalArt(false)}
          </ScrollReveal>

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
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#C81024] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
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
              loading="lazy"
              decoding="async"
              className="max-h-[82vh] max-w-[92vw] w-auto h-auto object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

    </section>
  );
};
