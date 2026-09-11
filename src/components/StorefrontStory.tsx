"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Minus,
  ArrowUp,
  Check,
  Zap,
  Clock,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Percent,
  Gauge,
} from "lucide-react";

const formatMoney = (value: number) =>
  new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 }).format(value);

const whatsappLink = (message: string) =>
  `https://wa.me/5491138402948?text=${encodeURIComponent(message)}`;

export default function StorefrontStory() {
  // Speed simulator state
  const [speedMode, setSpeedMode] = useState<"giorgit" | "generic">("giorgit");

  // Calculator state
  const [sales, setSales] = useState(18000000);
  const [rate, setRate] = useState(2.0);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Contact form state
  const [brand, setBrand] = useState("");
  const [project, setProject] = useState("Quiero una tienda nueva desde cero");

  // Calculated financial metrics
  const monthlyCommission = (sales * rate) / 100;
  const yearlyCommission = monthlyCommission * 12;
  const threeYearsCommission = yearlyCommission * 3;

  const faqList = [
    {
      q: "¿La tienda y el código son 100% de mi marca?",
      a: "Totalmente. Al finalizar el proyecto te entregamos el repositorio con el código fuente completo, accesos administrativos y la base de datos. Sos el único dueño de tu plataforma y tus clientes, sin contratos de permanencia ni dependencia forzada.",
    },
    {
      q: "¿Qué costos fijos tengo después del desarrollo?",
      a: "GiorgIT no cobra comisión por venta ni mensualidades de mantenimiento forzosas. Solo asumís los costos directos de tu propio dominio (.com o .com.ar), el hosting en la nube (como Vercel o tu servidor, habitualmente $0 a $20 USD/mes según tráfico) y las comisiones normales de Mercado Pago o Stripe por procesar pagos.",
    },
    {
      q: "¿Puedo migrar mi tienda actual desde Tiendanube, Shopify o WooCommerce?",
      a: "Sí. Realizamos la migración completa de tu catálogo, imágenes, variantes de stock, base de clientes e historial. Configuramos redirecciones automáticas para preservar el posicionamiento orgánico que tu marca ya tiene en Google.",
    },
    {
      q: "¿Cuánto tiempo lleva el desarrollo hasta el lanzamiento?",
      a: "Un proyecto Starter o Growth toma entre 15 y 21 días hábiles con catálogo y contenidos iniciales definidos. Trabajamos con entregas semanales y un entorno de prueba para que veas el avance en tiempo real.",
    },
    {
      q: "¿Cómo administro los productos, precios y pedidos?",
      a: "Te entregamos un panel autoadministrable moderno, ultra rápido y pensado para celulares. Podés cargar fotos, actualizar precios masivamente y generar etiquetas de despacho en segundos. Te capacitamos antes de salir a producción.",
    },
  ];

  return (
    <div className="flex flex-col w-full text-[#070019]">
      {/* =========================================================================
          SECTION 1: Dynamic Kinetic Ticker / Ecosystem Strip
          Generous breathing room, crisp badge typography, interactive hover physics
          ========================================================================= */}
      <section
        id="tecnologia"
        className="w-full py-10 sm:py-14 border-b border-slate-200/90"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
          <div className="flex items-center gap-3 bg-purple-50/80 border border-purple-200/70 px-4 py-2 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6f3cff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6f3cff]" />
            </span>
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#070019] uppercase font-mono">
              Ecosistema Nativo · Sin Plugins Inestables
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-800">
            {/* Mercado Pago */}
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2.5 font-bold tracking-tight text-sm sm:text-base px-4 py-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:border-[#6f3cff]/50 hover:bg-white transition-all shadow-xs cursor-default"
            >
              <svg className="w-5 h-5 fill-current text-sky-600" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93c-2.82.35-4.88-.97-5.06-1.07l.6-1.42c.1.06 1.83 1.15 4.09.84.97-.13 1.58-.65 1.54-1.32-.05-.83-.93-1.12-2.14-1.52-1.74-.58-3.03-1.27-2.92-2.89.1-1.46 1.4-2.45 3.39-2.61V5.5h1.5v1.44c1.98.24 3.77 1.25 3.86 1.3l-.62 1.44c-.11-.06-1.63-.92-3.41-.75-1.16.11-1.6.72-1.57 1.25.04.79.91 1.05 2.15 1.48 1.82.63 2.94 1.38 2.83 2.98-.12 1.67-1.57 2.58-3.74 2.8v1.49H13v-1.49z" />
              </svg>
              <span>Mercado Pago Pro</span>
            </motion.div>

            {/* Andreani */}
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2.5 font-bold tracking-tight text-sm sm:text-base px-4 py-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:border-[#6f3cff]/50 hover:bg-white transition-all shadow-xs cursor-default"
            >
              <span className="font-mono text-[10px] bg-red-600 text-white px-2 py-0.5 rounded font-black tracking-wider">
                API
              </span>
              <span>Andreani Envíos</span>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2.5 font-bold tracking-tight text-sm sm:text-base px-4 py-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:border-[#6f3cff]/50 hover:bg-white transition-all shadow-xs cursor-default"
            >
              <svg className="w-5 h-5 fill-current text-emerald-600" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19-.09-1.11-.55-1.28-.61-.17-.07-.3-.09-.43.1-.12.19-.48.61-.59.73-.11.12-.22.14-.4.05-.19-.09-.79-.29-1.5-.93-.56-.49-.93-1.11-1.04-1.3-.11-.19-.01-.29.08-.38.08-.09.19-.22.28-.33.09-.11.12-.19.19-.31.06-.12.03-.24-.02-.33-.05-.09-.43-1.03-.59-1.42-.15-.37-.31-.32-.43-.33h-.37c-.12 0-.33.05-.5.24s-.66.65-.66 1.58.68 1.83.77 1.96c.1.12 1.34 2.05 3.25 2.87.45.2.81.31 1.09.4.46.15.87.13 1.2.08.37-.06 1.11-.45 1.27-.89.15-.44.15-.81.11-.89-.05-.08-.17-.13-.36-.22" />
              </svg>
              <span>WhatsApp Direct</span>
            </motion.div>

            {/* Stripe */}
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2 font-bold tracking-tight text-sm sm:text-base px-4 py-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:border-[#6f3cff]/50 hover:bg-white transition-all shadow-xs cursor-default"
            >
              <svg className="w-5 h-5 fill-current text-indigo-600" viewBox="0 0 24 24">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.836.5 6.408.5 2.126 3.844 2.126 9.438c0 5.485 4.316 7.643 8.356 9.17 2.457.914 3.292 1.633 3.292 2.617 0 .973-.89 1.52-2.278 1.52-2.392 0-5.323-1.127-7.23-2.178L3.25 26.2c2.09 1.09 5.372 1.8 8.423 1.8 6.74 0 11.233-3.23 11.233-9.088 0-5.46-3.957-7.794-8.93-9.762z" />
              </svg>
              <span>Stripe USD</span>
            </motion.div>

            {/* Additional trusted systems */}
            <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-semibold text-slate-500 bg-slate-100/70 px-3.5 py-2 rounded-xl">
              <span>OCA</span>
              <span>·</span>
              <span>CORREO ARGENTINO</span>
              <span>·</span>
              <span>AFIP FACTURACIÓN</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: The Core Thesis / Disruptive Staggered Typography & Benchmark
          High contrast, bold editorial voice, interactive animated benchmark
          ========================================================================= */}
      <section
        id="bento"
        className="w-full py-18 sm:py-28"
      >
        {/* Massive Staggered Headline */}
        <div className="max-w-5xl mb-16 sm:mb-24">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#6f3cff] uppercase">
            La Realidad del Ecommerce Moderno
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-medium text-[#070019] tracking-tight leading-[0.95] mt-4">
            Tu tienda no compite
            <br />
            con otras webs.
            <span className="block font-serif italic font-normal text-[#6f3cff] mt-2 sm:mt-4">
              Compite con el feed de Instagram.
            </span>
          </h2>
          <p className="mt-8 text-lg sm:text-2xl text-slate-600 max-w-3xl leading-relaxed font-normal">
            Si una página tarda más de 2 segundos en responder, el comprador vuelve al scroll y la venta se esfumó. Desarrollamos tiendas sobre Next.js 15 que cargan en milisegundos y ofrecen la agilidad táctil de una aplicación nativa.
          </p>
        </div>

        {/* Disruptive Interactive Benchmark Switcher */}
        <div className="border border-slate-300/80 rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-b from-slate-50/70 to-white shadow-md relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-[#6f3cff]" />
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-500">
                  Auditoría en Tiempo Real
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#070019] mt-1.5">
                Comparativa de rendimiento en dispositivos móviles
              </h3>
            </div>

            {/* Mode Switcher with animated pill */}
            <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl relative">
              <button
                type="button"
                onClick={() => setSpeedMode("giorgit")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer relative z-10 ${
                  speedMode === "giorgit" ? "text-white" : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {speedMode === "giorgit" && (
                  <motion.div
                    layoutId="speedModePill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-[#070019] rounded-xl shadow-sm -z-10"
                  />
                )}
                GiorgIT (Next.js Edge)
              </button>

              <button
                type="button"
                onClick={() => setSpeedMode("generic")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer relative z-10 ${
                  speedMode === "generic" ? "text-white" : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {speedMode === "generic" && (
                  <motion.div
                    layoutId="speedModePill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-[#070019] rounded-xl shadow-sm -z-10"
                  />
                )}
                Plataforma Convencional
              </button>
            </div>
          </div>

          {/* Dynamic Metrics Row with distinct instrumented cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8">
            {/* Metric 1 */}
            <motion.div
              layout
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">
                  Carga Móvil
                </span>
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    speedMode === "giorgit" ? "bg-emerald-500 animate-pulse" : "bg-rose-500"
                  }`}
                />
              </div>

              <div className="my-3">
                <div
                  className={`text-4xl sm:text-5xl font-mono font-bold tracking-tight transition-colors duration-300 ${
                    speedMode === "giorgit" ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {speedMode === "giorgit" ? "0.28s" : "3.85s"}
                </div>
              </div>

              {/* Visual latency bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 mb-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ease-out ${
                    speedMode === "giorgit" ? "bg-emerald-500" : "bg-rose-500"
                  }`}
                  style={{ width: speedMode === "giorgit" ? "12%" : "95%" }}
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                {speedMode === "giorgit"
                  ? "Carga imperceptible en 4G/5G"
                  : "Retraso visible que pierde ventas"}
              </p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div
              layout
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">
                  Pasos Checkout
                </span>
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    speedMode === "giorgit" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                  }`}
                />
              </div>

              <div className="my-3">
                <div
                  className={`text-4xl sm:text-5xl font-mono font-bold tracking-tight transition-colors duration-300 ${
                    speedMode === "giorgit" ? "text-emerald-600" : "text-amber-600"
                  }`}
                >
                  {speedMode === "giorgit" ? "1 Paso" : "5 Pasos"}
                </div>
              </div>

              {/* Visual steps bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 mb-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ease-out ${
                    speedMode === "giorgit" ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                  style={{ width: speedMode === "giorgit" ? "20%" : "100%" }}
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                {speedMode === "giorgit"
                  ? "Sin registros obligatorios"
                  : "Formularios largos y redirecciones"}
              </p>
            </motion.div>

            {/* Metric 3 */}
            <motion.div
              layout
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">
                  Lighthouse
                </span>
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    speedMode === "giorgit" ? "bg-emerald-500 animate-pulse" : "bg-rose-500"
                  }`}
                />
              </div>

              <div className="my-3">
                <div
                  className={`text-4xl sm:text-5xl font-mono font-bold tracking-tight transition-colors duration-300 ${
                    speedMode === "giorgit" ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {speedMode === "giorgit" ? "99 / 100" : "41 / 100"}
                </div>
              </div>

              {/* Visual score bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 mb-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ease-out ${
                    speedMode === "giorgit" ? "bg-emerald-500" : "bg-rose-500"
                  }`}
                  style={{ width: speedMode === "giorgit" ? "99%" : "41%" }}
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                {speedMode === "giorgit"
                  ? "Optimización técnica máxima"
                  : "Penalizado por scripts de apps"}
              </p>
            </motion.div>

            {/* Metric 4 */}
            <motion.div
              layout
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">
                  Rebote Estimado
                </span>
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    speedMode === "giorgit" ? "bg-emerald-500 animate-pulse" : "bg-rose-500"
                  }`}
                />
              </div>

              <div className="my-3">
                <div
                  className={`text-4xl sm:text-5xl font-mono font-bold tracking-tight transition-colors duration-300 ${
                    speedMode === "giorgit" ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {speedMode === "giorgit" ? "14%" : "54%"}
                </div>
              </div>

              {/* Visual bounce bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 mb-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ease-out ${
                    speedMode === "giorgit" ? "bg-emerald-500" : "bg-rose-500"
                  }`}
                  style={{ width: speedMode === "giorgit" ? "14%" : "54%" }}
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                {speedMode === "giorgit"
                  ? "El usuario navega y compra"
                  : "La mayoría se va antes de ver la web"}
              </p>
            </motion.div>
          </div>
        </div>

        {/* 3 Pillars of Craft (High-presence architectural cards) */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-12 border-t border-slate-200/80">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#6f3cff] bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-full">
                  01 · Backend
                </span>
                <div className="w-8 h-8 rounded-full bg-purple-50 text-[#6f3cff] flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#070019]">
                Arquitectura Server Components
              </h4>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Renderizado ultrarrápido desde el borde más cercano a tu comprador. Las imágenes se comprimen al instante y los catálogos de miles de productos se exploran sin pestañear.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#6f3cff] bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-full">
                  02 · Conversión
                </span>
                <div className="w-8 h-8 rounded-full bg-purple-50 text-[#6f3cff] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#070019]">
                Checkout sin fricción para LATAM
              </h4>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Validación instantánea de tarjetas, DNI, cuotas bancarias sin interés y código postal para cotizar Andreani en el momento. Menos clics equivalen directamente a más facturación.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#6f3cff] bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-full">
                  03 · Retención
                </span>
                <div className="w-8 h-8 rounded-full bg-purple-50 text-[#6f3cff] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#070019]">
                Recuperación activa por WhatsApp
              </h4>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Si un cliente deja un pedido a medias, se generan alertas inteligentes para retomar la conversación de venta directamente por chat con el carrito precargado.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: The 0% Manifesto & Financial Reality
          Sizable typographic authority, dynamic animated terminal
          ========================================================================= */}
      <section
        id="comparativa"
        className="w-full py-18 sm:py-28 border-t border-slate-200/80"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Manifesto with grand scale */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#6f3cff] uppercase">
              El Costo Oculto de Crecer
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium text-[#070019] tracking-tight leading-[0.96]">
              Las plataformas cerradas
              <span className="block font-serif italic font-normal text-[#070019] mt-2 sm:mt-3">
                te cobran un impuesto al éxito.
              </span>
            </h2>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed mt-2">
              La mayoría de los servicios te cobran un porcentaje fijo de cada venta que hacés. Cuanto más esfuerzo ponés en pauta publicitaria y mejor te va, más dinero te retienen mes a mes por el mismo servicio.
            </p>

            {/* Sculpted 0% Card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-50/70 via-white to-purple-50/40 border border-purple-200/70 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
            >
              <span className="text-8xl sm:text-9xl md:text-[9.5rem] font-sans font-black tracking-tighter text-[#070019] leading-none select-none">
                0%
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono font-bold text-[#6f3cff] bg-[#6f3cff]/10 px-3 py-1 rounded-full uppercase tracking-wider w-fit">
                  Para Siempre
                </span>
                <p className="text-2xl sm:text-3xl font-bold text-[#070019] leading-tight">
                  Comisión GiorgIT.
                </p>
                <p className="text-base sm:text-lg text-slate-600">
                  Tu facturación es 100% tuya. Ni comisiones ocultas ni costos por transacción.
                </p>
              </div>
            </motion.div>

            <div className="pt-4">
              <motion.a
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                href="#contacto"
                className="inline-flex items-center gap-3 text-base font-bold text-white bg-[#070019] hover:bg-[#6f3cff] px-7 py-4 rounded-2xl transition-all shadow-md group cursor-pointer"
              >
                <span>Conversar sobre tu migración sin costo</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>

          {/* Right Column: Live Interactive ROI Calculator Terminal */}
          <div className="lg:col-span-6 bg-[#080a1a] text-white rounded-[32px] p-8 sm:p-12 lg:p-14 shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Luminous atmospheric cosmic orb */}
            <div
              className="absolute -right-20 -top-20 w-80 h-80 pointer-events-none rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(111,60,255,0.45), transparent 70%)",
              }}
            />

            <div className="relative z-10 flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#a78bfa]" />
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#a78bfa] font-semibold">
                    Auditoría Financiera en Vivo
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 tracking-tight">
                  ¿Cuánto dinero estás dejando en el camino?
                </h3>
              </div>

              {/* Slider: Ventas Mensuales */}
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-slate-300 font-medium">Ventas brutas mensuales</span>
                  <motion.span
                    key={sales}
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono font-bold text-white text-xl sm:text-2xl"
                  >
                    ${formatMoney(sales)} ARS
                  </motion.span>
                </div>

                <input
                  type="range"
                  min="2000000"
                  max="60000000"
                  step="1000000"
                  value={sales}
                  onChange={(e) => setSales(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#a78bfa]"
                />
                <div className="flex justify-between text-xs font-mono text-slate-500">
                  <span>$2M ARS</span>
                  <span>$30M ARS</span>
                  <span>$60M ARS</span>
                </div>
              </div>

              {/* Selector de Tasa con active pill animado */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-slate-300 font-medium">Comisión cobrada por tu plataforma actual</span>
                  <span className="font-mono font-bold text-[#a78bfa] text-lg">{rate.toFixed(1)}%</span>
                </div>

                <div className="grid grid-cols-4 gap-2.5">
                  {[0.5, 1.0, 2.0, 3.0].map((val) => {
                    const isSelected = rate === val;
                    return (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setRate(val)}
                        className={`py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-mono font-bold transition-colors cursor-pointer relative ${
                          isSelected ? "text-white" : "text-slate-300 hover:text-white bg-white/10 hover:bg-white/15"
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="activeRatePill"
                            transition={{ type: "spring", stiffness: 450, damping: 32 }}
                            className="absolute inset-0 bg-[#6f3cff] rounded-xl shadow-md -z-10"
                          />
                        )}
                        {val.toFixed(1)}%
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Loss Metrics Panel */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  layout
                  className="p-5 sm:p-6 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xs"
                >
                  <span className="text-xs sm:text-sm text-slate-400 font-medium block">
                    Comisión que pagás al año
                  </span>
                  <span className="text-2xl sm:text-3xl xl:text-4xl font-mono font-bold text-rose-400 mt-2 block tracking-tight">
                    ${formatMoney(yearlyCommission)}
                  </span>
                  <small className="text-xs text-slate-400 block mt-2">
                    Cálculo a 12 meses de facturación
                  </small>
                </motion.div>

                <motion.div
                  layout
                  className="p-5 sm:p-6 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xs"
                >
                  <span className="text-xs sm:text-sm text-slate-400 font-medium block">
                    Proyección a 3 años
                  </span>
                  <span className="text-2xl sm:text-3xl xl:text-4xl font-mono font-bold text-[#a78bfa] mt-2 block tracking-tight">
                    ${formatMoney(threeYearsCommission)}
                  </span>
                  <small className="text-xs text-slate-400 block mt-2">
                    Dinero retenido solo por comisiones
                  </small>
                </motion.div>
              </div>

              {/* Retention Visual Bar */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col gap-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-bold">Con GiorgIT: 100% tuyo</span>
                  <span className="text-rose-400">Otras: Pierdes ${(rate).toFixed(1)}% por venta</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden flex">
                  <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${100 - rate * 2}%` }} />
                  <div className="h-full bg-rose-500 transition-all duration-300" style={{ width: `${rate * 2}%` }} />
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Con GiorgIT pagás un único desarrollo y la plataforma es 100% tuya. La inversión se recupera en los primeros meses de operación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: The Build Matrix / Asymmetric Plan Architecture
          High-end architectural pricing with substantial presence and readable scales
          ========================================================================= */}
      <section
        id="planes"
        className="w-full py-18 sm:py-28 border-t border-slate-200/80"
      >
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#6f3cff] uppercase">
            Inversión Transparente
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium text-[#070019] tracking-tight leading-[0.98] mt-3">
            Una buena tienda.
            <span className="block font-serif italic font-normal text-[#070019] mt-2 sm:mt-3">
              Las cuentas claras desde el inicio.
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Acordamos un alcance preciso y un presupuesto fijo antes de comenzar. Sin sorpresas ni costos ocultos posteriores.
          </p>
        </div>

        {/* Asymmetric 3-Tier Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Tier 1: Starter Store */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-between p-8 sm:p-10 rounded-[28px] border border-slate-200/90 bg-white hover:border-slate-300 shadow-sm hover:shadow-xl transition-all"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full inline-block">
                01 · Lanzamiento
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#070019] mt-3">Starter Store</h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Ideal para marcas que quieren su primera tienda profesional independiente, con carga instantánea y sin comisiones por venta.
              </p>

              <div className="my-8 pt-8 border-t border-slate-200">
                <span className="text-4xl sm:text-5xl font-sans font-bold text-[#070019] tracking-tight">
                  $890.000
                </span>
                <span className="block text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">
                  ARS · desarrollo, pago único
                </span>
              </div>

              <ul className="flex flex-col gap-4 text-sm sm:text-base text-slate-700 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#6f3cff] flex-shrink-0 mt-0.5" />
                  <span>Diseño a medida optimizado para celular</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#6f3cff] flex-shrink-0 mt-0.5" />
                  <span>Catálogo ultrarrápido con carga instantánea</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#6f3cff] flex-shrink-0 mt-0.5" />
                  <span>Mercado Pago y transferencias con 10% OFF</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#6f3cff] flex-shrink-0 mt-0.5" />
                  <span>Panel autoadministrable de productos y pedidos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#6f3cff] flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-[#070019]">0% comisión sobre tus ventas</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappLink("Hola GiorgIT, me interesa consultar por el plan Starter Store.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-sm sm:text-base font-bold py-3.5 px-5 rounded-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-xs"
              >
                <span>Consultar Starter Store</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Tier 2: Growth Scale (The Dominant Centerpiece) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-between p-8 sm:p-11 lg:p-12 rounded-[32px] border-2 border-[#6f3cff] bg-[#070019] text-white shadow-2xl relative lg:-translate-y-4 hover:shadow-purple-500/20 transition-all"
          >
            <div className="absolute -top-4 right-8 bg-[#6f3cff] text-white text-xs font-mono font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Más Elegido</span>
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#a78bfa] bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
                02 · Escala & Automatización
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mt-3">Growth Scale</h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Nuestra solución insignia para marcas que ya facturan y necesitan automatizar envíos, recuperar carritos y maximizar conversión.
              </p>

              <div className="my-8 pt-8 border-t border-white/15">
                <span className="text-5xl sm:text-6xl font-sans font-bold text-white tracking-tight">
                  $1.590.000
                </span>
                <span className="block text-xs sm:text-sm text-slate-400 mt-1.5 font-medium">
                  ARS · desarrollo, pago único
                </span>
              </div>

              <ul className="flex flex-col gap-4 text-sm sm:text-base text-slate-200 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a78bfa] flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">Todo lo incluido en Starter Store</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a78bfa] flex-shrink-0 mt-0.5" />
                  <span>Integración logística Andreani y OCA en tiempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a78bfa] flex-shrink-0 mt-0.5" />
                  <span>Cobros internacionales con Stripe y PayPal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a78bfa] flex-shrink-0 mt-0.5" />
                  <span>Variantes múltiples (talles, colores, stock sincronizado)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a78bfa] flex-shrink-0 mt-0.5" />
                  <span>Recuperación automatizada de carritos por WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a78bfa] flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">Auditoría Core Web Vitals 95+ garantizada</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/15">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappLink("Hola GiorgIT, me interesa consultar por el plan Growth Scale.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-sm sm:text-base font-bold py-4 px-6 rounded-xl bg-white text-[#070019] hover:bg-[#f9f8ff] transition-all shadow-xl hover:shadow-purple-500/30"
              >
                <span>Elegir Plan Growth Scale</span>
                <ArrowUpRight className="w-5 h-5 text-[#6f3cff]" />
              </motion.a>
            </div>
          </motion.div>

          {/* Tier 3: Enterprise */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-between p-8 sm:p-10 rounded-[28px] border border-slate-200/90 bg-white hover:border-slate-300 shadow-sm hover:shadow-xl transition-all"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full inline-block">
                03 · Corporativo & Headless
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#070019] mt-3">Enterprise</h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Para operaciones con requerimientos complejos, integración con sistemas ERP de facturación o venta mayorista B2B y minorista.
              </p>

              <div className="my-8 pt-8 border-t border-slate-200">
                <span className="text-4xl sm:text-5xl font-sans font-bold text-[#070019] tracking-tight">
                  A Medida
                </span>
                <span className="block text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">
                  Presupuesto según arquitectura técnica
                </span>
              </div>

              <ul className="flex flex-col gap-4 text-sm sm:text-base text-slate-700 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#6f3cff] flex-shrink-0 mt-0.5" />
                  <span>Sincronización con ERP (Tango, SAP, Bejerman)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#6f3cff] flex-shrink-0 mt-0.5" />
                  <span>Venta mayorista B2B y minorista en una sola web</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#6f3cff] flex-shrink-0 mt-0.5" />
                  <span>Arquitectura multi-sucursal y multi-moneda</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#6f3cff] flex-shrink-0 mt-0.5" />
                  <span>Infraestructura dedicada y soporte prioritario</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappLink("Hola GiorgIT, me interesa consultar por una solución Enterprise a medida.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-sm sm:text-base font-bold py-3.5 px-5 rounded-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-xs"
              >
                <span>Conversar alcance Enterprise</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: Preguntas Frecuentes (Editorial Minimalist Accordion)
          Smooth Framer Motion accordion expand/collapse, robust sizing
          ========================================================================= */}
      <section
        id="faq"
        className="w-full py-18 sm:py-28 border-t border-slate-200/80"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#6f3cff] uppercase">
              Respuestas Claras
            </span>
            <h2 className="text-4xl sm:text-6xl font-sans font-medium text-[#070019] tracking-tight leading-[0.98]">
              Está bueno
              <span className="block font-serif italic font-normal text-[#070019] mt-2">
                preguntarlo.
              </span>
            </h2>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed mt-2">
              Una inversión importante en tu negocio merece respuestas honestas, directas y sin rodeos técnicos.
            </p>
          </div>

          <div className="lg:col-span-7 divide-y divide-slate-200/90">
            {faqList.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.q} className="py-6 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left py-2 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg sm:text-xl font-bold text-[#070019] group-hover:text-[#6f3cff] transition-colors pr-6">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 flex-shrink-0 group-hover:bg-[#6f3cff] group-hover:text-white transition-colors"
                    >
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-4 pr-10">
                          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: Contacto Directo: The Dark Bookend Chip
          Matches the Hero's cosmic indigo quality, enlarged inputs and touch points
          ========================================================================= */}
      <section
        id="contacto"
        className="w-full rounded-[32px] sm:rounded-[40px] bg-[#070019] text-white p-8 sm:p-16 lg:p-20 relative overflow-hidden shadow-2xl my-10 sm:my-20"
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 100% 0%, rgba(111, 60, 255, 0.32) 0%, transparent 65%)",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#a78bfa] font-bold">
              Próximo Paso
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-medium text-white tracking-tight leading-[1.02]">
              Hagamos lugar para
              <span className="block font-serif italic font-normal text-white mt-2 sm:mt-3">
                tu marca.
              </span>
            </h2>
            <p className="text-base sm:text-xl text-[#f9f8ff]/85 leading-relaxed mt-3 max-w-lg">
              Contanos qué vendés y qué tenés en mente. Te respondemos directamente por WhatsApp para coordinar una primera charla sin compromiso.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form
              action="https://wa.me/5491138402948"
              method="get"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl bg-white/[0.05] border border-white/10 p-7 sm:p-10 flex flex-col gap-5 shadow-2xl backdrop-blur-sm"
            >
              <div>
                <label
                  htmlFor="brand-name"
                  className="block text-sm font-semibold text-[#f9f8ff]/90 mb-2.5"
                >
                  ¿Cómo se llama tu marca o negocio?
                </label>
                <input
                  id="brand-name"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Ej: Objeto Store"
                  className="w-full bg-white/[0.07] border border-white/15 focus:border-[#6f3cff] text-white placeholder-[#f9f8ff]/40 rounded-xl px-5 py-4 text-base transition-colors outline-none"
                  autoComplete="organization"
                />
              </div>

              <div>
                <label
                  htmlFor="project-type"
                  className="block text-sm font-semibold text-[#f9f8ff]/90 mb-2.5"
                >
                  ¿En qué etapa te encontrás?
                </label>
                <select
                  id="project-type"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full bg-[#0e0828] border border-white/15 focus:border-[#6f3cff] text-white rounded-xl px-5 py-4 text-base transition-colors outline-none cursor-pointer"
                >
                  <option className="bg-[#070019]">Quiero una tienda nueva desde cero</option>
                  <option className="bg-[#070019]">Quiero migrar mi tienda actual sin comisiones</option>
                  <option className="bg-[#070019]">Necesito una solución a medida o venta mayorista</option>
                </select>
              </div>

              <input
                type="hidden"
                name="text"
                value={`Hola GiorgIT. Soy de ${brand.trim() || "una marca"}. ${project}. Me gustaría coordinar una charla sobre el proyecto.`}
              />

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-3 w-full inline-flex items-center justify-between bg-white hover:bg-[#f9f8ff] text-[#070019] font-bold text-base rounded-xl px-6 py-4.5 transition-all shadow-xl hover:shadow-violet-500/25 active:scale-[0.99] cursor-pointer"
              >
                <span>Iniciar conversación por WhatsApp</span>
                <ArrowUpRight className="w-5 h-5 text-[#6f3cff]" />
              </motion.button>

              <p className="text-xs text-[#f9f8ff]/60 text-center mt-1">
                Se abre WhatsApp con tu mensaje listo para enviar directamente con los fundadores.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: Clean Minimalist Light Footer
          Comfortable measure, legible links, balanced hierarchy
          ========================================================================= */}
      <footer className="w-full py-12 sm:py-16 border-t border-slate-200/90 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6">
          <div>
            <span className="text-2xl font-bold font-sans tracking-tight text-[#070019] flex items-center gap-1.5">
              GiorgIT
              <span className="w-2 h-2 rounded-full bg-[#6f3cff]" />
            </span>
            <p className="text-sm text-slate-500 mt-2">
              Plataformas ecommerce de alto rendimiento. Desarrolladas en Buenos Aires, Argentina.
            </p>
          </div>

          <a
            href="#soluciones"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#6f3cff] px-4 py-2.5 rounded-xl hover:bg-slate-100 transition-all cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} GiorgIT. Todos los derechos reservados.</span>
          <nav className="flex items-center gap-6 sm:gap-8 font-medium" aria-label="Navegación del pie">
            <a href="#bento" className="hover:text-[#070019] transition-colors">
              Rendimiento
            </a>
            <a href="#comparativa" className="hover:text-[#070019] transition-colors">
              0% Comisión
            </a>
            <a href="#planes" className="hover:text-[#070019] transition-colors">
              Inversión
            </a>
            <a href="#contacto" className="hover:text-[#070019] transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
