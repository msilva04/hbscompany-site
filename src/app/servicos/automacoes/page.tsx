import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Automações — HBS Tech",
  description: "Processos manuais eliminados. Fluxos que rodam sozinhos.",
};

const benefits = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M21.015 4.356v4.992" /></svg>,
    title: "Zero tarefas repetitivas",
    description: "Tudo que é feito manualmente toda semana pode ser automatizado — envios, notificações, relatórios, atualizações.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
    title: "Mais tempo para o que importa",
    description: "Sua equipe foca em trabalho estratégico enquanto os fluxos automatizados cuidam do operacional.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
    title: "Menos erro humano",
    description: "Fluxos automatizados não esquecem, não cansam e não erram por distração.",
  },
];

const steps = [
  { numero: "01", titulo: "Mapeamento de processos", descricao: "Identificamos os fluxos mais repetitivos e de maior impacto para automatizar primeiro." },
  { numero: "02", titulo: "Construção dos fluxos", descricao: "Desenvolvemos as automações com as ferramentas certas: n8n, Make, Zapier ou código próprio." },
  { numero: "03", titulo: "Ativação e monitoramento", descricao: "Os fluxos entram em produção. Monitoramos execuções e corrigimos exceções automaticamente." },
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

export default function AutomacoesPage() {
  return (
    <ServicePage
      eyebrow="Automações"
      title="Fluxos que rodam sozinhos."
      description="Eliminamos tarefas manuais e repetitivas da sua operação com automações robustas — para que seu time gaste energia onde realmente faz diferença."
      benefits={benefits}
      steps={steps}
      ctaTitle="Qual processo você quer eliminar?"
      ctaDescription="Fale com a gente e identifique quais fluxos podem ser automatizados ainda esta semana."
      ctaSlot={ctaSlot}
    />
  );
}
