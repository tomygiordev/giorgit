"use client";

import React, { useState } from "react";
import { Truck, RotateCcw, Star, Zap, Check } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Props {
  onGoToCheckout: () => void;
}

export default function StorefrontTab({ onGoToCheckout }: Props) {
  const [selectedColor, setSelectedColor] = useState("Violet Stealth");
  const [selectedSize, setSelectedSize] = useState(41);

  const colors = [
    { name: "Violet Stealth", bg: "bg-[#6f3cff]", hex: "#6f3cff" },
    { name: "Obsidian Black", bg: "bg-[#070019]", hex: "#070019" },
    { name: "Ocean Cyan", bg: "bg-[#0ea5e9]", hex: "#0ea5e9" },
    { name: "Titanium Silver", bg: "bg-[#94a3b8]", hex: "#94a3b8" },
  ];

  const sizes = [39, 40, 41, 42, 43, 44];
  const unitPrice = 145000;
  const originalPrice = 175000;

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white text-[#070019]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Product Visual */}
        <div className="md:col-span-6">
          <div className="relative rounded-xl sm:rounded-2xl bg-[#f8f7fc] border border-slate-200/80 p-6 sm:p-8 aspect-square flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Envío Gratis Hoy
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#6f3cff]/10 text-[#6f3cff]">
                17% OFF
              </span>
            </div>

            {/* Stylized Vector Sneaker in Active Color */}
            <div className="my-auto flex flex-col items-center justify-center py-4">
              <div className="w-48 h-32 sm:w-56 sm:h-36 relative flex items-center justify-center transition-all duration-300">
                <svg viewBox="0 0 240 140" className="w-full h-full drop-shadow-md">
                  <defs>
                    <linearGradient id="soleGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>
                    <linearGradient id="shoeBodyLight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={colors.find(c => c.name === selectedColor)?.hex || "#6f3cff"} />
                      <stop offset="100%" stopColor="#1e1b4b" />
                    </linearGradient>
                  </defs>
                  {/* Sneaker Upper */}
                  <path
                    d="M20 100 C 30 95, 60 95, 90 95 C 130 95, 170 105, 215 105 C 225 105, 230 90, 210 80 C 180 65, 150 55, 130 30 C 120 20, 105 18, 95 35 C 85 50, 60 65, 30 75 C 15 80, 10 105, 20 100 Z"
                    fill="url(#shoeBodyLight)"
                  />
                  {/* Sole */}
                  <path
                    d="M15 102 C 30 105, 80 105, 130 105 C 180 105, 215 112, 225 105 C 220 115, 195 122, 140 122 C 80 122, 30 120, 10 112 C 8 107, 10 102, 15 102 Z"
                    fill="url(#soleGradLight)"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  {/* Laces / lines */}
                  <path d="M70 55 L 110 65" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                  <path d="M85 45 L 125 58" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                  <circle cx="165" cy="78" r="8" fill="#ffffff" opacity="0.95" />
                  <circle cx="165" cy="78" r="4" fill={colors.find(c => c.name === selectedColor)?.hex || "#6f3cff"} />
                </svg>
              </div>
              <span className="text-[11px] font-medium text-slate-500 mt-2">
                Color seleccionado: <strong className="text-[#070019]">{selectedColor}</strong>
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200/80 pt-3">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#6f3cff]" /> Despacho en 24h
              </span>
              <span className="flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5 text-[#6f3cff]" /> Cambio gratis 30 días
              </span>
            </div>
          </div>
        </div>

        {/* Product Details & Purchase Form */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-500 font-medium">4.9 (128 reseñas verificadas)</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-[#070019] tracking-tight">
              Sneakers Velocity Urban Pro
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Diseño ergonómico con suela reactiva. Máximo confort urbano y amortiguación continua.
            </p>
          </div>

          {/* Pricing Row */}
          <div className="flex items-baseline gap-3 pt-1 border-t border-slate-100">
            <span className="text-2xl sm:text-3xl font-bold text-[#070019] tracking-tight">
              {formatCurrency(unitPrice)}
            </span>
            <span className="text-sm text-slate-400 line-through">
              {formatCurrency(originalPrice)}
            </span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              3 cuotas sin interés
            </span>
          </div>

          {/* Color Selector */}
          <div>
            <span className="text-xs font-semibold text-slate-700 block mb-2">Color:</span>
            <div className="flex items-center gap-2.5">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`w-7 h-7 rounded-full ${c.bg} transition-all relative flex items-center justify-center ${
                    selectedColor === c.name
                      ? "ring-2 ring-offset-2 ring-[#6f3cff] scale-110"
                      : "opacity-80 hover:opacity-100 hover:scale-105"
                  }`}
                  aria-label={c.name}
                >
                  {selectedColor === c.name && (
                    <Check className={`w-3.5 h-3.5 ${c.name === "Titanium Silver" ? "text-slate-800" : "text-white"}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700">Talle (AR):</span>
              <span className="text-[11px] text-[#6f3cff] hover:underline cursor-pointer">Guía de talles</span>
            </div>
            <div className="flex items-center gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`h-8 w-10 rounded-lg text-xs font-semibold border transition-all ${
                    selectedSize === s
                      ? "bg-[#070019] text-white border-[#070019] shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Instant 1-Click CTA */}
          <div className="pt-2">
            <button
              onClick={onGoToCheckout}
              className="w-full py-3 px-4 rounded-xl bg-[#6f3cff] hover:bg-[#5f2bee] text-white font-semibold text-sm transition-all shadow-md shadow-[#6f3cff]/20 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Zap className="w-4 h-4 fill-white text-white transition-transform group-hover:scale-110" />
              <span>Comprar en 1 Clic (Simulador)</span>
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Prueba la velocidad del checkout sin recarga de página ni fricción
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
