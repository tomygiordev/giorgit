"use client";

import React, { useState } from "react";
import { Sparkles, Zap, ShoppingBag, Truck, RotateCcw, Check, Star, Plus, Minus, ArrowRight, CheckCircle2 } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Props {
  onGoToCheckout: () => void;
}

export default function StorefrontTab({ onGoToCheckout }: Props) {
  const [selectedColor, setSelectedColor] = useState("Violet Stealth");
  const [selectedSize, setSelectedSize] = useState(41);
  const [quantity, setQuantity] = useState(1);
  const [cartItemsCount, setCartItemsCount] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const colors = [
    { name: "Violet Stealth", bg: "bg-violet-600", hex: "#7c3aed", imageAccent: "from-violet-950/80 to-purple-900/40" },
    { name: "Obsidian Black", bg: "bg-zinc-800", hex: "#27272a", imageAccent: "from-zinc-950/90 to-zinc-900/50" },
    { name: "Electric Cyan", bg: "bg-cyan-500", hex: "#06b6d4", imageAccent: "from-cyan-950/80 to-blue-900/40" },
    { name: "Pure Titanium", bg: "bg-slate-300", hex: "#cbd5e1", imageAccent: "from-slate-800/80 to-slate-900/40" },
  ];

  const sizes = [39, 40, 41, 42, 43];
  const unitPrice = 145000;
  const originalPrice = 175000;

  const handleAddToCart = () => {
    setAddedAnimation(true);
    setCartItemsCount((prev) => prev + quantity);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Product Visual Mockup */}
        <div className="lg:col-span-6 relative">
          <div className={`relative rounded-2xl bg-gradient-to-br ${colors.find(c => c.name === selectedColor)?.imageAccent || "from-violet-950 to-indigo-900"} p-6 border border-white/10 aspect-square flex flex-col justify-between overflow-hidden group`}>
            <div className="flex items-center justify-between z-10">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Envío Gratis Hoy
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                17% OFF
              </span>
            </div>

            <div className="my-auto flex flex-col items-center justify-center relative py-6">
              <div className="w-48 h-48 sm:w-56 sm:h-56 relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-violet-500/20 blur-2xl rounded-full" />
                <svg viewBox="0 0 240 160" className="w-full h-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]">
                  <defs>
                    <linearGradient id="soleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>
                    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={colors.find(c => c.name === selectedColor)?.hex || "#7c3aed"} />
                      <stop offset="100%" stopColor="#1e1b4b" />
                    </linearGradient>
                  </defs>
                  <path d="M20 120 C 30 115, 60 115, 90 115 C 130 115, 170 125, 215 125 C 225 125, 230 110, 210 100 C 180 85, 150 75, 130 50 C 120 40, 105 38, 95 55 C 85 70, 60 85, 30 95 C 15 100, 10 125, 20 120 Z" fill="url(#bodyGrad)" />
                  <path d="M15 122 C 30 125, 80 125, 130 125 C 180 125, 215 132, 225 125 C 220 135, 195 142, 140 142 C 80 142, 30 140, 10 132 C 8 127, 10 122, 15 122 Z" fill="url(#soleGrad)" />
                  <path d="M70 75 L 110 85" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                  <path d="M85 65 L 125 78" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                  <circle cx="165" cy="98" r="8" fill="#ffffff" opacity="0.9" />
                  <circle cx="165" cy="98" r="4" fill={colors.find(c => c.name === selectedColor)?.hex || "#7c3aed"} />
                </svg>
              </div>
              <span className="text-[11px] font-mono text-slate-400 mt-2">
                Color activo: <span className="text-white font-semibold">{selectedColor}</span>
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/[0.08] pt-3 z-10">
              <span className="flex items-center gap-1 text-slate-300">
                <Truck className="w-3.5 h-3.5 text-violet-400" /> Despacho en 24h
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <RotateCcw className="w-3.5 h-3.5 text-violet-400" /> Cambio gratis 30 días
              </span>
            </div>
          </div>
        </div>

        {/* Product Details & Actions */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-400 font-medium">4.9 (128 reseñas verificadas)</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Sneakers Velocity Urban Pro</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Calzado de amortiguación responsiva con tejido transpirable y suela de tracción inteligente.</p>

            <div className="mt-4 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-baseline justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">{formatCurrency(unitPrice)}</span>
                  <span className="text-sm text-slate-400 line-through">{formatCurrency(originalPrice)}</span>
                </div>
                <p className="text-xs text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> Hasta 6 cuotas fijas de {formatCurrency(Math.round(unitPrice / 6))} sin interés
                </p>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/20 text-emerald-300">En Stock</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-medium text-slate-300 block mb-2">Seleccionar Variante de Color:</span>
            <div className="flex items-center gap-2.5">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-9 h-9 rounded-full ${color.bg} border-2 transition-all flex items-center justify-center ${selectedColor === color.name ? "border-white ring-2 ring-violet-500 scale-110" : "border-transparent opacity-80 hover:opacity-100"}`}
                  title={color.name}
                >
                  {selectedColor === color.name && <Check className="w-4 h-4 text-white drop-shadow" />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-300">Talle (AR):</span>
              <button className="text-[11px] text-violet-400 hover:underline">Guía de talles</button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 rounded-xl text-xs font-semibold border transition-all ${selectedSize === size ? "bg-violet-600 text-white border-violet-400 shadow-md shadow-violet-600/30" : "bg-white/5 text-slate-300 border-white/10 hover:border-white/20 hover:bg-white/10"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1 w-full sm:w-auto justify-between sm:justify-start">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300"><Minus className="w-4 h-4" /></button>
              <span className="w-10 text-center font-semibold text-white text-sm">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300"><Plus className="w-4 h-4" /></button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full flex-1 py-3 px-5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${addedAnimation ? "bg-emerald-600 text-white" : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-600/30 hover:scale-[1.02] active:scale-[0.98]"}`}
            >
              {addedAnimation ? (
                <> <CheckCircle2 className="w-4 h-4" /> ¡Agregado al Carrito ({cartItemsCount})! </>
              ) : (
                <> <ShoppingBag className="w-4 h-4" /> Agregar al Carrito • {formatCurrency(unitPrice * quantity)} </>
              )}
            </button>

            <button
              onClick={onGoToCheckout}
              className="w-full sm:w-auto py-3 px-4 rounded-xl font-medium text-xs text-violet-300 bg-violet-950/50 border border-violet-700/40 hover:bg-violet-900/40 transition-all flex items-center justify-center gap-1.5"
            >
              Probar Checkout <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
