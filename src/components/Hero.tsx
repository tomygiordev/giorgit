"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Play, Shield, Zap, CheckCircle2 } from "lucide-react";
import HeroShowcase from "./HeroShowcase";

export default function Hero() {
  return (
    <section id="solucion" className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Cosmic background with ethereal bottom clouds / fade */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* The generated high-res hero background image */}
        <div className="absolute inset-0 w-full h-[115%]">
          <Image
            src="/images/hero-bg.jpg"
            alt="GiorgIT Ecommerce Cosmos Universe"
            fill
            priority
            className="object-cover object-top opacity-85"
            quality={90}
          />
        </div>

        {/* Ambient Dark Overlays for maximum text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060713]/70 via-[#060713]/50 to-[#060713]" />

        {/* Radial glow around focal headline */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/20 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-indigo-500/15 blur-[90px] rounded-full" />

        {/* Smooth bottom transition to dark page background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#060713] via-[#060713]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Center Headline & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Recal-style sleek announcement pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.12] backdrop-blur-md mb-6 hover:bg-white/[0.08] transition-all cursor-pointer shadow-lg shadow-violet-950/40 group">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
            </span>
            <span className="text-xs font-medium text-slate-200 tracking-wide">
              Nueva Generación Ecommerce 2026
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs font-semibold text-violet-300 group-hover:text-violet-200 transition-colors flex items-center gap-1">
              0% Comisiones por venta
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>

          {/* Main Headline with Instrument Serif Italic Accent */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] sm:leading-[1.05]">
            <span className="block">Impulsa tus Ventas Online</span>
            <span className="block my-1 sm:my-2 font-serif italic font-normal text-violet-300 drop-shadow-[0_2px_20px_rgba(167,139,250,0.3)]">
              Plataformas de Ecommerce
            </span>
            <span className="block text-slate-100">Listas para Escalar</span>
          </h1>

          {/* Subtitle explaining the solution */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
            Tiendas online a medida, ultrarrápidas, con checkout sin fricción, pagos locales (Mercado Pago, Stripe) y sin pagar comisiones abusivas por venta.
          </p>

          {/* Recal-inspired Pill Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary Sleek Pill Button with circular icon badge */}
            <a
              href="#contacto"
              className="group relative inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-violet-500/20 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            >
              <span className="tracking-tight font-sans">Lanzar mi Tienda Online</span>
              <span className="w-9 h-9 rounded-full bg-violet-600 text-white flex items-center justify-center group-hover:bg-violet-700 transition-colors shadow-sm">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>

            {/* Secondary Glass Pill Button */}
            <a
              href="#showcase"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] backdrop-blur-md text-white font-medium text-sm transition-all duration-300 w-full sm:w-auto"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>Ver Demo Interactiva</span>
            </a>
          </div>

          {/* Trust bullets */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Sin comisiones porcentuales
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Código y base de datos 100% tuya
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Lanzamiento en 15 a 20 días
            </span>
          </div>

        </div>

        {/* Hero Interactive Showcase directly beneath CTA */}
        <HeroShowcase />
      </div>
    </section>
  );
}
