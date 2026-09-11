"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Soluciones", href: "#soluciones" },
    { label: "Ecommerce", href: "#bento" },
    { label: "Tu tienda", href: "#comparativa" },
    { label: "Precios", href: "#planes" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="w-full flex items-center justify-between z-30 relative">
      {/* Brand: GiorgIT geometric monogram with violet facet + clean typography */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <div className="relative w-8 h-8 rounded-xl bg-[#110729] border border-violet-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(111,60,255,0.35)] group-hover:border-violet-400 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
          <svg viewBox="0 0 28 28" className="w-5 h-5" fill="none">
            <defs>
              <linearGradient
                id="gBrandGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient
                id="gBrandFacet"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#6f3cff" />
              </linearGradient>
            </defs>
            <path
              d="M21 8.5C19.2 6.3 16.5 5 13.5 5C8.8 5 5 8.8 5 13.5C5 18.2 8.8 22 13.5 22C17.5 22 20.8 19.2 21.7 15.5H13.5V12.5H24.8C24.9 12.8 25 13.2 25 13.6C25 19.9 19.9 25 13.5 25C7.1 25 2 19.9 2 13.5C2 7.1 7.1 2 13.5 2C17.6 2 21.2 3.8 23.6 6.7L21 8.5Z"
              fill="url(#gBrandGrad)"
            />
            <polygon
              points="13.5,12.5 24.8,12.5 21.7,15.5 13.5,15.5"
              fill="url(#gBrandFacet)"
            />
          </svg>
        </div>
        <span className="text-[20px] font-semibold tracking-tight text-[#f9f8ff] font-sans flex items-center">
          Giorg<span className="text-white">IT</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] ml-1 inline-block shadow-[0_0_8px_#a78bfa]" />
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-7">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[13px] font-normal text-[#f9f8ff]/80 hover:text-[#f9f8ff] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Action Button: Minimal clean pill matching Recal */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="#contacto"
          className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-medium text-[#f9f8ff] bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
        >
          Agendar Demo
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden p-2 rounded-lg text-[#f9f8ff] hover:bg-white/10 transition-colors"
        aria-label="Abrir menú"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 p-4 rounded-2xl bg-[#070019]/95 border border-white/10 backdrop-blur-xl flex flex-col gap-3 shadow-2xl z-50 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[#f9f8ff]/90 hover:text-white py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center py-2.5 rounded-full text-xs font-semibold text-[#070019] bg-[#f9f8ff] hover:bg-white transition-colors"
          >
            Agendar Demo
          </a>
        </div>
      )}
    </header>
  );
}
