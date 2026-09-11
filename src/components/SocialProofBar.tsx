"use client";

import React from "react";
import { METRICS_DATA } from "@/data/content";
import { TrendingUp, Zap, ShieldCheck, Coins, CheckCircle, ArrowUpRight } from "lucide-react";

export default function SocialProofBar() {
  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-5 h-5 text-violet-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    Coins: <Coins className="w-5 h-5 text-cyan-400" />,
  };

  const integrations = [
    { name: "Mercado Pago", desc: "Checkout Pro & API v2" },
    { name: "Stripe", desc: "Cobros Globales USD" },
    { name: "WhatsApp Business", desc: "1-Click Direct Buy" },
    { name: "Andreani", desc: "Envíos & Tracking" },
    { name: "Correo Argentino", desc: "Cobertura Nacional" },
    { name: "Next.js Edge", desc: "Infraestructura Global" },
    { name: "Meta Pixel & CAPI", desc: "Conversiones Server-side" },
    { name: "Google Analytics 4", desc: "Eventos Ecommerce" },
  ];

  return (
    <section className="relative py-16 border-y border-white/[0.08] bg-[#080918]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section subtitle */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
            Resultados Comprobados de Ingeniería
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Métricas que impactan directamente en tu rentabilidad
          </h2>
        </div>

        {/* 4 Large Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS_DATA.map((metric) => (
            <div
              key={metric.label}
              className="relative p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 group shadow-lg shadow-black/20"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {iconMap[metric.iconName]}
                </div>
                {metric.trend && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30">
                    {metric.trend}
                  </span>
                )}
              </div>

              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {metric.value}
              </div>

              <div className="text-sm font-bold text-slate-200 mt-1">
                {metric.label}
              </div>

              <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                {metric.sublabel}
              </div>

              <div className="absolute inset-x-6 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Integration Strip */}
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <div className="text-center text-xs font-medium text-slate-400 mb-6">
            Ecosistema de integraciones nativas sin necesidad de instalar 20 apps de pago mensual:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {integrations.map((item) => (
              <div
                key={item.name}
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center hover:bg-white/[0.05] hover:border-white/10 transition-all"
              >
                <div className="text-xs font-bold text-slate-200 truncate">{item.name}</div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
