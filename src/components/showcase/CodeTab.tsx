"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CodeTab() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// app/api/checkout/route.ts — GiorgIT Edge Engine
import { createCheckoutSession, syncInventory } from "@giorgit/engine";

export async function POST(req: Request) {
  const { cart, customer } = await req.json();

  // 1. Inicializa checkout instantáneo sin intermediarios lentos
  const session = await createCheckoutSession({
    items: cart.items,
    currency: "ARS",
    gateway: "mercadopago", // Nativo 1-click & cuotas
    instantShipping: true,  // Integración directa con Andreani
    commissionRate: 0.0,    // 0% comisiones para GiorgIT
  });

  // 2. Descuenta inventario en Edge Database (< 12ms)
  await syncInventory({ items: cart.items });

  return Response.json({
    status: "ready",
    checkoutUrl: session.url,
    latencyMs: 380,
  });
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#fafafa] text-[#383a42] code-editor-font text-xs sm:text-[13px] leading-relaxed relative flex flex-col h-full overflow-hidden">
      {/* Code Editor Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#f3f3f5] border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="ml-2 font-mono text-[11px] text-slate-500">
            app/api/checkout/route.ts
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[11px] font-sans text-slate-500 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 font-medium">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copiar SDK</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content with syntax highlighting */}
      <div className="p-4 sm:p-6 overflow-x-auto select-text font-mono">
        <div className="space-y-1">
          <div><span className="text-[#a0a1a7] italic">// app/api/checkout/route.ts — GiorgIT Edge Engine</span></div>
          <div><span className="text-[#a626a4]">import</span> &#123; <span className="text-[#4078f2]">createCheckoutSession</span>, <span className="text-[#4078f2]">syncInventory</span> &#125; <span className="text-[#a626a4]">from</span> <span className="text-[#50a14f]">&quot;@giorgit/engine&quot;</span>;</div>
          <div className="h-2"></div>
          <div><span className="text-[#a626a4]">export async function</span> <span className="text-[#4078f2]">POST</span>(req: Request) &#123;</div>
          <div className="pl-4"><span className="text-[#a626a4]">const</span> &#123; cart, customer &#125; = <span className="text-[#a626a4]">await</span> req.<span className="text-[#4078f2]">json</span>();</div>
          <div className="h-2"></div>
          <div className="pl-4"><span className="text-[#a0a1a7] italic">// 1. Inicializa checkout instantáneo sin intermediarios lentos</span></div>
          <div className="pl-4"><span className="text-[#a626a4]">const</span> session = <span className="text-[#a626a4]">await</span> <span className="text-[#4078f2]">createCheckoutSession</span>(&#123;</div>
          <div className="pl-8"><span className="text-[#4078f2]">items</span>: cart.items,</div>
          <div className="pl-8"><span className="text-[#4078f2]">currency</span>: <span className="text-[#50a14f]">&quot;ARS&quot;</span>,</div>
          <div className="pl-8"><span className="text-[#4078f2]">gateway</span>: <span className="text-[#50a14f]">&quot;mercadopago&quot;</span>, <span className="text-[#a0a1a7] italic">// Nativo 1-click &amp; cuotas</span></div>
          <div className="pl-8"><span className="text-[#4078f2]">instantShipping</span>: <span className="text-[#986801]">true</span>, <span className="text-[#a0a1a7] italic">// Integración directa Andreani</span></div>
          <div className="pl-8"><span className="text-[#4078f2]">commissionRate</span>: <span className="text-[#986801]">0.0</span>, <span className="text-[#a0a1a7] italic">// 0% comisiones GiorgIT</span></div>
          <div className="pl-4">&#125;);</div>
          <div className="h-2"></div>
          <div className="pl-4"><span className="text-[#a0a1a7] italic">// 2. Descuenta inventario en Edge Database (&lt; 12ms)</span></div>
          <div className="pl-4"><span className="text-[#a626a4]">await</span> <span className="text-[#4078f2]">syncInventory</span>(&#123; <span className="text-[#4078f2]">items</span>: cart.items &#125;);</div>
          <div className="h-2"></div>
          <div className="pl-4"><span className="text-[#a626a4]">return</span> Response.<span className="text-[#4078f2]">json</span>(&#123;</div>
          <div className="pl-8"><span className="text-[#4078f2]">status</span>: <span className="text-[#50a14f]">&quot;ready&quot;</span>,</div>
          <div className="pl-8"><span className="text-[#4078f2]">checkoutUrl</span>: session.url,</div>
          <div className="pl-8"><span className="text-[#4078f2]">latencyMs</span>: <span className="text-[#986801]">380</span>,</div>
          <div className="pl-4">&#125;);</div>
          <div>&#125;</div>
        </div>
      </div>
    </div>
  );
}
