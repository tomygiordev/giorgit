"use client";

import React from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/content";
import { ArrowUp, Heart, ShieldCheck, Zap, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050610] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 text-white font-mono font-bold text-lg border border-white/20 shadow-lg shadow-violet-600/30">
                G
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  Giorg<span className="text-violet-400">IT</span>
                </span>
                <span className="text-[11px] text-slate-400 -mt-0.5">
                  Digital Tech Solutions & Ecommerce
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Agencia proveedora de soluciones tecnológicas de alto rendimiento. Desarrollamos plataformas de comercio electrónico ultrarrápidas, sin comisiones por venta y preparadas para escalar.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Sistemas Operativos 100% Edge</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block mb-4">
              Navegación
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block mb-4">
              Contacto Directo
            </span>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <a href="mailto:hola@giorgit.com" className="hover:text-white transition-colors">
                  hola@giorgit.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <a href="tel:+5491155218890" className="hover:text-white transition-colors">
                  +54 9 11 5521-8890 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span>Buenos Aires, Argentina • Operación Remota Global</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200 font-medium transition-all"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Solicitar Demo de tu Proyecto</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} GiorgIT Tech Solutions. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Términos de Servicio</span>
            <span className="hover:text-slate-400 cursor-pointer">Política de Privacidad</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Volver arriba"
            >
              <span>Arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
