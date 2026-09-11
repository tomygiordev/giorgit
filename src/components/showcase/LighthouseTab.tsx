"use client";

import React from "react";
import { Zap } from "lucide-react";

export default function LighthouseTab() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30">
              GOOGLE LIGHTHOUSE V12
            </span>
            <span className="text-xs text-slate-400">Motor Next.js 15 Server Components</span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">
            Auditoría de Rendimiento en Tiempo Real
          </h3>
        </div>
        <div className="text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
          Dispositivo: <strong className="text-white">Mobile Moto G (Emulado)</strong>
        </div>
      </div>

      {/* 4 Large Gauges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
        {[
          { title: "Performance", score: "100", label: "Excelente" },
          { title: "Accesibilidad", score: "100", label: "Estándar WCAG" },
          { title: "Best Practices", score: "100", label: "Seguridad & HTTPS" },
          { title: "SEO Enterprise", score: "100", label: "Schema.org Rich" },
        ].map((gauge) => (
          <div
            key={gauge.title}
            className="flex flex-col items-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-2">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-white/10"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                  strokeDasharray="100, 100"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                {gauge.score}
              </span>
            </div>
            <span className="text-xs font-bold text-white">{gauge.title}</span>
            <span className="text-[11px] text-slate-400 mt-0.5">{gauge.label}</span>
          </div>
        ))}
      </div>

      {/* Core Web Vitals Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">First Contentful Paint (FCP)</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="text-lg font-bold text-emerald-400 font-mono mt-1">0.38 s</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Límite recomendado: 1.8s</div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Largest Contentful Paint (LCP)</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="text-lg font-bold text-emerald-400 font-mono mt-1">0.54 s</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Límite recomendado: 2.5s</div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Cumulative Layout Shift (CLS)</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="text-lg font-bold text-emerald-400 font-mono mt-1">0.000</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Estabilidad visual total</div>
        </div>
      </div>

      {/* Bottom Insight Banner */}
      <div className="mt-5 p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/40 to-violet-950/40 border border-emerald-500/20 flex items-center gap-3 text-xs text-slate-300">
        <Zap className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <span>
          <strong>Impacto directo en ventas:</strong> Google prioriza en el ranking orgánico a tiendas con puntaje verde. Además, cada reducción de 100ms en velocidad eleva la tasa de conversión en un 1.1% promedio.
        </span>
      </div>
    </div>
  );
}
