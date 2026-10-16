import React, { useState, useEffect, useRef } from 'react';

// Pixel transparente SVG leve e sem impacto de rede para preservar dimensões e evitar ícones quebrados antes da interseção
const TRANSPARENT_PIXEL = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
  fallbackSrc?: string;
}

/**
 * Componente de Imagem Otimizado com Suporte a Lazy Loading por IntersectionObserver,
 * Decodificação Assíncrona e Fallback Automático em Caso de Erro.
 */
export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  style,
  fallbackLabel,
  fallbackSrc,
  loading,
  decoding = 'async',
  onLoad,
  onError,
  ...props
}) => {
  const isLazy = loading === 'lazy';

  // Se for lazy loading, adia o carregamento até o elemento aproximar-se da área visível
  const [shouldLoad, setShouldLoad] = useState(!isLazy);
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(isLazy ? undefined : src);
  const [isLoaded, setIsLoaded] = useState(!isLazy);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Monitora visibilidade via IntersectionObserver para disparo de Lazy Loading
  useEffect(() => {
    // Se não for lazy ou já foi autorizado o carregamento, não precisa observar
    if (!isLazy || shouldLoad) return;

    // Fallback caso o navegador não suporte IntersectionObserver (ambientes legados)
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShouldLoad(true);
      setCurrentSrc(src);
      return;
    }

    const imgElement = imgRef.current;
    if (!imgElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Carrega se estiver intersectando ou se aproximando da margem do viewport
        if (entry && (entry.isIntersecting || entry.intersectionRatio > 0)) {
          setShouldLoad(true);
          setCurrentSrc(src);
          observer.unobserve(imgElement);
          observer.disconnect();
        }
      },
      {
        // Inicia o carregamento 250px antes na vertical e 100px no carrossel horizontal
        // Garantindo que a imagem já esteja pronta antes de entrar totalmente na tela
        rootMargin: '250px 100px',
        threshold: 0.01,
      }
    );

    observer.observe(imgElement);

    return () => {
      observer.disconnect();
    };
  }, [isLazy, shouldLoad, src]);

  // Sincroniza caso a prop 'src' mude dinamicamente após início do carregamento
  useEffect(() => {
    if (shouldLoad && src) {
      setCurrentSrc(src);
      setHasError(false);
    }
  }, [src, shouldLoad]);

  // Se a imagem já estiver no cache do navegador (complete = true)
  useEffect(() => {
    if (shouldLoad && imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [currentSrc, shouldLoad]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
    if (onError) {
      onError(e);
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  if (hasError || (shouldLoad && !currentSrc)) {
    return (
      <div 
        className={`bg-[#171313] text-neutral-400 flex flex-col items-center justify-center p-4 text-center ${className}`}
        role="img"
        aria-label={alt || 'Imagem'}
      >
        <svg 
          className="w-8 h-8 text-neutral-500 mb-2 opacity-50" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.869a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-xs font-semibold text-[#FFFFFF] line-clamp-2">
          {fallbackLabel || alt || "J'Cell"}
        </span>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={shouldLoad ? currentSrc : TRANSPARENT_PIXEL}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      referrerPolicy="no-referrer"
      onError={handleImageError}
      onLoad={handleImageLoad}
      style={{
        ...style,
        opacity: isLazy && !isLoaded ? 0 : 1,
        transition: style?.transition || 'opacity 0.35s ease',
      }}
      {...props}
    />
  );
};
