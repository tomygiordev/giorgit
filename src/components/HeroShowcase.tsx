"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  CreditCard,
  BarChart3,
  Code2,
  Lock,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
} from "lucide-react";

type TabKey = "storefront" | "checkout" | "metrics" | "code";

function WireBox({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`border-2 border-dashed border-slate-300 bg-slate-100/70 rounded-xl flex items-center justify-center text-[11px] font-mono text-slate-400 uppercase tracking-wider ${className}`}
    >
      {label ? <span className="px-2 text-center">{label}</span> : null}
    </div>
  );
}

function EcommerceWireframe({ tab }: { tab: TabKey }) {
  const titles: Record<TabKey, string> = {
    storefront: "Wireframe — Storefront",
    checkout: "Wireframe — Checkout",
    metrics: "Wireframe — Métricas",
    code: "Wireframe — API / Código",
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white text-[#070019]">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-slate-400 border border-slate-200 bg-slate-50 px-3 py-1 rounded-full">
          {titles[tab]}
        </span>
        <span className="text-[11px] font-mono text-slate-400">
          Placeholder temporal
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        {/* Left: media / content placeholder */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <WireBox className="w-full min-h-[280px] sm:min-h-[340px]" label="Imagen / Galería producto" />
          <div className="grid grid-cols-4 gap-3">
            <WireBox className="h-16 sm:h-20" label="Thumb" />
            <WireBox className="h-16 sm:h-20" label="Thumb" />
            <WireBox className="h-16 sm:h-20" label="Thumb" />
            <WireBox className="h-16 sm:h-20" label="+3" />
          </div>
        </div>

        {/* Right: purchase panel placeholder */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <WireBox className="h-6 w-2/3 !rounded-full" label="Badge" />
          <WireBox className="h-9 w-full" label="Título producto" />
          <WireBox className="h-4 w-1/2" label="Rating" />
          <WireBox className="h-20 w-full" label="Precio / Cuotas" />
          <WireBox className="h-10 w-full" label="Selector color" />
          <WireBox className="h-12 w-full" label="Selector talle" />
          <WireBox className="h-12 w-full !bg-[#070019]/5 !border-[#070019]/20" label="CTA comprar" />
          <WireBox className="h-8 w-full" label="Garantías / Envío" />
        </div>
      </div>

      {/* Bottom strip: product cards placeholder */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        <WireBox className="h-28" label="Card" />
        <WireBox className="h-28" label="Card" />
        <WireBox className="h-28 hidden md:flex" label="Card" />
        <WireBox className="h-28 hidden md:flex" label="Card" />
      </div>
    </div>
  );
}

export default function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>("storefront");

  return (
    <div
      id="showcase"
      className="w-full max-w-6xl lg:max-w-[1160px] bg-white text-slate-900 rounded-2xl sm:rounded-3xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.6),0_0_60px_rgba(111,60,255,0.22)] border border-slate-200/80 overflow-hidden relative z-20 transition-all"
    >
      {/* Authentic Browser Chrome Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 bg-[#f8f8fb] px-4 sm:px-6 py-2.5 sm:py-3 gap-2 sm:gap-4">
        {/* Left: Mac window control dots & browser nav icons */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-xs inline-block"
              title="Cerrar"
            />
            <span
              className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-xs inline-block"
              title="Minimizar"
            />
            <span
              className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-xs inline-block"
              title="Maximizar"
            />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400 pl-2">
            <span className="p-1 rounded hover:bg-slate-200/70 text-slate-400 transition-colors cursor-pointer">
              <ChevronLeft className="w-3.5 h-3.5" />
            </span>
            <span className="p-1 rounded text-slate-300">
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
            <span className="p-1 rounded hover:bg-slate-200/70 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
              <RotateCcw className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Center: Address bar pill */}
        <div className="flex items-center justify-between bg-white border border-slate-200/90 rounded-full px-3.5 py-1.5 text-xs shadow-xs w-full sm:max-w-md mx-auto">
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-700 truncate">
            <Lock className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span className="text-slate-400">https://</span>
            <span className="font-semibold text-slate-900 truncate">store.tumarca.com</span>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] font-sans font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70 flex-shrink-0 ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Online • 0.38s
          </span>
        </div>

        {/* Right: Simulated live latency & indicator */}
        <div className="hidden md:flex items-center justify-end gap-2 text-slate-500 text-xs font-medium">
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-xs">
            <Sparkles className="w-3 h-3 text-[#6f3cff]" />
            <span>Edge Engine v2.4</span>
          </span>
        </div>
      </div>

      {/* Tab Switchers Subheader Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 px-3 sm:px-6 py-2 bg-white overflow-x-auto no-scrollbar gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
          <button
            onClick={() => setActiveTab("storefront")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "storefront"
                ? "bg-[#f5f1ff] text-[#070019] shadow-xs font-semibold border border-[#6f3cff]/30"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <ShoppingBag className={`w-3.5 h-3.5 ${activeTab === "storefront" ? "text-[#6f3cff]" : "text-slate-400"}`} />
            <span>Storefront Instantáneo</span>
            {activeTab === "storefront" && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#6f3cff]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("checkout")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "checkout"
                ? "bg-[#f5f1ff] text-[#070019] shadow-xs font-semibold border border-[#6f3cff]/30"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <CreditCard className={`w-3.5 h-3.5 ${activeTab === "checkout" ? "text-[#6f3cff]" : "text-slate-400"}`} />
            <span>Checkout 1-Click</span>
            {activeTab === "checkout" && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#6f3cff]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("metrics")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "metrics"
                ? "bg-[#f5f1ff] text-[#070019] shadow-xs font-semibold border border-[#6f3cff]/30"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <BarChart3 className={`w-3.5 h-3.5 ${activeTab === "metrics" ? "text-[#6f3cff]" : "text-slate-400"}`} />
            <span>Métricas en Vivo</span>
            {activeTab === "metrics" && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#6f3cff]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "code"
                ? "bg-[#f5f1ff] text-[#070019] shadow-xs font-semibold border border-[#6f3cff]/30"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Code2 className={`w-3.5 h-3.5 ${activeTab === "code" ? "text-[#6f3cff]" : "text-slate-400"}`} />
            <span>API &amp; Código</span>
            {activeTab === "code" && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#6f3cff]" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Lighthouse 100/100</span>
        </div>
      </div>

      {/* Tab Panels — wireframe temporal */}
      <EcommerceWireframe tab={activeTab} />
    </div>
  );
}
