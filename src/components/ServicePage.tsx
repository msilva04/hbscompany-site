import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Reveal from "./Reveal";

interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Step {
  numero: string;
  titulo: string;
  descricao: string;
}

interface ServicePageProps {
  eyebrow: string;
  title: string;
  description: string;
  /* Cor do produto (Brand Guidelines v2 — Combo 1) */
  accent: string;
  accentBg: string;
  benefits: Benefit[];
  steps: Step[];
  ctaTitle: string;
  ctaDescription: string;
  ctaSlot: ReactNode;
}

export default function ServicePage({
  eyebrow, title, description,
  accent, accentBg,
  benefits, steps,
  ctaTitle, ctaDescription, ctaSlot,
}: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium mb-6"
                style={{ backgroundColor: accentBg, color: accent }}
              >
                {eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-900 leading-tight mb-6">
                {title}
              </h1>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-10">
              <a
                href="https://wa.me/5548988151397"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white hover:bg-neutral-700 transition-colors duration-300 active:scale-[0.98]"
              >
                Fale com a gente
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-neutral-100 py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium text-neutral-900">O que você ganha</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 100} className="h-full">
                  <div
                    className="bg-white rounded-2xl p-8 border border-neutral-200 h-full"
                    style={{ borderTopWidth: 3, borderTopColor: accent }}
                  >
                    <div className="mb-5" style={{ color: accent }}>{b.icon}</div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-2">{b.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{b.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="bg-white py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-6">
                Como funciona
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-neutral-900 leading-tight">
                Do zero ao resultado.
              </h2>
            </Reveal>
            <div>
              {steps.map((step, i) => (
                <Reveal
                  key={step.numero}
                  delay={i * 120}
                  className={`py-10 ${i > 0 ? "border-t border-neutral-200" : ""}`}
                >
                  <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[100px_1px_1fr] items-start gap-6 sm:gap-10">
                    <span className="text-6xl font-mono font-medium text-neutral-200 leading-none -mt-2 select-none">
                      {step.numero}
                    </span>
                    <div className="hidden sm:block w-px bg-neutral-200 self-stretch" />
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900 mb-2">{step.titulo}</h3>
                      <p className="text-neutral-500 leading-relaxed">{step.descricao}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Formulário */}
        <section className="bg-neutral-100 border-t border-neutral-200 py-24 sm:py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-medium text-neutral-900 mb-4">{ctaTitle}</h2>
              <p className="text-neutral-500 leading-relaxed">{ctaDescription}</p>
            </Reveal>
            <Reveal delay={150}>
              {ctaSlot}
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
