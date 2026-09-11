import React from "react";
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
    <div className="min-h-screen bg-white text-[#070019]">
      <main className="max-w-[1440px] mx-auto p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col gap-16 md:gap-24 bg-white text-[#070019]">
        <Hero />
        <SocialProofBar />
        <BentoFeatures />
        <ComparisonTable />
        <PricingCalculator />
        <FaqSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
