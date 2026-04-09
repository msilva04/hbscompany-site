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
  benefits: Benefit[];
  steps: Step[];
  ctaTitle: string;
  ctaDescription: string;
  ctaSlot: ReactNode;
}

export default function ServicePage({
  eyebrow, title, description,
  benefits, steps,
  ctaTitle, ctaDescription, ctaSlot,
}: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-zinc-950 pt-32 pb-24 sm:pt-40 sm:pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-600 mb-6">
                {eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
                {title}
              </h1>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-10">
              <a
                href="https://wa.me/5548988151397"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors duration-300 active:scale-[0.98]"
              >
                Fale com a gente
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/8 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-white py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium text-zinc-950">O que você ganha</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 100} className="h-full">
                  <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800 h-full">
                    <div className="text-zinc-500 mb-5">{b.icon}</div>
                    <h3 className="text-lg font-medium text-white mb-2">{b.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{b.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="bg-zinc-950 py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-600 mb-6">
                Como funciona
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-white leading-tight">
                Do zero ao resultado.
              </h2>
            </Reveal>
            <div>
              {steps.map((step, i) => (
                <Reveal
                  key={step.numero}
                  delay={i * 120}
                  className={`py-10 ${i > 0 ? "border-t border-zinc-800/60" : ""}`}
                >
                  <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[100px_1px_1fr] items-start gap-6 sm:gap-10">
                    <span className="text-6xl font-mono font-medium text-zinc-800 leading-none -mt-2 select-none">
                      {step.numero}
                    </span>
                    <div className="hidden sm:block w-px bg-zinc-800 self-stretch" />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">{step.titulo}</h3>
                      <p className="text-zinc-400 leading-relaxed">{step.descricao}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Formulário */}
        <section className="bg-white py-24 sm:py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-medium text-zinc-950 mb-4">{ctaTitle}</h2>
              <p className="text-zinc-500 leading-relaxed">{ctaDescription}</p>
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
