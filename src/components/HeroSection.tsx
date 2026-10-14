import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { STORE_INFO, IMAGES } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';

export const HeroSection: React.FC = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  // Função para rolagem suave até a próxima seção (#sobre)
  const handleScrollDown = () => {
    const nextSection = document.getElementById('sobre');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Variantes para animação coordenada e sutil com framer-motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      id="inicio"
      className="relative text-white overflow-hidden pt-[var(--header-h)] bg-[#D7192D] min-h-screen min-h-[100svh] min-h-[100dvh] flex flex-col justify-between"
    >
      {/* 1. CAMADA DE FUNDO INDEPENDENTE: Imagem de tecnologia em tons de vermelho e preto
          Cobrindo toda a seção com background-size: cover e produtos concentrados no lado direito
      */}
      <motion.div 
        initial={{ opacity: 0.85, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
        style={{
          backgroundColor: '#D7192D',
          backgroundImage: `url(${IMAGES.heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      >
        <img
          src={IMAGES.heroBg}
          alt=""
          onLoad={() => setBgLoaded(true)}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== IMAGES.cdn.heroBg) {
              target.src = IMAGES.cdn.heroBg;
              if (target.parentElement) {
                target.parentElement.style.backgroundImage = `url(${IMAGES.cdn.heroBg})`;
              }
            }
          }}
          className={`w-full h-full object-cover object-[75%_center] xs:object-[80%_center] sm:object-[84%_center] lg:object-right transition-opacity duration-500 ${
            bgLoaded ? 'opacity-100' : 'opacity-90'
          }`}
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* 2. CAMADA DE SOBREPOSIÇÃO INDEPENDENTE COM DEGRADÊ EM VERMELHO VIVO DA MARCA (#D7192D)
          Posicionada estritamente entre a imagem de fundo (z-0) e o conteúdo da Hero (z-10).
          Começa 100% sólido (#D7192D) cobrindo perfeitamente a área da logo e dos botões,
          com transição gradual que valoriza a visualização em mobile e desktop.
      */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-[1]" 
        aria-hidden="true"
      >
        {/* Degradê horizontal para Desktop e Tablet */}
        <div 
          className="absolute inset-0 hidden sm:block"
          style={{
            background: 'linear-gradient(to right, #D7192D 0%, #D7192D 42%, rgba(215, 25, 45, 0.96) 50%, rgba(215, 25, 45, 0.82) 60%, rgba(215, 25, 45, 0.58) 72%, rgba(215, 25, 45, 0.28) 84%, rgba(215, 25, 45, 0.08) 94%, transparent 100%)'
          }}
        />

        {/* Degradê vertical otimizado para Mobile:
            - Sólido 100% cobrindo a logo e os botões
            - Transição suave que revela sutilezas da imagem tecnológica sem ofuscar textos
        */}
        <div 
          className="absolute inset-0 sm:hidden"
          style={{
            background: 'linear-gradient(to bottom, #D7192D 0%, #D7192D 50%, rgba(215, 25, 45, 0.92) 62%, rgba(215, 25, 45, 0.65) 78%, rgba(215, 25, 45, 0.3) 90%, transparent 100%)'
          }}
        />

        {/* Transição vertical de continuidade superior com o Navbar */}
        <div 
          className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(183, 21, 37, 0.4) 0%, rgba(215, 25, 45, 0.1) 60%, transparent 100%)'
          }}
        />

        {/* Realce luminoso suave e profundo focado na área da logo */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 20% 40%, rgba(255, 65, 85, 0.22) 0%, rgba(215, 25, 45, 0) 65%)'
          }}
        />

        {/* Transição suave na base, posicionada no limite inferior exato da seção para acabamento perfeito */}
        <div 
          className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(215, 25, 45, 0.4) 50%, rgba(186, 20, 37, 0.92) 100%)'
          }}
        />
      </div>

      {/* 3. CONTEÚDO PRINCIPAL (100% de opacidade e nitidez, adaptado para Mobile e Desktop) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-4 sm:py-16 md:py-20 lg:py-24 w-full flex-grow flex flex-col justify-center items-center sm:items-start">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl md:max-w-2xl w-full flex flex-col items-center sm:items-start text-center sm:text-left mx-auto sm:mx-0"
        >
          {/* H1 Acessível para SEO e Leitores de Tela */}
          <h1 className="sr-only">J'Cell Acessórios e Variedades - Nanuque - MG</h1>

          {/* Logo Oficial J'Cell Nítida e Perfeitamente Sincronizada com os Botões */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-[280px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] mb-6 sm:mb-8 will-change-transform flex justify-center sm:justify-start mx-auto sm:mx-0"
          >
            <ImageWithFallback
              src={IMAGES.logoHero}
              fallbackSrc={IMAGES.cdn.logoHero}
              alt="J'Cell Acessórios e Variedades"
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-none mx-auto sm:mx-0"
              fallbackLabel="J'Cell Acessórios e Variedades"
            />
          </motion.div>

          {/* Botões de Ação: Fale Conosco (WhatsApp) e Instagram pareados com o centro da logo */}
          <motion.div 
            variants={buttonVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-[280px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] mx-auto sm:mx-0"
          >
            <motion.a
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.975 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20na%20J%27Cell.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:min-w-[185px] inline-flex items-center justify-center gap-2.5 bg-white text-[#D7192D] hover:bg-neutral-100 font-semibold text-sm sm:text-[15px] px-6 py-2.5 sm:py-3 min-h-[44px] sm:min-h-[46px] rounded-full border-2 border-transparent transition-colors duration-200 shadow-md hover:shadow-lg text-decoration-none"
            >
              <i className="fa-brands fa-whatsapp text-lg text-[#D7192D]" aria-hidden="true"></i>
              <span>Fale Conosco</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.975 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:min-w-[185px] inline-flex items-center justify-center gap-2.5 bg-black/30 hover:bg-white/10 text-white border-2 border-white/90 font-semibold text-sm sm:text-[15px] px-6 py-2.5 sm:py-3 min-h-[44px] sm:min-h-[46px] rounded-full transition-colors duration-200 text-decoration-none backdrop-blur-sm shadow-sm hover:shadow-md"
            >
              <i className="fa-brands fa-instagram text-lg text-white" aria-hidden="true"></i>
              <span>Siga no Instagram</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* 4. INDICADOR TIPO SETA PARA ROLAGEM PARA BAIXO
          Interativo, animado e delicado, posicionado no extremo inferior central
      */}
      <div className="relative z-20 w-full flex justify-center pb-3 sm:pb-5 mt-auto">
        <motion.button
          type="button"
          onClick={handleScrollDown}
          aria-label="Rolar para a seção Sobre nós"
          initial={{ opacity: 0, y: -4 }}
          animate={{ 
            opacity: 1, 
            y: [0, 4, 0] 
          }}
          transition={{
            opacity: { delay: 0.8, duration: 0.6 },
            y: { 
              repeat: Infinity, 
              duration: 2.2, 
              ease: "easeInOut" 
            }
          }}
          className="group flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-full py-0.5 px-3"
        >
          <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase opacity-75 group-hover:opacity-100 transition-opacity select-none">
            Role para explorar
          </span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/25 group-hover:bg-black/40 border border-white/25 group-hover:border-white/50 flex items-center justify-center backdrop-blur-md transition-all shadow-md group-hover:scale-105">
            <i className="fa-solid fa-chevron-down text-[11px] sm:text-xs text-white group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
          </div>
        </motion.button>
      </div>

      {/* 5. LINHA DIVISÓRIA HORIZONTAL SUTIL E SEMI-TRANSPARENTE EM DEGRADÊ
          Visível a partir de sm para manter continuidade pura no mobile sem quebra visual
      */}
      <div 
        className="absolute bottom-0 inset-x-0 z-20 pointer-events-none hidden sm:flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        {/* Linha horizontal com degradê semi-transparente */}
        <div 
          className="w-full h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 15%, rgba(255, 255, 255, 0.28) 50%, rgba(255, 255, 255, 0.08) 85%, transparent 100%)'
          }}
        />
        {/* Realce luminoso suave centralizado ao longo da linha */}
        <div 
          className="absolute w-2/3 sm:w-1/2 h-[4px] -top-[1.5px] opacity-40 blur-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 50%, transparent 100%)'
          }}
        />
      </div>
    </section>
  );
};
