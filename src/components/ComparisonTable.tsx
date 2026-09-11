"use client";

import React from "react";
import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  const comparisonRows = [
    {
      feature: "Comisiones por cada venta",
      giorgit: "0% — Tus ventas son 100% tuyas",
      giorgitHighlight: true,
      shopify: "2.0% extra por transacción",
      tiendanube: "0.5% a 2.0% según plan",
      woocommerce: "0% (pero hosting caro)",
    },
    {
      feature: "Velocidad de carga en móviles",
      giorgit: "< 0.6s (Edge Cache Global)",
      giorgitHighlight: true,
      shopify: "2.2s - 4.0s (plantillas lentas)",
      tiendanube: "2.8s - 4.5s (promedio)",
      woocommerce: "3.5s - 6.0s (requiere cache pesado)",
    },
    {
      feature: "Propiedad del código y base de clientes",
      giorgit: "100% tuya — Sin ataduras",
      giorgitHighlight: true,
      shopify: "Alquiler perpetuo (plataforma cerrada)",
      tiendanube: "Alquiler perpetuo (plataforma cerrada)",
      woocommerce: "Sí (pero frágil ante updates)",
    },
    {
      feature: "Costos ocultos en apps mensuales",
      giorgit: "$0 / mes — Todo nativo",
      giorgitHighlight: true,
      shopify: "$60 a $250 USD/mes en plugins",
      tiendanube: "$15.000 a $40.000 ARS/mes en apps",
      woocommerce: "Licencias anuales en USD de plugins",
    },
    {
      feature: "Diseño y experiencia de checkout",
      giorgit: "A medida en 1 solo paso",
      giorgitHighlight: true,
      shopify: "Checkout rígido estándar",
      tiendanube: "Checkout de múltiples pantallas",
      woocommerce: "Checkout tedioso con fricción",
    },
    {
      feature: "Integración Mercado Pago & Transferencia",
      giorgit: "Nativa con cuotas y 10% OFF directo",
      giorgitHighlight: true,
      shopify: "Redirección externa obligatoria",
      tiendanube: "Estándar con comisiones",
      woocommerce: "Plugin propenso a fallas en webhooks",
    },
  ];

  return (
    <section id="comparativa" className="w-full bg-white text-[#070019] py-12">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#070019] leading-tight">
          GiorgIT frente a las plataformas tradicionales
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Compara por qué las marcas que escalan abandonan los alquileres perpetuos de plantillas lentas y eligen infraestructura moderna.
        </p>
      </div>

      {/* Comparison Table Container */}
      <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-[#fbfaff]">
                <th className="py-4 px-5 sm:px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/4">
                  Factor Clave
                </th>
                <th className="py-4 px-5 sm:px-6 text-xs font-bold text-[#6f3cff] bg-[#f5f1ff] border-x border-[#6f3cff]/20 uppercase tracking-wider w-1/4">
                  GiorgIT
                </th>
                <th className="py-4 px-5 sm:px-6 text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/6">
                  Shopify
                </th>
                <th className="py-4 px-5 sm:px-6 text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/6">
                  TiendaNube
                </th>
                <th className="py-4 px-5 sm:px-6 text-xs font-semibold text-slate-600 uppercase tracking-wider w-1/6">
                  WooCommerce
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="hover:bg-[#fbfaff]/50 transition-colors">
                  <td className="py-4 px-5 sm:px-6 font-medium text-[#070019]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-5 sm:px-6 font-semibold text-[#070019] bg-[#f5f1ff]/60 border-x border-[#6f3cff]/20">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{row.giorgit}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 sm:px-6 text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0">
                        <X className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                      <span>{row.shopify}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 sm:px-6 text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0">
                        <X className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                      <span>{row.tiendanube}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 sm:px-6 text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0">
                        <X className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                      <span>{row.woocommerce}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
