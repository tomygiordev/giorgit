"use client";

import React, { useState } from "react";
import { MessageCircle, ArrowRight, CheckCircle2, Clock, Mail, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    projectType: "Nueva tienda ecommerce desde cero",
    monthlyVolume: "$2M a $10M ARS / mes",
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
    }, 500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola GiorgIT! Quisiera cotizar el desarrollo de una tienda online de alto rendimiento para mi marca.`
  );

  return (
    <section id="contacto" className="w-full bg-white text-[#070019] py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Direct value & WhatsApp */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#070019] leading-tight">
              Hablemos de tu próxima plataforma
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Recibe una propuesta técnica personalizada con cronograma de entrega de 15 a 21 días y presupuesto cerrado sin cargos ocultos.
            </p>
          </div>

          {/* Quick Direct WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-[#fbfaff] border border-slate-200/90 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700">Atención Directa por WhatsApp</span>
            </div>
            <p className="text-xs text-slate-600">
              ¿Prefieres conversar directamente con un ingeniero de software de nuestro equipo ahora mismo?
            </p>
            <a
              href={`https://wa.me/5491138402948?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-tight transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>Escribir al WhatsApp (+54 9 11 3840-2948)</span>
            </a>
          </div>

          <div className="space-y-3 text-xs text-slate-600 pt-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#6f3cff]" />
              <span>Respuesta técnica en menos de 2 horas hábiles</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#6f3cff]" />
              <span>Acuerdo de confidencialidad (NDA) disponible si lo requieres</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#fbfaff] border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#070019]">¡Mensaje Recibido con Éxito!</h3>
              <p className="text-sm text-slate-600 mt-2 max-w-md">
                Hemos recibido tu solicitud para <strong>{formData.brand || "tu marca"}</strong>. Nos pondremos en contacto contigo en breve para coordinar una demo técnica.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#070019] text-white text-xs font-semibold hover:bg-[#6f3cff] transition-colors cursor-pointer"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    <option>Desarrollo Headless a medida</option>
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
                  Cuéntanos brevemente sobre tu catálogo o necesidades especiales (opcional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cantidad estimada de productos, integraciones deseadas o dudas específicas..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-[#070019] focus:outline-none focus:border-[#6f3cff] focus:ring-1 focus:ring-[#6f3cff] transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-[#070019] hover:bg-[#6f3cff] text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Solicitar Propuesta y Presupuesto</span>
                      <ArrowRight className="w-4 h-4" />
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
