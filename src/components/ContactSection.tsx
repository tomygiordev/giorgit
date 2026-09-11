"use client";

import React, { useState } from "react";
import { MessageCircle, ArrowRight, CheckCircle2, Clock, Mail, ShieldCheck, User, Building, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    projectType: "Nueva tienda ecommerce desde cero",
    monthlyVolume: "$10M a $30M ARS / mes",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola GiorgIT! Quisiera cotizar el desarrollo de una tienda online de alto rendimiento para mi marca (${formData.brand || "mi negocio"}).`
  );

  return (
    <section id="contacto" className="w-full bg-white text-[#070019] py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Direct Value, Technical SLA & WhatsApp */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6f3cff]" />
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-slate-500">
                // INICIAR CONVERSACIÓN TÉCNICA
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#070019] leading-[1.1]">
              Construyamos tu Próxima{" "}
              <span className="font-serif italic font-normal text-violet-700">
                Plataforma de Ecommerce
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Recibe una propuesta técnica personalizada con alcance detallado, cronograma de entrega de 15 a 21 días y presupuesto cerrado sin cargos ocultos.
            </p>
          </div>

          {/* Prominent Direct Specialist WhatsApp Card */}
          <div className="relative p-6 rounded-2xl bg-[#fafbff] border border-slate-200/90 shadow-2xs space-y-4">
            <span className="absolute -top-1.5 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
            <span className="absolute -top-1.5 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-800">Atención Técnica Inmediata</span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                EN LÍNEA
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              ¿Deseas hablar directamente con un ingeniero de software de nuestro equipo ahora mismo sin esperar un email?
            </p>

            <a
              href={`https://wa.me/5491138402948?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-tight transition-all shadow-md shadow-[#25D366]/20 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>Chatear por WhatsApp (+54 9 11 3840-2948)</span>
            </a>
          </div>

          {/* SLA Commitments */}
          <div className="space-y-3 text-xs text-slate-600 pt-1">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#6f3cff] flex-shrink-0" />
              <span>Respuesta técnica y propuesta preliminar en menos de 2 horas hábiles.</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#6f3cff] flex-shrink-0" />
              <span>Acuerdo de confidencialidad (NDA) disponible antes de compartir tus métricas.</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#6f3cff] flex-shrink-0" />
              <span>Auditoría gratuita de velocidad y conversión de tu tienda actual incluida.</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Contact & Quote Form */}
        <div className="lg:col-span-7 bg-[#fafbff] border border-slate-200/90 rounded-2xl p-6 sm:p-8 md:p-9 shadow-sm relative">
          <span className="absolute -top-2 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute -top-2 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute -bottom-2 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute -bottom-2 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>

          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center animate-in fade-in-50 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#070019]">¡Solicitud Recibida con Éxito!</h3>
              <p className="text-sm text-slate-600 mt-2.5 max-w-md leading-relaxed">
                Hemos recibido tu proyecto para <strong>{formData.brand || "tu marca"}</strong>. Uno de nuestros ingenieros principales analizará tus requerimientos y te contactará en las próximas 2 horas.
              </p>
              <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 font-mono text-left max-w-sm w-full space-y-1">
                <div className="text-[10px] text-slate-400 uppercase">Resumen de Ticket:</div>
                <div>Marca: {formData.brand || "No especificada"}</div>
                <div>Proyecto: {formData.projectType}</div>
                <div>Volumen: {formData.monthlyVolume}</div>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#070019] text-white text-xs font-semibold hover:bg-[#6f3cff] transition-colors cursor-pointer"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-slate-200/70 pb-3 mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-800">
                  Formulario de Cotización Técnica
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  CAMPOS OBLIGATORIOS (*)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Lucas Fernández"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-[#070019] focus:outline-none focus:border-[#6f3cff] focus:ring-1 focus:ring-[#6f3cff] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="lucas@tumarca.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-[#070019] focus:outline-none focus:border-[#6f3cff] focus:ring-1 focus:ring-[#6f3cff] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    WhatsApp o Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+54 9 11 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-[#070019] focus:outline-none focus:border-[#6f3cff] focus:ring-1 focus:ring-[#6f3cff] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nombre de tu Marca / Web Actual
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="Ej. UrbanKicks (o urbankicks.com.ar)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-[#070019] focus:outline-none focus:border-[#6f3cff] focus:ring-1 focus:ring-[#6f3cff] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Tipo de Proyecto
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-[#070019] focus:outline-none focus:border-[#6f3cff] transition-all"
                  >
                    <option>Nueva tienda ecommerce desde cero</option>
                    <option>Migración desde Shopify / TiendaNube</option>
                    <option>Rediseño y optimización de velocidad</option>
                    <option>Desarrollo Headless Enterprise a medida</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Facturación Mensual Estimada
                  </label>
                  <select
                    value={formData.monthlyVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-[#070019] focus:outline-none focus:border-[#6f3cff] transition-all"
                  >
                    <option>Lanzamiento inicial (aún no facturo)</option>
                    <option>$2M a $10M ARS / mes</option>
                    <option>$10M a $30M ARS / mes</option>
                    <option>Más de $30M ARS / mes</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Cuéntanos brevemente sobre tu catálogo o necesidades técnicas (opcional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cantidad estimada de SKUs, pasarelas requeridas, integraciones ERP o detalles particulares..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-[#070019] focus:outline-none focus:border-[#6f3cff] focus:ring-1 focus:ring-[#6f3cff] transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-[#070019] hover:bg-[#6f3cff] text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 group"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Solicitar Propuesta y Presupuesto Cerrado</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
