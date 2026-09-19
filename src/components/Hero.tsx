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
      className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden relative bg-[#070019] text-white shadow-2xl pt-4 sm:pt-5 pb-8 sm:pb-10 px-4 sm:px-10 lg:px-12 flex flex-col items-center gap-5 sm:gap-6"
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

      {/* A quiet frame contains the atmospheric background. */}
      <div
        aria-hidden="true"
        className="absolute inset-px rounded-[inherit] border border-white/[0.08] pointer-events-none z-[2]"
      />

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

      <div className={styles.intro}>
        <div className={styles.headline}>
          <p className={styles.service}>Diseño y desarrollo de tiendas online</p>
          <h1>Tu negocio,<span>en su propio</span><em>espacio.</em></h1>
          <span className={styles.marginNote}>Con tu nombre.<br />Con tu forma de vender.</span>
        </div>
        <div className={styles.studioNote}>
          <span className={styles.noteIndex}>UNA NOTA ANTES DE EMPEZAR</span>
          <p>Nos contás cómo vendés. <br />Nos ocupamos de llevarlo <br />a tu tienda online.</p>
          <p className={styles.noteDetail}>Diseño, catálogo, pagos y envíos.<br />Todo pensado para trabajar junto.</p>
          <a href="#contacto" className={styles.cta}>Hablemos de tu proyecto <ArrowRight size={17} /></a>
          <svg className={styles.noteArrow} viewBox="0 0 115 66" fill="none" aria-hidden="true"><path d="M108 4C115 31 93 51 56 49C36 48 25 38 8 52M8 52L20 51M8 52L11 40" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className={styles.tryNote}>Abajo, una pequeña prueba.</span>
        </div>
      </div>

      {/* Hero Interactive Showcase Card (sitting on top of the clouds inside the hero chip) */}
      <HeroShowcase />
    </section>
  );
}
