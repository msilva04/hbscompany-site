import Reveal from "./Reveal";

const servicos = [
  {
    href: "/servicos/agentes-ia",
    titulo: "Agentes de IA",
    descricao:
      "Atendimento, qualificação de leads e tarefas operacionais no piloto automático. Seus processos rodando 24h sem intervenção humana.",
    icone: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
      </svg>
    ),
  },
  {
    href: "/servicos/agentes-voz",
    titulo: "Agentes de Voz",
    descricao: "Ligações automatizadas com IA que fala, escuta e resolve.",
    icone: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
  },
  {
    href: "/servicos/crm",
    titulo: "Implementação de CRM",
    descricao: "Seu CRM configurado, integrado e rodando em semanas.",
    icone: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    href: "/servicos/dashboards",
    titulo: "Dashboards e BI",
    descricao: "Dados que você entende e usa pra tomar decisão.",
    icone: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    href: "/servicos/automacoes",
    titulo: "Automações",
    descricao: "Processos manuais eliminados. Fluxos que rodam sozinhos.",
    icone: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M21.015 4.356v4.992" />
      </svg>
    ),
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-500 mb-6">
            O que fazemos
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium text-zinc-950 leading-tight">
            Tecnologia trabalhando<br />por você.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card destaque — 2 colunas */}
          <Reveal className="sm:col-span-2 lg:col-span-2 h-full" delay={80}>
            <a href={servicos[0].href} className="block relative overflow-hidden bg-zinc-950 rounded-2xl p-10 h-full min-h-[260px] border border-zinc-800 group hover:border-zinc-700 transition-colors duration-500">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-zinc-700/15 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-zinc-500 mb-6">{servicos[0].icone}</div>
                <h3 className="text-2xl font-medium text-white mb-3">{servicos[0].titulo}</h3>
                <p className="text-zinc-400 leading-relaxed max-w-md">{servicos[0].descricao}</p>
                <span className="mt-auto pt-6 flex items-center gap-1.5 text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300">
                  Saiba mais
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </a>
          </Reveal>

          {/* Cards pequenos */}
          {servicos.slice(1).map((s, i) => (
            <Reveal key={s.titulo} delay={(i + 2) * 80} className="h-full">
              <a href={s.href} className="flex flex-col bg-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-colors duration-500 h-full group">
                <div className="text-zinc-500 mb-5">{s.icone}</div>
                <h3 className="text-lg font-medium text-white mb-2">{s.titulo}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{s.descricao}</p>
                <span className="mt-auto pt-5 flex items-center gap-1.5 text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300">
                  Saiba mais
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
