import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import BentoFeatures from "@/components/BentoFeatures";
import ComparisonTable from "@/components/ComparisonTable";
import PricingCalculator from "@/components/PricingCalculator";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060713] text-slate-100 selection:bg-violet-600 selection:text-white relative">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <BentoFeatures />
      <ComparisonTable />
      <PricingCalculator />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
