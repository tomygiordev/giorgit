"use client";

import React, { useState, useEffect } from "react";
import {
  Zap,
  Search,
  CheckCircle2,
  SlidersHorizontal,
  Smartphone,
  MessageSquare,
  ShieldCheck,
  BarChart2,
  ArrowRight,
  RefreshCw,
  Clock,
  Send,
  Sparkles,
  FileSpreadsheet,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

export default function BentoFeatures() {
  // Card 1: Interactive Checkout Mode (GiorgIT 1-Step vs Legacy 5-Steps)
  const [checkoutMode, setCheckoutMode] = useState<"giorgit" | "legacy">("giorgit");

  // Card 2: Predictive Search Filter Simulator
  const [searchQuery, setSearchQuery] = useState("Sneakers");
  const [activeFilterTag, setActiveFilterTag] = useState("Talle 41");

  const searchResults: Record<string, { count: number; latency: string; items: string[] }> = {
    "Sneakers": { count: 18, latency: "7ms", items: ["Runner Pro X VIOLET", "Street Retro 90s", "Carbon Speed 3"] },
    "Talle 41": { count: 12, latency: "6ms", items: ["Runner Pro X VIOLET", "Minimal Leather Slip", "Trail Grip GTX"] },
    "Cuotas sin interés": { count: 24, latency: "8ms", items: ["Todo el catálogo con 3 y 6 cuotas bancarias"] },
    "Envío Gratis": { count: 15, latency: "9ms", items: ["Despacho Andreani Bonificado > $80.000"] },
    "Remeras": { count: 9, latency: "5ms", items: ["Heavyweight Oversize Tee", "Acid Wash Boxy", "Essential Cotton"] },
  };

  const currentResult = searchResults[activeFilterTag] || {
    count: 14,
    latency: "8ms",
    items: ["Runner Pro X VIOLET", "Street Retro 90s"],
  };

  // Card 3: WhatsApp Recovery Simulator
  const [recoverySent, setRecoverySent] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const triggerRecoverySimulation = () => {
    setIsTyping(true);
    setRecoverySent(false);
    setTimeout(() => {
      setIsTyping(false);
      setRecoverySent(true);
    }, 1200);
  };

  // Card 4: AFIP Invoice Export Simulator
  const [afipStatus, setAfipStatus] = useState<"idle" | "generating" | "approved">("idle");
  const [stockLevel, setStockLevel] = useState<number>(3);

  const handleExportAfip = () => {
    setAfipStatus("generating");
    setTimeout(() => {
      setAfipStatus("approved");
    }, 900);
  };

  return (
    <section id="bento" className="w-full bg-white text-[#070019] py-8 sm:py-12">
      {/* Section Header with Signature Typography Duet & Monospace Telemetry */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6f3cff]" />
          <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-slate-500">
            // ANATOMÍA DE UNA TIENDA DE ALTO RENDIMIENTO
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#070019] leading-[1.1]">
          Ingeniería Enfocada en Facturar{" "}
          <span className="font-serif italic font-normal text-violet-700">
            y Eliminar la Fricción
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Cada milisegundo ganado en el catálogo y cada paso eliminado en el checkout reduce el abandono de carritos y multiplica tu rentabilidad neta.
        </p>
      </div>

      {/* Bento Grid with Architectural Corners & Interactive Demonstrations */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* =========================================================================
            BENTO 1 (Span 8): Checkout Nativo en 1 Solo Paso (Interactive Comparison)
           ========================================================================= */}
        <div className="md:col-span-12 lg:col-span-8 rounded-2xl p-6 sm:p-8 bg-[#fafbff] border border-slate-200/90 relative flex flex-col justify-between group hover:border-slate-300 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          {/* Subtle Corner Registration Marks */}
          <span className="absolute -top-2 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute -top-2 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>

          <div>
            {/* Header + Interactive Mode Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#6f3cff] shadow-xs">
                  <Zap className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#070019] tracking-tight">
                    Checkout Nativo en 1 Solo Paso
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    BENCHMARK: CONVERSIÓN +62%
                  </span>
                </div>
              </div>

              {/* Interactive Segmented Switcher */}
              <div className="bg-slate-200/70 p-1 rounded-xl flex items-center gap-1 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setCheckoutMode("giorgit")}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    checkoutMode === "giorgit"
                      ? "bg-white text-[#070019] shadow-xs font-semibold"
                      : "text-slate-600 hover:text-[#070019]"
                  }`}
                >
                  ⚡ GiorgIT (1 Paso)
                </button>
                <button
                  type="button"
                  onClick={() => setCheckoutMode("legacy")}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    checkoutMode === "legacy"
                      ? "bg-white text-rose-700 shadow-xs font-semibold"
                      : "text-slate-600 hover:text-rose-700"
                  }`}
                >
                  Plataformas Clásicas (5 Pasos)
                </button>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Eliminamos los formularios kilométricos que frustran a tus compradores móviles. Autocompletado inteligente de CP, validación en tiempo real y tokenización directa con Mercado Pago o 10% OFF en transferencia bancaria.
            </p>

            {/* LIVE STEP COMPARISON CONTAINER */}
            <div className="mt-6 p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              {checkoutMode === "giorgit" ? (
                /* GIORGIT 1-STEP NATIVE FLOW */
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        LATENCIA: 0.38s • SINGLE SCREEN CHECKOUT
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500">
                      Sin salir de tu tienda
                    </span>
                  </div>

                  {/* Simulated 1-Step Form Micro-UI */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-[#fafbff] border border-slate-200/80">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Paso 01 // Envío</span>
                      <div className="font-semibold text-slate-800">CP 1425 (Palermo)</div>
                      <div className="text-[11px] text-emerald-600 mt-0.5">Andreani 24h: $3.490</div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#fafbff] border border-slate-200/80">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Paso 02 // DNI &amp; Factura</span>
                      <div className="font-semibold text-slate-800">34.892.100</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Autocompletado AFIP</div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#fafbff] border border-slate-200/80">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Paso 03 // Pago</span>
                      <div className="font-semibold text-[#6f3cff]">Mercado Pago 3 Cuotas</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Tokenización Nativa</div>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Cero fricción: El comprador confirma en 1 toque.</span>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-[#6f3cff] text-white text-xs font-semibold shadow-xs">
                      Pagar $54.900 (0.38s)
                    </div>
                  </div>
                </div>
              ) : (
                /* LEGACY 5-STEP SLOW FLOW (Shopify / TiendaNube) */
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-rose-100 pb-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span className="text-xs font-mono font-semibold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">
                        TIEMPO MEDIO: 48.6s • ALTO ABANDONO (68%)
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-rose-600">
                      5 Redirecciones y Formularios
                    </span>
                  </div>

                  {/* 5 painful step badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[11px]">
                    <div className="p-2 rounded-md bg-rose-50/70 border border-rose-200/80 text-rose-900">
                      <div className="font-bold">1. Crear Cuenta</div>
                      <div className="text-[10px] text-rose-600">Pide pass y captcha</div>
                    </div>
                    <div className="p-2 rounded-md bg-rose-50/70 border border-rose-200/80 text-rose-900">
                      <div className="font-bold">2. Datos Envío</div>
                      <div className="text-[10px] text-rose-600">Recarga lenta</div>
                    </div>
                    <div className="p-2 rounded-md bg-rose-50/70 border border-rose-200/80 text-rose-900">
                      <div className="font-bold">3. Facturación</div>
                      <div className="text-[10px] text-rose-600">Pide datos duplicados</div>
                    </div>
                    <div className="p-2 rounded-md bg-rose-100 border border-rose-300 text-rose-950 font-bold">
                      <div>4. Redirección</div>
                      <div className="text-[10px] text-rose-700">Sale de la tienda</div>
                    </div>
                    <div className="p-2 rounded-md bg-rose-50/70 border border-rose-200/80 text-rose-900">
                      <div className="font-bold">5. Confirmación</div>
                      <div className="text-[10px] text-rose-600">Retorno demorado</div>
                    </div>
                  </div>

                  <p className="text-xs text-rose-700 pt-1">
                    ⚠️ Por cada paso extra y redirección externa, el comercio electrónico pierde entre 15% y 25% de ventas reales.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Micro-features footer */}
          <div className="mt-6 pt-5 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white border border-slate-200/80">
              <div className="text-xs font-semibold text-[#070019]">Mercado Pago Nativo</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Cuotas sin interés sin salir al sitio externo.</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200/80">
              <div className="text-xs font-semibold text-[#070019]">Transferencia 10% OFF</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Alias automático y carga inmediata de comprobante.</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200/80">
              <div className="text-xs font-semibold text-[#070019]">Andreani &amp; Correo</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Cotización automática en milisegundos por CP.</div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BENTO 2 (Span 4): Catálogo Instantáneo con Búsqueda Predictiva (Interactive Search Widget)
           ========================================================================= */}
        <div className="md:col-span-12 lg:col-span-4 rounded-2xl p-6 sm:p-8 bg-[#fafbff] border border-slate-200/90 relative flex flex-col justify-between group hover:border-slate-300 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <span className="absolute -top-2 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute -top-2 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#6f3cff] shadow-xs">
                <Search className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                LATENCIA {currentResult.latency}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-medium text-[#070019] tracking-tight">
              Catálogo Instantáneo
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Búsqueda predictiva y filtros facetados en memoria Edge. Sin pantallas blancas ni recargas de página completas en dispositivos móviles.
            </p>
          </div>

          {/* INTERACTIVE SEARCH & FILTER WIDGET */}
          <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#fafbff] border border-slate-200 text-xs text-slate-600">
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={activeFilterTag}
                onChange={(e) => setActiveFilterTag(e.target.value)}
                placeholder="Buscar producto o filtro..."
                className="w-full bg-transparent text-xs text-[#070019] focus:outline-none font-medium"
              />
              <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
                {currentResult.latency}
              </span>
            </div>

            {/* Clickable preset filter tags */}
            <div>
              <span className="text-[10px] font-mono text-slate-400 block mb-1.5 uppercase">
                Probar Filtros Rápidos:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Sneakers", "Talle 41", "Cuotas sin interés", "Envío Gratis", "Remeras"].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveFilterTag(tag)}
                    className={`px-2 py-1 rounded-md text-[11px] transition-all cursor-pointer ${
                      activeFilterTag === tag
                        ? "bg-[#070019] text-white font-semibold"
                        : "bg-[#f4f2fb] text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Results Counter & Preview */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Coincidencias encontradas:
              </span>
              <span className="font-bold text-[#6f3cff] font-mono">
                {currentResult.count} productos
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BENTO 3 (Span 4): WhatsApp Cloud Automatizado (Interactive Simulator)
           ========================================================================= */}
        <div className="md:col-span-6 lg:col-span-4 rounded-2xl p-6 sm:p-8 bg-[#fafbff] border border-slate-200/90 relative flex flex-col justify-between group hover:border-slate-300 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <span className="absolute -top-2 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute -top-2 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-emerald-600 shadow-xs">
                <MessageSquare className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                OPEN RATE 98%
              </span>
            </div>

            <h3 className="text-xl font-medium text-[#070019] tracking-tight">
              Recuperación Activa vía WhatsApp Cloud
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Disparo automático de carritos abandonados a los 15 minutos, confirmación de orden y botón de compra directa sin intermediarios.
            </p>
          </div>

          {/* SIMULATED WHATSAPP MESSAGE BUBBLE */}
          <div className="mt-6 p-4 rounded-xl bg-[#e5ddd5]/30 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-200/60">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-slate-800">GiorgIT Bot Oficial</span>
              </div>
              <span className="text-slate-400 font-mono">Ahora</span>
            </div>

            {/* The WhatsApp bubble */}
            <div className="bg-white p-3 rounded-lg rounded-tl-none border border-slate-200/60 shadow-xs text-xs space-y-1.5">
              <p className="text-slate-800 leading-relaxed font-sans">
                ¡Hola Tomás! Notamos que dejaste tus <strong className="text-[#070019]">Sneakers Runner Pro X</strong> en tu carrito. Tenés un <strong>10% OFF extra</strong> si completás tu compra ahora:
              </p>
              <div className="p-2 rounded bg-emerald-50 text-emerald-800 border border-emerald-100 font-mono text-[10px] flex items-center justify-between">
                <span>CUPÓN: RETORNO10</span>
                <span className="font-bold">1-CLIC LINK</span>
              </div>
            </div>

            {/* Test Trigger Button */}
            <button
              type="button"
              onClick={triggerRecoverySimulation}
              disabled={isTyping}
              className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              {isTyping ? (
                <>
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Simulando disparo Meta API...</span>
                </>
              ) : recoverySent ? (
                <>
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Mensaje Entregado (Verificado)</span>
                </>
              ) : (
                <>
                  <Send className="w-3 h-3" />
                  <span>Probar Disparo de Recuperación</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* =========================================================================
            BENTO 4 (Span 4): Panel Ejecutivo & Control Multi-Depósito (Telemetry UI)
           ========================================================================= */}
        <div className="md:col-span-6 lg:col-span-4 rounded-2xl p-6 sm:p-8 bg-[#fafbff] border border-slate-200/90 relative flex flex-col justify-between group hover:border-slate-300 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <span className="absolute -top-2 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute -top-2 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#6f3cff] shadow-xs">
                <BarChart2 className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                TELEMETRÍA EN VIVO
              </span>
            </div>

            <h3 className="text-xl font-medium text-[#070019] tracking-tight">
              Panel Ejecutivo &amp; Multi-Depósito
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Control centralizado de inventario por sucursal, alertas inteligentes de quiebre de stock y facturación electrónica AFIP en 1 clic.
            </p>
          </div>

          {/* MINI TELEMETRY VIEW */}
          <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
            {/* Stock Alert Row */}
            <div className="p-2.5 rounded-lg bg-[#fafbff] border border-slate-200/80 flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-slate-800 block">Depósito Central (Palermo)</span>
                <span className="text-[10px] text-amber-700 font-mono">Stock crítico: {stockLevel} unidades restantes</span>
              </div>
              <button
                type="button"
                onClick={() => setStockLevel((prev) => (prev === 3 ? 28 : 3))}
                className="text-[10px] font-mono font-semibold bg-white px-2 py-1 rounded border border-slate-200 hover:bg-slate-50 cursor-pointer"
              >
                {stockLevel === 3 ? "Reabastecer" : "Simular Baja"}
              </button>
            </div>

            {/* AFIP Invoice 1-Click Export */}
            <div className="p-2.5 rounded-lg bg-[#fafbff] border border-slate-200/80 flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-slate-800 block">Factura Electrónica AFIP</span>
                <span className="text-[10px] text-slate-500 font-mono">WSFE v1.2 Directo</span>
              </div>
              <button
                type="button"
                onClick={handleExportAfip}
                className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold transition-all cursor-pointer ${
                  afipStatus === "approved"
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    : afipStatus === "generating"
                    ? "bg-amber-100 text-amber-800 animate-pulse"
                    : "bg-[#070019] text-white hover:bg-[#6f3cff]"
                }`}
              >
                {afipStatus === "approved"
                  ? "CAE: 74819201"
                  : afipStatus === "generating"
                  ? "Generando..."
                  : "Emitir Factura"}
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BENTO 5 (Span 4): Core Web Vitals 100/100 (Google PageSpeed Badge)
           ========================================================================= */}
        <div className="md:col-span-12 lg:col-span-4 rounded-2xl p-6 sm:p-8 bg-[#fafbff] border border-slate-200/90 relative flex flex-col justify-between group hover:border-slate-300 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <span className="absolute -top-2 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute -top-2 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-emerald-600 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                AUDITORÍA LIGHTHOUSE
              </span>
            </div>

            <h3 className="text-xl font-medium text-[#070019] tracking-tight">
              Core Web Vitals 100/100
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Puntuación perfecta en Google Lighthouse. Tu tienda rankea más alto orgánicamente y convierte el tráfico que llega de anuncios pagos.
            </p>
          </div>

          {/* 4 CIRCULAR GAUGES + TELEMETRY METRICS */}
          <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Performance", score: "100" },
                { label: "Accesibilidad", score: "100" },
                { label: "Buenas Prácticas", score: "100" },
                { label: "SEO", score: "100" },
              ].map((audit) => (
                <div key={audit.label} className="p-2 rounded-lg bg-[#fafbff] border border-slate-200/80 text-center">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center mx-auto border-2 border-emerald-500 shadow-2xs">
                    {audit.score}
                  </div>
                  <div className="text-[9px] text-slate-600 mt-1 font-medium truncate">{audit.label}</div>
                </div>
              ))}
            </div>

            {/* Micro Latency Benchmarks */}
            <div className="pt-2 border-t border-slate-100 grid grid-cols-3 text-center text-[10px] font-mono text-slate-500">
              <div>FCP: <span className="font-bold text-emerald-700">0.3s</span></div>
              <div>LCP: <span className="font-bold text-emerald-700">0.4s</span></div>
              <div>CLS: <span className="font-bold text-emerald-700">0.00</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
