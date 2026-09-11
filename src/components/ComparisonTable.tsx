"use client";

import React from "react";
import { COMPARISON_ROWS } from "@/data/content";
import { Check, X, ShieldAlert, Sparkles, Zap, ArrowRight } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section id="comparativa" className="py-24 relative overflow-hidden bg-[#070817]/80 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
            ¿Por Qué Cambiar de Enfoque?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            GiorgIT vs{" "}
            <span className="font-serif italic font-normal text-violet-300">
              Plataformas Tradicionales
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Compara por qué las marcas que buscan escalar abandonan los alquileres perpetuos de plantillas lentas y eligen infraestructura moderna sin comisiones.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="rounded-3xl border border-white/[0.1] bg-[#090b1c]/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="py-5 px-6 text-sm font-semibold text-slate-400 w-2/5">
                    Característica Clave
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-violet-300 bg-violet-600/10 border-x border-violet-500/20 w-1/5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
                      <span>GiorgIT Next-Gen</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm font-semibold text-slate-300 w-1/5">
                    Shopify
                  </th>
                  <th className="py-5 px-6 text-sm font-semibold text-slate-300 w-1/5">
                    TiendaNube
                  </th>
                  <th className="py-5 px-6 text-sm font-semibold text-slate-300 w-1/5">
                    WooCommerce
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`hover:bg-white/[0.02] transition-colors ${
                      row.highlight ? "bg-white/[0.01]" : ""
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                      {row.highlight && <Sparkles className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />}
                      <span>{row.feature}</span>
                    </td>
                    
                    {/* GiorgIT Highlight Column */}
                    <td className="py-4 px-6 font-bold text-emerald-300 bg-violet-600/10 border-x border-violet-500/20">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{row.giorgit}</span>
                      </div>
                    </td>

                    {/* Shopify */}
                    <td className="py-4 px-6 text-slate-300">
                      <span>{row.shopify}</span>
                    </td>

                    {/* TiendaNube */}
                    <td className="py-4 px-6 text-slate-300">
                      <span>{row.tiendanube}</span>
                    </td>

                    {/* WooCommerce */}
                    <td className="py-4 px-6 text-slate-300">
                      <span>{row.woocommerce}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Table Summary Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-violet-950/40 via-[#0a0c1e] to-indigo-950/40 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                La diferencia real: Rentabilidad pura y control total
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Al no pagar un 2% a 3% de comisión por venta a plataformas cerradas, una marca que factura $10.000.000 ARS mensuales recupera la inversión de su tienda GiorgIT en menos de 4 meses solo con el ahorro de comisiones.
              </p>
            </div>

            <a
              href="#calculadora"
              className="px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-all shadow-lg shadow-violet-600/30 whitespace-nowrap flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Calcular mi Ahorro</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
