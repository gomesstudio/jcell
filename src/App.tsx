/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { FilmSection } from './components/FilmSection';
import { WorkshopSection } from './components/WorkshopSection';
import { VideoSection } from './components/VideoSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  return (
    <div className="min-h-screen text-white flex flex-col font-sans selection:bg-white selection:text-[#D7192D] relative bg-[#170205] overflow-x-hidden">
      {/* 
        CANVAS DE CONTINUIDADE INFINITA & EFEITO PREMIUM GLOBAL:
        Fundo único contínuo com a paleta oficial da Hero em degradê aveludado profundo,
        com pontos de luz atmosféricos (ambient spotlights) e vinheta periférica,
        garantindo uma experiência fluida sem cortes, linhas ou demarcações entre as seções.
      */}
      <div 
        className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Camada 1: Gradiente base contínuo infinito (Vermelho e Carmim da Marca) */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(180deg, #D7192D 0%, #BA1425 18%, #9C0F1D 40%, #850B17 60%, #9C0F1D 80%, #B71525 93%, #D7192D 100%)'
          }}
        />

        {/* Camada 2: Luzes radiais atmosféricas (Ambient Spotlights) para profundidade 3D */}
        <div 
          className="absolute top-[-10%] left-[-15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 80, 100, 0.24) 0%, rgba(215, 25, 45, 0.12) 40%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <div 
          className="absolute top-[25%] right-[-15%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 95, 115, 0.20) 0%, rgba(183, 21, 37, 0.08) 45%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute top-[55%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 85, 105, 0.18) 0%, rgba(160, 17, 31, 0.07) 45%, transparent 70%)',
            filter: 'blur(75px)',
          }}
        />
        <div 
          className="absolute top-[80%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 75, 95, 0.22) 0%, rgba(215, 25, 45, 0.10) 40%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Camada 3: Vinheta suave de profundidade editorial premium */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(10, 1, 2, 0.38) 100%)'
          }}
        />
      </div>

      {/* Conteúdo Interativo Sobreposto com Nitidez Máxima */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Cabeçalho Premium & Navegação */}
        <Navbar />

        {/* Conteúdo Principal com Continuidade Infinita */}
        <main className="flex-grow">
          {/* 1. Hero: Vermelho da Marca e Imagem Tecnológica */}
          <HeroSection />

          {/* 2. Sobre: Continuidade Fluida */}
          <AboutSection />

          {/* 3. Produtos: Vitrine com Alto Contraste */}
          <ProductsSection />

          {/* 4. Película de Hidrogel: Aplicação Especializada */}
          <FilmSection />

          {/* 5. Oficina & Assistência Técnica: Fundo Escuro Técnico com Transição Orgânica */}
          <WorkshopSection />

          {/* 6. Conheça a Loja (Vídeo): Continuidade Fluida */}
          <VideoSection />

          {/* 7. Localização Oficial: Continuidade Fluida */}
          <LocationSection />
        </main>

        {/* Rodapé Integrado */}
        <Footer />

        {/* Botão Flutuante do WhatsApp */}
        <WhatsAppFloating />
      </div>
    </div>
  );
}
