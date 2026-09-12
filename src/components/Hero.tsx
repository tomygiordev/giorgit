"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import HeroShowcase from "./HeroShowcase";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      id="soluciones"
      className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden relative bg-[#070019] text-white shadow-2xl pt-6 pb-12 sm:pb-16 px-4 sm:px-10 lg:px-12 flex flex-col items-center gap-10 md:gap-14"
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

      {/* Luminous radial cosmic aura at the top center of the hero chip */}
      <div
        className="absolute top-0 inset-x-0 h-[520px] pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124, 58, 237, 0.45) 0%, rgba(111, 60, 255, 0.2) 40%, transparent 70%)",
        }}
      />

      {/* Fine frame details stay in the empty desktop margins. */}
      <div
        aria-hidden="true"
        className="absolute inset-px rounded-[inherit] border border-white/[0.08] pointer-events-none z-[2]"
      />
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 28 240"
        fill="none"
        className="hidden lg:block absolute left-6 top-[180px] h-60 w-7 text-[#c5b9ed] pointer-events-none z-[2]"
      >
        <path d="M1 0V240" stroke="currentColor" strokeOpacity="0.12" />
        <path
          d="M1 20H15M1 32H7M1 44H7M1 56H7M1 68H11M1 80H7M1 92H7M1 200H15M1 212H7M1 224H7"
          stroke="currentColor"
          strokeOpacity="0.28"
        />
        <path d="M1 120H25" stroke="currentColor" strokeOpacity="0.45" />
        <circle cx="25" cy="120" r="1.5" fill="currentColor" fillOpacity="0.5" />
      </svg>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 28 240"
        fill="none"
        className="hidden lg:block absolute right-6 top-[180px] h-60 w-7 text-[#c5b9ed] pointer-events-none z-[2]"
      >
        <path d="M27 0V240" stroke="currentColor" strokeOpacity="0.12" />
        <path
          d="M27 16H13M27 28H21M27 40H21M27 160H17M27 172H21M27 184H21M27 196H21M27 208H13M27 220H21"
          stroke="currentColor"
          strokeOpacity="0.28"
        />
        <path d="M27 96H3" stroke="currentColor" strokeOpacity="0.45" />
        <circle cx="3" cy="96" r="1.5" fill="currentColor" fillOpacity="0.5" />
      </svg>

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
      <div className="text-center max-w-5xl mx-auto flex flex-col items-center relative z-20">
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

        {/* EXACT Recal Pill Button with microinteractions */}
        <div className={`${styles.ctaGroup} mt-8 flex items-center justify-center`}>
          <svg className={styles.ctaSparkles} viewBox="0 0 58 48" fill="none" aria-hidden="true" focusable="false">
            <path d="M19 7C19 18 16 22 5 22C16 22 19 26 19 37C19 26 22 22 33 22C22 22 19 18 19 7Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M43 1C43 7 41 9 35 9C41 9 43 11 43 17C43 11 45 9 51 9C45 9 43 7 43 1Z" fill="currentColor" fillOpacity=".7" />
            <circle cx="43" cy="37" r="1.5" fill="currentColor" fillOpacity=".45" />
          </svg>
          <a
            href="#contacto"
            className={`${styles.cta} inline-flex items-center gap-3.5 bg-[#f9f8ff] hover:bg-white text-[#070019] rounded-full pl-2.5 pr-6 py-2 h-12 font-semibold text-sm tracking-tight transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3),0_0_20px_rgba(111,60,255,0.25)] hover:shadow-[0_14px_30px_-5px_rgba(0,0,0,0.4),0_0_30px_rgba(111,60,255,0.4)] hover:scale-[1.02] active:scale-[0.98] group cursor-pointer border border-white/40`}
          >
            <span className="w-8 h-8 rounded-full bg-[#6f3cff] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5f2bee] flex-shrink-0 shadow-sm">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
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
