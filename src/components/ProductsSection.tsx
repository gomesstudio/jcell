import React, { useRef, useState, useEffect } from 'react';
import { STORE_INFO, CATALOG_ITEMS, IMAGES, CatalogItem } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';
import { ScrollReveal } from './ScrollReveal';

export const ProductsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenItem, setFullscreenItem] = useState<CatalogItem | null>(null);

  const getFallbackSrc = (id: string) => {
    switch (id) {
      case 'capas-peliculas': return IMAGES.cdn.capasPeliculas;
      case 'controles': return IMAGES.cdn.controles;
      case 'carregadores': return IMAGES.cdn.carregadores;
      case 'fones': return IMAGES.cdn.fones;
      case 'eletronicos': return IMAGES.cdn.eletronicos;
      default: return undefined;
    }
  };

  // Travar scroll e ouvir tecla Esc para o modal de tela cheia
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullscreenItem(null);
      }
    };
    if (fullscreenItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [fullscreenItem]);

  const scrollToItem = (index: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const items = container.querySelectorAll<HTMLElement>('.carousel-item-snap');
      const targetItem = items[index];
      if (targetItem) {
        const containerWidth = container.clientWidth;
        const itemWidth = targetItem.offsetWidth;
        const itemLeft = targetItem.offsetLeft - container.offsetLeft;
        const scrollPos = itemLeft - (containerWidth - itemWidth) / 2;
        container.scrollTo({
          left: Math.max(0, scrollPos),
          behavior: 'smooth'
        });
        setActiveIndex(index);
      }
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const items = container.querySelectorAll<HTMLElement>('.carousel-item-snap');
      const scrollLeft = container.scrollLeft;
      const containerCenter = scrollLeft + container.clientWidth / 2;

      let closestIndex = 0;
      let minDiff = Infinity;
      items.forEach((item, idx) => {
        const itemLeft = item.offsetLeft - container.offsetLeft;
        const itemCenter = itemLeft + item.offsetWidth / 2;
        const diff = Math.abs(itemCenter - containerCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = idx;
        }
      });
      setActiveIndex(closestIndex);
    }
  };

  const scrollPrev = () => {
    const nextIdx = activeIndex > 0 ? activeIndex - 1 : CATALOG_ITEMS.length - 1;
    scrollToItem(nextIdx);
  };

  const scrollNext = () => {
    const nextIdx = activeIndex < CATALOG_ITEMS.length - 1 ? activeIndex + 1 : 0;
    scrollToItem(nextIdx);
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section 
      id="produtos" 
      className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 relative text-white overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #850A19 0%, #9E0D1F 30%, #850A19 70%, #760816 100%)'
      }}
    >
      {/* Brilhos escarlates vivos e discretos para profundidade premium sem ofuscar as artes */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(231, 25, 45, 0.32) 0%, rgba(200, 16, 36, 0.10) 50%, transparent 72%)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(circle at 15% 40%, rgba(231, 25, 45, 0.22) 0%, transparent 60%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Cabeçalho de Seção com Scroll Reveal */}
        <ScrollReveal direction="up" distance={20} duration={0.7} className="mb-6 sm:mb-8 lg:mb-10">
          <div className="text-center sm:text-left max-w-xl">
            <span className="inline-block text-white/90 font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase font-heading mb-2">
              CATEGORIAS
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-heading font-extrabold text-white leading-tight tracking-tight m-0">
              Nossos Produtos
            </h2>
            <p className="text-sm sm:text-base text-white/95 mt-2 leading-relaxed">
              Opções selecionadas para equipar e proteger seus dispositivos com máxima qualidade.
            </p>
          </div>
        </ScrollReveal>

        {/* 2. Área do Carrossel com Setas Interativas Flutuantes e Scroll Reveal */}
        <ScrollReveal direction="up" distance={24} duration={0.8} delay={0.1} className="relative group/carousel max-w-[320px] xs:max-w-[360px] sm:max-w-none mx-auto">
          {/* Seta clicável esquerda flutuante */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Voltar para o produto anterior"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-[#C81024] text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl transition-all duration-200 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <i className="fa-solid fa-chevron-left text-sm" aria-hidden="true"></i>
          </button>

          {/* Seta clicável direita flutuante */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Avançar para o próximo produto"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-[#C81024] text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl transition-all duration-200 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <i className="fa-solid fa-chevron-right text-sm" aria-hidden="true"></i>
          </button>

          {/* Carrossel Horizontal: 1 item por vez no mobile (sem quebra de imagem), 2 no tablet e 4 no desktop */}
          <div
            ref={carouselRef}
            className="carousel-container relative gap-4 sm:gap-6 py-2 px-0 sm:px-1 pb-4"
            tabIndex={0}
            aria-label="Carrossel de categorias de produtos"
          >
            {CATALOG_ITEMS.map((item) => (
              <div
                key={item.id}
                className="carousel-item-snap w-full min-w-full sm:min-w-0 sm:w-[45%] lg:w-[calc(25%-18px)] flex flex-col relative aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65)] bg-[#222020] group select-none transition-all duration-300 hover:border-[#E7192D]/60 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
              >
                {/* 1. Imagem Inteira clicável para ampliação */}
                <div 
                  onClick={() => setFullscreenItem(item)}
                  className="absolute inset-0 w-full h-full bg-[#171313] overflow-hidden cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setFullscreenItem(item);
                    }
                  }}
                  aria-label={`Ver imagem de ${item.title} em tela cheia`}
                  title="Clique para ampliar"
                >
                  <ImageWithFallback
                    src={item.image}
                    fallbackSrc={getFallbackSrc(item.id)}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    fallbackLabel={item.title}
                  />
                </div>

                {/* 2. Top Badges: Categoria e Botão Ampliar */}
                <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-semibold text-white/90 uppercase tracking-wider shadow-sm">
                    {item.category}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenItem(item);
                    }}
                    className="pointer-events-auto px-2.5 py-1 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 shadow-sm cursor-pointer"
                    aria-label={`Ampliar ${item.title}`}
                    title="Ampliar imagem"
                  >
                    <i className="fa-solid fa-expand text-[10px]" aria-hidden="true"></i>
                    <span>Ampliar</span>
                  </button>
                </div>

                {/* 3. Gradiente para Legibilidade da Ação Inferior */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 via-40% to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* 4. Ação "Consultar" Moderna Sobreposta Sobre a Imagem */}
                <div className="relative mt-auto p-3.5 sm:p-4 z-20 flex flex-col justify-end">
                  <a
                    href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=${encodeURIComponent(item.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full bg-white/95 hover:bg-[#C81024] text-[#171313] hover:text-white font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl transition-all duration-300 shadow-xl backdrop-blur-md border border-white/40 group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <i className="fa-brands fa-whatsapp text-sm text-[#15803D] group-hover/btn:text-white transition-colors" aria-hidden="true"></i>
                      <span>Consultar</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium opacity-80 group-hover/btn:opacity-100">
                      <span>Disponibilidade</span>
                      <i className="fa-solid fa-arrow-right text-[10px] transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Indicadores de Paginação no Mobile (1 produto por vez com navegação direta) */}
          <div className="flex sm:hidden items-center justify-between mt-3 px-1">
            <span className="text-[11px] font-medium text-white/70">
              Deslize ou toque nas setas
            </span>
            <div className="flex items-center gap-1.5">
              {CATALOG_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToItem(idx)}
                  aria-label={`Ver ${item.title}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeIndex === idx
                      ? 'w-6 h-2 bg-[#E7192D] shadow-sm shadow-[#E7192D]/70'
                      : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-white/90 tabular-nums">
              {activeIndex + 1} / {CATALOG_ITEMS.length}
            </span>
          </div>
        </ScrollReveal>

        {/* 4. Botão Central de Consulta Geral no WhatsApp com Scroll Reveal */}
        <ScrollReveal direction="up" distance={18} duration={0.7} delay={0.15} className="text-center mt-8 sm:mt-12">
          <a
            href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20produtos%20na%20J%27Cell.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white text-[#C81024] hover:bg-neutral-100 font-bold text-sm sm:text-base px-7 py-3.5 min-h-[48px] rounded-full transition-all duration-200 shadow-xl text-decoration-none hover:shadow-2xl hover:scale-[1.02] active:scale-95"
          >
            <i className="fa-brands fa-whatsapp text-lg sm:text-xl text-[#15803D]" aria-hidden="true"></i>
            <span>Consultar disponibilidade geral</span>
          </a>
        </ScrollReveal>
      </div>

      {/* MODAL TELA CHEIA PARA O PRODUTO SELECIONADO (z-[9999]) */}
      {fullscreenItem && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-3 sm:p-6 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem de ${fullscreenItem.title} em tela cheia`}
          onClick={() => setFullscreenItem(null)}
        >
          {/* Barra Superior do Modal */}
          <div 
            className="w-full max-w-4xl flex items-center justify-between py-3 px-2 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D7192D]" aria-hidden="true"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-neutral-200">
                {fullscreenItem.title} — J'Cell
              </span>
            </div>

            <button
              onClick={() => setFullscreenItem(null)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#C81024] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
              aria-label="Fechar modo tela cheia"
              title="Fechar (Esc)"
            >
              <i className="fa-solid fa-xmark text-lg sm:text-xl w-6 h-6 flex items-center justify-center" aria-hidden="true"></i>
            </button>
          </div>

          {/* Imagem do Produto em Destaque Centralizada */}
          <div 
            className="relative flex items-center justify-center max-h-[76vh] max-w-[92vw] overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={fullscreenItem.image} 
              alt={`${fullscreenItem.title} em tela cheia`}
              className="max-h-[76vh] max-w-[92vw] w-auto h-auto object-contain rounded-2xl shadow-2xl"
            />
          </div>

          {/* Rodapé do Modal com Ação e Dica de Teclado */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl pt-3 px-2 gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs text-white/70">
              Pressione <kbd className="px-1.5 py-0.5 rounded bg-white/15 text-white font-mono text-[11px] border border-white/20">ESC</kbd> para fechar
            </span>

            <a
              href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=${encodeURIComponent(fullscreenItem.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-base" aria-hidden="true"></i>
              <span>Consultar este produto no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
