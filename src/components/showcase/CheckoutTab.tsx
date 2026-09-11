"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, CreditCard, Landmark, Check } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Props {
  onSuccessNavigate: () => void;
}

export default function CheckoutTab({ onSuccessNavigate }: Props) {
  const [paymentMethod, setPaymentMethod] = useState<"mp" | "card" | "transfer">("mp");
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const unitPrice = 145000;
  const transferDiscount = paymentMethod === "transfer" ? 14500 : 0;
  const finalPrice = unitPrice - transferDiscount;

  const handleCompleteCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutCompleted(true);
    }, 450);
  };

  if (checkoutCompleted) {
    return (
      <div className="p-6 sm:p-10 bg-white text-center flex flex-col items-center justify-center min-h-[360px]">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
          <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" /> Aprobado en 0.38 segundos
        </div>
        <h3 className="text-2xl font-bold text-[#070019] tracking-tight">
          ¡Pedido #GP-84920 Confirmado!
        </h3>
        <p className="text-sm text-slate-600 mt-2 max-w-md">
          Notificación automática enviada a WhatsApp del cliente. Stock descontado y guía de despacho generada en Andreani.
        </p>

        <div className="mt-6 w-full max-w-sm p-4 rounded-xl bg-[#f8f7fc] border border-slate-200 text-left text-xs space-y-2">
          <div className="flex justify-between text-slate-600">
            <span>Método:</span>
            <strong className="text-[#070019]">
              {paymentMethod === "mp" ? "Mercado Pago (3 cuotas)" : paymentMethod === "card" ? "Tarjeta Débito/Crédito" : "Transferencia Bancaria (-10%)"}
            </strong>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Total cobrado:</span>
            <strong className="text-emerald-600">{formatCurrency(finalPrice)}</strong>
          </div>
          <div className="flex justify-between text-slate-600 pt-1 border-t border-slate-200">
            <span>Comisión retenida por GiorgIT:</span>
            <strong className="text-[#6f3cff] font-bold">$0 (0% por venta)</strong>
          </div>
        </div>

        <button
          onClick={onSuccessNavigate}
          className="mt-6 px-6 py-2.5 rounded-full bg-[#070019] hover:bg-[#6f3cff] text-white text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Ver Métricas en Tiempo Real</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white text-[#070019]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left: Customer Data & Payment Selection */}
        <div className="md:col-span-7 space-y-4">
          <div className="p-3.5 rounded-xl bg-[#f8f7fc] border border-slate-200/80">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Datos del Comprador (1-Clic)</span>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono">
                Autocompletado
              </span>
            </div>
            <div className="text-xs text-slate-800 font-medium">Ignacio Gómez • ignacio@giorgit.com</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Av. del Libertador 2450, Piso 6, CABA (CP 1425)</div>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-700 block mb-2">Método de Pago:</span>
            <div className="space-y-2">
              <label
                onClick={() => setPaymentMethod("mp")}
                className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                  paymentMethod === "mp"
                    ? "border-[#6f3cff] bg-[#f5f1ff] text-[#070019] shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "mp" ? "border-[#6f3cff] bg-[#6f3cff]" : "border-slate-300"}`}>
                    {paymentMethod === "mp" && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                  </div>
                  <div>
                    <span className="font-semibold block">Mercado Pago Nativo</span>
                    <span className="text-[11px] text-slate-500">Hasta 3 cuotas sin interés y dinero en cuenta</span>
                  </div>
                </div>
                <span className="font-mono text-[11px] font-semibold text-[#6f3cff]">1-Click</span>
              </label>

              <label
                onClick={() => setPaymentMethod("transfer")}
                className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                  paymentMethod === "transfer"
                    ? "border-[#6f3cff] bg-[#f5f1ff] text-[#070019] shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "transfer" ? "border-[#6f3cff] bg-[#6f3cff]" : "border-slate-300"}`}>
                    {paymentMethod === "transfer" && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                  </div>
                  <div>
                    <span className="font-semibold block">Transferencia Bancaria Inmediata</span>
                    <span className="text-[11px] text-slate-500">Alias directo con validación de comprobante</span>
                  </div>
                </div>
                <span className="font-semibold text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  10% OFF
                </span>
              </label>

              <label
                onClick={() => setPaymentMethod("card")}
                className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                  paymentMethod === "card"
                    ? "border-[#6f3cff] bg-[#f5f1ff] text-[#070019] shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "card" ? "border-[#6f3cff] bg-[#6f3cff]" : "border-slate-300"}`}>
                    {paymentMethod === "card" && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                  </div>
                  <div>
                    <span className="font-semibold block">Tarjeta de Débito / Crédito</span>
                    <span className="text-[11px] text-slate-500">Stripe & Tokenización segura PCI-DSS</span>
                  </div>
                </div>
                <CreditCard className="w-4 h-4 text-slate-400" />
              </label>
            </div>
          </div>
        </div>

        {/* Right: Order Summary & Instant Action */}
        <div className="md:col-span-5 bg-[#f8f7fc] border border-slate-200/80 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-700 block mb-3">Resumen de Compra</span>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>1x Velocity Urban Pro (Talle 41)</span>
                <span className="text-[#070019] font-medium">{formatCurrency(unitPrice)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Envío Andreani Prioritario</span>
                <span className="text-emerald-700 font-semibold">GRATIS</span>
              </div>
              {paymentMethod === "transfer" && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Descuento Transferencia (10%)</span>
                  <span>-{formatCurrency(transferDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-500 text-[11px] pt-1">
                <span>Comisión por plataforma:</span>
                <span className="text-[#6f3cff] font-bold">$0 (0%)</span>
              </div>
            </div>

            <div className="border-t border-slate-200 mt-4 pt-3 flex items-baseline justify-between">
              <span className="text-xs font-bold text-slate-700">Total Final:</span>
              <span className="text-xl font-extrabold text-[#070019] tracking-tight">
                {formatCurrency(finalPrice)}
              </span>
            </div>
          </div>

          <div className="mt-5">
            <button
              onClick={handleCompleteCheckout}
              disabled={isProcessing}
              className="w-full py-3 px-4 rounded-xl bg-[#070019] hover:bg-[#6f3cff] text-white font-semibold text-xs tracking-tight transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isProcessing ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Confirmar y Pagar ({formatCurrency(finalPrice)})</span>
                </>
              )}
            </button>
            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 mt-2">
              <ShieldCheck className="w-3 h-3 text-slate-400" />
              <span>Cifrado SSL 256-bit • Procesamiento Edge</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
