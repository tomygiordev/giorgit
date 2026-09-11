"use client";

import React from "react";
import {
  Zap,
  ShoppingBag,
  CreditCard,
  Search,
  CheckCircle2,
  TrendingUp,
  SlidersHorizontal,
  Smartphone,
  MessageCircle,
  Database,
  ShieldCheck,
  Cpu
} from "lucide-react";

export default function BentoFeatures() {
  return (
    <section id="bento" className="py-24 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Arquitectura de Software Moderna
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ingeniería enfocada en{" "}
            <span className="font-serif italic font-normal text-violet-300">
              Vender Más
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminamos todo el código innecesario y las plantillas lentas. Cada milisegundo ganado se traduce en mayor retención, menos carritos abandonados y más facturación.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Checkout Optimizado (Span 8) */}
          <div className="md:col-span-8 rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl">
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-3 rounded-2xl bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    <Zap className="w-6 h-6" />
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    -62% Carritos Abandonados
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Checkout Ultrarrápido de 1 Solo Paso
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                  Olvídate de los formularios tediosos de 5 pasos que espantan a los clientes. Nuestro checkout autocompleta direcciones, calcula costos de envío al instante y procesa pagos con Mercado Pago o tarjetas en menos de 1 segundo.
                </p>
              </div>

              {/* Visual mini-mockup inside bento */}
              <div className="mt-6 pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-xs font-bold text-white">Mercado Pago Nativo</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Cuotas sin interés y dinero en cuenta sin redirecciones externas.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-xs font-bold text-white">Autocompletado Rápido</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Validación de DNI, código postal y dirección en tiempo real.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-xs font-bold text-white">Descuento Transferencia</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Aplica 10% o 15% OFF automático incentivando pago inmediato.</div>
                </div>
              </div>
            </div>
            {/* Soft decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-violet-500/10 blur-[80px] rounded-full pointer-events-none" />
          </div>

          {/* Bento Item 2: Catálogo & Búsqueda (Span 4) */}
          <div className="md:col-span-4 rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 w-fit mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Catálogo Instantáneo
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Búsqueda predictiva y filtros facetados en menos de 20 milisegundos. Tus clientes encuentran el talle, color y modelo deseado sin que la página se recargue ni una sola vez.
              </p>
            </div>

            {/* Interactive simulated search preview */}
            <div className="mt-6 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 text-xs text-slate-300 border border-white/10">
                <Search className="w-3.5 h-3.5 text-violet-400" />
                <span>Buscando &quot;Sneakers Talle 41&quot;...</span>
                <span className="ml-auto text-[10px] font-mono text-emerald-400">18ms</span>
              </div>
              <div className="mt-2 flex gap-1.5 flex-wrap">
                <span className="text-[10px] px-2 py-0.5 rounded bg-violet-600/30 text-violet-200 border border-violet-500/30">
                  Talle 41 (12)
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400">
                  Negro (8)
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400">
                  En Stock
                </span>
              </div>
            </div>
          </div>

          {/* Bento Item 3: Pagos & WhatsApp (Span 4) */}
          <div className="md:col-span-4 rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 w-fit mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                WhatsApp Commerce 1-Click
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Permite a tus clientes realizar compras o evacuar dudas directamente por WhatsApp con el carrito pre-cargado, aumentando el cierre de ventas en clientes indecisos.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 flex-shrink-0">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="text-white font-semibold">Cierre de Venta Directo</div>
                <div className="text-slate-400 text-[11px]">+35% conversión asistida</div>
              </div>
            </div>
          </div>

          {/* Bento Item 4: SEO Enterprise (Span 4) */}
          <div className="md:col-span-4 rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/30 w-fit mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                SEO Enterprise & Google Rich
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Marcado estructurado JSON-LD automático para que tus productos aparezcan en Google con estrellas, precio, disponibilidad y foto, capturando tráfico orgánico calificado sin pagar pauta.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
              <div className="text-violet-300 font-mono text-[11px]">giorgit.com/productos/sneakers</div>
              <div className="text-white font-semibold mt-0.5">Sneakers Velocity Pro | GiorgIT Store</div>
              <div className="text-emerald-400 font-mono text-[10px] mt-0.5">★★★★★ (4.9) · $145.000 · En stock</div>
            </div>
          </div>

          {/* Bento Item 5: Panel de Administración & Reportes (Span 4) */}
          <div className="md:col-span-4 rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 w-fit mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Panel de Control Intuitivo
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Gestiona tu negocio sin fricción: actualización masiva de precios, control de stock por talle/color, impresión de etiquetas de Andreani y reportes de facturación claros.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-300 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Acceso desde tu celular
              </span>
              <span className="text-cyan-300 font-semibold font-mono">100% Visual</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
