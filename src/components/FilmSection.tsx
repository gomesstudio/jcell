import React, { useState, useEffect } from 'react';
import { STORE_INFO, IMAGES } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from './ScrollReveal';

export const FilmSection: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Fechar com tecla Escape e desabilitar scroll da página enquanto em tela cheia
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
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

  const renderMachineImage = () => (
    <div className="relative group max-w-xl mx-auto lg:max-w-none">
      {/* Efeito Glow / Aura Sutil e Delicada sem halos excessivos */}
      <div 
        className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#D7192D]/25 via-white/10 to-[#D7192D]/20 opacity-45 blur-lg group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Imagem com extremidades arredondadas, flutuação e sombras (sem molduras pretas) */}
      <div 
        onClick={() => setIsFullscreen(true)}
        className="relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] transition-all duration-500 animate-float-frame hover:-translate-y-2 hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.85)] group border border-white/10"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsFullscreen(true);
          }
        }}
        aria-label="Ver imagem da máquina de corte em tela cheia"
        title="Clique para ver em tela cheia"
      >
        <ImageWithFallback
          src={IMAGES.maquinaPelicula}
          fallbackSrc={IMAGES.cdn.maquinaPelicula}
          alt="Máquina de corte para película de hidrogel sob medida na J'Cell"
          className="w-full h-auto aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
          fallbackLabel="Máquina de Hidrogel"
        />

        {/* Dica discreta de clique para ampliar */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5">
          <i className="fa-solid fa-expand text-[10px]" aria-hidden="true"></i>
          <span>Ampliar</span>
        </div>
      </div>

      {/* Sombra de Projeção Flutuante */}
      <div 
        className="w-[85%] mx-auto h-5 mt-2 rounded-full bg-black/35 blur-xl animate-float-shadow pointer-events-none" 
        aria-hidden="true" 
      />
    </div>
  );

  return (
    <section 
      id="pelicula" 
      className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 relative text-white overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #760816 0%, #850A19 25%, #A30D20 50%, #850A19 75%, #760816 100%)'
      }}
    >
      {/* Iluminação ambiente vibrante direcionada valorizando a máquina de hidrogel e os diferenciais */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 65% 45%, rgba(231, 25, 45, 0.40) 0%, rgba(200, 16, 36, 0.14) 50%, transparent 72%)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(circle at 20% 60%, rgba(231, 25, 45, 0.25) 0%, transparent 60%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Conteúdo e Benefícios - À esquerda no desktop (order-1) */}
          <div className="lg:col-span-6 order-1 space-y-6">
            <ScrollReveal direction="up" distance={20} duration={0.7}>
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                <span className="inline-block text-white/95 font-bold text-xs sm:text-[13px] tracking-[0.22em] uppercase font-heading">
                  PELÍCULA DE HIDROGEL
                </span>
                <span className="h-[2px] w-10 sm:w-12 bg-[#E7192D] rounded-full inline-block" aria-hidden="true" />
              </div>

              {/* Na versão mobile: Imagem aparece primeiro logo após o identificador */}
              <div className="block lg:hidden my-5">
                {renderMachineImage()}
              </div>
              
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight text-center sm:text-left">
                Aplicação de Película de Hidrogel <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">Sob Medida</span>
              </h2>

              <p className="text-sm sm:text-base text-[#D2CACC] mt-3 max-w-prose leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
                Proteção personalizada para celulares, tablets, smartwatches e telas automotivas. Com corte de alta precisão, a JCell oferece soluções sob medida para diversos dispositivos.
              </p>
            </ScrollReveal>

            {/* Grid de Destaques Premium em cards escuros #222020 com Stagger Reveal */}
            <ScrollRevealStagger staggerDelay={0.12} delayChildren={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <ScrollRevealItem>
                <div className="p-4 rounded-2xl bg-[#222020]/75 hover:bg-[#222020] border border-white/15 hover:border-white/35 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl shadow-black/30 flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#C81024] border border-white/20 flex items-center justify-center text-white mb-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <i className="fa-solid fa-mobile-screen text-sm text-white"></i>
                    </div>
                    <div className="font-bold text-white text-xs sm:text-sm tracking-tight">Multidispositivos</div>
                  </div>
                  <div className="text-[11px] text-[#D2CACC] mt-1.5 leading-relaxed">Celulares, smartwatches e tablets</div>
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <div className="p-4 rounded-2xl bg-[#222020]/75 hover:bg-[#222020] border border-white/15 hover:border-white/35 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl shadow-black/30 flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#C81024] border border-white/20 flex items-center justify-center text-white mb-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <i className="fa-solid fa-bolt text-sm text-white"></i>
                    </div>
                    <div className="font-bold text-white text-xs sm:text-sm tracking-tight">Feita na Hora</div>
                  </div>
                  <div className="text-[11px] text-[#D2CACC] mt-1.5 leading-relaxed">Corte e aplicação em poucos minutos</div>
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <div className="p-4 rounded-2xl bg-[#222020]/75 hover:bg-[#222020] border border-white/15 hover:border-white/35 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl shadow-black/30 flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#C81024] border border-white/20 flex items-center justify-center text-white mb-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <i className="fa-solid fa-fingerprint text-sm text-white"></i>
                    </div>
                    <div className="font-bold text-white text-xs sm:text-sm tracking-tight">Toque Preciso</div>
                  </div>
                  <div className="text-[11px] text-[#D2CACC] mt-1.5 leading-relaxed">Preserva 100% a sensibilidade</div>
                </div>
              </ScrollRevealItem>
            </ScrollRevealStagger>

            {/* Lista detalhada com Scroll Reveal */}
            <ScrollReveal direction="up" distance={18} duration={0.7} delay={0.15}>
              <ul className="space-y-3 text-sm text-white/95 pt-1">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white text-[#C81024] flex items-center justify-center shrink-0 mt-0.5 shadow-sm" aria-hidden="true">
                    <i className="fa-solid fa-check text-[11px]"></i>
                  </span>
                  <span>Absorve impactos e não trinca como o vidro tradicional.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white text-[#C81024] flex items-center justify-center shrink-0 mt-0.5 shadow-sm" aria-hidden="true">
                    <i className="fa-solid fa-check text-[11px]"></i>
                  </span>
                  <span>Encaixe perfeito até mesmo em telas curvas e bordas infinitas.</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={18} duration={0.7} delay={0.2} className="pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=Ol%C3%A1!%20Gostaria%20de%20colocar%20uma%20pel%C3%ADcula%20de%20hidrogel%20na%20J%27Cell.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#C81024] hover:bg-neutral-100 font-bold text-sm sm:text-base px-8 py-3.5 min-h-[48px] rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-98"
              >
                <i className="fa-brands fa-whatsapp text-xl text-[#C81024]" aria-hidden="true"></i>
                <span>Aplicar película na loja</span>
              </a>
            </ScrollReveal>
          </div>

          {/* Imagem da máquina de corte - À direita no desktop (order-2) com Scroll Reveal */}
          <ScrollReveal direction="up" distance={28} duration={0.8} delay={0.1} className="hidden lg:block lg:col-span-6 order-2">
            {renderMachineImage()}
          </ScrollReveal>
        </div>
      </div>

      {/* MODAL TELA CHEIA - SOBREPÕE O CABEÇALHO (z-[9999]) */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-3 sm:p-6 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Imagem da máquina de película em tela cheia"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Barra Superior com Informação e Botão X na Extremidade */}
          <div 
            className="w-full max-w-6xl flex items-center justify-between py-3 px-2 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E7192D]" aria-hidden="true"></span>
              <span className="font-heading font-semibold text-sm sm:text-base tracking-wide">
                Máquina de Corte Hidrogel — J'Cell
              </span>
            </div>

            {/* Botão de Fechar com X na Extremidade */}
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#C81024] text-white flex items-center justify-center border border-white/30 backdrop-blur-md transition-all duration-200 shadow-2xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Fechar tela cheia"
            >
              <i className="fa-solid fa-xmark text-lg sm:text-xl transition-transform duration-200 group-hover:rotate-90" aria-hidden="true"></i>
            </button>
          </div>

          {/* Área da Imagem em Tela Cheia Inteiramente Visível */}
          <div 
            className="relative w-full max-w-6xl flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={IMAGES.maquinaPelicula}
              fallbackSrc={IMAGES.cdn.maquinaPelicula}
              alt="Máquina de corte para película de hidrogel sob medida na J'Cell em tela cheia"
              className="max-w-full max-h-[82vh] w-auto h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] rounded-xl"
              fallbackLabel="Máquina de Hidrogel"
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

