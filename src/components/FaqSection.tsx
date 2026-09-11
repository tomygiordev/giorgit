"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, Clock, CreditCard, Code2 } from "lucide-react";

interface FaqItem {
  id: string;
  category: "comisiones" | "tiempos" | "pagos" | "codigo";
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const faqItems: FaqItem[] = [
    {
      id: "1",
      category: "comisiones",
      question: "¿Por qué GiorgIT no cobra comisiones porcentuales sobre mis ventas?",
      answer:
        "Porque nosotros desarrollamos ingeniería de software a medida para tu empresa, no un servicio de alquiler cautivo. Plataformas como Shopify o TiendaNube cobran mensualidades en dólares más un 0.5% a 2% de cada producto que vendes de por vida. Con GiorgIT realizas una única inversión por el diseño y desarrollo de tu plataforma. El 100% de la facturación va directo a tu cuenta bancaria o Mercado Pago sin intermediarios.",
    },
    {
      id: "2",
      category: "tiempos",
      question: "¿Cuánto demora exactamente el desarrollo y puesta en marcha?",
      answer:
        "El plazo estándar de entrega para los planes Starter y Growth Scale es de 15 a 21 días hábiles. Cumplimos un cronograma estricto en 3 fases: 1) Arquitectura UX/UI y diseño de autor (Días 1-7); 2) Desarrollo Next.js, pasarelas de pago y envíos (Días 8-16); y 3) Carga de catálogo inicial, pruebas de estrés y vinculación de tu dominio propio con certificado SSL (Días 17-21).",
    },
    {
      id: "3",
      category: "codigo",
      question: "¿El código fuente y la base de datos me pertenecen al 100%?",
      answer:
        "Sí, sin ninguna excepción. Al finalizar el proyecto te transferimos la propiedad total del repositorio privado en GitHub con todo el código fuente, componentes React, consultas a base de datos y configuraciones de despliegue. No dependes de nosotros para existir: si el día de mañana deseas que tu propio equipo interno continúe desarrollando la tienda, tienen control absoluto del software.",
    },
    {
      id: "4",
      category: "pagos",
      question: "¿Qué pasarelas de pago quedan integradas y listas para facturar?",
      answer:
        "Integramos Checkout Nativo y Checkout Pro de Mercado Pago (tarjetas de crédito, débito, dinero en cuenta de MP y cuotas sin interés bancarias), Stripe para cobrar ventas internacionales en USD con prevención de fraude Radar, y un módulo optimizado de Transferencia Bancaria con alias automático y descuento configurable (por ejemplo, 10% OFF al pagar con transferencia con carga automática de comprobante).",
    },
    {
      id: "5",
      category: "pagos",
      question: "¿Cómo se calculan los costos de envío con Andreani o Correo Argentino?",
      answer:
        "Conectamos directamente las APIs oficiales de Andreani, Correo Argentino u OCA. En cuanto el usuario ingresa su Código Postal en el checkout de 1 solo paso, el sistema consulta en menos de 15 milisegundos las opciones disponibles: envío a domicilio estándar, express o retiro en sucursal con el costo exacto calculado según peso y dimensiones de los productos del carrito.",
    },
    {
      id: "6",
      category: "tiempos",
      question: "¿Puedo migrar mi catálogo y clientes desde Shopify o TiendaNube sin perder SEO?",
      answer:
        "Sí. Realizamos la migración técnica completa de tu catálogo actual (imágenes en alta resolución, variantes de talles/colores, stocks, descripciones y precios), clientes registrados e historial de pedidos. Además, implementamos redirecciones 301 para preservar intacto el posicionamiento orgánico que tu tienda ya tiene en Google.",
    },
    {
      id: "7",
      category: "codigo",
      question: "¿Cómo gestiono productos, precios y pedidos en el día a día?",
      answer:
        "Te entregamos un panel de administración moderno, intuitivo y responsivo. Puedes actualizar precios masivamente por porcentaje, pausar stock por sucursal, emitir facturas electrónicas y cambiar estados de pedidos con 1 solo toque, sin necesidad de saber programar ni contratar personal técnico.",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white text-[#070019] py-8 sm:py-12">
      {/* Section Header with Typography Duet */}
      <div className="max-w-3xl mb-10 sm:mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6f3cff]" />
          <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-slate-500">
            // PREGUNTAS FRECUENTES
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#070019] leading-[1.1]">
          Transparencia Total{" "}
          <span className="font-serif italic font-normal text-violet-700">
            Antes de Escribir la Primera Línea
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Resolvemos tus dudas sobre ingeniería, plazos de entrega garantizados, pasarelas de cobro y propiedad legal del software.
        </p>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            { id: "all", label: "Todas las Preguntas" },
            { id: "comisiones", label: "0% Comisiones" },
            { id: "tiempos", label: "Tiempos & Migración" },
            { id: "pagos", label: "Pagos & Envíos" },
            { id: "codigo", label: "Propiedad & Código" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#070019] text-white shadow-xs"
                  : "bg-[#fafbff] border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Container with Architectural Hairline Borders */}
      <div className="max-w-4xl divide-y divide-slate-200 border-y border-slate-200 relative">
        <span className="absolute -top-2.5 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
        <span className="absolute -top-2.5 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
        <span className="absolute -bottom-2.5 -left-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>
        <span className="absolute -bottom-2.5 -right-1 text-slate-300 font-mono text-xs select-none pointer-events-none">+</span>

        {filteredItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.id} className="py-5 sm:py-6 group transition-colors">
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-medium text-[#070019] group-hover:text-[#6f3cff] transition-colors tracking-tight">
                  {item.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-[#f5f1ff] text-[#6f3cff]" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl animate-in fade-in-50 duration-200">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
