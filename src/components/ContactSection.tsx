"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageCircle, Clock, Sparkles, Shield, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    projectType: "Quiero lanzar una tienda nueva desde cero",
    salesRange: "$2M a $10M ARS / mes",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background cosmic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-violet-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Value proposition & direct WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Contacto Directo & Presupuestos
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Diseñemos tu{" "}
              <span className="font-serif italic font-normal text-violet-300">
                Próxima Tienda
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Completa el formulario para recibir una propuesta personalizada con alcance técnico, cronograma de entrega y presupuesto cerrado sin costes ocultos.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <Clock className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Respuesta en menos de 2 horas hábiles</div>
                  <div className="text-xs text-slate-400 mt-0.5">Analizamos tu nicho y te presentamos alternativas de arquitectura.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Garantía total de satisfacción</div>
                  <div className="text-xs text-slate-400 mt-0.5">Entregas con Core Web Vitals en verde garantizadas por contrato.</div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/40 to-[#070817] border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">¿Prefieres atención inmediata?</div>
                  <div className="text-xs text-slate-400">Habla directo con un ingeniero de GiorgIT</div>
                </div>
              </div>
              <a
                href="https://wa.me/5491155218890?text=Hola%20GiorgIT,%20quiero%20cotizar%20el%20desarrollo%20de%20mi%20tienda%20ecommerce%20de%20alto%20rendimiento."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40"
              >
                <span>Chatear por WhatsApp Ahora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#090c22]/90 border border-white/[0.1] backdrop-blur-2xl shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Mensaje Recibido con Éxito!</h3>
                  <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                    Gracias por confiar en GiorgIT, <strong className="text-white">{formData.name}</strong>. Un especialista técnico se contactará contigo a la brevedad vía WhatsApp o email con tu propuesta.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-all"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Nombre y Apellido *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej: Sofia Rossi"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        WhatsApp / Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+54 9 11 ..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Corporativo o Personal *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nombre@marca.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Nombre de la Marca o Negocio
                      </label>
                      <input
                        type="text"
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        placeholder="Ej: Nova Apparel"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Objetivo del Proyecto
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#0e1124] border border-white/10 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-violet-500 transition-all"
                      >
                        <option value="Quiero lanzar una tienda nueva desde cero">Lanzar tienda nueva desde cero</option>
                        <option value="Quiero migrar desde TiendaNube">Migrar desde TiendaNube</option>
                        <option value="Quiero migrar desde Shopify">Migrar desde Shopify</option>
                        <option value="Quiero migrar desde WooCommerce">Migrar desde WooCommerce</option>
                        <option value="Busco desarrollo Enterprise Headless">Desarrollo Enterprise / ERP</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Facturación o Catálogo Estimado
                      </label>
                      <select
                        value={formData.salesRange}
                        onChange={(e) => setFormData({ ...formData, salesRange: e.target.value })}
                        className="w-full bg-[#0e1124] border border-white/10 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-violet-500 transition-all"
                      >
                        <option value="Menos de $2M ARS / mes">Menos de $2M ARS / mes (Fase inicial)</option>
                        <option value="$2M a $10M ARS / mes">$2M a $10M ARS / mes</option>
                        <option value="$10M a $30M ARS / mes">$10M a $30M ARS / mes</option>
                        <option value="Más de $30M ARS / mes">+ $30M ARS / mes (Alto volumen)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Detalles o requerimientos adicionales (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos brevemente sobre tus productos, integraciones deseadas o fecha estimada de lanzamiento..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-violet-600/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Enviando solicitud...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Solicitar Cotización sin Compromiso</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-2">
                      🔒 Tratamiento 100% confidencial. No enviamos spam.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
