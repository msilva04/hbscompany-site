const steps = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao:
      "Entendemos sua operação e onde a automação gera mais impacto.",
  },
  {
    numero: "02",
    titulo: "Implementação",
    descricao:
      "Construímos e integramos as soluções no seu stack.",
  },
  {
    numero: "03",
    titulo: "Resultado",
    descricao:
      "Você acompanha os ganhos em tempo real nos dashboards.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-medium text-zinc-950">
            Como funciona
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            Do diagnóstico ao resultado em três etapas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step, i) => (
            <div key={step.numero} className="relative text-center">
              {/* Linha conectora (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-zinc-200" />
              )}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 mb-6">
                <span className="text-lg font-mono font-medium text-zinc-600">
                  {step.numero}
                </span>
              </div>
              <h3 className="text-lg font-medium text-zinc-950 mb-2">
                {step.titulo}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mx-auto">
                {step.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
