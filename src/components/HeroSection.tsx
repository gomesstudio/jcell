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
          Visível sutilmente ("bem de leve") criando uma atmosfera tecnológica sofisticada sem ofuscar a logo
      */}
      <motion.div 
        initial={{ opacity: 0.85, scale: 1.01 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden bg-[#7A0917]"
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
            }
          }}
          className={`w-full h-full object-cover object-[62%_72%] xs:object-[64%_72%] sm:object-[82%_center] lg:object-right transition-opacity duration-700 ${
            bgLoaded ? 'opacity-40 sm:opacity-55 lg:opacity-65' : 'opacity-0'
          }`}
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* 2. CAMADA DE SOBREPOSIÇÃO INDEPENDENTE COM GRADIENTE DE OPACIDADE EM TONALIDADE VERMELHA
          Garante contraste de alta legibilidade para a logo e botões, permitindo que os produtos do fundo
          surjam com elegância e suavidade ("bem de leve").
      */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-[1]" 
        aria-hidden="true"
      >
        {/* Efeito de opacidade gradiente em vermelho da esquerda para a direita (Desktop e Tablet) */}
        <div 
          className="absolute inset-0 hidden sm:block"
          style={{
            background: 'linear-gradient(to right, #D7192D 0%, rgba(215, 25, 45, 0.92) 28%, rgba(215, 25, 45, 0.70) 50%, rgba(200, 16, 36, 0.35) 72%, rgba(133, 10, 25, 0.15) 88%, transparent 100%)'
          }}
        />

        {/* Efeito de gradiente vermelho equilibrado (Mobile) 
            Permite que os produtos de fundo apareçam sutilmente ("de leve"),
            mantendo a proteção e o contraste perfeito para a logo J'Cell
        */}
        <div 
          className="absolute inset-0 sm:hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(215, 25, 45, 0.82) 0%, rgba(215, 25, 45, 0.65) 40%, rgba(190, 15, 33, 0.48) 72%, rgba(125, 10, 24, 0.65) 100%), radial-gradient(circle at 50% 28%, rgba(215, 25, 45, 0.75) 0%, transparent 68%)'
          }}
        />

        {/* Transição vertical sutil no topo para integração com o Navbar */}
        <div 
          className="absolute inset-x-0 top-0 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(160, 12, 28, 0.35) 0%, transparent 100%)'
          }}
        />

        {/* Transição suave na base para a seção Quem Somos (#C81024) */}
        <div 
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(160, 12, 28, 0.40) 50%, #C81024 100%)'
          }}
        />
      </div>

      {/* 3. CONTEÚDO PRINCIPAL (100% de opacidade e nitidez, adaptado para Mobile e Desktop) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 lg:py-24 w-full flex-grow flex flex-col justify-center items-center sm:items-start">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl md:max-w-2xl w-full flex flex-col items-center sm:items-start text-center sm:text-left mx-auto sm:mx-0"
        >
          {/* H1 Acessível para SEO e Leitores de Tela */}
          <h1 className="sr-only">J&apos;Cell Acessórios e Variedades - Nanuque - MG</h1>

          {/* Logo Oficial J'Cell em Qualidade Máxima de Resolução (sem sombras e sem brilhos) */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] mb-6 sm:mb-8 will-change-transform flex justify-center sm:justify-start mx-auto sm:mx-0 text-[#FFFFFF]"
            style={{ color: '#FFFFFF' }}
          >
            <div className="relative z-10 w-full flex justify-center sm:justify-start">
              <ImageWithFallback
                src={IMAGES.logoHero}
                fallbackSrc={IMAGES.cdn.logoHero}
                alt="J'Cell Acessórios e Variedades"
                width={500}
                height={167}
                loading="eager"
                decoding="async"
                className="logo-hero-img w-full h-auto object-contain select-none pointer-events-none mx-auto sm:mx-0"
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
                fallbackLabel="J'Cell Acessórios e Variedades"
              />
            </div>
          </motion.div>

          {/* Botões de Ação: Fale Conosco (WhatsApp) e Instagram pareados com o centro da logo */}
          <motion.div 
            variants={buttonVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] mx-auto sm:mx-0"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              href={`https://wa.me/${STORE_INFO.phoneStoreRaw}?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20na%20J%27Cell.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:min-w-[200px] inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-50 text-[#171313] font-heading font-extrabold text-sm sm:text-[15px] px-7 py-3.5 min-h-[50px] rounded-full transition-all duration-300 shadow-[0_14px_35px_-4px_rgba(0,0,0,0.5),0_6px_14px_-2px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_45px_-4px_rgba(0,0,0,0.65)] text-decoration-none border border-white/95 group/btn cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-xl text-[#15803D] transition-transform duration-300 group-hover/btn:scale-110" aria-hidden="true"></i>
              <span className="tracking-tight">Fale Conosco</span>
              <i className="fa-solid fa-arrow-right text-xs text-[#C81024] transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true"></i>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.975 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto sm:min-w-[190px] inline-flex items-center justify-center gap-2.5 bg-black/35 hover:bg-white/10 text-white border-2 border-white/95 font-bold text-sm sm:text-[15px] px-6 py-3 min-h-[48px] rounded-full transition-all duration-200 text-decoration-none backdrop-blur-sm shadow-sm hover:shadow-md active:scale-98"
            >
              <i className="fa-brands fa-instagram text-lg text-white" aria-hidden="true"></i>
              <span>Siga no Instagram</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* 4. INDICADOR TIPO SETA PARA ROLAGEM PARA BAIXO COM ALTO CONTRASTE */}
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
          className="group flex flex-col items-center gap-1 text-white hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full py-0.5 px-3"
        >
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-white drop-shadow-sm group-hover:underline select-none">
            Role para explorar
          </span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 group-hover:bg-black/60 border border-white/40 group-hover:border-white/80 flex items-center justify-center backdrop-blur-md transition-all shadow-md group-hover:scale-105">
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
