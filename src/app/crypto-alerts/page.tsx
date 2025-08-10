"use client";

import { getStrapiContentClient } from "@/lib/strapi-client";
import { useEffect, useState } from "react";

import BenefitsSection from "./components/benefits-section";
import ComparisonSection from "./components/comparison-section";
import FAQSection from "./components/faq-section";
import HeroSection from "./components/hero-section";
import QuoteSection from "./components/quote-section";
import AudienceSection from "./components/audience-section";
import ProductOverviewSection from "./components/product-overview-section";
import ReviewsSection from "./components/reviews-section";
import AboutTeamSection from "./components/about-team-section";
import CallToActionSection from "./components/call-to-action-section";
import AboutCompanySection from "./components/about-company-section";
import DisclaimerSection from "./components/disclaimer-section";

export default function CryptoAlertsPage() {
  const [cryptoAlertData, setCryptoAlertData] = useState<{
    hero_section: any;
    benefits_section: any;
    quote_section: any;
    audience_section: any;
    product_overview_section: any;
    reviews_section: any;
    about_team_section: any;
    call_to_action_section: any;
    about_company_section: any;
    faq_section: any;
    disclaimer_section: any;
  } | null>(null);

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
    {
      key: "populate[audience_section][populate]",
      value: "*",
    },
    {
      key: "populate[product_overview_section][populate]",
      value: "*",
    },
    {
      key: "populate[reviews_section][populate]",
      value: "*",
    },
    {
      key: "populate[about_team_section][populate][team_members][populate]",
      value: "*",
    },
    {
      key: "populate[call_to_action_section][populate]",
      value: "*",
    },
    {
      key: "populate[about_company_section][populate]",
      value: "*",
    },
    {
      key: "populate[faq_section][populate]",
      value: "*",
    },
    {
      key: "populate[disclaimer_section][populate]",
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
      setCryptoAlertData({
        hero_section: response.data.hero_section,
        benefits_section: response.data.benefits_section,
        quote_section: response.data.quote_section,
        audience_section: response.data.audience_section,
        product_overview_section: response.data.product_overview_section,
        reviews_section: response.data.reviews_section,
        about_team_section: response.data.about_team_section,
        call_to_action_section: response.data.call_to_action_section,
        about_company_section: response.data.about_company_section,
        faq_section: response.data.faq_section,
        disclaimer_section: response.data.disclaimer_section,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#282828] p-[24px] flex items-center justify-center fixed inset-0 overflow-hidden">
        <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
          <h2 className="text-lg md:text-2xl font-semibold mb-4">
            Page Loading...
          </h2>
          <div className="space-y-3">
            <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded animate-pulse w-5/6"></div>
            <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#282828] p-[24px]">
      <HeroSection heroSectionData={cryptoAlertData?.hero_section} />
      <div className="flex flex-col gap-24 lg:gap-[164px] bg-gray-50 py-20 lg:py-[164px] rounded-[32px] px-[24px] lg:px-[108px] -mx-[24px] mt-[24px]">
        <BenefitsSection
          benefitsSectionData={cryptoAlertData?.benefits_section}
        />
        <ComparisonSection />
        <QuoteSection quoteSectionData={cryptoAlertData?.quote_section} />
        <AudienceSection
          audienceSectionData={cryptoAlertData?.audience_section}
        />
        <ProductOverviewSection
          productOverviewSectionData={cryptoAlertData?.product_overview_section}
        />
        <ReviewsSection reviewsSectionData={cryptoAlertData?.reviews_section} />
        <AboutTeamSection
          aboutTeamSectionData={cryptoAlertData?.about_team_section}
        />
        <CallToActionSection
          callToActionSectionData={cryptoAlertData?.call_to_action_section}
        />
        <AboutCompanySection
          aboutCompanySectionData={cryptoAlertData?.about_company_section}
        />
        <FAQSection faqSectionData={cryptoAlertData?.faq_section} />
      </div>
      <DisclaimerSection
        disclaimerSectionData={cryptoAlertData?.disclaimer_section}
      />
    </main>
  );
}
