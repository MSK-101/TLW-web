"use client";

import BenefitsSection from "./components/benefits-section";
import ComparisonSection from "./components/comparison-section";
import AboutSection from "./components/about-section";
import FAQSection from "./components/faq-section";
import CryptoFooter from "./components/crypto-footer";
import HeroSection from "./components/hero-section";
import QuoteSection from "./components/quote-section";
import GroupSection from "./components/group-section";
import IntroSection from "./components/intro-section";
import TestimonialsSection from "./components/testimonials-section";
import TeamSection from "./components/team-section";
import TinkeSection from "./components/tinke-section";
import CryptoExperts from "./components/crypto-experts";

export default function CryptoAlertsPage() {
  return (
    <main className="bg-[#282828] p-[24px]">
      <HeroSection />
      <div className="flex flex-col gap-24 lg:gap-[164px] bg-gray-50 py-20 lg:py-[164px] rounded-[32px] px-[24px] lg:px-[108px] -mx-[24px] mt-[24px]">
        <BenefitsSection />
        <ComparisonSection />
        <QuoteSection />
        <GroupSection />
        <IntroSection />
        <TestimonialsSection />
        <TeamSection />
        <CryptoExperts />
        <TinkeSection />
        <AboutSection />
        <FAQSection />
      </div>
      <CryptoFooter />
    </main>
  );
}
