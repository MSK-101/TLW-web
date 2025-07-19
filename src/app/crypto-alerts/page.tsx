"use client";

import CryptoAlertsMain from "./main";
import BenefitsSection from "./benefits";
import ComparisonSection from "./comparison";

export default function CryptoAlertsPage() {
  return (
    <main className="bg-[#282828] py-4 lg:py-8">
      <CryptoAlertsMain />
      <div className="bg-gray-50 py-12 lg:py-28 rounded-[32px] px-[24px] lg:px-[124px]">
        <BenefitsSection />
        <ComparisonSection />
      </div>
    </main>
  );
}
