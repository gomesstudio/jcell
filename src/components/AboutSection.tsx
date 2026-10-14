import React from 'react';
import { IMAGES } from '../data/mockData';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-10 sm:py-16 lg:py-24 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Padrão centralizado de cabeçalho de seção */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <span className="eyebrow-dark block mb-2 text-white/90">Quem Somos</span>
          <h2 className="text-section-title font-heading text-white">
            Referência em tecnologia e atendimento próximo
          </h2>
        </div>

        {/* Grade de 2 colunas com alinhamento e respiro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Foto da fachada (proporção 4/5, cantos 16px, sombra suave) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[16px] overflow-hidden border border-white/20 shadow-xl aspect-[4/5] max-h-[500px] mx-auto w-full">
              <ImageWithFallback
                src={IMAGES.fachada}
                fallbackSrc={IMAGES.cdn.fachada}
                alt="Fachada da loja J'Cell Acessórios e Variedades em Nanuque"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
                fallbackLabel="Fachada J'Cell"
              />
            </div>
          </div>

          {/* Conteúdo Institucional */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-prose">
              A <strong className="font-semibold text-white">J'Cell</strong> atua em Nanuque na venda de acessórios e eletrônicos e na assistência técnica para celulares e tablets.
            </p>

            {/* Citação com filete branco e fundo translúcido */}
            <blockquote className="border-l-4 border-white pl-5 py-3 text-white/90 italic text-base leading-relaxed bg-black/25 backdrop-blur-sm rounded-r-xl shadow-sm">
              “Nossa visão é nos tornar referência na comercialização e assistência técnica de eletrônicos através do nosso diferencial: atendimento próximo, produtos de qualidade e serviço feito com cuidado.”
            </blockquote>

            {/* 3 diferenciais em linha limpa */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/20">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-boxes-stacked text-xs" aria-hidden="true"></i>
                  </div>
                  <h3 className="font-heading text-sm text-white m-0">Variedade</h3>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Acessórios para diversas marcas e necessidades.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-screwdriver-wrench text-xs" aria-hidden="true"></i>
                  </div>
                  <h3 className="font-heading text-sm text-white m-0">Assistência</h3>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Diagnóstico e reparo com técnicos dedicados.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-shield-halved text-xs" aria-hidden="true"></i>
                  </div>
                  <h3 className="font-heading text-sm text-white m-0">Película</h3>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Corte e aplicação sob medida na hora, na loja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
