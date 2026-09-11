"use client";

import React, { useState } from "react";
import { TrendingUp, Zap, Clock, ShieldCheck, ArrowUpRight, Activity } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function MetricsTab() {
  const [activeRange, setActiveRange] = useState<"hoy" | "7d" | "30d">("hoy");

  const recentOrders = [
    { id: "GP-84920", time: "Hace 1 min", amount: 145000, city: "CABA", gateway: "Mercado Pago", latency: "380ms" },
    { id: "GP-84919", time: "Hace 4 min", amount: 290000, city: "Córdoba", gateway: "Transferencia", latency: "410ms" },
    { id: "GP-84918", time: "Hace 9 min", amount: 89000, city: "Rosario", gateway: "Stripe USD", latency: "390ms" },
    { id: "GP-84917", time: "Hace 14 min", amount: 165000, city: "Mendoza", gateway: "Mercado Pago", latency: "375ms" },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white text-[#070019]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-700">Métricas de Tienda en Vivo</span>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Edge Runtime
            </span>
          </div>
          <span className="text-xs text-slate-500 mt-0.5 block">
            Telemetría de rendimiento y conversión de pedidos en tiempo real
          </span>
        </div>

        <div className="flex items-center gap-1 bg-[#f8f7fc] p-1 rounded-lg border border-slate-200">
          {(["hoy", "7d", "30d"] as const).map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                activeRange === range
                  ? "bg-white text-[#070019] shadow-sm font-semibold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {range === "hoy" ? "Hoy" : range === "7d" ? "7 días" : "30 días"}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
        <div className="p-3.5 rounded-xl bg-[#f8f7fc] border border-slate-200/80">
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <span>Conversión</span>
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="text-xl font-bold text-[#070019]">4.8%</div>
          <div className="text-[10px] text-emerald-600 font-medium mt-0.5">+3.4x vs Shopify</div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#f8f7fc] border border-slate-200/80">
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <span>Velocidad (LCP)</span>
            <Zap className="w-3.5 h-3.5 text-[#6f3cff]" />
          </div>
          <div className="text-xl font-bold text-[#070019]">0.38s</div>
          <div className="text-[10px] text-[#6f3cff] font-medium mt-0.5">Lighthouse 100/100</div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#f8f7fc] border border-slate-200/80">
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <span>Comisión Pagada</span>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="text-xl font-bold text-emerald-600">$0 ARS</div>
          <div className="text-[10px] text-emerald-700 font-medium mt-0.5">100% tuyo</div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#f8f7fc] border border-slate-200/80">
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <span>Uptime 2026</span>
            <Activity className="w-3.5 h-3.5 text-[#6f3cff]" />
          </div>
          <div className="text-xl font-bold text-[#070019]">99.98%</div>
          <div className="text-[10px] text-slate-500 font-medium mt-0.5">0 caídas en HotSale</div>
        </div>
      </div>

      {/* Live Orders Stream */}
      <div>
        <div className="text-xs font-semibold text-slate-700 mb-2.5">
          Flujo de Órdenes Recientes:
        </div>
        <div className="space-y-2">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#f8f7fc] border border-slate-200/80 text-xs hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono font-semibold text-[#070019]">{order.id}</span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="text-slate-600">{order.city}</span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="text-slate-500 text-[11px]">{order.time}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white border border-slate-200 text-slate-700">
                  {order.gateway}
                </span>
                <span className="font-mono text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                  {order.latency}
                </span>
                <span className="font-bold text-[#070019] sm:min-w-[80px] text-right">
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
