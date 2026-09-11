"use client";

import React, { useState } from "react";
import {
  Truck,
  RotateCcw,
  Star,
  Zap,
  Check,
  ZoomIn,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Props {
  onGoToCheckout: () => void;
}

export default function StorefrontTab({ onGoToCheckout }: Props) {
  const [selectedColor, setSelectedColor] = useState("Violet Stealth");
  const [selectedSize, setSelectedSize] = useState(41);
  const [activeAngle, setActiveAngle] = useState<"lateral" | "diagonal" | "sole">("lateral");
  const [isZoomed, setIsZoomed] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const colors = [
    {
      name: "Violet Stealth",
      bg: "bg-[#6f3cff]",
      hex: "#6f3cff",
      gradientStart: "#7c3aed",
      gradientEnd: "#1e1b4b",
      soleAccent: "#6f3cff",
    },
    {
      name: "Obsidian Black",
      bg: "bg-[#09090b]",
      hex: "#18181b",
      gradientStart: "#27272a",
      gradientEnd: "#09090b",
      soleAccent: "#71717a",
    },
    {
      name: "Ocean Cyan",
      bg: "bg-[#0ea5e9]",
      hex: "#0284c7",
      gradientStart: "#0284c7",
      gradientEnd: "#082f49",
      soleAccent: "#38bdf8",
    },
    {
      name: "Titanium Silver",
      bg: "bg-[#94a3b8]",
      hex: "#64748b",
      gradientStart: "#94a3b8",
      gradientEnd: "#334155",
      soleAccent: "#cbd5e1",
    },
  ];

  const sizes = [
    { num: 39, stock: "En stock", dot: "bg-emerald-500" },
    { num: 40, stock: "3 pares", dot: "bg-amber-500" },
    { num: 41, stock: "Último par", dot: "bg-rose-500" },
    { num: 42, stock: "En stock", dot: "bg-emerald-500" },
    { num: 43, stock: "En stock", dot: "bg-emerald-500" },
    { num: 44, stock: "2 pares", dot: "bg-amber-500" },
  ];

  const unitPrice = 145000;
  const originalPrice = 175000;
  const installmentPrice = Math.round(unitPrice / 3);
  const transferPrice = Math.round(unitPrice * 0.85);

  const currentColorObj = colors.find((c) => c.name === selectedColor) || colors[0];

  const handleInstantBuy = () => {
    setIsRedirecting(true);
    setToastMessage("⚡ Talle 41 reservado. Abriendo Checkout 1-Click en 0.38s...");
    setTimeout(() => {
      onGoToCheckout();
    }, 420);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white text-[#070019] relative">
      {/* Simulated Instant Toast Notification */}
      {toastMessage && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-[#070019] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 border border-violet-500/40 animate-bounce">
          <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left: High-end interactive product showcase */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl bg-gradient-to-b from-[#f8f7fc] via-[#f4f3fb] to-[#eceafe] border border-slate-200/90 p-5 sm:p-7 flex flex-col justify-between overflow-hidden shadow-inner min-h-[380px] sm:min-h-[420px]">
            {/* Top Badges */}
            <div className="flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                Últimas 3 unidades en stock
              </span>
              <div className="flex items-center gap-1.5">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#6f3cff] text-white shadow-xs">
                  17% OFF
                </span>
                <span className="hidden sm:inline-flex px-2 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Envío Gratis
                </span>
              </div>
            </div>

            {/* High-Res Vector Sneaker Illustration */}
            <div className="my-auto flex flex-col items-center justify-center py-4 relative">
              <div
                className={`w-full max-w-[340px] sm:max-w-[400px] aspect-[16/10] relative flex items-center justify-center transition-all duration-300 ${
                  isZoomed ? "scale-115" : "scale-100"
                }`}
              >
                <svg
                  viewBox="0 0 420 250"
                  className="w-full h-full drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)] select-none transition-all duration-500"
                >
                  <defs>
                    {/* Dynamic Shoe Gradients */}
                    <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={currentColorObj.gradientStart} />
                      <stop offset="50%" stopColor={currentColorObj.hex} />
                      <stop offset="100%" stopColor={currentColorObj.gradientEnd} />
                    </linearGradient>

                    <linearGradient id="soleMainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="60%" stopColor="#e2e8f0" />
                      <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>

                    <linearGradient id="accentFacet" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={currentColorObj.soleAccent} />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>

                    <linearGradient id="airCushion" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
                    </linearGradient>

                    {/* Ground Drop Shadow */}
                    <radialGradient id="shoeGroundShadow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(7,0,25,0.28)" />
                      <stop offset="70%" stopColor="rgba(7,0,25,0.08)" />
                      <stop offset="100%" stopColor="rgba(7,0,25,0)" />
                    </radialGradient>
                  </defs>

                  {/* Soft Realistic Contact Shadow */}
                  <ellipse cx="210" cy="225" rx="170" ry="18" fill="url(#shoeGroundShadow)" />

                  {/* SNEAKER SOLE / OUTSOLE */}
                  {/* Bottom rubber tread lugs */}
                  <path
                    d="M50 188 C90 190, 160 190, 220 192 C290 195, 340 202, 385 190 C395 194, 380 208, 350 216 C290 226, 170 225, 70 218 C40 215, 32 205, 50 188 Z"
                    fill="#0f172a"
                    opacity="0.9"
                  />

                  {/* Midsole Sculpted Cushioning */}
                  <path
                    d="M40 180 C80 182, 160 180, 220 184 C280 186, 335 178, 382 170 C392 182, 385 198, 355 206 C290 216, 150 215, 60 205 C35 201, 30 186, 40 180 Z"
                    fill="url(#soleMainGrad)"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                  />

                  {/* Visible Air Bubble Cushion Window */}
                  <g>
                    <rect x="250" y="184" width="70" height="15" rx="6" fill="url(#airCushion)" stroke="#cbd5e1" strokeWidth="1" />
                    <line x1="268" y1="184" x2="268" y2="199" stroke="#ffffff" strokeWidth="1.5" opacity="0.7" />
                    <line x1="285" y1="184" x2="285" y2="199" stroke="#ffffff" strokeWidth="1.5" opacity="0.7" />
                    <line x1="302" y1="184" x2="302" y2="199" stroke="#ffffff" strokeWidth="1.5" opacity="0.7" />
                  </g>

                  {/* SNEAKER UPPER - MAIN BODY */}
                  <path
                    d="M48 180 C70 170, 110 168, 160 166 C230 164, 290 170, 360 166 C376 165, 385 155, 370 135 C345 110, 310 90, 280 50 C265 30, 240 28, 215 55 C195 76, 150 102, 100 120 C60 134, 38 160, 48 180 Z"
                    fill="url(#bodyGradient)"
                  />

                  {/* Heel Counter Reinforcement */}
                  <path
                    d="M310 100 C335 125, 365 145, 370 162 C370 165, 350 170, 320 170 C300 145, 290 120, 310 100 Z"
                    fill={currentColorObj.gradientEnd}
                    opacity="0.85"
                  />

                  {/* Toe Cap Protective Overlay */}
                  <path
                    d="M48 180 C60 165, 80 152, 105 145 C95 160, 80 172, 60 180 Z"
                    fill="#ffffff"
                    opacity="0.25"
                  />

                  {/* Dynamic Velocity Speed Streak */}
                  <path
                    d="M130 148 C180 120, 240 115, 325 140 C280 148, 210 155, 150 162 Z"
                    fill="url(#accentFacet)"
                    opacity="0.9"
                  />

                  {/* Padded Collar / Ankle Rim */}
                  <path
                    d="M215 55 C230 42, 255 42, 280 50 C272 65, 250 78, 228 72 Z"
                    fill="#0f172a"
                  />

                  {/* Tongue and Lace loops */}
                  <path
                    d="M190 85 C205 70, 225 65, 240 68 C225 90, 210 115, 195 130 Z"
                    fill="#1e293b"
                    opacity="0.95"
                  />

                  {/* Laces with metallic eyelets */}
                  <g stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.92">
                    <line x1="160" y1="125" x2="205" y2="95" />
                    <line x1="175" y1="112" x2="220" y2="82" />
                    <line x1="190" y1="98" x2="235" y2="72" />
                  </g>

                  {/* Metallic Eyelets */}
                  <circle cx="160" cy="125" r="3" fill="#cbd5e1" />
                  <circle cx="175" cy="112" r="3" fill="#cbd5e1" />
                  <circle cx="190" cy="98" r="3" fill="#cbd5e1" />

                  {/* GiorgIT Brand Monogram Badge on Sneaker Heel */}
                  <g transform="translate(325, 130)">
                    <circle cx="8" cy="8" r="9" fill="#070019" />
                    <circle cx="8" cy="8" r="6" fill={currentColorObj.soleAccent} />
                    <circle cx="8" cy="8" r="3" fill="#ffffff" />
                  </g>
                </svg>
              </div>

              {/* Color name & interactive pill */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-medium text-slate-600">
                  Edición: <strong className="text-[#070019]">{selectedColor}</strong>
                </span>
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#6f3cff] bg-white/90 hover:bg-white border border-slate-200 px-2.5 py-0.5 rounded-full shadow-xs transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>{isZoomed ? "Reducir" : "Vista 360°"}</span>
                </button>
              </div>
            </div>

            {/* Bottom Angle Selectors & Guarantees */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-200/80 pt-3 gap-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveAngle("lateral")}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors cursor-pointer ${
                    activeAngle === "lateral"
                      ? "bg-white text-[#070019] shadow-xs font-semibold border border-slate-200"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  Perfil
                </button>
                <button
                  onClick={() => setActiveAngle("diagonal")}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors cursor-pointer ${
                    activeAngle === "diagonal"
                      ? "bg-white text-[#070019] shadow-xs font-semibold border border-slate-200"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  Frontal
                </button>
                <button
                  onClick={() => setActiveAngle("sole")}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors cursor-pointer ${
                    activeAngle === "sole"
                      ? "bg-white text-[#070019] shadow-xs font-semibold border border-slate-200"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  Suela Grip
                </button>
              </div>

              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#6f3cff]" /> Despacho 24h
                </span>
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-[#6f3cff]" /> Cambio 30d
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product Details & Purchase Form */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-5">
          <div>
            {/* Tag and Star Rating */}
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#6f3cff] uppercase bg-[#6f3cff]/10 px-2.5 py-0.5 rounded-full">
                VELOCITY SERIES 2026
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-800">4.9</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> 128 reseñas verificadas
                </span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-[#070019] tracking-tight">
              Sneakers Velocity Urban Pro
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Ingeniería reactiva con cápsula de aire presurizado y suela de tracción multisuperficie. Rendimiento urbano premium y confort continuo.
            </p>
          </div>

          {/* Pricing Box with 3 Installments and Transfer Discount */}
          <div className="p-3.5 rounded-xl bg-[#fbfaff] border border-slate-200/90 space-y-1.5">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#070019] tracking-tight">
                {formatCurrency(unitPrice)}
              </span>
              <span className="text-sm text-slate-400 line-through">
                {formatCurrency(originalPrice)}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                17% OFF
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="font-semibold text-[#6f3cff] bg-[#6f3cff]/10 px-2 py-0.5 rounded-md">
                💳 3 cuotas sin interés de {formatCurrency(installmentPrice)}/mes
              </span>
              <span className="text-slate-600 font-medium">
                o <strong className="text-emerald-700">{formatCurrency(transferPrice)}</strong> con Transferencia (-15%)
              </span>
            </div>
          </div>

          {/* Color Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700">
                Color: <span className="font-normal text-slate-900">{selectedColor}</span>
              </span>
              <span className="text-[11px] text-slate-400">4 combinaciones disponibles</span>
            </div>
            <div className="flex items-center gap-3">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`w-8 h-8 rounded-full ${c.bg} transition-all relative flex items-center justify-center cursor-pointer ${
                    selectedColor === c.name
                      ? "ring-3 ring-[#6f3cff] ring-offset-2 scale-110 shadow-md"
                      : "opacity-80 hover:opacity-100 hover:scale-105"
                  }`}
                  aria-label={c.name}
                  title={c.name}
                >
                  {selectedColor === c.name && (
                    <Check
                      className={`w-4 h-4 stroke-[3] ${
                        c.name === "Titanium Silver" ? "text-slate-900" : "text-white"
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector with stock indicators */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700">
                Talle (AR): <strong className="text-[#070019]">{selectedSize}</strong>
              </span>
              <span className="text-[11px] text-[#6f3cff] hover:underline cursor-pointer font-medium">
                Guía de medidas
              </span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {sizes.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setSelectedSize(s.num)}
                  className={`relative py-2 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center cursor-pointer ${
                    selectedSize === s.num
                      ? "bg-[#070019] text-white border-[#070019] shadow-md scale-102"
                      : "bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span>{s.num}</span>
                  <span className="flex items-center gap-1 text-[9px] font-normal mt-0.5 opacity-80">
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    <span className="hidden sm:inline">{s.stock.split(" ")[0]}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Instant 1-Click CTA & simulated toast */}
          <div className="pt-2">
            <button
              onClick={handleInstantBuy}
              disabled={isRedirecting}
              className="w-full py-3.5 px-5 rounded-xl bg-[#6f3cff] hover:bg-[#5f2bee] active:scale-[0.99] text-white font-semibold text-sm transition-all shadow-lg shadow-[#6f3cff]/25 flex items-center justify-center gap-2.5 cursor-pointer group disabled:opacity-80"
            >
              <Zap className="w-4 h-4 fill-white text-white transition-transform group-hover:scale-120" />
              <span>
                {isRedirecting
                  ? "Procesando Checkout en 0.38s..."
                  : "Comprar en 1 Clic (Simulador Express)"}
              </span>
            </button>
            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 mt-2.5">
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-slate-400" /> Sin formularios largos
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#6f3cff]" /> Tokenización instantánea
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
