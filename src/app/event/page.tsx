import AgendaSection from "@/components/event/AgendaSection";
import HeroSection from "@/components/event/HeroSection";
import SpeakersSection from "@/components/event/SpeakersSection";

export default function Event() {
  return (
    <main className="bg-[#282828] py-4 lg:py-8">
      <HeroSection />
      <SpeakersSection />
      <AgendaSection />
    </main>
  );
}
