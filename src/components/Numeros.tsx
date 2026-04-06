const metricas = [
  { valor: "+50", label: "automações entregues" },
  { valor: "+200h", label: "economizadas por mês" },
  { valor: "98%", label: "de satisfação" },
  { valor: "48h", label: "para primeiro deploy" },
];

export default function Numeros() {
  return (
    <section className="bg-zinc-50 py-20 sm:py-28 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {metricas.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-mono font-medium text-zinc-950">
                {m.valor}
              </p>
              <p className="mt-2 text-sm text-zinc-500">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
