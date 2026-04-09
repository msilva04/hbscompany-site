import Reveal from "./Reveal";

const metricas = [
  { valor: "+50", label: "automações entregues" },
  { valor: "+200h", label: "economizadas por mês" },
  { valor: "98%", label: "de satisfação" },
  { valor: "48h", label: "para primeiro deploy" },
];

export default function Numeros() {
  return (
    <section className="bg-white py-28 sm:py-36 border-y border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
          {metricas.map((m, i) => (
            <Reveal key={m.label} delay={i * 80} className="text-center">
              <p className="text-5xl sm:text-6xl font-mono font-medium text-zinc-950 leading-none">
                {m.valor}
              </p>
              <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
