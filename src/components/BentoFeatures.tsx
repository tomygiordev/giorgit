"use client";

import React, { useState } from "react";
import {
  Zap,
  Search,
  CheckCircle2,
  SlidersHorizontal,
  Smartphone,
  MessageSquare,
  ShieldCheck,
  BarChart2,
  ArrowRight
} from "lucide-react";

export default function BentoFeatures() {
  const [activeFilter, setActiveFilter] = useState("Talle 41");

  return (
    <section id="bento" className="w-full bg-white text-[#070019] py-12">
      {/* Section Header — Clean authority without kickers */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#070019] leading-tight">
          Ingeniería enfocada en facturar más y eliminar la fricción
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Cada milisegundo ganado en el catálogo y cada paso eliminado en el checkout reduce el abandono de carritos y multiplica tu rentabilidad neta.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Bento 1 (Span 8): Checkout Optimizado Sin Fricción */}
        <div className="md:col-span-8 rounded-2xl p-6 sm:p-8 bg-[#fbfaff] border border-slate-200/90 flex flex-col justify-between hover:border-slate-300 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#6f3cff] shadow-sm">
                <Zap className="w-5 h-5" />
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
                -62% Carritos Abandonados
              </span>
            </div>

            <h3 className="text-2xl font-medium text-[#070019] tracking-tight">
              Checkout optimizado sin fricción
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl leading-relaxed">
              Elimina los formularios de 5 pasos que espantan a tus compradores. Autocompletado inteligente de CP y dirección, validación de DNI en tiempo real y cobros con Mercado Pago o transferencia bancaria en menos de 1 segundo.
            </p>
          </div>

          {/* Realistic feature detail cards */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70">
              <div className="text-xs font-semibold text-[#070019]">Mercado Pago Nativo</div>
              <div className="text-xs text-slate-500 mt-1">Cuotas sin interés dentro del flujo sin redirecciones lentas.</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70">
              <div className="text-xs font-semibold text-[#070019]">Transferencia 10% OFF</div>
              <div className="text-xs text-slate-500 mt-1">Alias instantáneo y validación con carga automática de comprobante.</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70">
              <div className="text-xs font-semibold text-[#070019]">Cálculo Andreani &amp; Correo</div>
              <div className="text-xs text-slate-500 mt-1">Cotización precisa de envíos a domicilio y sucursal por código postal.</div>
            </div>
          </div>
        </div>

        {/* Bento 2 (Span 4): Catálogo Ultra-rápido & Filtros Instantáneos */}
        <div className="md:col-span-4 rounded-2xl p-6 sm:p-8 bg-[#fbfaff] border border-slate-200/90 flex flex-col justify-between hover:border-slate-300 transition-all">
          <div>
            <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#6f3cff] shadow-sm mb-4">
              <Search className="w-5 h-5" />
            </span>
            <h3 className="text-2xl font-medium text-[#070019] tracking-tight">
              Catálogo ultra-rápido
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Filtros facetados y búsqueda predictiva en menos de 15 milisegundos. Sin recargas de página completas ni esperas en el navegador móvil.
            </p>
          </div>

          {/* Interactive filter simulation */}
          <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200/80">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
              <span>Filtros facetados activos:</span>
              <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                12ms
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Talle 41", "Color Negro", "Stock Inmediato", "Envío Gratis"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-2.5 py-1 rounded-md text-xs transition-all cursor-pointer ${
                    activeFilter === tag
                      ? "bg-[#070019] text-white font-medium"
                      : "bg-[#f8f7fc] text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento 3 (Span 4): Panel de administración & métricas */}
        <div className="md:col-span-4 rounded-2xl p-6 sm:p-8 bg-[#fbfaff] border border-slate-200/90 flex flex-col justify-between hover:border-slate-300 transition-all">
          <div>
            <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#6f3cff] shadow-sm mb-4">
              <BarChart2 className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-medium text-[#070019] tracking-tight">
              Panel de administración en tiempo real
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Control total de pedidos, actualización de inventario por depósito y métricas claras de facturación sin depender de plugins de terceros.
            </p>
          </div>

          <div className="mt-6 space-y-2">
            <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between text-xs">
              <span className="font-medium text-[#070019]">Stock central sincronizado</span>
              <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">En línea</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between text-xs">
              <span className="font-medium text-[#070019]">Exportación contable AFIP</span>
              <span className="text-slate-500 font-mono">1 Clic CSV</span>
            </div>
          </div>
        </div>

        {/* Bento 4 (Span 4): SEO Enterprise & Core Web Vitals */}
        <div className="md:col-span-4 rounded-2xl p-6 sm:p-8 bg-[#fbfaff] border border-slate-200/90 flex flex-col justify-between hover:border-slate-300 transition-all">
          <div>
            <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm mb-4">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-medium text-[#070019] tracking-tight">
              SEO Enterprise &amp; Core Web Vitals
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Renderizado del lado del servidor (SSR), metadatos dinámicos OpenGraph y Google Shopping feed listos para posicionar orgánicamente en primeros lugares.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-2 pt-2">
            {[
              { label: "Performance", score: "100" },
              { label: "Accesibilidad", score: "100" },
              { label: "Best Practices", score: "100" },
              { label: "SEO", score: "100" },
            ].map((audit) => (
              <div key={audit.label} className="p-2 rounded-xl bg-white border border-slate-200/80 text-center">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center mx-auto border border-emerald-200">
                  {audit.score}
                </div>
                <div className="text-[10px] text-slate-500 mt-1 font-medium truncate">{audit.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento 5 (Span 4): WhatsApp Commerce Automatizado */}
        <div className="md:col-span-4 rounded-2xl p-6 sm:p-8 bg-[#fbfaff] border border-slate-200/90 flex flex-col justify-between hover:border-slate-300 transition-all">
          <div>
            <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm mb-4">
              <MessageSquare className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-medium text-[#070019] tracking-tight">
              WhatsApp Commerce automatizado
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Confirmaciones de pedido automáticas, recuperación de carritos por chat y botón de compra directa con un vendedor en 1 solo toque.
            </p>
          </div>

          <div className="mt-6 p-3.5 rounded-xl bg-white border border-slate-200/80">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-[#070019]">Notificación Directa</span>
            </div>
            <p className="text-xs text-slate-600 italic bg-[#f8f7fc] p-2 rounded-lg border border-slate-100">
              &quot;Hola Tomás! Tu pedido #84920 fue recibido. Preparando despacho por Andreani...&quot;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
