import React, { useState } from 'react';
import { STORE_INFO, IMAGES } from '../data/mockData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(STORE_INFO.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = STORE_INFO.address;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="localizacao" className="py-12 sm:py-20 lg:py-24 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* COLUNA ESQUERDA: Textos Institucionais & Card de Endereço Oficial */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            
            {/* Eyebrow / Tag */}
            <span className="inline-block text-[#D7192D] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase font-heading">
              ONDE ESTAMOS
            </span>

            {/* Título Principal em 2 Linhas Marcantes */}
            <h2 className="font-heading font-black text-3xl xs:text-4xl sm:text-5xl lg:text-[44px] xl:text-5xl tracking-tight text-white uppercase leading-[1.08] m-0">
              LOCALIZAÇÃO<br />PRIVILEGIADA
            </h2>


            {/* Card de Endereço Oficial com Estética Dark */}
            <div className="rounded-2xl bg-[#121214]/95 border border-white/10 p-5 sm:p-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-start gap-3.5 sm:gap-4">
                
                {/* Ícone de Pino com Badge Escuro e Borda em Vermelho */}
                <div 
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-neutral-900 border border-[#D7192D]/40 flex items-center justify-center shrink-0 text-[#D7192D] shadow-inner"
                  aria-hidden="true"
                >
                  <i className="fa-solid fa-location-dot text-base sm:text-lg"></i>
                </div>

                {/* Textos de Endereço */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase text-white m-0">
                    ENDEREÇO OFICIAL
                  </h3>
                  <p className="text-sm sm:text-[15px] font-medium text-neutral-200 leading-snug m-0">
                    Rua Caxambu, nº 396 — Centro
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-snug m-0">
                    Próximo aos principais comércios • Nanuque - MG • CEP 39860-000
                  </p>

                  {/* Ação Interativa: Copiar Endereço Completo */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D7192D] hover:text-[#ff3b4f] transition-colors cursor-pointer group focus:outline-none"
                    >
                      <i 
                        className={`${copied ? 'fa-solid fa-check text-green-400' : 'fa-regular fa-copy'} text-sm transition-transform group-hover:scale-110`} 
                        aria-hidden="true"
                      />
                      <span className={copied ? 'text-green-400 font-bold' : ''}>
                        {copied ? 'Endereço copiado!' : 'Copiar endereço completo'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: Card Visual com Mapa Dark Suave, Logo Flutuante com Glow e Botão "COMO CHEGAR" */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl border border-white/15 overflow-hidden relative min-h-[340px] xs:min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] flex flex-col items-center justify-center text-center p-6 sm:p-10 shadow-2xl bg-[#141416] group">
              
              {/* Foto de Fundo do Mapa com Tratamento Equilibrado (Menos Escuro) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 pointer-events-none select-none opacity-55 group-hover:opacity-65 filter contrast-110"
                style={{
                  backgroundImage: `url(${IMAGES.mapaLocal})`
                }}
                aria-hidden="true"
              />

              {/* Degradê e Vinheta Atmosférica Mais Suave */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/30 pointer-events-none"
                aria-hidden="true"
              />

              {/* Textura Técnica de Grade Sutil */}
              <div 
                className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none"
                aria-hidden="true"
              />

              {/* Conteúdo Central em Destaque */}
              <div className="relative z-10 flex flex-col items-center justify-center max-w-sm w-full">
                
                {/* Logo da Loja com Bordas Arredondadas e Glow Vermelho Neon */}
                <div className="relative mb-6 flex items-center justify-center">
                  {/* Aura Luminosa de Destaque */}
                  <div 
                    className="absolute -inset-4 bg-[#D7192D]/40 rounded-full blur-2xl animate-pulse pointer-events-none"
                    aria-hidden="true"
                  />
                  
                  {/* Imagem da Logo com Bordas Arredondadas */}
                  <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden bg-black/60 border border-white/15 p-3 sm:p-4 backdrop-blur-md shadow-2xl transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={IMAGES.logo} 
                      alt="J'Cell Acessórios e Variedades" 
                      className="h-14 sm:h-16 md:h-18 w-auto object-contain rounded-xl select-none pointer-events-none" 
                    />
                  </div>
                </div>

                {/* Botão Pílula "COMO CHEGAR →" com Borda Vermelha Neon */}
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-[#D7192D] bg-[#D7192D]/15 hover:bg-[#D7192D] text-white font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(215,25,45,0.35)] hover:shadow-[0_0_35px_rgba(215,25,45,0.7)] group/btn transform hover:-translate-y-0.5 text-decoration-none"
                >
                  <i 
                    className="fa-solid fa-location-dot text-[#D7192D] group-hover/btn:text-white text-sm transition-colors" 
                    aria-hidden="true"
                  />
                  <span>COMO CHEGAR</span>
                  <i 
                    className="fa-solid fa-arrow-right text-xs text-white group-hover/btn:translate-x-1 transition-transform" 
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
