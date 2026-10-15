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
    <div className="min-h-screen text-white flex flex-col font-sans selection:bg-white selection:text-[#C81024] relative bg-[#850A19] overflow-x-hidden">
      {/* 
        SISTEMA DE FUNDO VERMELHO PREMIUM J'CELL COM ILUMINAÇÃO AMBIENTE ANIMADA:
        Base viva e contínua com Vermelho Principal (#E7192D), Vermelho de Transição (#C81024)
        e Vermelho Profundo (#850A19), mantendo o vermelho visualmente dominante e sofisticado.
      */}
      <div 
        className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Base contínua em gradiente vermelho vivo e elegante */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #E7192D 0%, #C81024 16%, #A30D20 38%, #850A19 65%, #6E0815 85%, #171313 100%)'
          }}
        />

        {/* Onda luminosa difusa com pulsação suave em estúdio */}
        <div 
          className="absolute inset-0 animate-wave-pulse opacity-70"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(231, 25, 45, 0.35) 0%, rgba(200, 16, 36, 0.15) 50%, transparent 75%)',
            filter: 'blur(60px)'
          }}
        />

        {/* Ponto de luz escarlate 1 (Superior / Topo): Deslocamento suave contínuo */}
        <div 
          className="absolute top-[-5%] right-[-5%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full animate-ambient-1"
          style={{
            background: 'radial-gradient(circle, rgba(231, 25, 45, 0.45) 0%, rgba(200, 16, 36, 0.20) 45%, transparent 70%)',
            filter: 'blur(95px)',
          }}
        />

        {/* Ponto de luz escarlate 2 (Centro / Meio): Deslocamento suave contínuo */}
        <div 
          className="absolute top-[38%] left-[-10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full animate-ambient-2"
          style={{
            background: 'radial-gradient(circle, rgba(240, 45, 65, 0.35) 0%, rgba(200, 16, 36, 0.16) 50%, transparent 72%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Ponto de luz escarlate 3 (Inferior / Base): Deslocamento suave contínuo */}
        <div 
          className="absolute top-[70%] right-[-8%] w-[55vw] h-[55vw] max-w-[780px] max-h-[780px] rounded-full animate-ambient-3"
          style={{
            background: 'radial-gradient(circle, rgba(231, 25, 45, 0.32) 0%, rgba(133, 10, 25, 0.15) 50%, transparent 70%)',
            filter: 'blur(95px)',
          }}
        />

        {/* Vinheta periférica sutil para manter legibilidade sem escurecer o vermelho */}
        <div 
          className="absolute inset-0 bg-radial-vignette opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 50%, rgba(23, 19, 19, 0.45) 100%)'
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
