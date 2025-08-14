"use client";

import { useEffect, useState } from "react";
import { getStrapiContentClient } from "@/lib/strapi-client";
import PageLoader from "@/components/ui/page-loader";

import tradeAndInvestAcademyCache from "@/utils/api-cached-responses/trade-and-invest-academy.json";

import BenefitsSection from "../crypto-alerts/components/benefits-section";
import HeroSection from "../crypto-alerts/components/hero-section";
import QuoteSection from "../crypto-alerts/components/quote-section";
import ProductOverviewSection from "../crypto-alerts/components/product-overview-section";
import ReviewsSection from "../crypto-alerts/components/reviews-section";
import AboutTeamSection from "../crypto-alerts/components/about-team-section";
import CallToActionSection from "../crypto-alerts/components/call-to-action-section";
import AboutCompanySection from "../crypto-alerts/components/about-company-section";
import FAQSection from "../crypto-alerts/components/faq-section";
import DisclaimerSection from "../crypto-alerts/components/disclaimer-section";
import ComparisonSection from "./components/comparison-section";
import AudienceSection from "./components/audience-section";
import TeamMembersSection from "./components/team-members-section";

export default function TradeAndInvestAcademyPage() {
  const [tradeAndInvestAcademyData, setTradeAndInvestAcademyData] = useState<{
    hero_section: any;
    benefits_section: any;
    quote_section: any;
    audience_section: any;
    product_overview_section: any;
    reviews_section: any;
    about_team_section: any;
    team_members_section: any;
    call_to_action_section: any;
    about_company_section: any;
    faq_section: any;
    disclaimer_section: any;
    perks_comparison_section: any;
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
      key: "populate[team_members_section][populate][team_members_slider][populate][team_member_cards][populate]",
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
    {
      key: "populate[perks_comparison_section][populate][perks][populate]",
      value: "*",
    },
  ];

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getStrapiContentClient(
        "/web-trade-and-invest-academy",
        queryParams
      );
      setTradeAndInvestAcademyData({
        hero_section: response.data.hero_section,
        benefits_section: response.data.benefits_section,
        quote_section: response.data.quote_section,
        audience_section: response.data.audience_section,
        product_overview_section: response.data.product_overview_section,
        reviews_section: response.data.reviews_section,
        about_team_section: response.data.about_team_section,
        team_members_section: response.data.team_members_section,
        call_to_action_section: response.data.call_to_action_section,
        about_company_section: response.data.about_company_section,
        faq_section: response.data.faq_section,
        disclaimer_section: response.data.disclaimer_section,
        perks_comparison_section: response.data.perks_comparison_section,
      });
    } catch (error) {
      console.error("Error fetching data from API, using cached data:", error);
      // Use fallback data from cache
      setTradeAndInvestAcademyData({
        hero_section: tradeAndInvestAcademyCache.data.hero_section,
        benefits_section: tradeAndInvestAcademyCache.data.benefits_section,
        quote_section: tradeAndInvestAcademyCache.data.quote_section,
        audience_section: tradeAndInvestAcademyCache.data.audience_section,
        product_overview_section:
          tradeAndInvestAcademyCache.data.product_overview_section,
        reviews_section: tradeAndInvestAcademyCache.data.reviews_section,
        about_team_section: tradeAndInvestAcademyCache.data.about_team_section,
        team_members_section:
          tradeAndInvestAcademyCache.data.team_members_section,
        call_to_action_section:
          tradeAndInvestAcademyCache.data.call_to_action_section,
        about_company_section:
          tradeAndInvestAcademyCache.data.about_company_section,
        faq_section: tradeAndInvestAcademyCache.data.faq_section,
        disclaimer_section: tradeAndInvestAcademyCache.data.disclaimer_section,
        perks_comparison_section:
          tradeAndInvestAcademyCache.data.perks_comparison_section,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <PageLoader loading={loading} />;
  }

  return (
    <main className="bg-[#282828] p-[24px]">
      <HeroSection heroSectionData={tradeAndInvestAcademyData?.hero_section} />
      <div className="flex flex-col gap-24 lg:gap-[164px] bg-gray-50 py-20 lg:py-[164px] rounded-[32px] px-[24px] lg:px-[108px] -mx-[24px] mt-[24px]">
        <BenefitsSection
          benefitsSectionData={tradeAndInvestAcademyData?.benefits_section}
        />
        <ComparisonSection
          perksComparisonSectionData={
            tradeAndInvestAcademyData?.perks_comparison_section
          }
        />
        <QuoteSection
          quoteSectionData={tradeAndInvestAcademyData?.quote_section}
        />
        <AudienceSection
          audienceSectionData={tradeAndInvestAcademyData?.audience_section}
        />
        <ProductOverviewSection
          productOverviewSectionData={
            tradeAndInvestAcademyData?.product_overview_section
          }
        />
        <ReviewsSection
          reviewsSectionData={tradeAndInvestAcademyData?.reviews_section}
        />
        <AboutTeamSection
          aboutTeamSectionData={tradeAndInvestAcademyData?.about_team_section}
        />

        <TeamMembersSection
          teamMembersSectionData={
            tradeAndInvestAcademyData?.team_members_section
          }
        />

        <CallToActionSection
          callToActionSectionData={
            tradeAndInvestAcademyData?.call_to_action_section
          }
        />
        <AboutCompanySection
          aboutCompanySectionData={
            tradeAndInvestAcademyData?.about_company_section
          }
        />
        <FAQSection faqSectionData={tradeAndInvestAcademyData?.faq_section} />
      </div>
      <DisclaimerSection
        disclaimerSectionData={tradeAndInvestAcademyData?.disclaimer_section}
      />
    </main>
  );
}
