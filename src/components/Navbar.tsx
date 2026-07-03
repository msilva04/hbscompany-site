"use client";

import { useState, useEffect } from "react";
import HBSLogo from "./HBSLogo";

const links = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Contato", href: "/#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
        <div
          className={`flex items-center justify-between h-12 px-4 sm:px-6 rounded-full border border-neutral-200 transition-all duration-500 ${
            scrolled
              ? "bg-white/92 backdrop-blur-xl shadow-sm"
              : "bg-white/80 backdrop-blur-md"
          }`}
        >
          <a href="/" className="flex-shrink-0">
            <HBSLogo variant="light" size="sm" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-500 hover:text-neutral-900 text-sm transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://wa.me/5548988151397"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors duration-300"
            >
              Fale conosco
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-neutral-500 hover:text-neutral-900 w-8 h-8 flex items-center justify-center"
            aria-label="Abrir menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col px-8 py-10 transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto bg-white/96 backdrop-blur-2xl"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between mb-16">
          <HBSLogo variant="light" size="sm" />
          <button
            onClick={() => setOpen(false)}
            className="text-neutral-500 hover:text-neutral-900 w-8 h-8 flex items-center justify-center"
            aria-label="Fechar menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-medium text-neutral-700 hover:text-neutral-900 transition-colors duration-300"
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-auto">
          <a
            href="https://wa.me/5548988151397"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors"
          >
            Fale conosco
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
