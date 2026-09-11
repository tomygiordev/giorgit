"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ShieldCheck, Activity, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white text-[#070019] pt-12 pb-16 relative">
      {/* Top Hairline Border with Corner Registration '+' Marks */}
      <div className="relative border-t border-slate-200 pt-10">
        <span className="absolute -top-2.5 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
        <span className="absolute -top-2.5 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>

        {/* Live System Telemetry Strip */}
        <div className="pb-8 mb-8 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-700">
              Edge Server 100% Operational
            </span>
            <span className="text-slate-400">// Latency: 11ms (EZE-Anycast)</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>SSL: TLS 1.3</span>
            <span>•</span>
            <span>NEXT.JS 15.2</span>
            <span>•</span>
            <span>PCI-DSS VERIFIED</span>
          </div>
        </div>

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-100">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-[#070019] font-sans">
                Giorg<span className="text-[#6f3cff]">IT</span>
              </span>
            </Link>
            <p className="text-xs text-slate-600 mt-2 max-w-md leading-relaxed">
              Plataformas ecommerce de ingeniería de alto rendimiento. Arquitectura Edge, checkout en 1 solo paso y 0% de comisiones sobre tus ventas.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-600">
            <Link href="#soluciones" className="hover:text-[#6f3cff] transition-colors">
              Soluciones
            </Link>
            <Link href="#tecnologia" className="hover:text-[#6f3cff] transition-colors">
              Infraestructura
            </Link>
            <Link href="#bento" className="hover:text-[#6f3cff] transition-colors">
              Tecnología
            </Link>
            <Link href="#comparativa" className="hover:text-[#6f3cff] transition-colors">
              Comparativa
            </Link>
            <Link href="#planes" className="hover:text-[#6f3cff] transition-colors">
              Planes &amp; Calculadora
            </Link>
            <Link href="#faq" className="hover:text-[#6f3cff] transition-colors">
              Preguntas Frecuentes
            </Link>
            <Link href="#contacto" className="hover:text-[#6f3cff] transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#fafbff] border border-slate-200 hover:border-[#6f3cff] flex items-center justify-center text-slate-600 hover:text-[#6f3cff] transition-all cursor-pointer shadow-2xs group"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} GiorgIT Solutions. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Buenos Aires, Argentina</span>
            <span>•</span>
            <span className="font-mono text-[11px] text-slate-400">DESARROLLO DE ALTO RENDIMIENTO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
