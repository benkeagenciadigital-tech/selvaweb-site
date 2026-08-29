"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const services = [
  "Site institucional",
  "Site corporativo",
  "Landing page",
  "Performance website",
  "UX/UI Design",
  "Arquitetura digital",
];

export default function ContactForm() {
  const [service, setService] = useState(services[0]);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Novo projeto — ${service} · ${company || name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmpresa: ${company}\nE-mail: ${email}\nServiço: ${service}\n\n${message}`
    );
    // Opens the visitor's email client — no data leaves the browser otherwise.
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-[8px] border border-forest-line bg-canopy-2 px-4 py-3.5 text-mist placeholder:text-signal-dim outline-none transition-colors focus:border-lime/60";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mono-label mb-2 block text-[10px] text-signal-dim">Nome*</label>
          <input name="name" required placeholder="Seu nome" className={field} />
        </div>
        <div>
          <label className="mono-label mb-2 block text-[10px] text-signal-dim">Empresa</label>
          <input name="company" placeholder="Sua empresa" className={field} />
        </div>
      </div>

      <div>
        <label className="mono-label mb-2 block text-[10px] text-signal-dim">E-mail*</label>
        <input name="email" type="email" required placeholder="voce@empresa.com" className={field} />
      </div>

      <div>
        <label className="mono-label mb-3 block text-[10px] text-signal-dim">Tipo de projeto</label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setService(s)}
              className={`rounded-full border px-4 py-2 text-xs transition-all ${
                service === s
                  ? "border-lime bg-lime text-jungle"
                  : "border-forest-line text-signal hover:border-lime/50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mono-label mb-2 block text-[10px] text-signal-dim">Mensagem*</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Conte sobre seu projeto, objetivos e prazo."
          className={`${field} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-[8px] bg-lime px-7 py-4 text-sm font-semibold text-jungle transition-all duration-300 hover:bg-lime-bright hover:shadow-[0_0_40px_-8px_rgba(166,206,57,0.7)] sm:w-auto"
      >
        {sent ? "Abrindo seu e-mail…" : "Enviar briefing"}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>

      {sent && (
        <p className="text-sm text-signal">
          Se o seu cliente de e-mail não abrir, escreva direto para{" "}
          <a href={`mailto:${site.email}`} className="text-lime">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
