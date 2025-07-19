"use client";

import CryptoAlertsMain from "./main";
import BenefitsSection from "./benefits";
import ComparisonSection from "./comparison";
import AboutSection from "./about";
import Tinke from "./tinke";
import FAQSection from "./faq_section";
import CryptoFooter from "./crypto-footer";

export default function CryptoAlertsPage() {
  return (
    <main className="bg-[#282828] py-4 lg:py-8">
      <CryptoAlertsMain />
      <div className="bg-gray-50 py-12 lg:py-28 rounded-[32px] px-[24px] lg:px-[124px]">
        <BenefitsSection />
        <ComparisonSection />
        <AboutSection />
        <Tinke />
        <FAQSection />
      </div>
      <CryptoFooter />
    </main>
  );
}
