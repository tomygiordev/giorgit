"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Zap, Truck } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Props {
  onSuccessNavigate: () => void;
}

export default function CheckoutTab({ onSuccessNavigate }: Props) {
  const [paymentMethod, setPaymentMethod] = useState<"mp" | "card" | "transfer">("mp");
  const [couponCode, setCouponCode] = useState("GIORGIT10");
  const [couponApplied, setCouponApplied] = useState(true);
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const unitPrice = 145000;
  const discountAmount = couponApplied ? Math.round(unitPrice * 0.1) : 0;
  const transferDiscount = paymentMethod === "transfer" ? Math.round(unitPrice * 0.15) : 0;
  const finalPrice = unitPrice - discountAmount - transferDiscount;

  const handleCompleteCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutCompleted(true);
    }, 600);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {checkoutCompleted ? (
        <div className="py-12 px-4 text-center max-w-lg mx-auto animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
            ⚡ Checkout en 0.38 segundos
          </span>
          <h3 className="text-2xl font-bold text-white">¡Compra Aprobada con Éxito!</h3>
          <p className="text-sm text-slate-300 mt-2">
            Tu pedido #GP-84920 fue procesado de inmediato. La notificación se envió por WhatsApp al cliente y el inventario se actualizó en tiempo real.
          </p>
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-left text-xs space-y-2">
            <div className="flex justify-between text-slate-300">
              <span>Método de pago:</span>
              <span className="text-white font-medium">
                {paymentMethod === "mp" ? "Mercado Pago (Cuotas)" : paymentMethod === "card" ? "Tarjeta Débito/Crédito" : "Transferencia Directa (-15%)"}
              </span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Total pagado:</span>
              <span className="text-emerald-400 font-bold">{formatCurrency(finalPrice)}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Comisión para GiorgIT:</span>
              <span className="text-violet-400 font-bold">$0 (0% comisión)</span>
            </div>
          </div>
          <button
            onClick={() => {
              setCheckoutCompleted(false);
              onSuccessNavigate();
            }}
            className="mt-6 px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-all shadow-lg shadow-violet-600/30"
          >
            Ver Impacto en Métricas de Venta →
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Customer & Payment selection */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center text-xs font-bold">
                    MG
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Martín Gómez</span>
                    <span className="text-[11px] text-slate-400">martin.gomez@ejemplo.com • +54 9 11 5521-8890</span>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Autoguardado 1-Click
                </span>
              </div>
              <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                <Truck className="w-3.5 h-3.5 text-violet-400" />
                <span>Av. del Libertador 4450, Palermo, CABA (Entrega en 24h)</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-white block mb-2">
                Selecciona Método de Pago:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setPaymentMethod("mp")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    paymentMethod === "mp"
                      ? "bg-violet-600/20 border-violet-500 text-white shadow-md shadow-violet-600/20"
                      : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full mb-1.5 bg-sky-400" />
                  <div className="font-semibold text-xs">Mercado Pago</div>
                  <div className="text-[10px] text-slate-400">Hasta 6 cuotas s/interés</div>
                </button>

                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    paymentMethod === "card"
                      ? "bg-violet-600/20 border-violet-500 text-white shadow-md shadow-violet-600/20"
                      : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full mb-1.5 bg-violet-400" />
                  <div className="font-semibold text-xs">Tarjeta Débito/Crédito</div>
                  <div className="text-[10px] text-slate-400">Visa, Master, Amex</div>
                </button>

                <button
                  onClick={() => setPaymentMethod("transfer")}
                  className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden ${
                    paymentMethod === "transfer"
                      ? "bg-emerald-600/20 border-emerald-500 text-white shadow-md shadow-emerald-600/20"
                      : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="absolute top-1 right-1 text-[9px] bg-emerald-500/30 text-emerald-300 px-1.5 py-0.2 rounded font-bold">
                    15% OFF
                  </span>
                  <div className="w-2 h-2 rounded-full mb-1.5 bg-emerald-400" />
                  <div className="font-semibold text-xs">Transferencia</div>
                  <div className="text-[10px] text-slate-400">Descuento automático</div>
                </button>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>
                Transacción protegida con estándar bancario PCI-DSS nivel 1 y encriptación de 256 bits.
              </span>
            </div>
          </div>

          {/* Right Column: Order summary & Big Button */}
          <div className="lg:col-span-5 flex flex-col justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <span className="text-xs font-semibold text-white">Resumen de Orden (1 item)</span>
                <span className="text-[11px] text-violet-300 font-mono">Talle 41</span>
              </div>

              <div className="py-3 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Sneakers Velocity (Violet Stealth)</span>
                  <span>{formatCurrency(unitPrice)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Envío a domicilio (Andreani)</span>
                  <span className="text-emerald-400 font-semibold">GRATIS</span>
                </div>

                {couponApplied && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Cupón BIENVENIDA (10% OFF)</span>
                    <span>-{formatCurrency(discountAmount)}</span>
                  </div>
                )}

                {paymentMethod === "transfer" && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Descuento Transferencia (15%)</span>
                    <span>-{formatCurrency(transferDiscount)}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-white/[0.08] flex justify-between items-baseline">
                  <span className="text-sm font-bold text-white">Total a pagar:</span>
                  <span className="text-xl font-extrabold text-white">
                    {formatCurrency(finalPrice)}
                  </span>
                </div>
              </div>

              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Código de cupón"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 uppercase"
                />
                <button
                  onClick={() => setCouponApplied(!couponApplied)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-slate-200 font-medium"
                >
                  {couponApplied ? "Quitar" : "Aplicar"}
                </button>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleCompleteCheckout}
                disabled={isProcessing}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/40 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Procesando en 0.3s...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 fill-white" />
                    Pagar {formatCurrency(finalPrice)} con 1-Click
                  </>
                )}
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-2">
                Sin redirecciones lentas ni formularios de 5 páginas.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
