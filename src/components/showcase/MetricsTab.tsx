"use client";

import React, { useState } from "react";
import { TrendingUp } from "lucide-react";

export default function MetricsTab() {
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month">("month");

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header metrics control */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            Dashboard de Rendimiento & Ventas en Tiempo Real
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </h3>
          <p className="text-xs text-slate-400">
            Datos procesados en el Edge con sincronización instantánea de transacciones.
          </p>
        </div>
        <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5 text-xs">
          <button
            onClick={() => setTimeRange("day")}
            className={`px-3 py-1 rounded-md transition-all ${timeRange === "day" ? "bg-violet-600 text-white font-semibold" : "text-slate-400 hover:text-white"}`}
          >
            Hoy
          </button>
          <button
            onClick={() => setTimeRange("week")}
            className={`px-3 py-1 rounded-md transition-all ${timeRange === "week" ? "bg-violet-600 text-white font-semibold" : "text-slate-400 hover:text-white"}`}
          >
            7 días
          </button>
          <button
            onClick={() => setTimeRange("month")}
            className={`px-3 py-1 rounded-md transition-all ${timeRange === "month" ? "bg-violet-600 text-white font-semibold" : "text-slate-400 hover:text-white"}`}
          >
            Este Mes
          </button>
        </div>
      </div>

      {/* 4 Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-5">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <span className="text-xs text-slate-400 font-medium">Facturación Bruta</span>
          <div className="text-lg sm:text-2xl font-black text-white mt-1">
            {timeRange === "day" ? "$1.240.500" : timeRange === "week" ? "$6.420.000" : "$18.890.200"}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>+38.4% vs mes ant.</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <span className="text-xs text-slate-400 font-medium">Tasa de Conversión</span>
          <div className="text-lg sm:text-2xl font-black text-violet-300 mt-1">
            4.82%
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Media del sector: 1.2%
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <span className="text-xs text-slate-400 font-medium">Ticket Promedio</span>
          <div className="text-lg sm:text-2xl font-black text-white mt-1">
            $62.450
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold mt-1">
            <span>+14.2% cross-sell</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <span className="text-xs text-slate-400 font-medium">Comisión Pagada</span>
          <div className="text-lg sm:text-2xl font-black text-emerald-400 mt-1">
            $0 ARS
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Ahorro aprox: $566.700
          </div>
        </div>
      </div>

      {/* Chart Visual & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-white">Curva de Conversión Diaria</span>
            <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono">
              Peak 5.4%
            </span>
          </div>
          <div className="flex items-end justify-between h-36 pt-4 px-2 gap-2 border-b border-white/[0.08]">
            {[
              { day: "Lun", h: "45%", val: "$2.1M" },
              { day: "Mar", h: "62%", val: "$2.8M" },
              { day: "Mié", h: "55%", val: "$2.5M" },
              { day: "Jue", h: "78%", val: "$3.4M" },
              { day: "Vie", h: "92%", val: "$4.2M" },
              { day: "Sáb", h: "85%", val: "$3.9M" },
              { day: "Dom", h: "68%", val: "$3.1M" },
            ].map((bar, index) => (
              <div key={bar.day} className="flex-1 flex flex-col items-center gap-1 group">
                <div className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                  {bar.val}
                </div>
                <div
                  style={{ height: bar.h }}
                  className={`w-full max-w-[28px] rounded-t-md transition-all group-hover:brightness-125 ${
                    index === 4
                      ? "bg-gradient-to-t from-violet-600 to-indigo-400 shadow-lg shadow-violet-600/40"
                      : "bg-white/15 hover:bg-violet-500/50"
                  }`}
                />
                <span className="text-[10px] text-slate-400 font-mono mt-1">{bar.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
          <span className="text-xs font-semibold text-white mb-2 block">
            Últimas Ventas Aprobadas (En Vivo)
          </span>
          <div className="space-y-2">
            {[
              { item: "Sneakers Velocity (Obsidian)", price: "$145.000", loc: "Palermo, CABA", time: "Hace 1m", badge: "Mercado Pago" },
              { item: "Backpack Tech Pro", price: "$89.000", loc: "Córdoba Capital", time: "Hace 4m", badge: "Transferencia" },
              { item: "Gorra Minimalist GiorgIT", price: "$32.000", loc: "Rosario, SF", time: "Hace 9m", badge: "Tarjeta" },
            ].map((order, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs">
                <div>
                  <div className="text-white font-medium">{order.item}</div>
                  <div className="text-[10px] text-slate-400">{order.loc} • {order.time}</div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-bold">{order.price}</div>
                  <div className="text-[9px] text-slate-400">{order.badge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
