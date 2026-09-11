"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "¿Por qué GiorgIT no cobra comisiones por cada venta que realizo?",
      answer:
        "Porque desarrollamos infraestructura propia para tu marca. A diferencia de plataformas cerradas como Shopify o TiendaNube que cobran alquileres y porcentajes de tu facturación mes a mes, nosotros cobramos un único valor por el diseño e ingeniería de tu tienda. El 100% de los ingresos de tus ventas va directo a tu cuenta bancaria o Mercado Pago.",
    },
    {
      question: "¿Qué métodos de pago quedan integrados y listos para cobrar?",
      answer:
        "Integramos Checkout Pro y Checkout Transparente de Mercado Pago (tarjetas de crédito, débito, dinero en cuenta de Mercado Pago y cuotas sin interés), Stripe para cobros internacionales en USD, y módulo directo de Transferencia Bancaria con alias automático y descuento configurable (por ejemplo, 10% OFF automático con carga de comprobante).",
    },
    {
      question: "¿Cómo se calculan los costos de envío con Andreani o Correo Argentino?",
      answer:
        "Conectamos la tienda directamente a las APIs oficiales de logística (Andreani, Correo Argentino, OCA o logística propia). En cuanto el comprador escribe su código postal, la plataforma calcula en milisegundos las opciones disponibles: envío a domicilio estándar, prioritario o retiro en sucursal con el valor exacto.",
    },
    {
      question: "¿El código y la base de datos me pertenecen al 100%?",
      answer:
        "Sí, absolutamente. Te entregamos el repositorio Git completo con todo el código fuente, componentes y configuraciones. No tienes ataduras de exclusividad y la propiedad intelectual de tu software es enteramente de tu empresa.",
    },
    {
      question: "¿Cuánto tiempo demora el desarrollo y puesta en marcha de mi tienda?",
      answer:
        "Una tienda Starter o Growth estándar se entrega y lanza en un plazo de 15 a 21 días hábiles, incluyendo carga inicial de catálogo, configuración de pasarelas de pago, pruebas de checkout y vinculación de tu dominio propio (.com o .com.ar).",
    },
    {
      question: "¿Puedo migrar mis productos y clientes desde Shopify o TiendaNube?",
      answer:
        "Sí. Realizamos la migración completa de tu catálogo de productos (imágenes, variantes de talles/colores, descripciones, precios) y base de clientes sin perder historial ni posicionamiento SEO previo.",
    },
    {
      question: "¿Cómo administro mi catálogo, stock y pedidos en el día a día?",
      answer:
        "Te entregamos un panel de administración ultra-intuitivo donde puedes cargar nuevos productos, actualizar precios masivamente por porcentaje, modificar stock y cambiar el estado de los pedidos con 1 solo clic.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white text-[#070019] py-12">
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#070019] leading-tight">
          Preguntas frecuentes
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Transparencia total sobre nuestro proceso técnico, tiempos de entrega y condiciones comerciales.
        </p>
      </div>

      <div className="max-w-4xl divide-y divide-slate-200 border-y border-slate-200">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-5 sm:py-6">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-medium text-[#070019] group-hover:text-[#6f3cff] transition-colors">
                  {item.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-[#f5f1ff] text-[#6f3cff]" : "text-slate-500"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl animate-in fade-in-50 duration-200">
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
