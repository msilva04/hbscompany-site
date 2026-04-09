import ServicePage from "@/components/ServicePage";
import VoiceAgentForm from "@/components/VoiceAgentForm";

export const metadata = {
  title: "Agentes de Voz — HBS Tech",
  description: "Ligações automatizadas com IA que fala, escuta e resolve.",
};

const benefits = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>,
    title: "Ligações outbound automáticas",
    description: "O agente disca, apresenta sua empresa e qualifica o lead sem precisar de SDR.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>,
    title: "Voz natural e fluida",
    description: "Conversação em português com prosódia natural. O cliente dificilmente percebe que é IA.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" /></svg>,
    title: "Resumo pós-ligação",
    description: "Cada chamada gera um resumo automático com dados do lead direto no seu CRM.",
  },
];

const steps = [
  { numero: "01", titulo: "Briefing", descricao: "Você nos conta o objetivo da ligação: qualificação, cobrança, confirmação de reunião — o que for." },
  { numero: "02", titulo: "Configuração do agente", descricao: "Programamos o script, a voz e as integrações com seu CRM e sistemas de telefonia." },
  { numero: "03", titulo: "Ativação", descricao: "O agente começa a ligar. Você acompanha os resultados em tempo real no dashboard." },
];

export default function AgentesVozPage() {
  return (
    <ServicePage
      eyebrow="Agentes de Voz"
      title="IA que fala, escuta e resolve."
      description="Ligações automatizadas com inteligência artificial que conduz conversas reais — qualifica leads, agenda reuniões e resolve chamadas de suporte sem equipe humana."
      benefits={benefits}
      steps={steps}
      ctaTitle="Receba uma ligação de demonstração."
      ctaDescription="Preencha os dados abaixo e nosso agente de voz vai ligar para você demonstrar como funciona na prática."
      ctaSlot={<VoiceAgentForm />}
    />
  );
}
