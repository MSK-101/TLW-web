import AgendaContent from "./components/AgendaContent";
import FAQSection from "./components/FAQSection";
import FooterCTA from "./components/FooterCTA";
import FoundersMessage from "./components/FoundersMessage";
import HeroSection from "./components/HeroSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import SpeakersSection from "./components/SpeakersSection";
import TicketCTA from "./components/TicketCTA";
import OurTeamSection from "./components/OurTeamSection";
import ReviewsSection from "./components/ReviewsSection";
import FeaturesSection from "./components/FeaturesSection";

export default function Event() {
  return (
    <main className="bg-[#282828] py-4 lg:py-8">
      <HeroSection />
      <SpeakersSection />
      <div className="py-12 md:py-24" id="agenda">
        <div className="bg-gray-50 py-12 lg:py-28 rounded-[32px] px-[24px] lg:px-[124px]">
          <AgendaContent />
          <FoundersMessage />
          <ReviewsSection />
          <TicketCTA />
          <OurTeamSection />
          <FeaturesSection />
          <FAQSection />
          <FooterCTA />
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
