"use client";

import React, { useState } from "react";
import { Check, Copy, FileCode2, Sparkles, Terminal } from "lucide-react";

export default function CodeTab() {
  const [copied, setCopied] = useState(false);
  const [activeFile, setActiveFile] = useState("checkout.config.ts");

  const codeLines = [
    { num: 1, text: '// app/api/checkout.config.ts — GiorgIT High-Performance Edge Engine', type: 'comment' },
    { num: 2, text: 'import { defineConfig, createCheckoutSession } from "@giorgit/engine";', type: 'code' },
    { num: 3, text: 'import { andreaniLogistics } from "@giorgit/andreani-native";', type: 'code' },
    { num: 4, text: '', type: 'empty' },
    { num: 5, text: 'export default defineConfig({', type: 'code' },
    { num: 6, text: '  store: "store.tumarca.com",', type: 'code' },
    { num: 7, text: '  currency: "ARS",', type: 'code' },
    { num: 8, text: '  commissionRate: 0.0, // 0% comisiones por venta para siempre', type: 'comment' },
    { num: 9, text: '  runtime: "edge",     // Servido desde nodo Buenos Aires (<15ms)', type: 'comment' },
    { num: 10, text: '', type: 'empty' },
    { num: 11, text: '  // Gateways nativos 1-Click integrados sin redirecciones lentas', type: 'comment' },
    { num: 12, text: '  gateways: {', type: 'code' },
    { num: 13, text: '    mercadoPago: { enabled: true, installments: 3, fastCheckout: true },', type: 'code' },
    { num: 14, text: '    bankTransfer: { discountRate: 0.15, instantValidation: true },', type: 'code' },
    { num: 15, text: '    stripeCards: { tokenization: "pci-dss-lvl1", applePay: true },', type: 'code' },
    { num: 16, text: '  },', type: 'code' },
    { num: 17, text: '', type: 'empty' },
    { num: 18, text: '  // Automatización logística de despacho con Andreani', type: 'comment' },
    { num: 19, text: '  shipping: andreaniLogistics({', type: 'code' },
    { num: 20, text: '    sla: "24h-priority",', type: 'code' },
    { num: 21, text: '    autoLabelGeneration: true, // Imprime etiqueta automáticamente', type: 'comment' },
    { num: 22, text: '    trackingWebhook: "/api/webhooks/andreani",', type: 'code' },
    { num: 23, text: '  }),', type: 'code' },
    { num: 24, text: '});', type: 'code' },
  ];

  const rawCode = codeLines.map((l) => l.text).join("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#fcfcff] text-[#24292e] text-xs sm:text-[13px] leading-relaxed relative flex flex-col h-full overflow-hidden">
      {/* Editor Tab Bar */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-2 bg-[#f3f2f8] border-b border-slate-200">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {/* Active Tab: checkout.config.ts */}
          <button
            onClick={() => setActiveFile("checkout.config.ts")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-[#070019] font-mono text-[11px] font-semibold border border-slate-200 shadow-2xs cursor-pointer"
          >
            <span className="w-3.5 h-3.5 rounded bg-[#3178c6] text-white text-[9px] font-bold flex items-center justify-center">
              TS
            </span>
            <span>checkout.config.ts</span>
          </button>

          {/* Inactive Tab 2 */}
          <button
            onClick={() => setActiveFile("sync-inventory.ts")}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-slate-500 hover:text-slate-800 font-mono text-[11px] transition-colors cursor-pointer"
          >
            <span className="w-3.5 h-3.5 rounded bg-slate-300 text-slate-700 text-[9px] font-bold flex items-center justify-center">
              TS
            </span>
            <span>sync-inventory.ts</span>
          </button>

          {/* Inactive Tab 3 */}
          <button
            onClick={() => setActiveFile("schema.prisma")}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-slate-500 hover:text-slate-800 font-mono text-[11px] transition-colors cursor-pointer"
          >
            <span className="w-3.5 h-3.5 rounded bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center">
              P
            </span>
            <span>schema.prisma</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Edge Vercel 15ms
          </span>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[11px] font-sans text-slate-600 hover:text-[#070019] bg-white border border-slate-200 hover:border-slate-300 px-3 py-1 rounded-lg transition-all shadow-2xs cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copiar Archivo</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editor Content Area with Line Numbers Column */}
      <div className="flex font-mono text-[12px] sm:text-[13px] overflow-x-auto select-text p-3 sm:p-5 bg-white">
        {/* Line Numbers Column */}
        <div className="pr-4 mr-4 text-slate-300 select-none border-r border-slate-100 text-right font-mono text-[11px] sm:text-xs">
          {codeLines.map((line) => (
            <div key={line.num} className="leading-6">
              {line.num}
            </div>
          ))}
        </div>

        {/* Code Content with syntax colors */}
        <div className="space-y-0 text-slate-800 leading-6 whitespace-pre font-mono flex-1">
          <div><span className="text-slate-400 italic font-sans text-xs">// app/api/checkout.config.ts — GiorgIT High-Performance Edge Engine</span></div>
          <div><span className="text-[#a626a4] font-semibold">import</span> &#123; <span className="text-[#4078f2]">defineConfig</span>, <span className="text-[#4078f2]">createCheckoutSession</span> &#125; <span className="text-[#a626a4] font-semibold">from</span> <span className="text-[#50a14f]">&quot;@giorgit/engine&quot;</span>;</div>
          <div><span className="text-[#a626a4] font-semibold">import</span> &#123; <span className="text-[#4078f2]">andreaniLogistics</span> &#125; <span className="text-[#a626a4] font-semibold">from</span> <span className="text-[#50a14f]">&quot;@giorgit/andreani-native&quot;</span>;</div>
          <div className="h-6"></div>
          <div><span className="text-[#a626a4] font-semibold">export default</span> <span className="text-[#4078f2]">defineConfig</span>(&#123;</div>
          <div>  <span className="text-[#070019] font-medium">store</span>: <span className="text-[#50a14f]">&quot;store.tumarca.com&quot;</span>,</div>
          <div>  <span className="text-[#070019] font-medium">currency</span>: <span className="text-[#50a14f]">&quot;ARS&quot;</span>,</div>
          <div>  <span className="text-[#070019] font-medium">commissionRate</span>: <span className="text-[#986801] font-semibold">0.0</span>, <span className="text-slate-400 italic">// 0% comisiones por venta de por vida</span></div>
          <div>  <span className="text-[#070019] font-medium">runtime</span>: <span className="text-[#50a14f]">&quot;edge&quot;</span>,     <span className="text-slate-400 italic">// Servido en nodo Buenos Aires (&lt; 15ms)</span></div>
          <div className="h-6"></div>
          <div>  <span className="text-slate-400 italic">// Gateways nativos 1-Click integrados sin intermediarios lentos</span></div>
          <div>  <span className="text-[#070019] font-medium">gateways</span>: &#123;</div>
          <div>    <span className="text-[#4078f2]">mercadoPago</span>: &#123; <span className="text-[#070019]">enabled</span>: <span className="text-[#986801]">true</span>, <span className="text-[#070019]">installments</span>: <span className="text-[#986801]">3</span>, <span className="text-[#070019]">fastCheckout</span>: <span className="text-[#986801]">true</span> &#125;,</div>
          <div>    <span className="text-[#4078f2]">bankTransfer</span>: &#123; <span className="text-[#070019]">discountRate</span>: <span className="text-[#986801]">0.15</span>, <span className="text-[#070019]">instantValidation</span>: <span className="text-[#986801]">true</span> &#125;,</div>
          <div>    <span className="text-[#4078f2]">stripeCards</span>: &#123; <span className="text-[#070019]">tokenization</span>: <span className="text-[#50a14f]">&quot;pci-dss-lvl1&quot;</span>, <span className="text-[#070019]">applePay</span>: <span className="text-[#986801]">true</span> &#125;,</div>
          <div>  &#125;,</div>
          <div className="h-6"></div>
          <div>  <span className="text-slate-400 italic">// Automatización logística de despacho con Andreani</span></div>
          <div>  <span className="text-[#070019] font-medium">shipping</span>: <span className="text-[#4078f2]">andreaniLogistics</span>(&#123;</div>
          <div>    <span className="text-[#070019]">sla</span>: <span className="text-[#50a14f]">&quot;24h-priority&quot;</span>,</div>
          <div>    <span className="text-[#070019]">autoLabelGeneration</span>: <span className="text-[#986801]">true</span>, <span className="text-slate-400 italic">// Imprime etiqueta y notifica WhatsApp</span></div>
          <div>    <span className="text-[#070019]">trackingWebhook</span>: <span className="text-[#50a14f]">&quot;/api/webhooks/andreani&quot;</span>,</div>
          <div>  &#125;),</div>
          <div>&#125;);</div>
        </div>
      </div>
    </div>
  );
}

