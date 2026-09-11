"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white text-[#070019] pt-12 pb-16 border-t border-slate-200">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-100">
        <div>
          <Link href="/" className="inline-block">
            <span className="text-xl font-medium tracking-tight text-[#070019] font-sans">
              Giorg<span className="text-[#6f3cff]">IT</span>
            </span>
          </Link>
          <p className="text-xs text-slate-500 mt-1 max-w-sm">
            Plataformas de comercio electrónico de alto rendimiento. Arquitectura Edge, checkout optimizado y 0% de comisiones por venta.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-6 text-xs text-slate-600">
          <Link href="#soluciones" className="hover:text-[#6f3cff] transition-colors">
            Soluciones
          </Link>
          <Link href="#bento" className="hover:text-[#6f3cff] transition-colors">
            Ecommerce
          </Link>
          <Link href="#comparativa" className="hover:text-[#6f3cff] transition-colors">
            Comparativa
          </Link>
          <Link href="#planes" className="hover:text-[#6f3cff] transition-colors">
            Precios
          </Link>
          <Link href="#faq" className="hover:text-[#6f3cff] transition-colors">
            FAQ
          </Link>
          <Link href="#contacto" className="hover:text-[#6f3cff] transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-[#070019] transition-colors cursor-pointer"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {new Date().getFullYear()} GiorgIT. Todos los derechos reservados.
        </div>
        <div className="flex items-center gap-6">
          <span className="text-slate-400">Buenos Aires, Argentina • Remoto Global</span>
        </div>
      </div>
    </footer>
  );
}
