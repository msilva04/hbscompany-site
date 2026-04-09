import Reveal from "./Reveal";

const steps = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao:
      "Entendemos sua operação e mapeamos onde a automação gera mais impacto. Sem generalismo — cada solução é construída para o seu contexto.",
  },
  {
    numero: "02",
    titulo: "Implementação",
    descricao:
      "Construímos e integramos as soluções no seu stack existente. Sem migração forçada, sem downtime.",
  },
  {
    numero: "03",
    titulo: "Resultado",
    descricao:
      "Você acompanha os ganhos em tempo real nos dashboards. Métricas claras, impacto mensurável desde o primeiro deploy.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-zinc-950 py-28 sm:py-36">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-600 mb-6">
            Como funciona
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium text-white leading-tight">
            Do diagnóstico<br />ao resultado.
          </h2>
        </Reveal>

        <div>
          {steps.map((step, i) => (
            <Reveal
              key={step.numero}
              delay={i * 120}
              className={`py-10 sm:py-12 ${i > 0 ? "border-t border-zinc-800/60" : ""}`}
            >
              <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[100px_1px_1fr] items-start gap-6 sm:gap-10">
                <span className="text-6xl sm:text-7xl font-mono font-medium text-zinc-800 leading-none -mt-2 select-none">
                  {step.numero}
                </span>
                <div className="hidden sm:block w-px bg-zinc-800 self-stretch" />
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">{step.titulo}</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-lg">{step.descricao}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
