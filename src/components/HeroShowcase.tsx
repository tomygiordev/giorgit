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
  Search,
  Menu,
  Heart,
  Star,
  ArrowRight,
  Check,
  TrendingUp,
  Zap,
} from "lucide-react";

type TabKey = "storefront" | "checkout" | "metrics" | "code";

function SketchLine({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-full bg-slate-200/90 ${className}`}
    />
  );
}

function ProductArtwork({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-[linear-gradient(145deg,#f2efff_0%,#e9e4fb_46%,#d7cdf8_100%)] ${compact ? "h-full rounded-[18px]" : "min-h-[260px] sm:min-h-[330px] rounded-[24px]"}`}>
      <div className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-white/55 blur-2xl" />
      <div className="absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-[#8e6cff]/25 blur-2xl" />
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-11deg] bg-[linear-gradient(145deg,#201547,#7655df)] shadow-[0_28px_45px_-18px_rgba(42,22,96,.65)] ${compact ? "h-[68%] w-[42%] rounded-[16px]" : "h-[62%] w-[42%] rounded-[28px]"}`}>
        <div className="absolute inset-[7%] rounded-[inherit] border border-white/20" />
        <div className="absolute left-1/2 top-[14%] h-[18%] w-[26%] -translate-x-1/2 rounded-full bg-white/15" />
        <div className="absolute bottom-[15%] left-1/2 h-1.5 w-[44%] -translate-x-1/2 rounded-full bg-white/25" />
      </div>
      {!compact && (
        <>
          <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/65 px-3 py-1 text-[10px] font-semibold text-[#5f43bd] shadow-sm backdrop-blur">NEW</span>
          <button aria-label="Guardar producto" className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-white/70 text-[#4e4267] shadow-sm backdrop-blur">
            <Heart className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
}

function StorefrontSketch() {
  return (
    <div className="bg-[#fbfbfd] p-4 sm:p-6 lg:p-7">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-7">
          <div className="text-sm font-black tracking-[-.04em] text-[#19102e]">nóva</div>
          <div className="hidden items-center gap-4 sm:flex"><SketchLine className="h-1.5 w-12" /><SketchLine className="h-1.5 w-9" /><SketchLine className="h-1.5 w-14" /></div>
        </div>
        <div className="flex items-center gap-2 text-slate-500"><Search className="h-4 w-4" /><Heart className="h-4 w-4" /><Menu className="h-4 w-4" /></div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.18fr_.82fr]">
        <ProductArtwork />
        <div className="flex flex-col justify-center rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_45px_-36px_rgba(39,23,78,.55)] sm:p-7">
          <div className="mb-4 flex items-center gap-1 text-[#6f3cff]"><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /></div>
          <SketchLine className="mb-3 h-3 w-3/4 bg-[#211637]" />
          <SketchLine className="mb-7 h-3 w-1/2 bg-[#211637]" />
          <div className="mb-6 flex items-end gap-3"><SketchLine className="h-5 w-24 bg-[#6f3cff]" /><SketchLine className="mb-1 h-2 w-12" /></div>
          <div className="mb-6 flex gap-2">
            {["bg-[#211637]", "bg-[#c7b8f4]", "bg-[#f1c9aa]", "bg-[#e8e8ea]"].map((color) => <span key={color} className={`h-7 w-7 rounded-full border-4 border-white shadow-[0_0_0_1px_#ddd] ${color}`} />)}
          </div>
          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#171025] text-xs font-semibold text-white shadow-[0_12px_24px_-12px_rgba(23,16,37,.8)]">Agregar al carrito <ArrowRight className="h-3.5 w-3.5" /></button>
          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-medium text-slate-400"><Check className="h-3 w-3 text-emerald-500" /> Envío rápido · Cambios simples</div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-5">
        {[0, 1, 2, 3, 4].map((item) => <div key={item} className={`${item > 2 ? "hidden sm:block" : ""} h-16 overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-2`}><ProductArtwork compact /></div>)}
      </div>
    </div>
  );
}

function CheckoutSketch() {
  return (
    <div className="grid min-h-[430px] gap-5 bg-[#f7f7fb] p-5 sm:p-7 lg:grid-cols-[1fr_.78fr]">
      <div className="rounded-[24px] border border-slate-200/80 bg-white p-5 sm:p-7">
        <div className="mb-7 flex items-center justify-between"><SketchLine className="h-3 w-24 bg-[#211637]" /><span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold text-emerald-600">Seguro</span></div>
        <div className="mb-5 grid grid-cols-2 gap-3"><div className="h-12 rounded-xl border border-[#6f3cff]/35 bg-[#f7f4ff]" /><div className="h-12 rounded-xl border border-slate-200 bg-slate-50" /></div>
        <div className="space-y-3"><div className="h-12 rounded-xl border border-slate-200 bg-slate-50" /><div className="grid grid-cols-2 gap-3"><div className="h-12 rounded-xl border border-slate-200 bg-slate-50" /><div className="h-12 rounded-xl border border-slate-200 bg-slate-50" /></div><div className="h-12 rounded-xl border border-slate-200 bg-slate-50" /></div>
        <button className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#6f3cff] text-xs font-semibold text-white shadow-[0_14px_28px_-14px_rgba(111,60,255,.75)]"><Zap className="h-3.5 w-3.5 fill-current" /> Completar compra</button>
      </div>
      <div className="flex flex-col rounded-[24px] bg-[#171025] p-5 text-white sm:p-7">
        <SketchLine className="mb-6 h-2.5 w-28 bg-white/75" />
        <div className="flex gap-4 border-b border-white/10 pb-6"><div className="h-24 w-20 shrink-0"><ProductArtwork compact /></div><div className="flex flex-1 flex-col justify-center gap-3"><SketchLine className="h-2.5 w-4/5 bg-white/80" /><SketchLine className="h-2 w-1/2 bg-white/25" /><SketchLine className="h-3 w-16 bg-[#a98dff]" /></div></div>
        <div className="mt-auto space-y-4 pt-7"><div className="flex justify-between"><SketchLine className="h-2 w-20 bg-white/25" /><SketchLine className="h-2 w-12 bg-white/55" /></div><div className="flex justify-between"><SketchLine className="h-2 w-16 bg-white/25" /><SketchLine className="h-2 w-14 bg-white/55" /></div><div className="flex justify-between border-t border-white/10 pt-5"><SketchLine className="h-3 w-14 bg-white/80" /><SketchLine className="h-4 w-20 bg-white" /></div></div>
      </div>
    </div>
  );
}

function MetricsSketch() {
  const bars = [42, 58, 48, 76, 66, 88, 72, 94, 84, 100];
  return (
    <div className="min-h-[430px] bg-[#f7f7fb] p-5 sm:p-7">
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {["+18.4%", "+32%", "2.8×", "0.38s"].map((value, index) => <div key={value} className="rounded-2xl border border-slate-200/80 bg-white p-4"><div className="mb-4 flex items-center justify-between"><SketchLine className="h-2 w-14" />{index === 0 && <TrendingUp className="h-4 w-4 text-emerald-500" />}</div><div className="text-xl font-semibold tracking-[-.04em] text-[#211637]">{value}</div></div>)}
      </div>
      <div className="grid gap-3 lg:grid-cols-[1.45fr_.55fr]">
        <div className="rounded-[24px] border border-slate-200/80 bg-white p-5 sm:p-6"><div className="mb-8 flex items-center justify-between"><div><SketchLine className="mb-2 h-2.5 w-28 bg-[#211637]" /><SketchLine className="h-2 w-16" /></div><span className="rounded-full bg-[#f5f1ff] px-3 py-1 text-[10px] text-[#6f3cff]">Últimos 30 días</span></div><div className="flex h-48 items-end gap-2 sm:gap-3">{bars.map((height, i) => <div key={i} className="group flex h-full flex-1 items-end rounded-full bg-slate-100"><div className="w-full rounded-full bg-[linear-gradient(180deg,#9b7cff,#6f3cff)] transition-all group-hover:bg-[#171025]" style={{ height: `${height}%` }} /></div>)}</div></div>
        <div className="rounded-[24px] bg-[#211637] p-5 text-white sm:p-6"><SketchLine className="mb-8 h-2.5 w-24 bg-white/75" /><div className="mx-auto grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(#8b68ff_0_72%,#ffffff18_72%)]"><div className="grid h-24 w-24 place-items-center rounded-full bg-[#211637]"><span className="text-2xl font-semibold">72%</span></div></div><div className="mt-8 space-y-3"><SketchLine className="h-2 w-full bg-white/20" /><SketchLine className="h-2 w-4/5 bg-white/20" /><SketchLine className="h-2 w-2/3 bg-white/20" /></div></div>
      </div>
    </div>
  );
}

function CodeSketch() {
  const lines = ["const store = await nova.create({", "  theme: 'midnight',", "  checkout: 'instant',", "  edge: true", "});", "", "await store.publish();"];
  return (
    <div className="grid min-h-[430px] gap-4 bg-[#f4f2f8] p-5 sm:p-7 lg:grid-cols-[.72fr_1.28fr]">
      <div className="rounded-[24px] border border-slate-200/80 bg-white p-5"><div className="mb-7 grid h-10 w-10 place-items-center rounded-xl bg-[#6f3cff] text-white"><Code2 className="h-5 w-5" /></div><SketchLine className="mb-3 h-3 w-4/5 bg-[#211637]" /><SketchLine className="mb-8 h-2 w-3/5" /><div className="space-y-3">{[1,2,3].map((i) => <div key={i} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><span className="grid h-6 w-6 place-items-center rounded-lg bg-[#eee8ff] text-[10px] font-bold text-[#6f3cff]">{i}</span><SketchLine className={`h-2 ${i === 2 ? "w-2/3" : "w-4/5"}`} /></div>)}</div></div>
      <div className="overflow-hidden rounded-[24px] bg-[#130d20] shadow-[0_24px_50px_-28px_rgba(19,13,32,.8)]"><div className="flex items-center gap-2 border-b border-white/10 px-5 py-3"><span className="h-2.5 w-2.5 rounded-full bg-[#ff6b67]" /><span className="h-2.5 w-2.5 rounded-full bg-[#ffc44c]" /><span className="h-2.5 w-2.5 rounded-full bg-[#45d483]" /><span className="ml-auto text-[10px] text-white/30">store.ts</span></div><pre className="overflow-x-auto p-5 text-[11px] leading-7 text-[#bfaeff] sm:p-7 sm:text-xs"><code>{lines.map((line, index) => <div key={index}><span className="mr-5 inline-block w-4 select-none text-right text-white/20">{index + 1}</span><span className={index === 0 || index === 6 ? "text-[#cbbcff]" : index === 3 ? "text-[#70e1b0]" : "text-white/70"}>{line || " "}</span></div>)}</code></pre><div className="mx-5 mb-5 flex items-center gap-2 rounded-xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-3 text-[10px] text-emerald-300 sm:mx-7"><Check className="h-3.5 w-3.5" /> Deploy listo en 0.38s</div></div>
    </div>
  );
}

function EcommerceWireframe({ tab }: { tab: TabKey }) {
  const panels: Record<TabKey, React.ReactNode> = {
    storefront: <StorefrontSketch />,
    checkout: <CheckoutSketch />,
    metrics: <MetricsSketch />,
    code: <CodeSketch />,
  };

  return (
    <div key={tab} className="text-[#070019]">{panels[tab]}</div>
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
