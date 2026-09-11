"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Sparkles, Receipt, Calculator, ShieldCheck } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function PricingCalculator() {
  // Monthly sales in ARS (default 15 million)
  const [monthlySales, setMonthlySales] = useState<number>(15000000);

  // Preset pill values
  const presets = [
    { label: "$5M / mes", value: 5000000 },
    { label: "$15M / mes", value: 15000000 },
    { label: "$30M / mes", value: 30000000 },
    { label: "$60M / mes", value: 60000000 },
  ];

  // Average legacy platform transaction commission (2.0%)
  const commissionRate = 0.02;
  const monthlyCommission = Math.round(monthlySales * commissionRate);
  const yearlyCommission = monthlyCommission * 12;

  // Monthly legacy apps & plugins cost (~$75 USD = ~95.000 ARS)
  const monthlyApps = 95000;
  const yearlyApps = monthlyApps * 12;

  // Total annual savings retained with GiorgIT
  const totalYearlySavings = yearlyCommission + yearlyApps;
  const totalMonthlySavings = monthlyCommission + monthlyApps;

  // Amortization of Growth Scale Plan ($1.590.000 ARS)
  const growthPrice = 1590000;
  const monthsToAmortize = Math.max(
    0.8,
    Math.round((growthPrice / totalMonthlySavings) * 10) / 10
  );

  const plans = [
    {
      id: "starter",
      name: "Starter Store",
      tagline: "Para marcas en lanzamiento que buscan diseño de autor, velocidad extrema y 0% comisiones.",
      price: "$890.000",
      period: "pago único de desarrollo",
      highlight: false,
      features: [
        "Diseño editorial a medida responsivo (Mobile First)",
        "Catálogo instantáneo con filtros rápidos",
        "Checkout optimizado de 1 solo paso",
        "Pasarela Mercado Pago & Transferencia con 10% OFF",
        "WhatsApp Direct Buy (pedidos directos a chat)",
        "Panel de administración intuitivo",
        "SEO técnico inicial y Google Analytics 4",
        "0% comisiones sobre tus ventas de por vida",
        "Propiedad 100% de código y datos en tu GitHub",
      ],
      ctaText: "Elegir Starter Store",
    },
    {
      id: "growth",
      name: "Growth Scale",
      tagline: "Nuestra plataforma insignia para marcas que facturan y buscan maximizar conversión neta.",
      price: "$1.590.000",
      period: "pago único de desarrollo",
      highlight: true,
      popularBadge: "Más Elegido",
      features: [
        "Todo lo incluido en Starter Store +",
        "Arquitectura Next.js 15 React Server Components",
        "Mercado Pago nativo en cuotas + Stripe internacional",
        "Cálculo automático de envíos Andreani y Correo por CP",
        "Recuperación activa de carritos vía WhatsApp Cloud",
        "Búsqueda predictiva y filtros facetados en < 15ms",
        "Multi-variantes de talles, colores y stock por depósito",
        "Garantía Core Web Vitals 100/100 en Google Lighthouse",
        "30 días de soporte técnico prioritario post-lanzamiento",
      ],
      ctaText: "Elegir Growth Scale",
    },
    {
      id: "enterprise",
      name: "Enterprise Headless",
      tagline: "Infraestructura a medida para marcas de gran escala, mayoristas B2B/B2C o retail omnicanal.",
      price: "A Medida",
      period: "según requerimientos técnicos",
      highlight: false,
      features: [
        "Todo lo incluido en Growth Scale +",
        "Desarrollo Headless a medida con microservicios Edge",
        "Sincronización bidireccional con ERP (Tango, SAP, Bejerman)",
        "Múltiples listas de precios (B2B Mayorista + B2C Minorista)",
        "Caché distribuido global Anycast para picos de HotSale",
        "Pruebas de estrés para +150.000 usuarios concurrentes",
        "SLA de disponibilidad 99.99% y soporte técnico 24/7",
        "Tokenización PCI-DSS Nivel 1 y auditoría de seguridad",
      ],
      ctaText: "Consultar Enterprise",
    },
  ];

  return (
    <section id="planes" className="w-full bg-white text-[#070019] py-8 sm:py-12">
      {/* Section Header with Typography Duet */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6f3cff]" />
          <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-slate-500">
            // SIMULADOR DE INVERSIÓN &amp; RETORNO
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#070019] leading-[1.1]">
          Tu Inversión se Paga Sola{" "}
          <span className="font-serif italic font-normal text-violet-700">
            Calculá tu Ahorro Real
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Pagas una única vez por la ingeniería de tu plataforma. Sin peajes por venta, sin comisiones arbitrarias y con retorno de inversión garantizado en meses.
        </p>
      </div>

      {/* High-Impact Interactive Commission Savings Calculator */}
      <div className="relative rounded-2xl p-6 sm:p-8 md:p-10 bg-[#fafbff] border border-slate-200/90 mb-16 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
        {/* Subtle technical corner '+' registration marks */}
        <span className="absolute -top-2 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
        <span className="absolute -top-2 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
        <span className="absolute -bottom-2 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
        <span className="absolute -bottom-2 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Slider & Presets Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                PARÁMETROS DE FACTURACIÓN
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#070019] tracking-tight">
                ¿Cuánto dinero regalas en comisiones cada año?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Ajusta el control deslizante según la facturación bruta mensual estimada de tu tienda:
              </p>
            </div>

            {/* Quick Preset Buttons */}
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                Accesos rápidos:
              </span>
              <div className="flex flex-wrap gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => setMonthlySales(preset.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      monthlySales === preset.value
                        ? "bg-[#070019] text-white font-bold shadow-xs"
                        : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Interactive Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold text-slate-600">Facturación Mensual Bruta:</span>
                <span className="text-2xl sm:text-4xl font-bold text-[#070019] font-sans tracking-tight">
                  {formatCurrency(monthlySales)}
                </span>
              </div>

              <input
                type="range"
                min={2000000}
                max={80000000}
                step={1000000}
                value={monthlySales}
                onChange={(e) => setMonthlySales(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#6f3cff]"
              />

              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>$2M / mes</span>
                <span>$40M / mes</span>
                <span>$80M / mes</span>
              </div>
            </div>

            {/* Comparative Telemetry Callout */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#6f3cff] flex-shrink-0" />
                <span>Cálculo basado en 2.0% comisiones Shopify/TiendaNube + apps esenciales.</span>
              </div>
              <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                GiorgIT = $0 / mes
              </span>
            </div>
          </div>

          {/* Dynamic 'Comprobante de Ahorro GiorgIT' (Visual Receipt) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm relative overflow-hidden">
            {/* Top receipt accent strip */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#6f3cff] via-violet-400 to-[#6f3cff]" />

            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <Receipt className="w-4 h-4 text-[#6f3cff]" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-slate-800 uppercase">
                  COMPROBANTE DE AHORRO // GIORGIT
                </span>
              </div>
              <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
                AUDITORÍA VÁLIDA
              </span>
            </div>

            <div className="mb-4">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                Ahorro Total Retenido en Tu Negocio / Año:
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#6f3cff] tracking-tight">
                +{formatCurrency(totalYearlySavings)}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Capital neto que conservas en tu cuenta en lugar de transferirlo a plataformas.
              </div>
            </div>

            {/* Perforated dashed divider */}
            <div className="border-t border-dashed border-slate-200 my-4" />

            {/* Receipt Line Items */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Comisiones que dejas de regalar (2%/año):</span>
                <span className="font-mono font-bold text-rose-700">-{formatCurrency(yearlyCommission)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Apps y plugins obligatorios ahorrados:</span>
                <span className="font-mono font-bold text-rose-700">-{formatCurrency(yearlyApps)}</span>
              </div>
              <div className="flex justify-between text-slate-800 pt-1 border-t border-slate-100 font-semibold">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Comisión retenida por GiorgIT:</span>
                </span>
                <span className="font-mono text-emerald-700 font-bold">$0 (0%)</span>
              </div>
            </div>

            {/* ROI Amortization Message Box */}
            <div className="mt-5 p-3.5 rounded-xl bg-[#f5f1ff] border border-[#6f3cff]/20 text-xs text-slate-800 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-[#6f3cff]">
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Retorno de Inversión (ROI Acelerado):</span>
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
                Tu plataforma <strong>Growth Scale</strong> se amortiza por completo en solo{" "}
                <strong className="text-[#070019] bg-white px-1.5 py-0.5 rounded font-mono border border-[#6f3cff]/30">
                  {monthsToAmortize} meses
                </strong>{" "}
                únicamente con el ahorro de comisiones que dejas de pagar a intermediarios.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Architectural Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
              plan.highlight
                ? "bg-[#fafbff] border-2 border-[#6f3cff] shadow-lg shadow-[#6f3cff]/10"
                : "bg-[#fafbff] border border-slate-200/90 hover:border-slate-300 shadow-2xs"
            }`}
          >
            {plan.popularBadge && (
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[11px] font-semibold bg-[#6f3cff] text-white shadow-xs font-mono uppercase tracking-wider">
                {plan.popularBadge}
              </div>
            )}

            <div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-[#070019]">{plan.name}</h3>
              </div>

              <p className="text-xs text-slate-600 min-h-[40px] leading-relaxed mb-6">
                {plan.tagline}
              </p>

              <div className="mb-6 pb-6 border-b border-slate-200/80">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#070019] tracking-tight">
                  {plan.price}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-mono">
                  {plan.period}
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
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
              className={`w-full py-3 px-5 rounded-full text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 cursor-pointer ${
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
