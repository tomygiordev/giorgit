"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Landmark,
  Check,
  Tag,
  Truck,
  Sparkles,
  Lock,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Props {
  onSuccessNavigate: () => void;
}

export default function CheckoutTab({ onSuccessNavigate }: Props) {
  const [paymentMethod, setPaymentMethod] = useState<"mp" | "card" | "transfer">("mp");
  const [couponCode, setCouponCode] = useState("GIORGIT10");
  const [couponApplied, setCouponApplied] = useState(true);
  const [couponError, setCouponError] = useState("");
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const basePrice = 145000;
  // 15% discount on bank transfer
  const transferDiscount = paymentMethod === "transfer" ? Math.round(basePrice * 0.15) : 0;
  // 10% coupon discount
  const couponDiscount = couponApplied ? Math.round(basePrice * 0.1) : 0;
  const finalPrice = Math.max(0, basePrice - transferDiscount - couponDiscount);

  const handleApplyCoupon = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (couponCode.trim().toUpperCase() === "GIORGIT10") {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponApplied(false);
      setCouponError("Cupón inválido. Prueba GIORGIT10");
    }
  };

  const handleCompleteCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutCompleted(true);
    }, 380);
  };

  if (checkoutCompleted) {
    return (
      <div className="p-6 sm:p-10 lg:p-12 bg-white text-center flex flex-col items-center justify-center min-h-[420px] relative overflow-hidden">
        {/* Glow ambient circle */}
        <div className="absolute w-72 h-72 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border-2 border-emerald-400 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/10 animate-scale-in">
          <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2.5">
          <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" /> Aprobado en 0.38 segundos
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#070019] tracking-tight">
          ¡Pedido #GP-84920 Confirmado!
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg leading-relaxed">
          Notificación automática enviada a WhatsApp del comprador. Stock descontado en Edge Database y etiqueta de despacho generada en <strong>Andreani Express (#AND-948201-AR)</strong>.
        </p>

        {/* Receipt Details Box */}
        <div className="mt-6 w-full max-w-md p-5 rounded-2xl bg-[#f8f7fc] border border-slate-200/90 text-left text-xs space-y-2.5 shadow-xs">
          <div className="flex justify-between items-center text-slate-600">
            <span>Método de pago:</span>
            <strong className="text-[#070019]">
              {paymentMethod === "mp"
                ? "Mercado Pago Nativo (3 cuotas)"
                : paymentMethod === "transfer"
                ? "Transferencia Inmediata (-15%)"
                : "Tarjeta Débito/Crédito (PCI-DSS)"}
            </strong>
          </div>

          <div className="flex justify-between items-center text-slate-600">
            <span>Total debitado:</span>
            <strong className="text-emerald-700 text-sm font-extrabold">
              {formatCurrency(finalPrice)}
            </strong>
          </div>

          <div className="flex justify-between items-center text-slate-600">
            <span>Operador Logístico:</span>
            <span className="font-semibold text-slate-800 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-600" /> Andreani Express 24h
            </span>
          </div>

          <div className="flex justify-between items-center text-slate-600 pt-2 border-t border-slate-200">
            <span className="font-medium">Comisión retenida por GiorgIT:</span>
            <span className="text-[#6f3cff] font-extrabold text-sm">$0 (0% de por vida)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-7">
          <button
            onClick={onSuccessNavigate}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#070019] hover:bg-[#6f3cff] text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#070019]/20"
          >
            <span>Ver Métricas en Tiempo Real</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setCheckoutCompleted(false)}
            className="text-xs text-slate-500 hover:text-slate-900 underline py-2 cursor-pointer"
          >
            Probar otro método de pago
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white text-[#070019]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Express Buyer Data & Payment Methods */}
        <div className="lg:col-span-7 space-y-4">
          {/* Buyer Fast-Profile Pill */}
          <div className="p-4 rounded-xl bg-[#f8f7fc] border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6f3cff]/10 text-[#6f3cff] font-bold text-sm flex items-center justify-center flex-shrink-0">
                IG
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#070019]">Ignacio Gómez</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold border border-emerald-200/60 flex items-center gap-1">
                    <Check className="w-2.5 h-2.5" /> 1-Click Verificado
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  ignacio@giorgit.com • Av. del Libertador 2450, Piso 6, CABA
                </div>
              </div>
            </div>
            <span className="text-[11px] font-mono text-slate-400 self-start sm:self-auto">
              CP 1425
            </span>
          </div>

          {/* Payment Methods Selection */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-800">
                Selecciona Método de Pago Express:
              </span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" /> Cifrado 256-bit
              </span>
            </div>

            <div className="space-y-2.5">
              {/* Option 1: Mercado Pago Nativo */}
              <label
                onClick={() => setPaymentMethod("mp")}
                className={`flex items-center justify-between p-3.5 rounded-xl border text-xs cursor-pointer transition-all ${
                  paymentMethod === "mp"
                    ? "border-[#6f3cff] bg-[#f5f1ff] text-[#070019] shadow-sm ring-1 ring-[#6f3cff]"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      paymentMethod === "mp"
                        ? "border-[#6f3cff] bg-[#6f3cff]"
                        : "border-slate-300"
                    }`}
                  >
                    {paymentMethod === "mp" && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                  </div>

                  {/* Real Mercado Pago Handshake Logo SVG */}
                  <div className="w-8 h-8 rounded-lg bg-[#009ee3] flex items-center justify-center flex-shrink-0 shadow-xs p-1">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="currentColor">
                      <path d="M19.4 6.6c-.6-.4-1.4-.6-2.2-.6-1.5 0-2.8.8-3.5 2-.4-.2-.8-.3-1.3-.3s-.9.1-1.3.3C10.4 6.8 9.1 6 7.6 6c-.8 0-1.6.2-2.2.6-1.7 1.1-2.4 3.1-1.8 5.1.5 1.7 1.8 3 3.5 3.5.4.1.9.2 1.3.2.9 0 1.7-.3 2.4-.8l.2-.1.2.1c.7.5 1.5.8 2.4.8.4 0 .9-.1 1.3-.2 1.7-.5 3-1.8 3.5-3.5.6-2-.1-4-1.8-5.1zm-8.2 6.5c-.3.4-.7.7-1.2.8-.2.1-.5.1-.8.1-.4 0-.8-.1-1.2-.3-1-.6-1.5-1.7-1.2-2.8.2-.8.8-1.5 1.6-1.8.4-.2.8-.2 1.2-.2.8 0 1.5.4 2 1.1.2.3.2.7.2 1.1-.1.7-.3 1.4-.6 2zm6.8-2c-.2.8-.8 1.5-1.6 1.8-.4.2-.8.2-1.2.2-.8 0-1.5-.4-2-1.1-.2-.3-.2-.7-.2-1.1.1-.7.3-1.4.6-2 .3-.4.7-.7 1.2-.8.2-.1.5-.1.8-.1.4 0 .8.1 1.2.3 1 .6 1.5 1.7 1.2 2.8z" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-bold text-[#070019] block text-xs">
                      Mercado Pago Nativo
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      3 cuotas fijas sin interés de {formatCurrency(Math.round(finalPrice / 3))} o dinero en cuenta
                    </span>
                  </div>
                </div>

                <span className="font-mono text-[10px] font-bold text-[#6f3cff] bg-[#6f3cff]/10 px-2 py-0.5 rounded">
                  1-Click Nativo
                </span>
              </label>

              {/* Option 2: Bank Transfer with 15% discount */}
              <label
                onClick={() => setPaymentMethod("transfer")}
                className={`flex items-center justify-between p-3.5 rounded-xl border text-xs cursor-pointer transition-all ${
                  paymentMethod === "transfer"
                    ? "border-[#6f3cff] bg-[#f5f1ff] text-[#070019] shadow-sm ring-1 ring-[#6f3cff]"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      paymentMethod === "transfer"
                        ? "border-[#6f3cff] bg-[#6f3cff]"
                        : "border-slate-300"
                    }`}
                  >
                    {paymentMethod === "transfer" && (
                      <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                    )}
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white flex-shrink-0 shadow-xs">
                    <Landmark className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#070019] block text-xs">
                        Transferencia Bancaria Inmediata
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 block">
                      Alias automático <code className="text-[#070019] font-mono font-semibold">giorgit.pagos</code> • Validación en 15s
                    </span>
                  </div>
                </div>

                <span className="font-bold text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  15% OFF EXTRA
                </span>
              </label>

              {/* Option 3: Credit / Debit Card (Visa & Mastercard) */}
              <label
                onClick={() => setPaymentMethod("card")}
                className={`flex items-center justify-between p-3.5 rounded-xl border text-xs cursor-pointer transition-all ${
                  paymentMethod === "card"
                    ? "border-[#6f3cff] bg-[#f5f1ff] text-[#070019] shadow-sm ring-1 ring-[#6f3cff]"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      paymentMethod === "card"
                        ? "border-[#6f3cff] bg-[#6f3cff]"
                        : "border-slate-300"
                    }`}
                  >
                    {paymentMethod === "card" && (
                      <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                    )}
                  </div>

                  {/* Visa / Mastercard Badge */}
                  <div className="flex items-center gap-1">
                    <div className="h-8 px-2 rounded-lg bg-[#070019] text-white flex items-center justify-center font-bold text-[10px] tracking-wider">
                      VISA
                    </div>
                    <div className="h-8 px-1.5 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eb001b] -mr-1.5 opacity-90" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#f79e1b] opacity-90" />
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-[#070019] block text-xs">
                      Tarjeta de Débito / Crédito
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Stripe Elements & Tokenización PCI-DSS Nivel 1
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  Seguro
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary, Coupon & Instant Pay CTA */}
        <div className="lg:col-span-5 bg-[#fbfaff] border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/80 mb-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Resumen de Compra
              </span>
              <span className="text-[10px] font-mono text-slate-400">#GP-84920</span>
            </div>

            {/* Line items */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-start text-slate-700">
                <div>
                  <div className="font-medium text-[#070019]">Sneakers Velocity Urban Pro</div>
                  <div className="text-[11px] text-slate-400">Talle 41 • Violet Stealth</div>
                </div>
                <span className="font-bold text-[#070019]">{formatCurrency(basePrice)}</span>
              </div>

              {/* Shipping with Andreani */}
              <div className="flex justify-between items-center text-slate-700 pt-1 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  <span className="text-xs">Andreani Express (24h)</span>
                </div>
                <span className="text-emerald-700 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded">
                  GRATIS
                </span>
              </div>

              {/* Coupon Code Test */}
              <div className="pt-2 border-t border-slate-100">
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      placeholder="Cupón (ej. GIORGIT10)"
                      className="w-full pl-7 pr-2 py-1.5 text-xs font-mono uppercase bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#6f3cff]"
                    />
                    <Tag className="w-3 h-3 text-slate-400 absolute left-2.5 top-2.5" />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg bg-[#070019] hover:bg-[#6f3cff] text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Aplicar
                  </button>
                </form>
                {couponError && (
                  <span className="text-[10px] text-rose-600 mt-1 block">{couponError}</span>
                )}
                {couponApplied && (
                  <div className="flex justify-between items-center text-emerald-700 text-xs mt-1.5 font-medium">
                    <span>Cupón GIORGIT10 (10% OFF):</span>
                    <span>-{formatCurrency(couponDiscount)}</span>
                  </div>
                )}
              </div>

              {/* Transfer Discount */}
              {paymentMethod === "transfer" && (
                <div className="flex justify-between items-center text-emerald-700 text-xs font-medium bg-emerald-50/70 px-2 py-1 rounded">
                  <span>Descuento Transferencia (15%):</span>
                  <span>-{formatCurrency(transferDiscount)}</span>
                </div>
              )}

              {/* Zero Commission Callout */}
              <div className="flex justify-between items-center text-slate-500 text-[11px] pt-1 border-t border-slate-100">
                <span>Comisión retenida GiorgIT:</span>
                <span className="text-[#6f3cff] font-bold">$0 (0%)</span>
              </div>
            </div>

            {/* Total Row */}
            <div className="border-t border-slate-200/90 mt-4 pt-3 flex items-baseline justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 block">Total a Pagar:</span>
                <span className="text-[10px] text-slate-400">IVA incluido • Sin cargos ocultos</span>
              </div>
              <span className="text-2xl font-extrabold text-[#070019] tracking-tight">
                {formatCurrency(finalPrice)}
              </span>
            </div>
          </div>

          {/* Instant Action CTA */}
          <div className="mt-5">
            <button
              onClick={handleCompleteCheckout}
              disabled={isProcessing}
              className="w-full py-3.5 px-4 rounded-xl bg-[#070019] hover:bg-[#6f3cff] text-white font-semibold text-xs tracking-tight transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Liquidando orden en 0.38s...</span>
                </div>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>Pagar en 0.38s ({formatCurrency(finalPrice)})</span>
                </>
              )}
            </button>
            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 mt-2.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Cifrado TLS 1.3 • Andreani Tracking Automático</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

