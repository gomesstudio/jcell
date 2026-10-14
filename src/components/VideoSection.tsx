import React from 'react';
import { STORE_INFO, VIDEO_URL } from '../data/mockData';

export const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-10 sm:py-16 lg:py-24 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-14">
          <span className="eyebrow-dark block mb-2 text-white/90">Apresentação</span>
          <h2 className="text-section-title font-heading text-white">
            Conheça a J'Cell
          </h2>
          <p className="text-sm sm:text-base text-white/80 mt-2">
            Acompanhe as novidades e o dia a dia da nossa loja.
          </p>
        </div>

        {/* Exibição condicional conforme VIDEO_URL */}
        <div className="flex justify-center">
          {VIDEO_URL ? (
            /* Player nativo de vídeo real em formato 9:16 vertical */
            <div className="w-full max-w-[340px] aspect-[9/16] rounded-[16px] overflow-hidden bg-black border border-white/20 shadow-xl">
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
            /* Cartão elegante de convite ao Instagram sem controles falsos */
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-[16px] border border-white/20 p-8 text-center shadow-xl text-white">
              <div 
                className="w-14 h-14 rounded-full bg-white text-[#D7192D] flex items-center justify-center mx-auto mb-4 shadow-sm"
                aria-hidden="true"
              >
                <i className="fa-brands fa-instagram text-2xl"></i>
              </div>

              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                Assista ao nosso vídeo no Instagram
              </h3>

              <p className="text-sm text-white/80 mb-6 max-w-xs mx-auto">
                Confira bastidores, novos produtos e conteúdos em nosso perfil oficial.
              </p>

              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#D7192D] hover:bg-neutral-100 font-semibold text-sm px-6 min-h-[48px] rounded-full transition-colors duration-200 shadow-md"
              >
                <i className="fa-brands fa-instagram text-base" aria-hidden="true"></i>
                <span>Acessar {STORE_INFO.instagramUser}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
