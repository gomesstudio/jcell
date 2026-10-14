import React, { useRef, useState, useEffect } from 'react';
import { STORE_INFO, CATALOG_ITEMS, IMAGES } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';

export const ProductsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const scrollToItem = (index: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const items = container.querySelectorAll<HTMLElement>('.carousel-item-snap');
      const targetItem = items[index];
      if (targetItem) {
        const containerWidth = container.clientWidth;
        const itemWidth = targetItem.offsetWidth;
        const scrollPos = targetItem.offsetLeft - (containerWidth - itemWidth) / 2;
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
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
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
    <section id="produtos" className="py-10 sm:py-16 lg:py-24 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Cabeçalho de Seção com Controles do Carrossel */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 sm:mb-14">
          <div className="text-center sm:text-left max-w-xl">
            <span className="eyebrow-dark block mb-2 text-white/90">Categorias</span>
            <h2 className="text-section-title font-heading text-white">
              Nossos Produtos
            </h2>
            <p className="text-sm sm:text-base text-white/80 mt-2">
              Opções selecionadas para equipar e proteger seus dispositivos com máxima qualidade.
            </p>
          </div>

          {/* Setas de navegação no cabeçalho (desktop) */}
          <div className="hidden lg:flex items-center gap-3" aria-label="Navegação do carrossel">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Ver produto anterior"
              className="w-11 h-11 rounded-full border border-white/25 bg-white/10 hover:bg-[#D7192D] text-white flex items-center justify-center transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white backdrop-blur-md active:scale-95"
            >
              <i className="fa-solid fa-chevron-left text-sm" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Ver próximo produto"
              className="w-11 h-11 rounded-full border border-white/25 bg-white/10 hover:bg-[#D7192D] text-white flex items-center justify-center transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white backdrop-blur-md active:scale-95"
            >
              <i className="fa-solid fa-chevron-right text-sm" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* 2. Área do Carrossel com Setas Interativas Flutuantes */}
        <div className="relative group/carousel">
          {/* Seta clicável esquerda flutuante (Mobile e Tablet) */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Voltar para o produto anterior"
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/65 hover:bg-[#D7192D] text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl transition-all duration-200 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <i className="fa-solid fa-chevron-left text-sm" aria-hidden="true"></i>
          </button>

          {/* Seta clicável direita flutuante (Mobile e Tablet) */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Avançar para o próximo produto"
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/65 hover:bg-[#D7192D] text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl transition-all duration-200 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <i className="fa-solid fa-chevron-right text-sm" aria-hidden="true"></i>
          </button>

          {/* Carrossel Horizontal: Imagem inteira com ação Consultar sobreposta */}
          <div
            ref={carouselRef}
            className="carousel-container gap-4 sm:gap-6 py-2 px-1 pb-4"
            tabIndex={0}
            aria-label="Carrossel de categorias de produtos"
          >
            {CATALOG_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="carousel-item-snap w-[80vw] max-w-[310px] sm:w-[45%] lg:w-[calc(25%-18px)] flex flex-col relative aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 group select-none transition-all duration-300 hover:border-white/40"
              >
                {/* 1. Imagem Inteira sem corte de layout */}
                <div className="absolute inset-0 w-full h-full bg-neutral-900 overflow-hidden">
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

                {/* 2. Moldura e Gradientes para Máxima Legibilidade da Imagem */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 via-35% to-transparent pointer-events-none"
                  aria-hidden="true"
                />



                {/* 4. Ação "Consultar" Moderna Sobreposta Sobre a Imagem */}
                <div className="relative mt-auto p-3.5 sm:p-4 z-20 flex flex-col justify-end">
                  {/* Ação "Consultar" com Visual Moderno de Alto Contraste */}
                  <a
                    href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=${encodeURIComponent(item.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full bg-white/95 hover:bg-[#D7192D] text-[#1A1A1A] hover:text-white font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl transition-all duration-300 shadow-xl backdrop-blur-md border border-white/40 group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <i className="fa-brands fa-whatsapp text-sm text-[#25D366] group-hover/btn:text-white transition-colors" aria-hidden="true"></i>
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

          {/* 3. Controles e Indicadores Mobile com Setas Clicáveis */}
          <div className="flex sm:hidden items-center justify-center gap-3 mt-4" aria-label="Controles do carrossel mobile">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Voltar produto"
              className="w-10 h-10 rounded-full bg-white/10 active:bg-white/30 text-white flex items-center justify-center border border-white/25 backdrop-blur-md shadow-md"
            >
              <i className="fa-solid fa-chevron-left text-xs" aria-hidden="true"></i>
            </button>

            {/* Pontos de paginação interativos */}
            <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/15">
              {CATALOG_ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToItem(idx)}
                  aria-label={`Ir para produto ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Avançar produto"
              className="w-10 h-10 rounded-full bg-white/10 active:bg-white/30 text-white flex items-center justify-center border border-white/25 backdrop-blur-md shadow-md"
            >
              <i className="fa-solid fa-chevron-right text-xs" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* 4. Botão Central de Consulta Geral no WhatsApp */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20produtos%20na%20J%27Cell.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#D7192D] hover:bg-neutral-100 font-medium text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full transition-all duration-200 shadow-lg text-decoration-none active:scale-95"
          >
            <i className="fa-brands fa-whatsapp text-base sm:text-lg text-[#D7192D]" aria-hidden="true"></i>
            <span>Consultar disponibilidade</span>
          </a>
        </div>
      </div>
    </section>
  );
};
