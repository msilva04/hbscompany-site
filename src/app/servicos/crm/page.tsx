import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Implementação de CRM — HBS Tech",
  description: "Seu CRM configurado, integrado e rodando em semanas.",
};

const benefits = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" /></svg>,
    title: "Configurado para o seu processo",
    description: "Sem template genérico. O CRM reflete exatamente o seu funil de vendas e processo interno.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>,
    title: "Integrado ao seu stack",
    description: "WhatsApp, e-mail, ERP, ferramentas de marketing — tudo conectado e sincronizado.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>,
    title: "Treinamento incluído",
    description: "Sua equipe recebe capacitação completa para extrair o máximo da ferramenta.",
  },
];

const steps = [
  { numero: "01", titulo: "Diagnóstico", descricao: "Mapeamos seu processo comercial atual, gargalos e o que precisa ser registrado no CRM." },
  { numero: "02", titulo: "Configuração e integração", descricao: "Montamos pipelines, campos customizados, automações e conectamos às suas ferramentas." },
  { numero: "03", titulo: "Go-live e suporte", descricao: "O CRM entra em operação. Acompanhamos a adoção da equipe e ajustamos o que for necessário." },
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

export default function CRMPage() {
  return (
    <ServicePage
      eyebrow="Implementação de CRM"
      title="Seu CRM rodando em semanas."
      description="Configuramos, integramos e treinamos sua equipe no CRM ideal para o seu negócio — sem meses de implantação e sem dados perdidos no processo."
      benefits={benefits}
      steps={steps}
      ctaTitle="Qual CRM é o certo para você?"
      ctaDescription="Fale com a gente e descubra qual ferramenta se encaixa melhor no seu processo e orçamento."
      ctaSlot={ctaSlot}
    />
  );
}
