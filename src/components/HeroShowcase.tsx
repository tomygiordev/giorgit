"use client";

import React, { useState } from "react";
import { ShoppingBag, CreditCard, BarChart3, Gauge } from "lucide-react";
import StorefrontTab from "./showcase/StorefrontTab";
import CheckoutTab from "./showcase/CheckoutTab";
import MetricsTab from "./showcase/MetricsTab";
import LighthouseTab from "./showcase/LighthouseTab";

type TabKey = "storefront" | "checkout" | "metrics" | "lighthouse";

export default function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>("storefront");

  return (
    <div id="showcase" className="w-full max-w-5xl mx-auto mt-12 transition-all">
      <div className="relative rounded-2xl md:rounded-3xl p-1 md:p-1.5 bg-gradient-to-b from-violet-500/30 via-white/[0.08] to-transparent shadow-2xl shadow-violet-950/60 backdrop-blur-2xl">
        <div className="rounded-[14px] md:rounded-[22px] bg-[#090b1c]/95 border border-white/[0.1] overflow-hidden">
          
          {/* Top Tabs Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] px-4 md:px-6 py-3 bg-white/[0.02]">
            {/* Window control dots */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-400/30" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/30" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/30" />
              <span className="ml-3 text-[11px] font-mono text-slate-400 tracking-wider">
                demo.giorgit.com/storefront
              </span>
            </div>

            {/* Interactive Tab Selectors */}
            <div className="flex items-center gap-1 sm:gap-2 mx-auto sm:mx-0 overflow-x-auto no-scrollbar py-0.5">
              <button
                onClick={() => setActiveTab("storefront")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "storefront"
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Storefront</span>
              </button>

              <button
                onClick={() => setActiveTab("checkout")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "checkout"
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Checkout 1-Click</span>
              </button>

              <button
                onClick={() => setActiveTab("metrics")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "metrics"
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Métricas</span>
              </button>

              <button
                onClick={() => setActiveTab("lighthouse")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "lighthouse"
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Gauge className="w-3.5 h-3.5" />
                <span className="flex items-center gap-1">
                  Audit 100
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Active Tab Content */}
          {activeTab === "storefront" && <StorefrontTab onGoToCheckout={() => setActiveTab("checkout")} />}
          {activeTab === "checkout" && <CheckoutTab onSuccessNavigate={() => setActiveTab("metrics")} />}
          {activeTab === "metrics" && <MetricsTab />}
          {activeTab === "lighthouse" && <LighthouseTab />}

        </div>
      </div>
    </div>
  );
}
