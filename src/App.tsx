/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

// Code-splitting dos componentes principais abaixo da dobra (Below-the-fold) para reduzir o bundle inicial
const AboutSection = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const ProductsSection = lazy(() => import('./components/ProductsSection').then(m => ({ default: m.ProductsSection })));
const FilmSection = lazy(() => import('./components/FilmSection').then(m => ({ default: m.FilmSection })));
const WorkshopSection = lazy(() => import('./components/WorkshopSection').then(m => ({ default: m.WorkshopSection })));
const VideoSection = lazy(() => import('./components/VideoSection').then(m => ({ default: m.VideoSection })));
const LocationSection = lazy(() => import('./components/LocationSection').then(m => ({ default: m.LocationSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const WhatsAppFloating = lazy(() => import('./components/WhatsAppFloating').then(m => ({ default: m.WhatsAppFloating })));

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
            background: 'radial-gradient(circle at 50% 50%, transparent 50%, rgba(231, 19, 19, 0.45) 100%)'
          }}
        />
      </div>

      {/* Conteúdo Interativo Sobreposto com Nitidez Máxima */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Cabeçalho Premium & Navegação (Carregado Imediatamente - Acima da Dobra) */}
        <Navbar />

        {/* Conteúdo Principal com Code-Splitting Sob Demanda */}
        <main className="flex-grow">
          {/* 1. Hero: Vermelho da Marca e Imagem Tecnológica (Carregado Imediatamente - LCP) */}
          <HeroSection />

          {/* 2. Sobre: Continuidade Fluida com Lazy Loading */}
          <Suspense fallback={<div className="min-h-[420px] w-full" aria-hidden="true" />}>
            <AboutSection />
          </Suspense>

          {/* 3. Produtos: Vitrine com Alto Contraste */}
          <Suspense fallback={<div className="min-h-[480px] w-full" aria-hidden="true" />}>
            <ProductsSection />
          </Suspense>

          {/* 4. Película de Hidrogel: Aplicação Especializada */}
          <Suspense fallback={<div className="min-h-[440px] w-full" aria-hidden="true" />}>
            <FilmSection />
          </Suspense>

          {/* 5. Oficina & Assistência Técnica: 8 Serviços Interativos com Detalhes Expansíveis */}
          <Suspense fallback={<div className="min-h-[500px] w-full" aria-hidden="true" />}>
            <WorkshopSection />
          </Suspense>

          {/* 6. Conheça a Loja (Vídeo): Continuidade Fluida */}
          <Suspense fallback={<div className="min-h-[480px] w-full" aria-hidden="true" />}>
            <VideoSection />
          </Suspense>

          {/* 7. Localização Oficial: Continuidade Fluida */}
          <Suspense fallback={<div className="min-h-[400px] w-full" aria-hidden="true" />}>
            <LocationSection />
          </Suspense>
        </main>

        {/* Rodapé Integrado com Lazy Loading */}
        <Suspense fallback={<div className="min-h-[160px] w-full" aria-hidden="true" />}>
          <Footer />
        </Suspense>

        {/* Botão Flutuante do WhatsApp Carregado Assincronamente */}
        <Suspense fallback={null}>
          <WhatsAppFloating />
        </Suspense>
      </div>
    </div>
  );
}
