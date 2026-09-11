"use client";

import React, { useState } from "react";
import { Check, X, Shield, Lock, Layers, Cpu, Sparkles, Award } from "lucide-react";

interface RowData {
  factor: string;
  giorgit: string;
  giorgitSub?: string;
  shopify: string;
  tiendanube: string;
  woocommerce: string;
}

export default function ComparisonTable() {
  const [activeTab, setActiveTab] = useState<"business" | "technical">("business");

  const businessRows: RowData[] = [
    {
      factor: "Comisión sobre tus ventas",
      giorgit: "0% de por vida",
      giorgitSub: "Sin cobro por transacción ni peajes",
      shopify: "2.0% extra + abono en USD",
      tiendanube: "0.5% a 2.0% por venta",
      woocommerce: "0% (pero hosting inestable)",
    },
    {
      factor: "Velocidad de carga en móviles",
      giorgit: "< 0.4s (Instantáneo)",
      giorgitSub: "Edge CDN en 280+ ciudades",
      shopify: "2.8s a 4.2s (plantillas pesadas)",
      tiendanube: "3.2s a 4.8s (promedio)",
      woocommerce: "3.5s a 6.0s (lento sin Redis)",
    },
    {
      factor: "Propiedad de código y datos",
      giorgit: "100% Tuya (Repo Git)",
      giorgitSub: "Libre de ataduras y lock-in",
      shopify: "Alquiler perpetuo cerrado",
      tiendanube: "Alquiler perpetuo cerrado",
      woocommerce: "Tuya (pero mantenimiento frágil)",
    },
    {
      factor: "Costos ocultos en apps / plugins",
      giorgit: "$0 / mes (Todo nativo)",
      giorgitSub: "Sin suscripciones adicionales",
      shopify: "$60 a $250 USD / mes",
      tiendanube: "$15.000 a $45.000 ARS / mes",
      woocommerce: "Licencias anuales en USD",
    },
    {
      factor: "Checkout de compra",
      giorgit: "1 solo paso en pantalla",
      giorgitSub: "0.38s con Mercado Pago & DNI",
      shopify: "Flujo estándar de 3-4 pasos",
      tiendanube: "Checkout de múltiples pantallas",
      woocommerce: "Formularios lentos con recarga",
    },
    {
      factor: "Soporte e ingeniería",
      giorgit: "Directo con ingenieros",
      giorgitSub: "Atención por WhatsApp y SLA",
      shopify: "Tickets y bots genéricos",
      tiendanube: "Tickets demorados en HotSale",
      woocommerce: "Por tu cuenta o freelancers",
    },
  ];

  const technicalRows: RowData[] = [
    {
      factor: "Arquitectura de Software",
      giorgit: "Next.js 15 Server Components",
      giorgitSub: "Streaming SSR + Server Actions",
      shopify: "Ruby on Rails + Liquid templates",
      tiendanube: "Monolito PHP tradicional",
      woocommerce: "WordPress PHP + Plugins monolíticos",
    },
    {
      factor: "Latencia Time-To-First-Byte (TTFB)",
      giorgit: "< 15ms en el Edge",
      giorgitSub: "Cache distribuido Anycast",
      shopify: "180ms - 450ms",
      tiendanube: "240ms - 600ms",
      woocommerce: "350ms - 1.200ms",
    },
    {
      factor: "Picos de CyberMonday / HotSale",
      giorgit: "Escalado Elástico Serverless",
      giorgitSub: "+100.000 usuarios concurrentes",
      shopify: "Estable pero costo alto en USD",
      tiendanube: "Caídas y lentitud frecuente",
      woocommerce: "Error 500 / Crash de servidor",
    },
    {
      factor: "Integración Pasarelas de Pago",
      giorgit: "API Directa Nivel 1 (PCI-DSS)",
      giorgitSub: "Mercado Pago, Stripe, Bancos",
      shopify: "Redirección externa obligatoria",
      tiendanube: "Pasarelas estándar cerradas",
      woocommerce: "Plugins propensos a webhooks fallidos",
    },
    {
      factor: "Core Web Vitals Lighthouse",
      giorgit: "100 / 100 Garantizado",
      giorgitSub: "Verificado en móviles reales",
      shopify: "35 - 60 / 100",
      tiendanube: "30 - 55 / 100",
      woocommerce: "25 - 65 / 100",
    },
    {
      factor: "Portabilidad e Infraestructura",
      giorgit: "Vercel / Cloudflare / AWS",
      giorgitSub: "Tu propio proveedor sin ataduras",
      shopify: "Hosteado exclusivamente en Shopify",
      tiendanube: "Hosteado exclusivamente en TiendaNube",
      woocommerce: "Hosting compartido o VPS autogestionado",
    },
  ];

  const currentRows = activeTab === "business" ? businessRows : technicalRows;

  return (
    <section id="comparativa" className="w-full bg-white text-[#070019] py-8 sm:py-12">
      {/* Section Header with Typography Duet & Tactile Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6f3cff]" />
            <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-slate-500">
              // COMPARATIVA TRANSPARENTE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#070019] leading-[1.1]">
            Por Qué las Marcas que Escalan{" "}
            <span className="font-serif italic font-normal text-violet-700">
              Abandonan los Alquileres de Software
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Compara objetivamente por qué el software a medida y la infraestructura propia superan a los alquileres perpetuos de plantillas genéricas.
          </p>
        </div>

        {/* Tactile View Switcher */}
        <div className="bg-[#fafbff] border border-slate-200 p-1.5 rounded-2xl flex items-center gap-1 shadow-2xs self-start md:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab("business")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "business"
                ? "bg-[#070019] text-white shadow-xs"
                : "text-slate-600 hover:text-[#070019]"
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Comparativa de Negocio</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("technical")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "technical"
                ? "bg-[#070019] text-white shadow-xs"
                : "text-slate-600 hover:text-[#070019]"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Especificaciones Técnicas</span>
          </button>
        </div>
      </div>

      {/* Comparison Matrix Container with Architectural Frame */}
      <div className="relative rounded-2xl border border-slate-200 overflow-hidden shadow-xs bg-white">
        {/* Subtle corner '+' registration marks */}
        <span className="absolute top-1 left-2 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
        <span className="absolute top-1 right-2 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-slate-200 bg-[#fafbff]">
                <th className="py-4 px-5 sm:px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/4">
                  Factor Clave
                </th>
                
                {/* GIORGIT HIGHLIGHTED PEARL COLUMN */}
                <th className="py-4 px-5 sm:px-6 text-xs font-bold text-[#6f3cff] bg-[#f5f1ff] border-x-2 border-[#6f3cff] uppercase tracking-wider w-[28%] relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#070019]">GiorgIT Core</span>
                    <span className="text-[10px] font-mono font-semibold bg-[#6f3cff] text-white px-2 py-0.5 rounded-full shadow-2xs">
                      Tu Propia Infraestructura
                    </span>
                  </div>
                </th>

                <th className="py-4 px-5 sm:px-6 text-xs font-semibold text-slate-600 uppercase tracking-wider w-[16%]">
                  Shopify
                </th>
                <th className="py-4 px-5 sm:px-6 text-xs font-semibold text-slate-600 uppercase tracking-wider w-[16%]">
                  TiendaNube
                </th>
                <th className="py-4 px-5 sm:px-6 text-xs font-semibold text-slate-600 uppercase tracking-wider w-[16%]">
                  WooCommerce
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 text-xs sm:text-[13px]">
              {currentRows.map((row) => (
                <tr key={row.factor} className="hover:bg-[#fafbff]/60 transition-colors">
                  {/* Factor Name */}
                  <td className="py-4 px-5 sm:px-6 font-medium text-[#070019]">
                    {row.factor}
                  </td>

                  {/* GIORGIT HIGHLIGHTED CELL */}
                  <td className="py-4 px-5 sm:px-6 bg-[#f5f1ff]/50 border-x-2 border-[#6f3cff]">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <div>
                        <div className="font-bold text-[#070019] text-xs sm:text-sm">
                          {row.giorgit}
                        </div>
                        {row.giorgitSub && (
                          <div className="text-[11px] text-[#6f3cff] font-mono mt-0.5">
                            {row.giorgitSub}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Shopify */}
                  <td className="py-4 px-5 sm:px-6 text-slate-600">
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                      <span>{row.shopify}</span>
                    </div>
                  </td>

                  {/* TiendaNube */}
                  <td className="py-4 px-5 sm:px-6 text-slate-600">
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                      <span>{row.tiendanube}</span>
                    </div>
                  </td>

                  {/* WooCommerce */}
                  <td className="py-4 px-5 sm:px-6 text-slate-600">
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5">
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

        {/* Signature Guarantee Seal at Table Bottom */}
        <div className="p-4 sm:p-5 bg-[#fafbff] border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white border border-[#6f3cff]/30 flex items-center justify-center text-[#6f3cff] shadow-2xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#070019]">
                Sello de Garantía GiorgIT: Código 100% tuyo sin licencias mensuales forzadas
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                REPOSITORIO PRIVADO TRANSFERIDO A TU ORGANIZACIÓN // CERO LOCK-IN DE PLATAFORMA
              </div>
            </div>
          </div>

          <a
            href="#contacto"
            className="text-xs font-semibold text-[#6f3cff] hover:text-[#5f2bee] flex items-center gap-1.5 transition-colors"
          >
            <span>Consultar migración de mi tienda actual</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
