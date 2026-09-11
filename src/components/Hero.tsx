"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import HeroShowcase from "./HeroShowcase";

export default function Hero() {
  return (
    <section
      id="soluciones"
      className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden relative bg-[#070019] text-white shadow-2xl pt-6 pb-12 sm:pb-16 px-4 sm:px-8 flex flex-col items-center gap-10 md:gap-14"
    >
      {/* Background with hero-bg.jpg & atmospheric deep indigo overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-top opacity-55"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070019]/70 via-[#070019]/50 to-[#070019]/95" />
      </div>

      {/* Floating ambient bottom clouds */}
      <div className="absolute -bottom-10 -left-12 sm:-left-6 w-[340px] sm:w-[500px] md:w-[650px] pointer-events-none z-10 animate-cloud-left opacity-90 select-none">
        <Image
          src="/images/cloud-left.png"
          alt=""
          width={2737}
          height={974}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="absolute -bottom-12 -right-14 sm:-right-8 w-[380px] sm:w-[560px] md:w-[720px] pointer-events-none z-10 animate-cloud-right opacity-95 select-none">
        <Image
          src="/images/cloud-right.png"
          alt=""
          width={3802}
          height={1458}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Soft atmospheric fade at the bottom of the hero chip */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#070019]/70 to-transparent pointer-events-none z-10" />

      {/* Top Navbar inside Hero Chip */}
      <Navbar />

      {/* Hero Headline & CTA (NO kicker/eyebrow above the heading) */}
      <div className="text-center max-w-4xl mx-auto flex flex-col items-center relative z-20">
        <h1 className="flex flex-col items-center tracking-tight">
          <span className="font-sans font-medium text-4xl sm:text-6xl md:text-7xl text-[#f9f8ff] tracking-tight leading-[0.95]">
            Tu Negocio Necesita
          </span>
          <span className="font-serif italic font-normal text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[1.0] my-1 sm:my-2">
            Plataformas de Ecommerce
          </span>
          <span className="font-sans font-medium text-4xl sm:text-6xl md:text-7xl text-[#f9f8ff] tracking-tight leading-[0.95]">
            Listas para Escalar
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-[#f9f8ff]/80 max-w-2xl font-normal leading-relaxed text-center">
          Evita meses de desarrollo lento y comisiones abusivas por cada venta. Desarrollamos tiendas online de alto rendimiento: carga en milisegundos, checkout optimizado y pagos integrados.
        </p>

        {/* EXACT Recal Pill Button */}
        <div className="mt-8 flex items-center justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-3.5 bg-[#f9f8ff] hover:bg-white text-[#070019] rounded-full pl-2 pr-6 py-2 h-11 font-semibold text-sm tracking-tight transition-all shadow-md group cursor-pointer"
          >
            <span className="w-8 h-8 rounded-full bg-[#6f3cff] flex items-center justify-center text-white transition-transform group-hover:scale-105 flex-shrink-0">
              <ArrowRight className="w-4 h-4" />
            </span>
            <span>Lanzar mi Tienda Online</span>
          </a>
        </div>
      </div>

      {/* Hero Interactive Showcase Card (sitting on top of the clouds inside the hero chip) */}
      <HeroShowcase />
    </section>
  );
}
