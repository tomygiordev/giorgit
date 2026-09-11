"use client";

import React from "react";

export default function SocialProofBar() {
  const metrics = [
    {
      value: "0%",
      label: "Comisiones por Venta",
      detail: "Tus ganancias son 100% tuyas, sin porcentajes retenidos por plataforma ni costos ocultos.",
    },
    {
      value: "< 0.4s",
      label: "Tiempo de Carga Promedio",
      detail: "Core Web Vitals 100/100 en Google Lighthouse para retención máxima y alto SEO orgánico.",
    },
    {
      value: "99.98%",
      label: "Disponibilidad Infraestructura",
      detail: "Cero caídas durante HotSale, CyberMonday y picos masivos con arquitectura Edge Serverless.",
    },
    {
      value: "+48%",
      label: "Aumento en Conversión",
      detail: "Checkout nativo 1-Click con Mercado Pago, cuotas sin interés y cálculo express de Andreani.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#070019] py-4">
      {/* 1px Bordered Logos Grid Row with Real Inline SVG Logos (Recal style) */}
      <div className="w-full border-y border-slate-200">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-slate-200">
          {/* 1. Mercado Pago */}
          <div className="py-5 px-4 flex flex-col items-center justify-center text-center group hover:bg-[#fbfaff] transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#009ee3] flex items-center justify-center p-1 text-white shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-label="Mercado Pago">
                  <path d="M19.4 6.6c-.6-.4-1.4-.6-2.2-.6-1.5 0-2.8.8-3.5 2-.4-.2-.8-.3-1.3-.3s-.9.1-1.3.3C10.4 6.8 9.1 6 7.6 6c-.8 0-1.6.2-2.2.6-1.7 1.1-2.4 3.1-1.8 5.1.5 1.7 1.8 3 3.5 3.5.4.1.9.2 1.3.2.9 0 1.7-.3 2.4-.8l.2-.1.2.1c.7.5 1.5.8 2.4.8.4 0 .9-.1 1.3-.2 1.7-.5 3-1.8 3.5-3.5.6-2-.1-4-1.8-5.1zm-8.2 6.5c-.3.4-.7.7-1.2.8-.2.1-.5.1-.8.1-.4 0-.8-.1-1.2-.3-1-.6-1.5-1.7-1.2-2.8.2-.8.8-1.5 1.6-1.8.4-.2.8-.2 1.2-.2.8 0 1.5.4 2 1.1.2.3.2.7.2 1.1-.1.7-.3 1.4-.6 2zm6.8-2c-.2.8-.8 1.5-1.6 1.8-.4.2-.8.2-1.2.2-.8 0-1.5-.4-2-1.1-.2-.3-.2-.7-.2-1.1.1-.7.3-1.4.6-2 .3-.4.7-.7 1.2-.8.2-.1.5-.1.8-.1.4 0 .8.1 1.2.3 1 .6 1.5 1.7 1.2 2.8z" />
                </svg>
              </div>
              <span className="font-sans font-bold text-sm text-[#009ee3] tracking-tight group-hover:text-[#0081ba] transition-colors">
                Mercado Pago
              </span>
            </div>
            <span className="text-[11px] text-slate-500 mt-1 font-normal">
              Checkout Pro &amp; Cuotas
            </span>
          </div>

          {/* 2. Stripe */}
          <div className="py-5 px-4 flex flex-col items-center justify-center text-center group hover:bg-[#fbfaff] transition-colors">
            <div className="flex items-center gap-1.5 h-7">
              <svg viewBox="0 0 60 25" className="h-5 w-auto fill-[#635bff] group-hover:scale-105 transition-transform" aria-label="Stripe">
                <path d="M59.64 14.28c0-4.52-2.19-8.08-6.42-8.08-4.25 0-6.84 3.56-6.84 8.05 0 5.33 3.12 7.97 7.42 7.97 2.08 0 3.65-.47 4.84-1.12v-3.41c-1.19.6-2.52.95-4.14.95-1.63 0-3.08-.6-3.3-2.45h8.34c0-.3.1-.64.1-.91zm-8.45-1.69c0-1.72.99-2.43 2.07-2.43 1.05 0 2.01.71 2.01 2.43h-4.08zM36.19 6.2c-1.75 0-2.9.82-3.48 1.4v-5.9H28v20.07h4.71v-9.74c1.03-.97 2.37-1.39 3.48-1.39 1.57 0 2.82.91 2.82 2.82v8.31h4.71v-8.87c0-4.19-2.22-6.7-7.53-6.7zM24.71 8.52V6.44h-4.58v1.65c-.86-1.13-2.12-1.89-3.79-1.89-3.6 0-6.19 2.8-6.19 7.91 0 4.96 2.51 8.11 6.19 8.11 1.62 0 2.94-.74 3.79-1.84v1.61h4.58V8.52zm-4.71 5.61c0 2.56-1.32 3.86-3.04 3.86-1.7 0-2.98-1.3-2.98-3.86 0-2.58 1.28-3.83 2.98-3.83 1.72 0 3.04 1.25 3.04 3.83zM6.9 10.37c0-.82.68-1.14 1.79-1.14 1.6 0 3.63.5 5.23 1.38V6.63C12.18 5.99 10.42 5.7 8.69 5.7 3.58 5.7.36 8.37.36 12.87c0 7.02 9.65 5.9 9.65 8.94 0 .99-.86 1.32-2.07 1.32-1.82 0-4.18-.74-6.02-1.78v4.11c2.03.88 4.14 1.26 6.02 1.26 5.32 0 8.78-2.61 8.78-7.23 0-7.56-9.82-6.24-9.82-9.12z" />
              </svg>
            </div>
            <span className="text-[11px] text-slate-500 mt-1 font-normal">
              Cobros Globales USD
            </span>
          </div>

          {/* 3. Next.js 15 */}
          <div className="py-5 px-4 flex flex-col items-center justify-center text-center group hover:bg-[#fbfaff] transition-colors">
            <div className="flex items-center gap-1.5 h-7">
              <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center p-1 shadow-2xs group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 180 180" className="w-full h-full" fill="none">
                  <mask id="proofNextMask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
                    <circle cx="90" cy="90" r="90" fill="black" />
                  </mask>
                  <g mask="url(#proofNextMask)">
                    <circle cx="90" cy="90" r="90" fill="black" />
                    <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#proofNextGrad1)" />
                    <rect x="115" y="54" width="12" height="72" fill="url(#proofNextGrad2)" />
                  </g>
                  <defs>
                    <linearGradient id="proofNextGrad1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="proofNextGrad2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-sans font-bold text-sm text-black tracking-tight">
                Next.js
              </span>
              <span className="text-[10px] bg-slate-100 text-slate-700 px-1 py-0.2 rounded font-mono font-bold">
                15
              </span>
            </div>
            <span className="text-[11px] text-slate-500 mt-1 font-normal">
              Edge Server Architecture
            </span>
          </div>

          {/* 4. Vercel Edge */}
          <div className="py-5 px-4 flex flex-col items-center justify-center text-center group hover:bg-[#fbfaff] transition-colors">
            <div className="flex items-center gap-1.5 h-7">
              <svg viewBox="0 0 76 65" className="w-5 h-auto fill-black group-hover:scale-105 transition-transform" aria-label="Vercel">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
              <span className="font-sans font-bold text-sm text-[#070019] tracking-tight">
                Vercel
              </span>
              <span className="text-[10px] text-[#6f3cff] font-bold bg-[#6f3cff]/10 px-1.5 py-0.2 rounded font-mono">
                Edge
              </span>
            </div>
            <span className="text-[11px] text-slate-500 mt-1 font-normal">
              CDN Global &lt; 15ms
            </span>
          </div>

          {/* 5. WhatsApp Business */}
          <div className="py-5 px-4 flex flex-col items-center justify-center text-center group hover:bg-[#fbfaff] transition-colors">
            <div className="flex items-center gap-1.5 h-7">
              <div className="w-6 h-6 rounded-lg bg-[#25D366] flex items-center justify-center p-1 text-white shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-label="WhatsApp">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <span className="font-sans font-bold text-sm text-[#070019] tracking-tight">
                WhatsApp
              </span>
            </div>
            <span className="text-[11px] text-slate-500 mt-1 font-normal">
              Notificaciones Directas
            </span>
          </div>

          {/* 6. Andreani */}
          <div className="py-5 px-4 flex flex-col items-center justify-center text-center group hover:bg-[#fbfaff] transition-colors">
            <div className="flex items-center gap-1.5 h-7">
              <div className="w-6 h-6 rounded-lg bg-[#e30613] flex items-center justify-center p-1 text-white shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-label="Andreani">
                  <path d="M12 2L2 22h5l2.5-5h5l2.5 5h5L12 2zm-1.2 12l1.2-2.5 1.2 2.5h-2.4z" />
                </svg>
              </div>
              <span className="font-sans font-bold text-sm text-[#e30613] tracking-tight">
                Andreani
              </span>
            </div>
            <span className="text-[11px] text-slate-500 mt-1 font-normal">
              Envíos &amp; Guías 24h
            </span>
          </div>
        </div>
      </div>

      {/* Metrics Row (Exact Recal Style with elegant vertical dividers) */}
      <div className="pt-16 sm:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
          {metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`flex flex-col py-6 sm:py-4 lg:py-0 ${
                idx === 0
                  ? "lg:pr-8"
                  : idx === metrics.length - 1
                  ? "lg:pl-8"
                  : "lg:px-8"
              }`}
            >
              <div className="text-6xl sm:text-7xl font-medium tracking-tight text-[#070019] leading-none">
                {metric.value}
              </div>
              <div className="text-base font-semibold text-[#070019] mt-3">
                {metric.label}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

