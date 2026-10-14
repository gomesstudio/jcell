import React, { useState, useEffect } from 'react';
import { IMAGES } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutSection: React.FC = () => {
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
    <section 
      id="sobre" 
      className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 relative text-white overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #C81024 0%, #B80E21 25%, #9E0D1F 60%, #850A19 100%)'
      }}
    >
      {/* Variação de iluminação vibrante em vermelho vivo (#E7192D) para energia, profundidade e sofisticação */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, rgba(231, 25, 45, 0.38) 0%, rgba(200, 16, 36, 0.12) 50%, transparent 75%)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(circle at 85% 65%, rgba(231, 25, 45, 0.25) 0%, transparent 60%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. TOPO DA SEÇÃO: Identificador Centralizado, Título Principal e Faixa de Credibilidade */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="inline-block text-white/95 font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase font-heading mb-2">
            QUEM SOMOS
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-white leading-tight tracking-tight m-0 mb-6 sm:mb-8">
            Mais de 20 anos ao seu lado!
          </h2>

          {/* Faixa de Credibilidade com 3 Pilares Oficiais em cards escuros elegantes #222020 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 text-left">
            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#222020]/50 border border-white/20 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#E7192D]/25 border border-[#E7192D]/60 flex items-center justify-center shrink-0 text-white">
                <i className="fa-solid fa-clock-rotate-left text-sm" aria-hidden="true"></i>
              </div>
              <div className="min-w-0">
                <p className="font-heading font-bold text-xs sm:text-[13px] text-white m-0 leading-tight">Mais de 20 Anos</p>
                <p className="text-[11px] text-[#D2CACC] m-0 mt-0.5 leading-tight">De história e confiança</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#222020]/50 border border-white/20 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#E7192D]/25 border border-[#E7192D]/60 flex items-center justify-center shrink-0 text-white">
                <i className="fa-solid fa-location-dot text-sm" aria-hidden="true"></i>
              </div>
              <div className="min-w-0">
                <p className="font-heading font-bold text-xs sm:text-[13px] text-white m-0 leading-tight">Presença em Nanuque</p>
                <p className="text-[11px] text-[#D2CACC] m-0 mt-0.5 leading-tight">Loja no Calçadão, Centro</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#222020]/50 border border-white/20 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#E7192D]/25 border border-[#E7192D]/60 flex items-center justify-center shrink-0 text-white">
                <i className="fa-solid fa-screwdriver-wrench text-sm" aria-hidden="true"></i>
              </div>
              <div className="min-w-0">
                <p className="font-heading font-bold text-xs sm:text-[13px] text-white m-0 leading-tight">Assistência Técnica</p>
                <p className="text-[11px] text-[#D2CACC] m-0 mt-0.5 leading-tight">Especializada celulares e tablets</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CONTEÚDO PRINCIPAL EM DUAS COLUNAS EQUILIBRADAS (50% / 50% NO DESKTOP) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* COLUNA ESQUERDA: Fotografia Original da Fachada da Loja com clique em tela cheia */}
          <div className="lg:col-span-6 w-full">
            <div 
              onClick={() => setIsFullscreen(true)}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/11] max-h-[460px] mx-auto w-full group bg-black/30 cursor-pointer transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsFullscreen(true);
                }
              }}
              aria-label="Ver foto da fachada da loja em tela cheia"
              title="Clique para ampliar"
            >
              <ImageWithFallback
                src={IMAGES.fachada}
                fallbackSrc={IMAGES.cdn.fachada}
                alt="Fachada oficial da loja J'Cell Acessórios e Variedades em Nanuque - MG"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                fallbackLabel="Fachada J'Cell Nanuque"
              />
              {/* Leve gradiente sutil periférico para acabamento premium */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Dica discreta de clique para ampliar no hover */}
              <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5">
                <i className="fa-solid fa-expand text-[10px]" aria-hidden="true"></i>
                <span>Ampliar</span>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: Texto Institucional, Citação de Compromisso e Serviços */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7">
            
            {/* Texto Institucional */}
            <p className="text-base sm:text-[17px] text-white/95 leading-relaxed font-normal m-0 max-w-xl">
              A J&apos;Cell faz parte da história de Nanuque há mais de 20 anos! Tudo isso graças à confiança de cada cliente que passou por nossa loja e continua fazendo parte da nossa trajetória. Temos muito orgulho de oferecer, em um só lugar, tudo o que você precisa para o seu celular além de acessórios, eletrônicos e assistência técnica especializada para celulares e tablets.
              <span className="block mt-4 sm:mt-5 text-white font-semibold">
                J&apos;Cell uma história construída com você, todos os dias!
              </span>
            </p>

            {/* Citação em Destaque (Compromisso) */}
            <blockquote className="relative rounded-2xl border border-white/20 bg-[#222020]/60 backdrop-blur-md px-5 py-4 text-white italic text-base sm:text-[17px] font-medium leading-relaxed shadow-sm !mt-10 sm:!mt-14 lg:!mt-16 border-l-4 border-l-white">
              “Mais do que vender produtos, queremos conquistar sua confiança e estar presentes no seu dia a dia!”
            </blockquote>

            {/* 3 Serviços Organizados em Cards Refinados */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 pt-4 border-t border-white/20">
              
              {/* Serviço 1: Acessórios */}
              <div className="p-3.5 rounded-xl bg-[#222020]/50 border border-white/15 hover:border-white/30 transition-all duration-200">
                <div className="flex items-center gap-2.5 text-white mb-1.5">
                  <div 
                    className="w-8 h-8 rounded-lg bg-[#E7192D]/20 border border-[#E7192D]/40 flex items-center justify-center shrink-0 shadow-sm"
                    aria-hidden="true"
                  >
                    <i className="fa-solid fa-headphones text-xs sm:text-sm text-white"></i>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-white m-0">
                    Acessórios
                  </h3>
                </div>
                <p className="text-xs text-[#D2CACC] leading-relaxed m-0">
                  Capinhas, cabos, fones, carregadores e muito mais.
                </p>
              </div>

              {/* Serviço 2: Assistência Técnica */}
              <div className="p-3.5 rounded-xl bg-[#222020]/50 border border-white/15 hover:border-white/30 transition-all duration-200">
                <div className="flex items-center gap-2.5 text-white mb-1.5">
                  <div 
                    className="w-8 h-8 rounded-lg bg-[#E7192D]/20 border border-[#E7192D]/40 flex items-center justify-center shrink-0 shadow-sm"
                    aria-hidden="true"
                  >
                    <i className="fa-solid fa-screwdriver-wrench text-xs sm:text-sm text-white"></i>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-white m-0">
                    Assistência técnica
                  </h3>
                </div>
                <p className="text-xs text-[#D2CACC] leading-relaxed m-0">
                  Diagnóstico e reparo de celulares e tablets.
                </p>
              </div>

              {/* Serviço 3: Películas */}
              <div className="p-3.5 rounded-xl bg-[#222020]/50 border border-white/15 hover:border-white/30 transition-all duration-200">
                <div className="flex items-center gap-2.5 text-white mb-1.5">
                  <div 
                    className="w-8 h-8 rounded-lg bg-[#E7192D]/20 border border-[#E7192D]/40 flex items-center justify-center shrink-0 shadow-sm"
                    aria-hidden="true"
                  >
                    <i className="fa-solid fa-shield-halved text-xs sm:text-sm text-white"></i>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-white m-0">
                    Películas
                  </h3>
                </div>
                <p className="text-xs text-[#D2CACC] leading-relaxed m-0">
                  Mais proteção para o seu dispositivo, com aplicação na loja.
                </p>
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
          aria-label="Foto da fachada da loja em tela cheia"
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
                Fachada Oficial — J'Cell Nanuque
              </span>
            </div>

            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#D7192D] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#D7192D] cursor-pointer"
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
              src={IMAGES.fachada} 
              alt="Fachada oficial da loja J'Cell Acessórios e Variedades em tela cheia"
              className="max-h-[82vh] max-w-[92vw] w-auto h-auto object-contain rounded-2xl shadow-2xl"
            />
          </div>

          {/* Rodapé do Modal com Dica */}
          <div 
            className="text-center py-2 text-xs text-white/60"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Pressione <kbd className="px-1.5 py-0.5 rounded bg-white/15 text-white font-mono text-[11px] border border-white/20">ESC</kbd> ou clique no botão para fechar</span>
          </div>
        </div>
      )}

    </section>
  );
};
