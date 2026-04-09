"use client";

import { useState } from "react";

const WEBHOOK_URL =
  "https://n8n.srv1428985.hstgr.cloud/webhook/7f83a635-0f9f-40d6-b25e-882c6c5deba9";

interface FormData {
  empresa: string;
  nome: string;
  telefone: string;
  email: string;
  site: string;
}

const fields: { name: keyof FormData; label: string; type: string; placeholder: string }[] = [
  { name: "nome",    label: "Primeiro nome",    type: "text",  placeholder: "João" },
  { name: "empresa", label: "Nome da empresa",  type: "text",  placeholder: "Acme Ltda" },
  { name: "email",   label: "E-mail",           type: "email", placeholder: "joao@acme.com.br" },
  { name: "telefone",label: "Telefone",         type: "tel",   placeholder: "+55 48 99999-9999" },
  { name: "site",    label: "Site da empresa",  type: "url",   placeholder: "https://acme.com.br" },
];

export default function VoiceAgentForm() {
  const [form, setForm] = useState<FormData>({
    empresa: "", nome: "", telefone: "", email: "", site: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
    } catch {
      setError("Algo deu errado. Tente novamente ou fale pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-white mb-2">Solicitação enviada!</h3>
        <p className="text-zinc-400 max-w-sm mx-auto">
          Em breve você receberá uma ligação do nosso agente de voz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((f) => (
          <div key={f.name} className={f.name === "site" ? "sm:col-span-2" : ""}>
            <label className="block text-sm text-zinc-400 mb-1.5" htmlFor={f.name}>
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required
              placeholder={f.placeholder}
              value={form[f.name]}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
            />
          </div>
        ))}
      </div>

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando..." : "Solicitar ligação"}
        {!loading && (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/8 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )}
      </button>
    </form>
  );
}
