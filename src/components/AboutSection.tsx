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
        
        {/* Identificador e Título para Versão Mobile (mantém ordem natural e centralizada no celular) */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 lg:hidden">
          <span className="inline-block text-white/95 font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase font-heading mb-2">
            QUEM SOMOS
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-heading font-extrabold text-white leading-tight tracking-tight m-0">
            Mais de 20 anos ao seu lado!
          </h2>
        </div>

        {/* ESTRUTURA HERO SPLIT NO DESKTOP: 50% LADO ESQUERDO IMAGEM | 50% LADO DIREITO TEXTOS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-stretch">
          
          {/* LADO ESQUERDO: Imagem da Fachada ocupando todo o lado esquerdo da seção */}
          <div className="lg:col-span-6 w-full h-full flex flex-col">
            <div 
              onClick={() => setIsFullscreen(true)}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[580px] xl:min-h-[620px] flex-1 group bg-[#222020] cursor-pointer transition-all duration-500 hover:border-white/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)] flex flex-col"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsFullscreen(true);
                }
              }}
              aria-label="Ver foto da fachada da loja em tela cheia"
              title="Clique para ampliar a foto da fachada"
            >
              <ImageWithFallback
                src={IMAGES.fachada}
                fallbackSrc={IMAGES.cdn.fachada}
                alt="Fachada oficial da loja J'Cell Acessórios e Variedades em Nanuque - MG"
                className="w-full h-full flex-1 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                fallbackLabel="Fachada J'Cell Nanuque"
              />

              {/* Degradê sutil cinematográfico */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Selos informativos elegantes na base */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E7192D] animate-pulse"></span>
                  <span>Nossa Loja em Nanuque - MG</span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-xs text-[#D2CACC] font-medium">
                  <i className="fa-solid fa-map-pin text-[#E7192D] text-xs" aria-hidden="true"></i>
                  <span>Calçadão</span>
                </div>
              </div>

              {/* Dica de clique para ampliar no hover */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center gap-1.5 shadow-lg transform translate-y-1 group-hover:translate-y-0">
                <i className="fa-solid fa-expand text-xs" aria-hidden="true"></i>
                <span>Ampliar</span>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Todos os textos concentrados aqui no Desktop */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-7 h-full py-1">
            
            {/* Header da Seção integrado ao lado direito no Desktop */}
            <div className="hidden lg:block space-y-2">
              <span className="inline-block text-white/95 font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase font-heading">
                QUEM SOMOS
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-[42px] font-heading font-extrabold text-white leading-tight tracking-tight m-0">
                Mais de 20 anos ao seu lado!
              </h2>
            </div>

            {/* Texto Institucional */}
            <p className="text-base sm:text-[17px] text-white/95 leading-relaxed font-normal m-0 max-w-xl text-center sm:text-left mx-auto sm:mx-0">
              A J&apos;Cell faz parte da história de Nanuque há mais de 20 anos! Tudo isso graças à confiança de cada cliente que passou por nossa loja e continua fazendo parte da nossa trajetória. Temos muito orgulho de oferecer, em um só lugar, tudo o que você precisa para o seu celular além de acessórios, eletrônicos e assistência técnica especializada para celulares e tablets.
              <span className="block mt-4 sm:mt-5 text-white font-semibold">
                J&apos;Cell uma história construída com você, todos os dias!
              </span>
            </p>

            {/* Citação em Destaque (Compromisso) */}
            <blockquote className="relative rounded-2xl border border-white/20 bg-[#222020]/60 backdrop-blur-md px-5 py-4 text-white italic text-base sm:text-[17px] font-medium leading-relaxed shadow-sm !mt-4 sm:!mt-6 border-l-4 border-l-white">
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
