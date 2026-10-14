import React from 'react';
import { STORE_INFO, VIDEO_URL } from '../data/mockData';

export const VideoSection: React.FC = () => {
  return (
    <section 
      id="video" 
      className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #720815 0%, #850A19 50%, #760816 100%)'
      }}
    >
      {/* Brilho escarlate ambiente vibrante */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(231, 25, 45, 0.30) 0%, transparent 68%)'
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-xl mx-auto mb-7 sm:mb-9 lg:mb-10">
          <span className="inline-block text-white/90 font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase font-heading mb-2">
            APRESENTAÇÃO
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-heading font-extrabold text-white leading-tight tracking-tight m-0">
            Conheça a J&apos;Cell
          </h2>
          <p className="text-sm sm:text-base text-[#D2CACC] mt-2 leading-relaxed">
            Acompanhe as novidades e o dia a dia da nossa loja.
          </p>
        </div>

        {/* Exibição condicional conforme VIDEO_URL */}
        <div className="flex justify-center">
          {VIDEO_URL ? (
            /* Player nativo de vídeo real em formato 9:16 vertical */
            <div className="w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                src={VIDEO_URL}
              >
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
          ) : (
            /* Cartão elegante de convite ao Instagram em card escuro #222020 */
            <div className="w-full max-w-lg bg-[#222020]/75 backdrop-blur-xl rounded-3xl border border-white/20 p-7 sm:p-10 text-center shadow-2xl text-white relative overflow-hidden group">
              {/* Leve glow decorativo de fundo */}
              <div 
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-pink-500/20 blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <div 
                className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-[#E7192D]/20 blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-pink-500/25 group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              >
                <i className="fa-brands fa-instagram text-3xl"></i>
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                Assista ao nosso vídeo no Instagram
              </h3>

              <p className="text-sm sm:text-[15px] text-[#D2CACC] mb-6 max-w-sm mx-auto leading-relaxed">
                Confira bastidores, novos produtos, lançamentos e nosso dia a dia no perfil oficial.
              </p>

              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#E7192D] hover:bg-neutral-100 font-bold text-sm sm:text-base px-8 py-3.5 min-h-[48px] rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-98"
              >
                <i className="fa-brands fa-instagram text-lg" aria-hidden="true"></i>
                <span>Acessar {STORE_INFO.instagramUser}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
