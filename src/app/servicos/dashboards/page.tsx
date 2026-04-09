import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Dashboards e BI — HBS Tech",
  description: "Dados que você entende e usa para tomar decisão.",
};

const benefits = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>,
    title: "Visibilidade total da operação",
    description: "Vendas, financeiro, marketing e operações em um único painel atualizado em tempo real.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" /></svg>,
    title: "Decisões baseadas em dados",
    description: "Elimine achismo. Cada decisão estratégica apoiada por números claros e atualizados.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>,
    title: "Conectado às suas fontes",
    description: "Integramos com planilhas, banco de dados, ERPs, CRMs e APIs — sem migração.",
  },
];

const steps = [
  { numero: "01", titulo: "Levantamento de KPIs", descricao: "Identificamos quais métricas realmente importam para o seu negócio e onde estão os dados." },
  { numero: "02", titulo: "Construção do dashboard", descricao: "Desenvolvemos os painéis com foco em clareza visual e velocidade de leitura." },
  { numero: "03", titulo: "Atualização automática", descricao: "Os dados se atualizam sozinhos. Você abre o dashboard e toma decisão na hora." },
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

export default function DashboardsPage() {
  return (
    <ServicePage
      eyebrow="Dashboards e BI"
      title="Dados que você entende e usa."
      description="Transformamos dados espalhados em painéis claros, conectados e atualizados em tempo real — para que sua equipe tome decisões com velocidade e confiança."
      benefits={benefits}
      steps={steps}
      ctaTitle="Chega de tomar decisão no escuro."
      ctaDescription="Fale com a gente e veja como um dashboard pode transformar a gestão da sua operação."
      ctaSlot={ctaSlot}
    />
  );
}
