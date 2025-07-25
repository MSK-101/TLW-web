import AgendaContent from "@/app/event/components/AgendaContent";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import FooterCTA from "@/app/event/components/FooterCTA";
import FoundersMessage from "@/app/event/components/FoundersMessage";
import HeroSection from "@/app/event/components/HeroSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import ReviewSlider from "@/app/event/components/ReviewSlider";
import SpeakersSection from "@/app/event/components/SpeakersSection";
import TeamCarousel from "@/components/TeamCarousel";
import TicketCTA from "@/app/event/components/TicketCTA";

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
