"use client";

import React, { useState } from "react";
import { PLANS_DATA } from "@/data/content";
import { Check, Sparkles, ArrowRight, Calculator, Zap, Shield, TrendingUp } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Props {
  onSelectPlan?: (planId: string) => void;
}

export default function PricingCalculator({ onSelectPlan }: Props) {
  // Monthly sales in ARS (default 10 million)
  const [monthlySales, setMonthlySales] = useState<number>(10000000);

  // Platform commission average (2.5%)
  const commissionRate = 0.025;
  const monthlyCommissionWasted = Math.round(monthlySales * commissionRate);
  const yearlyCommissionWasted = monthlyCommissionWasted * 12;

  // App subscription costs in USD converted to ARS roughly (~$60 USD/mo)
  const monthlyAppsWasted = 75000;
  const yearlyAppsWasted = monthlyAppsWasted * 12;

  const totalYearlyLoss = yearlyCommissionWasted + yearlyAppsWasted;

  const handlePlanClick = (planId: string) => {
    if (onSelectPlan) {
      onSelectPlan(planId);
    }
    const el = document.getElementById("contacto");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="planes" className="py-24 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
            Inversión Transparente & Retorno Rápido
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Planes Diseñados para{" "}
            <span className="font-serif italic font-normal text-violet-300">
              Escalar sin Límites
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Sin cargos ocultos ni sorpresas a fin de mes. Pagas una única vez por el desarrollo de tu plataforma y todo lo que vendas es 100% tuyo.
          </p>
        </div>

        {/* Interactive Commission Savings Calculator */}
        <div id="calculadora" className="mb-20 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-violet-950/30 via-[#0a0d24] to-[#070817] border border-violet-500/25 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Slider & explanation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="p-2.5 rounded-xl bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  <Calculator className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-violet-300 font-semibold uppercase tracking-wider">
                  Calculadora de Ahorro Real
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  ¿Cuánto dinero pierdes en comisiones de plataformas tradicionales?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Mueve el control deslizable según la facturación bruta estimada de tu negocio para comprobar cuánto dinero se llevan Shopify o TiendaNube mes a mes:
                </p>
              </div>

              {/* Slider Control */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Facturación mensual estimada:</span>
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">
                    {formatCurrency(monthlySales)}
                  </span>
                </div>

                <input
                  type="range"
                  min={2000000}
                  max={30000000}
                  step={500000}
                  value={monthlySales}
                  onChange={(e) => setMonthlySales(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-violet-500"
                />

                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>$2.000.000 ARS</span>
                  <span>$15.000.000 ARS</span>
                  <span>$30.000.000+ ARS</span>
                </div>
              </div>
            </div>

            {/* Right Column: Savings Counter Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-md flex flex-col justify-between space-y-4">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Impacto Financiero Anual
              </span>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Comisión por venta (2.5% anual):</span>
                  <span className="text-rose-400 font-bold font-mono">
                    -{formatCurrency(yearlyCommissionWasted)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs pb-2 border-b border-white/[0.06]">
                  <span className="text-slate-400">Apps extras requeridas (anual):</span>
                  <span className="text-rose-400 font-bold font-mono">
                    -{formatCurrency(yearlyAppsWasted)}
                  </span>
                </div>

                <div className="pt-2">
                  <span className="text-xs text-slate-300">Con GiorgIT ahorras anualmente:</span>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight font-mono mt-1">
                    {formatCurrency(totalYearlyLoss)}
                  </div>
                  <span className="text-[11px] text-emerald-300/80 mt-0.5 block">
                    ✨ 100% de ganancias netas que vuelven a tu bolsillo.
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="#contacto"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
                >
                  <TrendingUp className="w-4 h-4" />
                  Quiero Dejar de Pagar Comisiones
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS_DATA.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? "bg-gradient-to-b from-violet-950/40 via-[#0d1028] to-[#070817] border-2 border-violet-500/60 shadow-2xl shadow-violet-900/30 scale-100 lg:-translate-y-3"
                  : "bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08]"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/40">
                  {plan.badge}
                </span>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                  <p className="text-xs text-slate-300 mt-2 min-h-[36px]">{plan.tagline}</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-6">
                  <div className="text-2xl sm:text-3xl font-black text-white font-sans">
                    {plan.price}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{plan.period}</div>
                  <div className="text-[11px] text-violet-300 font-semibold mt-1">
                    {plan.targetAudience}
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                    ¿Qué incluye tu tienda?
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/[0.08]">
                <button
                  onClick={() => handlePlanClick(plan.id)}
                  className={`w-full py-3.5 px-5 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-white text-slate-950 hover:bg-slate-100 shadow-xl shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
