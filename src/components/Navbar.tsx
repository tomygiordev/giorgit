"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Soluciones", href: "#soluciones" },
    { label: "Ecommerce", href: "#bento" },
    { label: "Comparativa", href: "#comparativa" },
    { label: "Precios", href: "#planes" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="w-full flex items-center justify-between z-30 relative">
      {/* Brand: GiorgIT clean typography matching Recal */}
      <Link href="/" className="flex items-center gap-1 group">
        <span className="text-[20px] font-medium tracking-tight text-[#f9f8ff] font-sans">
          Giorg<span className="text-[#a78bfa] group-hover:text-white transition-colors">IT</span>
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