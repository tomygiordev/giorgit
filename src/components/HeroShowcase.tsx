"use client";

import React, { useState } from "react";
import { ShoppingBag, CreditCard, BarChart3, Code2 } from "lucide-react";
import StorefrontTab from "./showcase/StorefrontTab";
import CheckoutTab from "./showcase/CheckoutTab";
import MetricsTab from "./showcase/MetricsTab";
import CodeTab from "./showcase/CodeTab";

type TabKey = "storefront" | "checkout" | "metrics" | "code";

export default function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>("storefront");

  return (
    <div id="showcase" className="w-full max-w-[760px] bg-white text-slate-900 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-slate-200/80 overflow-hidden relative z-20 transition-all">
      {/* Window Tabs Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 px-3 sm:px-5 py-2.5 bg-[#fafafa]">
        {/* Left window control dots */}
        <div className="hidden sm:flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>

        {/* 4 Interactive Tab Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full sm:w-auto justify-start sm:justify-center">
          <button
            onClick={() => setActiveTab("storefront")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "storefront"
                ? "bg-white text-[#070019] shadow-sm font-semibold border border-slate-200"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#6f3cff]" />
            <span>Storefront Instantáneo</span>
          </button>

          <button
            onClick={() => setActiveTab("checkout")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "checkout"
                ? "bg-white text-[#070019] shadow-sm font-semibold border border-slate-200"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <CreditCard className="w-3.5 h-3.5 text-[#6f3cff]" />
            <span>Checkout 1-Click</span>
          </button>

          <button
            onClick={() => setActiveTab("metrics")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "metrics"
                ? "bg-white text-[#070019] shadow-sm font-semibold border border-slate-200"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-[#6f3cff]" />
            <span>Métricas en Vivo</span>
          </button>

          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "code"
                ? "bg-white text-[#070019] shadow-sm font-semibold border border-slate-200"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-[#6f3cff]" />
            <span>API &amp; Código</span>
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      {activeTab === "storefront" && (
        <StorefrontTab onGoToCheckout={() => setActiveTab("checkout")} />
      )}
      {activeTab === "checkout" && (
        <CheckoutTab onSuccessNavigate={() => setActiveTab("metrics")} />
      )}
      {activeTab === "metrics" && <MetricsTab />}
      {activeTab === "code" && <CodeTab />}
    </div>
  );
}
