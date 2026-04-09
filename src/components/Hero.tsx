"use client";

import { useEffect, useRef } from "react";
import HBSLogo from "./HBSLogo";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;
    let lastTimestamp: number | null = null;

    const stepBackward = (timestamp: number) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
        rafId = requestAnimationFrame(stepBackward);
        return;
      }
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;
      video.currentTime = Math.max(0, video.currentTime - delta);
      if (video.currentTime <= 0) {
        lastTimestamp = null;
        video.play().catch(() => {});
      } else {
        rafId = requestAnimationFrame(stepBackward);
      }
    };

    const handleEnded = () => {
      lastTimestamp = null;
      rafId = requestAnimationFrame(stepBackward);
    };

    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {});

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

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
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Vídeo ping-pong */}
      <video
        ref={videoRef}
        src="/hero-bg.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay radial 20% */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 55%, rgba(9,9,11,0.20) 0%, rgba(9,9,11,0.10) 60%, rgba(9,9,11,0.04) 100%)",
        }}
      />

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        {/* Logo */}
        <div
          className="mb-8"
          style={{
            animation: "fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.1s both",
            filter: "drop-shadow(0 2px 20px rgba(0,0,0,0.85))",
          }}
        >
          <HBSLogo variant="dark" size="lg" />
        </div>

        {/* Eyebrow tag */}
        <div
          className="mb-5"
          style={{ animation: "fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.2s both" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-300 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            Automação B2B
          </span>
        </div>

        {/* H1 */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight max-w-3xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)]"
          style={{ animation: "fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.32s both" }}
        >
          Menos trabalho manual.
          <br />
          <span className="text-zinc-300">Mais resultado.</span>
        </h1>

        {/* Parágrafo */}
        <p
          className="mt-5 text-base sm:text-lg text-zinc-200/80 max-w-xl drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]"
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
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-100 active:scale-[0.98]"
          >
            Fale com a gente
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/8 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          <a
            href="#servicos"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/15 hover:border-white/30 active:scale-[0.98]"
          >
            Conheça nossos serviços
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2.5L6 9.5M6 9.5L3 6.5M6 9.5L9 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator — mouse com bola */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ animation: "heroFadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 1.2s both" }}
      >
        <div className="w-6 h-9 rounded-full border border-zinc-500/50 flex items-start justify-center pt-1.5">
          <div
            className="w-1.5 h-1.5 rounded-full bg-zinc-400"
            style={{ animation: "scrollBall 1.6s ease-in-out 1.5s infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
