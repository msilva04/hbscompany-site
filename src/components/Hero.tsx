"use client";

import { useEffect, useRef } from "react";

import HBSLogo from "./HBSLogo";

export default function Hero() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const indicator = scrollIndicatorRef.current;
    if (!indicator) return;
    const handleScroll = () => {
      indicator.style.opacity = String(Math.max(0, 1 - window.scrollY / 120));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-white">

      {/* Vídeo ping-pong como plano de fundo */}
      <video
        src="/hero-3d.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Overlay claro pra lavar o vídeo e manter o hero light-first */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.84) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.98) 100%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-[2] flex flex-col items-center justify-center h-full text-center px-4">

        {/* Logo */}
        <div
          className="mb-8"
          style={{ animation: "fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.1s both" }}
        >
          <HBSLogo variant="light" size="lg" />
        </div>

        {/* Eyebrow tag */}
        <div
          className="mb-5"
          style={{ animation: "fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.2s both" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            Automação B2B
          </span>
        </div>

        {/* H1 */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-medium text-neutral-900 leading-[1.05] tracking-[-0.02em] max-w-3xl"
          style={{ animation: "fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.32s both" }}
        >
          Menos trabalho manual.
          <br />
          <span className="text-neutral-400">Mais resultado.</span>
        </h1>

        {/* Parágrafo */}
        <p
          className="mt-6 text-lg sm:text-xl text-neutral-500 max-w-xl"
          style={{ animation: "fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.44s both" }}
        >
          Automação, agentes de IA e inteligência de dados para operações B2B.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-3"
          style={{ animation: "fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.56s both" }}
        >
          <a
            href="https://wa.me/5548988151397"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-neutral-700 active:scale-[0.98]"
          >
            Fale com a gente
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          <a
            href="#servicos"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-sm font-medium text-neutral-500 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-neutral-900 hover:text-neutral-900 active:scale-[0.98]"
          >
            Conheça nossos serviços
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2.5L6 9.5M6 9.5L3 6.5M6 9.5L9 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ animation: "heroFadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 1.2s both" }}
      >
        <div className="w-6 h-9 rounded-full border border-neutral-300 flex items-start justify-center pt-1.5">
          <div
            className="w-1.5 h-1.5 rounded-full bg-neutral-400"
            style={{ animation: "scrollBall 1.6s ease-in-out 1.5s infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
