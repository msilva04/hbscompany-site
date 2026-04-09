import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Agentes de IA — HBS Tech",
  description: "Atendimento, qualificação de leads e tarefas operacionais no piloto automático.",
};

const benefits = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
    title: "Disponível 24/7",
    description: "Seu agente nunca dorme. Atende, qualifica e responde a qualquer hora, sem intervenção humana.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>,
    title: "Escala sem custo linear",
    description: "Atenda 10 ou 10.000 conversas simultâneas sem aumentar headcount.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>,
    title: "Integrado ao seu stack",
    description: "Conecta com CRM, WhatsApp, e-mail, ERP — sem migração forçada.",
  },
];

const steps = [
  { numero: "01", titulo: "Mapeamento", descricao: "Analisamos seus fluxos e identificamos onde o agente gera mais retorno imediato." },
  { numero: "02", titulo: "Construção", descricao: "Desenvolvemos o agente com base nas regras do seu negócio, tom de voz e integrações." },
  { numero: "03", titulo: "Deploy e monitoramento", descricao: "O agente entra em produção. Acompanhamos métricas e ajustamos continuamente." },
];

const ctaSlot = (
  <a
    href="https://wa.me/5548988151397"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-3 rounded-full bg-zinc-950 px-8 py-3.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors duration-300 active:scale-[0.98]"
  >
    Falar com especialista
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  </a>
);

export default function AgentesIAPage() {
  return (
    <ServicePage
      eyebrow="Agentes de IA"
      title="Operação no piloto automático."
      description="Agentes de inteligência artificial que atendem, qualificam leads e executam tarefas operacionais — sem intervenção humana, 24 horas por dia."
      benefits={benefits}
      steps={steps}
      ctaTitle="Pronto para automatizar?"
      ctaDescription="Fale com a gente e descubra qual agente faz mais sentido para a sua operação."
      ctaSlot={ctaSlot}
    />
  );
}
