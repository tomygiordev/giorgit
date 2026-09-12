"use client";

import React, { useState } from "react";
import styles from "./StorefrontStory.module.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
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

  // Decorative strokes draw once; their static paths remain visible without JS.
  const [drawnAccents, setDrawnAccents] = useState({ zero: false, brand: false });

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
    <div className={styles.story}>
      {/* =========================================================================
          SECTION 1: Dynamic Kinetic Ticker / Ecosystem Strip
          Generous breathing room, crisp badge typography, interactive hover physics
          ========================================================================= */}
      <section id="tecnologia" className={styles.integrations} aria-label="Integraciones de la tienda">
        <p>Tu operación, conectada.<span>Pagos, envíos y conversaciones.</span></p>
        <div className={styles.integrationNames}><span>mercado pago</span><span>stripe</span><span>Andreani</span><span>WhatsApp</span></div>
        <p className={styles.integrationNote}>También OCA, Correo Argentino<br />y facturación integrada.</p>
      </section>

      {/* =========================================================================
          SECTION 2: The Core Thesis / Disruptive Staggered Typography & Benchmark
          High contrast, bold editorial voice, interactive animated benchmark
          ========================================================================= */}
      <section
        id="bento"
        className={styles.performance}
      >
        {/* Massive Staggered Headline */}
        <div className={styles.performanceHeading}>
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#6f3cff] uppercase">
            01 / La experiencia
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-medium text-[#070019] tracking-tight leading-[0.95] mt-4">
            Tu tienda no compite
            <br />
            con otras webs.
            <span className="block font-serif italic font-normal text-[#6f3cff] mt-2 sm:mt-4">
              Compite con el <span className={styles.gestureWord}>scroll.
                <svg className={styles.gestureUnderline} viewBox="0 0 180 16" fill="none" aria-hidden="true" focusable="false">
                  <path d="M3 10C45 3 114 2 175 7M33 14C79 8 123 8 153 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </h2>
          <p className="mt-8 text-lg sm:text-2xl text-slate-600 max-w-3xl leading-relaxed font-normal">
            Entre descubrir un producto y comprarlo hay unos pocos segundos. Hacemos que cada uno cuente: una tienda ágil, fácil de recorrer y de comprar.
          </p>
        </div>

        {/* Disruptive Interactive Benchmark Switcher */}
        <div className={styles.benchmark}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-[#6f3cff]" />
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-500">
                  Demostración interactiva
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#070019] mt-1.5">
                Menos espera. Más tienda.
              </h3>
            </div>

            {/* Mode Switcher with animated pill */}
            <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl relative">
              <button
                type="button"
                onClick={() => setSpeedMode("giorgit")}
                aria-pressed={speedMode === "giorgit"}
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
                GiorgIT
              </button>

              <button
                type="button"
                onClick={() => setSpeedMode("generic")}
                aria-pressed={speedMode === "generic"}
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
                Convencional
              </button>
            </div>
          </div>

          {/* Dynamic Metrics Row with distinct instrumented cards */}
          <div className={styles.metrics}>
            {/* Metric 1 */}
            <motion.div
              layout
              className={styles.metric}
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
              className={styles.metric}
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
              className={styles.metric}
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
              className={styles.metric}
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

        <p className={styles.demoNote}>Demostración ilustrativa: los valores muestran dos escenarios. No son una auditoría en vivo ni resultados garantizados.</p>

        {/* 3 Pillars of Craft (High-presence architectural cards) */}
        <div className={styles.craft}>
          <motion.div
            transition={{ duration: 0.2 }}
            className={styles.craftItem}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#6f3cff] bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-full">
                  01 / Velocidad
                </span>
                <div aria-hidden="true" className="w-8 h-8 rounded-full bg-purple-50 text-[#6f3cff] flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#070019]">
                Rápida desde el primer producto.
              </h4>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Renderizado ultrarrápido desde el borde más cercano a tu comprador. Las imágenes se comprimen al instante y los catálogos de miles de productos se exploran sin pestañear.
              </p>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 0.2 }}
            className={styles.craftItem}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#6f3cff] bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-full">
                  02 / Compra
                </span>
                <div aria-hidden="true" className="w-8 h-8 rounded-full bg-purple-50 text-[#6f3cff] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#070019]">
                Comprar tiene que ser fácil.
              </h4>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Validación instantánea de tarjetas, DNI, cuotas bancarias sin interés y código postal para cotizar Andreani en el momento. Menos clics equivalen directamente a más facturación.
              </p>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 0.2 }}
            className={styles.craftItem}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#6f3cff] bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-full">
                  03 / Continuidad
                </span>
                <div aria-hidden="true" className="w-8 h-8 rounded-full bg-purple-50 text-[#6f3cff] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#070019]">
                La conversación sigue.
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
          Compact, proportionate editorial scale & refined financial terminal
          ========================================================================= */}
      <section
        id="comparativa"
        className={styles.comparison}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Manifesto with balanced scale */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#6f3cff] uppercase">
              02 / Tu negocio, tus números
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium text-[#070019] tracking-tight leading-[1.08]">
              Que crecer
              <span className="block font-serif italic font-normal text-[#070019] mt-1.5">
                te rinda a vos.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Si tu plataforma cobra un porcentaje por venta, su costo crece con tu facturación. En GiorgIT acordamos el desarrollo. Lo que viene después es tuyo.
            </p>

            {/* Sculpted 0% Card - Balanced & Harmonious */}
            <motion.div
              className={styles.zero}
            >
              <span className={`${styles.zeroFigure} text-5xl sm:text-6xl md:text-7xl font-sans font-black tracking-tighter text-[#070019] leading-none select-none`}>
                0%
                <motion.svg
                  className={`${styles.zeroCircle} ${drawnAccents.zero ? styles.accentDrawn : ""}`}
                  viewBox="0 0 144 104"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                  viewport={{ once: true, amount: 0.7 }}
                  onViewportEnter={() => setDrawnAccents((current) => ({ ...current, zero: true }))}
                >
                  <path pathLength="1" d="M123 9C92 1 45 1 18 15C-1 27 0 74 19 89C42 107 108 103 129 88C148 73 145 29 130 16C122 10 111 7 99 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </motion.svg>
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-mono font-bold text-[#6f3cff] bg-[#6f3cff]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider w-fit">
                  Para Siempre
                </span>
                <p className="text-xl sm:text-2xl font-bold text-[#070019] leading-tight">
                  Comisión GiorgIT.
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Sin cargos de GiorgIT por transacción. Las pasarelas de pago tienen sus propias comisiones.
                </p>
              </div>
            </motion.div>

            <div className="pt-2">
              <motion.a
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
                href="#contacto"
                className="inline-flex items-center gap-2.5 text-sm font-bold text-white bg-[#070019] hover:bg-[#6f3cff] px-6 py-3 rounded-xl transition-all shadow-sm group cursor-pointer"
              >
                <span>Conversemos sobre tu tienda</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>

          {/* The calculator occupies the other half of the desktop grid. */}
          <div className={styles.calculator} aria-labelledby="calculator-title">
            <div className={styles.calculatorContent}>
              <div>
                <span className={styles.calculatorEyebrow}>Hacé la cuenta</span>
                <h3 id="calculator-title" className="text-white mt-1 tracking-tight">
                  ¿Cuánto representa esa comisión?
                </h3>
              </div>

              <div>
                <div className={styles.calculatorLabelRow}>
                  <label htmlFor="monthly-sales">Ventas brutas mensuales</label>
                  <output htmlFor="monthly-sales" className={styles.salesValue}>
                    ${formatMoney(sales)} ARS
                  </output>
                </div>

                <input
                  id="monthly-sales"
                  type="range"
                  aria-valuetext={`${formatMoney(sales)} pesos por mes`}
                  min="2000000"
                  max="60000000"
                  step="1000000"
                  value={sales}
                  onChange={(e) => setSales(Number(e.target.value))}
                  className={styles.salesRange}
                  style={{ "--range-fill": `${((sales - 2000000) / 58000000) * 100}%` } as React.CSSProperties}
                />
                <div className={styles.rangeTicks} aria-hidden="true">
                  <span>$2M ARS</span>
                  <span>$30M ARS</span>
                  <span>$60M ARS</span>
                </div>
              </div>

              <div>
                <div className={styles.calculatorLabelRow}>
                  <span id="commission-label">Comisión de tu plataforma actual</span>
                  <span className={styles.rateValue}>{rate.toFixed(1)}%</span>
                </div>

                <div className={styles.rateOptions} role="group" aria-labelledby="commission-label">
                  {[0.5, 1.0, 2.0, 3.0].map((val) => {
                    const isSelected = rate === val;
                    return (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setRate(val)}
                        aria-pressed={isSelected}
                        className={styles.rateOption}
                      >
                        {val.toFixed(1)}%
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={styles.calculatorResults} aria-live="polite" aria-atomic="true">
                <div>
                  <span id="annual-commission-label">
                    Comisión que pagás al año
                  </span>
                  <output aria-labelledby="annual-commission-label" htmlFor="monthly-sales">
                    ${formatMoney(yearlyCommission)}
                  </output>
                  <small>
                    Cálculo a 12 meses de facturación
                  </small>
                </div>

                <div>
                  <span id="three-year-commission-label">
                    Proyección a 3 años
                  </span>
                  <output aria-labelledby="three-year-commission-label" htmlFor="monthly-sales">
                    ${formatMoney(threeYearsCommission)}
                  </output>
                  <small>
                    Dinero retenido solo por comisiones
                  </small>
                </div>
              </div>

              {/* Retention Visual Bar */}
              <div className={styles.retention}>
                <div className={styles.retentionLabels}>
                  <span>Comisión GiorgIT: 0%</span>
                  <span>Comisión actual: {rate.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden flex">
                  <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${100 - rate}%` }} />
                  <div className="h-full bg-rose-500 transition-all duration-300" style={{ width: `${rate}%` }} />
                </div>
              </div>

              <p className={styles.calculatorNote}>
                Estimación con ventas y comisión constantes. No incluye el desarrollo, hosting ni cargos del medio de pago.
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
        className={styles.plans}
      >
        <div className={styles.plansHeading}>
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#6f3cff] uppercase">
            03 / La inversión
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium text-[#070019] tracking-tight leading-[0.98] mt-3">
            Una buena tienda.
            <span className="block font-serif italic font-normal text-[#070019] mt-2 sm:mt-3">
              Las cuentas claras.
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Acordamos un alcance preciso y un presupuesto fijo antes de comenzar. Sin sorpresas ni costos ocultos posteriores.
          </p>
        </div>

        {/* Asymmetric 3-Tier Layout */}
        <div className={styles.planList}>
          {/* Tier 1: Starter Store */}
          <motion.div
            transition={{ duration: 0.2 }}
            className={styles.plan}
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
            transition={{ duration: 0.2 }}
            className={styles.featuredPlan}
          >
            <div className={styles.popular}>
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
            transition={{ duration: 0.2 }}
            className={styles.plan}
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
        className={styles.faq}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#6f3cff] uppercase">
              04 / Antes de empezar
            </span>
            <h2 className="text-4xl sm:text-6xl font-sans font-medium text-[#070019] tracking-tight leading-[0.98]">
              Está bueno
              <span className="block font-serif italic font-normal text-[#070019] mt-2">
                preguntarlo.
              </span>
            </h2>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed mt-2">
              Las preguntas que aparecen cuando una tienda empieza a tomar forma.
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
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-lg sm:text-xl font-bold text-[#070019] group-hover:text-[#6f3cff] transition-colors pr-6">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={styles.faqToggle}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
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
        className={styles.contact}
      >
        <svg className={styles.contactFlourish} viewBox="0 0 116 30" fill="none" aria-hidden="true" focusable="false">
          <path d="M1 16C19 16 30 9 46 13C61 18 75 23 96 14M96 14L89 13M96 14L92 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M109 2V12M104 7H114M105.5 3.5L112.5 10.5M112.5 3.5L105.5 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#a78bfa] font-bold">
              ¿Lo hacemos?
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-medium text-white tracking-tight leading-[1.02]">
              Hagamos lugar para
              <span className="block font-serif italic font-normal text-white mt-2 sm:mt-3">
                <span className={styles.brandWord}>tu marca.
                  <motion.svg
                    className={`${styles.brandUnderline} ${drawnAccents.brand ? styles.accentDrawn : ""}`}
                    viewBox="0 0 230 18"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                    viewport={{ once: true, amount: 0.7 }}
                    onViewportEnter={() => setDrawnAccents((current) => ({ ...current, brand: true }))}
                  >
                    <path pathLength="1" d="M3 12C55 4 153 3 226 7M154 14C177 11 201 11 215 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  </motion.svg>
                </span>
              </span>
            </h2>
            <p className="text-base sm:text-xl text-[#f9f8ff]/85 leading-relaxed mt-3 max-w-lg">
              Contanos qué vendés y qué tenés en mente. La primera charla es para conocernos y entender qué necesitás.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form
              action="https://wa.me/5491138402948"
              method="get"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactForm}
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
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-3 w-full inline-flex items-center justify-between bg-white hover:bg-[#f9f8ff] text-[#070019] font-bold text-base rounded-xl px-6 py-4.5 transition-all shadow-xl hover:shadow-violet-500/25 active:scale-[0.99] cursor-pointer"
              >
                <span>Conversemos</span>
                <ArrowUpRight className="w-5 h-5 text-[#6f3cff]" />
              </motion.button>

              <p className="text-xs text-[#f9f8ff]/60 text-center mt-1">
                Se abre WhatsApp con tu mensaje listo. Vos decidís cuándo enviarlo.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: Clean Minimalist Light Footer
          Comfortable measure, legible links, balanced hierarchy
          ========================================================================= */}
      <footer className={styles.footer}>
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
