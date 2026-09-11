"use client";

import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function PricingCalculator() {
  // Monthly sales in ARS (default 12 million)
  const [monthlySales, setMonthlySales] = useState<number>(12000000);

  // Average platform transaction commission (2.5%)
  const commissionRate = 0.025;
  const monthlyCommission = Math.round(monthlySales * commissionRate);
  const yearlyCommission = monthlyCommission * 12;

  // Monthly app subscriptions cost in ARS (~$65 USD)
  const monthlyApps = 80000;
  const yearlyApps = monthlyApps * 12;

  // Total annual savings with GiorgIT
  const totalYearlySavings = yearlyCommission + yearlyApps;

  const plans = [
    {
      id: "starter",
      name: "Starter Store",
      tagline: "Para marcas en lanzamiento que buscan profesionalismo inmediato y 0% comisiones.",
      price: "$890.000",
      period: "pago único de desarrollo",
      highlight: false,
      features: [
        "Diseño a medida responsivo (Mobile First)",
        "Catálogo ultrarrápido con filtros instantáneos",
        "Checkout de 1 solo paso optimizado",
        "Pasarela Mercado Pago & Transferencia con 10% OFF",
        "WhatsApp Direct Buy integrado",
        "Panel de administración intuitivo",
        "SEO técnico inicial y Google Analytics 4",
        "0% comisiones sobre tus ventas de por vida",
      ],
      ctaText: "Elegir Starter",
    },
    {
      id: "growth",
      name: "Growth Scale",
      tagline: "Nuestra solución estrella para marcas que facturan y buscan maximizar conversión.",
      price: "$1.590.000",
      period: "pago único de desarrollo",
      highlight: true,
      popularBadge: "Más Elegido",
      features: [
        "Todo lo de Starter Store +",
        "Arquitectura Next.js 15 Server Components",
        "Mercado Pago nativo en cuotas + Stripe internacional",
        "Cálculo dinámico de envíos Andreani / Correo Argentino",
        "Recuperación automática de carritos abandonados",
        "Búsqueda predictiva y filtros facetados en < 15ms",
        "Multi-variantes de talles, colores y stock por depósito",
        "Garantía Core Web Vitals 95-100 en Google Lighthouse",
        "30 días de soporte prioritario post-lanzamiento",
      ],
      ctaText: "Elegir Growth Scale",
    },
    {
      id: "enterprise",
      name: "Enterprise Headless",
      tagline: "Infraestructura a medida para marcas de gran escala, mayoristas o retail omnicanal.",
      price: "A Medida",
      period: "según requerimientos técnicos",
      highlight: false,
      features: [
        "Todo lo de Growth Scale +",
        "Desarrollo Headless a medida con microservicios Edge",
        "Sincronización bidireccional con ERP (Tango, SAP, Bejerman)",
        "Múltiples listas de precios (B2B Mayorista + B2C Minorista)",
        "Caché distribuido global y balanceo de carga para picos masivos",
        "SLA de disponibilidad 99.99% y soporte técnico 24/7",
        "Auditoría técnica de seguridad y tokenización avanzada",
      ],
      ctaText: "Consultar Enterprise",
    },
  ];

  return (
    <section id="planes" className="w-full bg-white text-[#070019] py-12">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#070019] leading-tight">
          Inversión transparente sin comisiones por venta
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Pagas una única vez por el desarrollo de tu plataforma. Sin cargos ocultos, sin comisiones por transacción y con retorno rápido garantizado.
        </p>
      </div>

      {/* Interactive Savings Calculator */}
      <div className="rounded-2xl p-6 sm:p-8 bg-[#fbfaff] border border-slate-200/90 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Slider Column */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Simulador de Ahorro
            </span>
            <h3 className="text-xl sm:text-2xl font-medium text-[#070019] tracking-tight">
              ¿Cuánto dinero pierdes en comisiones y apps cada año?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
              Mueve el selector según la facturación mensual bruta estimada de tu tienda:
            </p>

            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold text-slate-700">Facturación Mensual:</span>
                <span className="text-2xl sm:text-3xl font-bold text-[#070019] font-sans">
                  {formatCurrency(monthlySales)}
                </span>
              </div>

              <input
                type="range"
                min={2000000}
                max={40000000}
                step={500000}
                value={monthlySales}
                onChange={(e) => setMonthlySales(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#6f3cff]"
              />

              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>$2.000.000 / mes</span>
                <span>$20.000.000 / mes</span>
                <span>$40.000.000 / mes</span>
              </div>
            </div>
          </div>

          {/* Savings Result Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Ahorro Estimado el Primer Año
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#6f3cff] tracking-tight">
              {formatCurrency(totalYearlySavings)}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Dinero que retendrás en tu negocio en lugar de pagarlo a plataformas en comisiones y apps.
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Comisión anual que dejas de regalar:</span>
                <strong className="text-[#070019]">{formatCurrency(yearlyCommission)}</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Apps mensuales ahorradas:</span>
                <strong className="text-[#070019]">{formatCurrency(yearlyApps)}</strong>
              </div>
              <div className="flex justify-between text-emerald-700 font-medium pt-1">
                <span>Comisión con GiorgIT:</span>
                <span>$0 (0%)</span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-[#f5f1ff] border border-[#6f3cff]/20 text-[11px] text-slate-700">
              💡 Tu tienda GiorgIT se amortiza por completo en menos de <strong>3 a 4 meses</strong> solo con el ahorro de comisiones.
            </div>
          </div>
        </div>
      </div>

      {/* Transparent Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
              plan.highlight
                ? "bg-[#fbfaff] border-2 border-[#6f3cff] shadow-lg shadow-[#6f3cff]/10 relative"
                : "bg-[#fbfaff] border border-slate-200/90 hover:border-slate-300"
            }`}
          >
            {plan.popularBadge && (
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[11px] font-semibold bg-[#6f3cff] text-white shadow-sm">
                {plan.popularBadge}
              </div>
            )}

            <div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-[#070019]">{plan.name}</h3>
              </div>

              <p className="text-xs text-slate-600 min-h-[36px] leading-relaxed mb-6">
                {plan.tagline}
              </p>

              <div className="mb-6 pb-6 border-b border-slate-200/80">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#070019] tracking-tight">
                  {plan.price}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  {plan.period}
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contacto"
              className={`w-full py-3 px-4 rounded-full text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 cursor-pointer ${
                plan.highlight
                  ? "bg-[#6f3cff] hover:bg-[#5f2bee] text-white shadow-md shadow-[#6f3cff]/20"
                  : "bg-[#070019] hover:bg-slate-800 text-white"
              }`}
            >
              <span>{plan.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
