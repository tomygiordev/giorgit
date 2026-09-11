"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Zap,
  ShieldCheck,
  Activity,
  ArrowUpRight,
  Clock,
  CircleDot,
  Radio,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function MetricsTab() {
  const [activeRange, setActiveRange] = useState<"hoy" | "7d" | "30d">("hoy");
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  const recentOrders = [
    {
      id: "GP-84920",
      time: "Hace 34 seg",
      amount: 145000,
      city: "CABA",
      gateway: "Mercado Pago",
      latency: "0.38s",
      status: "Despachado Andreani",
    },
    {
      id: "GP-84919",
      time: "Hace 3 min",
      amount: 246500,
      city: "Córdoba",
      gateway: "Transferencia (-15%)",
      latency: "0.28s",
      status: "Validación Inmediata",
    },
    {
      id: "GP-84918",
      time: "Hace 8 min",
      amount: 89000,
      city: "Rosario",
      gateway: "Stripe USD",
      latency: "0.34s",
      status: "Aprobado Stripe",
    },
    {
      id: "GP-84917",
      time: "Hace 14 min",
      amount: 165000,
      city: "Mendoza",
      gateway: "Mercado Pago",
      latency: "0.31s",
      status: "Despachado Andreani",
    },
    {
      id: "GP-84916",
      time: "Hace 21 min",
      amount: 145000,
      city: "Mar del Plata",
      gateway: "Transferencia",
      latency: "0.29s",
      status: "Acreditado",
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white text-[#070019]">
      {/* Top Telemetry Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold text-[#070019] uppercase tracking-wider">
              Telemetría de Ventas en Vivo
            </span>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">
              Edge Runtime • eze1
            </span>
          </div>
          <span className="text-xs text-slate-500 mt-0.5 block">
            Monitor ejecutivo de facturación, conversión en checkout y latencia de infraestructura
          </span>
        </div>

        <div className="flex items-center gap-1 bg-[#f8f7fc] p-1 rounded-xl border border-slate-200">
          {(["hoy", "7d", "30d"] as const).map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeRange === range
                  ? "bg-white text-[#070019] shadow-xs font-bold border border-slate-200"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {range === "hoy" ? "Hoy" : range === "7d" ? "Últimos 7 días" : "Últimos 30 días"}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Executive Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {/* Card 1: Facturación Hoy */}
        <div className="p-4 rounded-2xl bg-[#f8f7fc] border border-slate-200/90 relative overflow-hidden group hover:border-[#6f3cff]/40 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="font-semibold text-slate-600">Facturación Hoy</span>
            <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#070019] tracking-tight">
            $2.480.000
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>+32% vs ayer</span>
            <span className="text-slate-400 font-normal ml-1">($1.87m)</span>
          </div>
        </div>

        {/* Card 2: Conversión */}
        <div className="p-4 rounded-2xl bg-[#f8f7fc] border border-slate-200/90 relative overflow-hidden group hover:border-[#6f3cff]/40 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="font-semibold text-slate-600">Tasa Conversión</span>
            <span className="w-7 h-7 rounded-lg bg-purple-50 text-[#6f3cff] flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#070019] tracking-tight">
            5.14%
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[#6f3cff] font-semibold mt-1">
            <span>3.6x vs Shopify</span>
            <span className="text-slate-400 font-normal ml-1">(promedio 1.4%)</span>
          </div>
        </div>

        {/* Card 3: TTFB Global */}
        <div className="p-4 rounded-2xl bg-[#f8f7fc] border border-slate-200/90 relative overflow-hidden group hover:border-[#6f3cff]/40 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="font-semibold text-slate-600">TTFB Global</span>
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#070019] tracking-tight">
            0.31s
          </div>
          <div className="flex items-center gap-1 text-[11px] text-blue-700 font-semibold mt-1">
            <span>Lighthouse 100/100</span>
            <span className="text-slate-400 font-normal ml-1">(Edge Vercel)</span>
          </div>
        </div>

        {/* Card 4: 0% Comisiones */}
        <div className="p-4 rounded-2xl bg-[#f8f7fc] border border-slate-200/90 relative overflow-hidden group hover:border-[#6f3cff]/40 transition-colors">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="font-semibold text-slate-600">Comisiones</span>
            <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 tracking-tight">
            0%
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold mt-1">
            <span>$124.000 ahorrados hoy</span>
            <span className="text-slate-400 font-normal ml-1">(100% tuyo)</span>
          </div>
        </div>
      </div>

      {/* Live Interactive SVG Curve Chart */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#fbfaff] border border-slate-200/90 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-[#6f3cff] animate-pulse" />
              <span className="text-xs font-bold text-[#070019]">
                Velocidad de Ventas por Hora (Curva en Vivo)
              </span>
            </div>
            <span className="text-[11px] text-slate-500">
              Pico registrado a las 14:30 hs ($410.000/h durante campaña de email)
            </span>
          </div>
          <span className="text-xs font-mono font-bold text-[#6f3cff] bg-[#6f3cff]/10 px-2.5 py-0.5 rounded-full">
            +48 órdenes hoy
          </span>
        </div>

        {/* SVG Area Chart */}
        <div className="w-full h-36 sm:h-44 relative">
          <svg
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            className="w-full h-full overflow-visible"
          >
            <defs>
              <linearGradient id="salesVelocityGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6f3cff" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#6f3cff" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#6f3cff" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Subtle horizontal grid lines */}
            <line x1="0" y1="40" x2="1000" y2="40" stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="0" y1="90" x2="1000" y2="90" stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="0" y1="140" x2="1000" y2="140" stroke="#e2e8f0" strokeDasharray="4 4" strokeWidth="1" />

            {/* Shaded Area Under Curve */}
            <path
              d="M 0,165 
                 C 100,160 160,130 250,120 
                 C 340,110 400,140 480,95 
                 C 560,50 620,25 690,30 
                 C 760,35 820,80 900,55 
                 C 950,40 980,25 1000,20 
                 L 1000,195 L 0,195 Z"
              fill="url(#salesVelocityGrad)"
            />

            {/* Main Smooth Curve Line */}
            <path
              d="M 0,165 
                 C 100,160 160,130 250,120 
                 C 340,110 400,140 480,95 
                 C 560,50 620,25 690,30 
                 C 760,35 820,80 900,55 
                 C 950,40 980,25 1000,20"
              fill="none"
              stroke="#6f3cff"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Interactive Peak Point at (690, 30) */}
            <g transform="translate(690, 30)">
              <circle r="9" fill="#6f3cff" opacity="0.2" className="animate-ping" />
              <circle r="6" fill="#6f3cff" stroke="#ffffff" strokeWidth="2.5" />
            </g>

            {/* Second Peak Point at (1000, 20) */}
            <g transform="translate(1000, 20)">
              <circle r="5" fill="#22c55e" stroke="#ffffff" strokeWidth="2" />
            </g>
          </svg>

          {/* Floating Peak Tooltip */}
          <div className="absolute top-1 left-[64%] -translate-x-1/2 bg-[#070019] text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-lg border border-violet-500/30 flex items-center gap-1.5 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Pico 14:30 hs: $410.000/h</span>
          </div>
        </div>

        {/* Time Markers */}
        <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mt-2 px-1">
          <span>00:00</span>
          <span>04:00</span>
          <span>08:00</span>
          <span>12:00</span>
          <span className="text-[#6f3cff] font-bold">14:30 (Pico)</span>
          <span>18:00</span>
          <span>22:00</span>
          <span className="text-emerald-700 font-bold">Ahora</span>
        </div>
      </div>

      {/* Live Sales Ticker Stream */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-xs font-bold text-slate-800">
              Flujo de Órdenes Recientes en Vivo:
            </span>
          </div>
          <span className="text-[11px] text-slate-400">Actualización automática cada 10s</span>
        </div>

        <div className="space-y-2">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#f8f7fc] border border-slate-200/90 text-xs hover:border-[#6f3cff]/40 hover:bg-white transition-all shadow-2xs gap-2"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="font-mono font-bold text-[#070019]">{order.id}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-700 font-medium">{order.city}</span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-slate-400 text-[11px]">{order.time}</span>
                <span className="text-emerald-700 font-medium bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full text-[10px] hidden md:inline-flex">
                  {order.status}
                </span>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white border border-slate-200 text-slate-700">
                  {order.gateway}
                </span>
                <span className="font-mono text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                  {order.latency}
                </span>
                <span className="font-extrabold text-[#070019] sm:min-w-[85px] text-right">
                  {formatCurrency(order.amount)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

