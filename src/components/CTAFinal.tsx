import Reveal from "./Reveal";

export default function CTAFinal() {
  return (
    <section id="contato" className="bg-zinc-950 py-28 sm:py-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-600 mb-8">
            Pronto para começar?
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
            Automatize sua<br />operação.
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto mb-12 leading-relaxed">
            Fale com a gente e descubra como reduzir trabalho manual e escalar seus resultados.
          </p>
        </Reveal>

        <Reveal delay={200} className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/5548988151397"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors duration-300 active:scale-[0.98]"
          >
            Chamar no WhatsApp
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/8 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <a
            href="mailto:contato@hbstech.com"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-all duration-300 active:scale-[0.98]"
          >
            Enviar e-mail
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/8 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
