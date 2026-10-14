import React, { useState, useEffect } from 'react';
import { STORE_INFO, IMAGES } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';

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
      {/* Efeito Glow / Aura Premium de Fundo */}
      <div 
        className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#D7192D]/40 via-white/20 to-[#D7192D]/40 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Imagem com extremidades arredondadas, flutuação e sombras (sem molduras pretas) */}
      <div 
        onClick={() => setIsFullscreen(true)}
        className="relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] transition-all duration-500 animate-float-frame hover:-translate-y-2 hover:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.8)]"
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
      </div>

      {/* Sombra de Projeção Flutuante */}
      <div 
        className="w-[85%] mx-auto h-5 mt-2 rounded-full bg-black/40 blur-xl animate-float-shadow pointer-events-none" 
        aria-hidden="true" 
      />
    </div>
  );

  return (
    <section id="pelicula" className="py-10 sm:py-16 lg:py-24 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Conteúdo e Benefícios - À esquerda no desktop (order-1) */}
          <div className="lg:col-span-6 order-1 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-medium text-white mb-3">
                <i className="fa-solid fa-shield-halved text-[#D7192D] text-xs"></i>
                <span>Proteção Máxima para Telas</span>
              </div>

              {/* Na versão mobile: Imagem aparece primeiro logo após o texto "Proteção Máxima para Telas" */}
              <div className="block lg:hidden my-5">
                {renderMachineImage()}
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight">
                Aplicação de Película <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">sob Medida</span>
              </h2>

              <p className="text-sm sm:text-base text-white/85 mt-3 max-w-prose leading-relaxed">
                Película de hidrogel de última geração, cortada milimetricamente para o modelo exato do seu aparelho, garantindo proteção completa com máxima nitidez.
              </p>
            </div>

            {/* Grid de Destaques Premium */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white mb-2 shadow-inner">
                  <i className="fa-solid fa-mobile-screen text-sm text-[#D7192D]"></i>
                </div>
                <div className="font-bold text-white text-xs sm:text-sm">Multidispositivos</div>
                <div className="text-[11px] text-white/70 mt-0.5">Celulares, smartwatches e tablets</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white mb-2 shadow-inner">
                  <i className="fa-solid fa-bolt text-sm text-[#D7192D]"></i>
                </div>
                <div className="font-bold text-white text-xs sm:text-sm">Feita na Hora</div>
                <div className="text-[11px] text-white/70 mt-0.5">Corte e aplicação em poucos minutos</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white mb-2 shadow-inner">
                  <i className="fa-solid fa-fingerprint text-sm text-[#D7192D]"></i>
                </div>
                <div className="font-bold text-white text-xs sm:text-sm">Toque Preciso</div>
                <div className="text-[11px] text-white/70 mt-0.5">Preserva 100% a sensibilidade</div>
              </div>
            </div>

            {/* Lista detalhada */}
            <ul className="space-y-3 text-sm text-white/90 pt-1">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-white text-[#D7192D] flex items-center justify-center shrink-0 mt-0.5 shadow-sm" aria-hidden="true">
                  <i className="fa-solid fa-check text-[11px]"></i>
                </span>
                <span>Absorve impactos e não trinca como o vidro tradicional.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-white text-[#D7192D] flex items-center justify-center shrink-0 mt-0.5 shadow-sm" aria-hidden="true">
                  <i className="fa-solid fa-check text-[11px]"></i>
                </span>
                <span>Encaixe perfeito até mesmo em telas curvas e bordas infinitas.</span>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=Ol%C3%A1!%20Gostaria%20de%20colocar%20uma%20pel%C3%ADcula%20de%20hidrogel%20na%20J%27Cell.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#D7192D] hover:bg-neutral-100 font-bold text-sm sm:text-base px-8 py-3.5 min-h-[48px] rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] hover:scale-[1.02]"
              >
                <i className="fa-brands fa-whatsapp text-xl text-[#D7192D]" aria-hidden="true"></i>
                <span>Aplicar película na loja</span>
              </a>
            </div>
          </div>

          {/* Imagem da máquina de corte - À direita no desktop (order-2) e oculta no mobile */}
          <div className="hidden lg:block lg:col-span-6 order-2">
            {renderMachineImage()}
          </div>
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
              <span className="w-2.5 h-2.5 rounded-full bg-[#D7192D]" aria-hidden="true"></span>
              <span className="font-heading font-semibold text-sm sm:text-base tracking-wide">
                Máquina de Corte Hidrogel — J'Cell
              </span>
            </div>

            {/* Botão de Fechar com X na Extremidade */}
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#D7192D] text-white flex items-center justify-center border border-white/30 backdrop-blur-md transition-all duration-200 shadow-2xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
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

