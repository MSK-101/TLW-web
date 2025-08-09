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
import { getStrapiContentClient } from "@/lib/strapi-client";
import { useEffect, useState } from "react";

export default function CryptoAlertsPage() {
  const [heroSectionData, setHeroSectionData] = useState(null);
  const [benefitsSectionData, setBenefitsSectionData] = useState(null);
  const [quoteSectionData, setQuoteSectionData] = useState(null);
  const [loading, setLoading] = useState(true);

  const queryParams: { key: string; value: string }[] = [
    {
      key: "populate[hero_section][populate]",
      value: "*",
    },
    {
      key: "populate[benefits_section][populate]",
      value: "*",
    },
    {
      key: "populate[quote_section][populate]",
      value: "*",
    },
  ];

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getStrapiContentClient(
        "/crypto-alert",
        queryParams
      );
      console.log("Strapi response:", response);
      const { hero_section, benefits_section, quote_section } = response.data;

      setHeroSectionData(hero_section);
      setBenefitsSectionData(benefits_section);
      setQuoteSectionData(quote_section);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#282828] p-[24px] flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Loading content...</h2>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#282828] p-[24px]">
      <HeroSection heroSectionData={heroSectionData} />
      <div className="flex flex-col gap-24 lg:gap-[164px] bg-gray-50 py-20 lg:py-[164px] rounded-[32px] px-[24px] lg:px-[108px] -mx-[24px] mt-[24px]">
        <BenefitsSection benefitsSectionData={benefitsSectionData} />
        <ComparisonSection />
        <QuoteSection quoteSectionData={quoteSectionData} />
        <GroupSection />
        <IntroSection />
        <TestimonialsSection />
        <TeamSection />
        <TinkeSection />
        <AboutSection />
        <FAQSection />
      </div>
      <CryptoFooter />
    </main>
  );
}
