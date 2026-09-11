"use client";

import React from "react";

export default function SocialProofBar() {
  const integrations = [
    { name: "Mercado Pago", role: "Checkout Pro & Cuotas" },
    { name: "Stripe", role: "Cobros Globales USD" },
    { name: "Next.js 15", role: "Edge Server Architecture" },
    { name: "Vercel Edge", role: "CDN Global < 15ms" },
    { name: "WhatsApp API", role: "1-Click Direct Buy" },
    { name: "Andreani", role: "Logística & Envíos" },
    { name: "Correo Argentino", role: "Cobertura Nacional" },
  ];

  const metrics = [
    {
      value: "0%",
      label: "Comisiones por Venta",
      detail: "Tus ganancias son 100% tuyas, sin porcentajes retenidos por plataforma.",
    },
    {
      value: "< 0.6s",
      label: "Tiempo de Carga Promedio",
      detail: "Core Web Vitals 100/100 en Google Lighthouse para máxima retención.",
    },
    {
      value: "99.9%",
      label: "Disponibilidad de Infraestructura",
      detail: "Cero caídas durante CyberMonday, HotSale y campañas de alto tráfico.",
    },
    {
      value: "+48%",
      label: "Aumento en Conversión",
      detail: "Checkout sin fricción de 1 solo paso y catálogo con filtros instantáneos.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#070019] py-4">
      {/* 1px Bordered Logos Grid Row (Recal style) */}
      <div className="w-full border-y border-slate-200">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 divide-x divide-y sm:divide-y-0 divide-slate-200">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="py-5 px-4 flex flex-col items-center justify-center text-center group hover:bg-[#fbfaff] transition-colors"
            >
              <span className="font-sans font-semibold text-sm text-[#070019] tracking-tight group-hover:text-[#6f3cff] transition-colors">
                {item.name}
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5 font-normal">
                {item.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Row (Exact Recal Style with massive 6xl/7xl typography) */}
      <div className="pt-16 sm:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <div className="text-6xl sm:text-7xl font-medium tracking-tight text-[#070019] leading-none">
                {metric.value}
              </div>
              <div className="text-base font-medium text-[#070019] mt-3">
                {metric.label}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
