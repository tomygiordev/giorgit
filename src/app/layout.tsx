import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GiorgIT — Soluciones Ecommerce de Alto Rendimiento",
  description:
    "Agencia de soluciones tecnológicas. Desarrollamos plataformas ecommerce de alta velocidad, sin comisiones por venta, preparadas para escalar y convertir al máximo.",
  keywords: [
    "ecommerce",
    "tienda online",
    "desarrollo ecommerce",
    "giorgit",
    "mercado pago",
    "stripe",
    "tienda a medida",
    "agencia tecnologia",
    "next.js ecommerce"
  ],
  authors: [{ name: "GiorgIT Tech Solutions" }],
  openGraph: {
    title: "GiorgIT — Plataformas Ecommerce de Alto Rendimiento",
    description: "Tiendas online a medida, ultrarrápidas, con checkout sin fricción y 0% de comisiones por venta.",
    url: "https://giorgit.com",
    siteName: "GiorgIT",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GiorgIT — Plataformas Ecommerce de Alto Rendimiento",
    description: "Tiendas online a medida con tecnología moderna, sin comisiones por venta.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${instrumentSerif.variable} dark`}>
      <body className="min-h-screen bg-[#060713] text-slate-100 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
