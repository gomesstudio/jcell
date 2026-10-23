import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { VIDEO_CONFIG } from '../data/mockData';
import { ScrollReveal } from './ScrollReveal';

export const VideoSection: React.FC = () => {
  const [playerKey, setPlayerKey] = useState(0);

  // Ao finalizar o vídeo, restaura o player para a tela inicial com a capa e o botão de play
  const handleVideoEnded = () => {
    setPlayerKey((prev) => prev + 1);
  };

  return (
    <section 
      id="video" 
      className="pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #720815 0%, #850A19 50%, #760816 100%)'
      }}
    >
      {/* 1. Iluminação Ambiente Escarlate Suave */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 25%, rgba(231, 25, 45, 0.28) 0%, transparent 65%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* BLOCO DE TEXTOS CENTRALIZADO (ESTRUTURA VERTICAL DE CIMA PARA BAIXO) */}
        <ScrollReveal direction="up" distance={20} duration={0.7} className="w-full flex flex-col items-center text-center">
          
          {/* 1º — TEXTO SUPERIOR / IDENTIFICAÇÃO */}
          <div className="inline-flex items-center justify-center gap-2.5 mb-2 sm:mb-2.5">
            <span className="h-[2px] w-6 sm:w-8 bg-[#E7192D] rounded-full inline-block" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.22em] uppercase text-white/95 font-heading">
              CONHEÇA A J’CELL
            </span>
            <span className="h-[2px] w-6 sm:w-8 bg-[#E7192D] rounded-full inline-block" aria-hidden="true" />
          </div>

          {/* 2º — TÍTULO PRINCIPAL */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-black font-heading text-white leading-[1.12] tracking-tight m-0 max-w-3xl">
            Seu próximo destino é a J’Cell.
          </h2>

          {/* 3º — TEXTO DE APOIO */}
          <p className="text-base sm:text-lg lg:text-[19px] text-white font-medium leading-relaxed max-w-xl mx-auto mt-3 sm:mt-3.5 mb-1.5">
            Dê o play e conheça um pouco mais
          </p>

          {/* 4º — CHAMADA COMPLEMENTAR */}
          <p className="text-xs sm:text-sm text-[#D2CACC] leading-relaxed max-w-lg mx-auto m-0 font-normal">
            Assista ao vídeo abaixo e venha conhecer nossa loja.
          </p>

        </ScrollReveal>

        {/* 5º — VÍDEO DE APRESENTAÇÃO CUSTOMIZADO COM REACT-PLAYER */}
        <ScrollReveal direction="up" distance={26} duration={0.8} delay={0.12} className="w-full flex flex-col items-center justify-center mt-7 sm:mt-9">
          <div className="relative w-full max-w-[280px] xs:max-w-[330px] sm:max-w-[350px] md:max-w-[380px] lg:max-w-[390px] mx-auto">
            
            {/* Contêiner da Moldura */}
            <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10 w-full aspect-[941/1672] shadow-2xl shadow-black/80">
              {/* Player Customizado com react-player (light={true} e controls={true}) */}
              <div className="w-full h-full">
                <ReactPlayer
                  key={playerKey}
                  src={VIDEO_CONFIG.youtubeUrl}
                  width="100%"
                  height="100%"
                  light={VIDEO_CONFIG.thumbnail || true}
                  controls={true}
                  playing={true}
                  playsInline={true}
                  onEnded={handleVideoEnded}
                  playIcon={
                    <div 
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#E7192D] hover:bg-[#C81024] text-white flex items-center justify-center shadow-2xl border-2 border-white transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
                      aria-label="Reproduzir vídeo"
                    >
                      <i className="fa-solid fa-play text-xl sm:text-2xl text-white pl-1 drop-shadow" aria-hidden="true" />
                    </div>
                  }
                  config={{
                    youtube: {
                      rel: 0,
                      fs: 1,
                      iv_load_policy: 3,
                      color: 'red',
                    },
                  }}
                />
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
