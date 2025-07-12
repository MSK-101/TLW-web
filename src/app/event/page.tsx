import AgendaContent from "@/components/event/AgendaContent";
import FAQSection from "@/components/event/FAQSection";
import FeaturesSection from "@/components/event/FeaturesSection";
import FooterCTA from "@/components/event/FooterCTA";
import FoundersMessage from "@/components/event/FoundersMessage";
import HeroSection from "@/components/event/HeroSection";
import NewsletterSignup from "@/components/event/NewsletterSignup";
import ReviewSlider from "@/components/event/ReviewSlider";
import SpeakersSection from "@/components/event/SpeakersSection";
import TeamCarousel from "@/components/event/TeamCarousel";
import TicketCTA from "@/components/event/TicketCTA";

export default function Event() {
  return (
    <main className="bg-[#282828] py-4 lg:py-8">
      <HeroSection />
      <SpeakersSection />
      <div className="py-12 md:py-24" id="agenda">
        <div className="bg-gray-50 py-12 lg:py-28 rounded-[32px] px-[24px] lg:px-[124px]">
          <AgendaContent />
          <FoundersMessage />
          <ReviewSlider />
          <TicketCTA />
          <TeamCarousel />
          <FeaturesSection />
          <FAQSection />
          <FooterCTA />
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
