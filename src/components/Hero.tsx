import HBSLogo from "./HBSLogo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-zinc-900 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <HBSLogo variant="dark" size="lg" className="mb-10" />

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-zinc-100 leading-tight max-w-3xl">
            Menos trabalho manual.
            <br />
            Mais resultado.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl">
            Automação, agentes de IA e inteligência de dados para operações B2B.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-zinc-900 bg-white rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Fale com a gente
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-zinc-300 border border-zinc-400 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </div>

      {/* Gradient inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-zinc-50" />
    </section>
  );
}
