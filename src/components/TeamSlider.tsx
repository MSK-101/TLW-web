import { TeamMember } from './TeamCard';
import TeamCard from './TeamCard';
import SwiperWrapper from './SwiperWrapper';
import { getCardColorThemeByPosition } from '../utils/cardColors';

// Mock data - easily replaceable with API data
const MOCK_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Tineke Zwart",
    position: "Functie Ipsum",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b169?w=400&h=400&fit=crop&crop=face", // Demo image
    linkedinUrl: "https://www.linkedin.com/in/tineke-zwart",
    ...getCardColorThemeByPosition(0)
  },
  {
    id: 2,
    name: "Myrthe Scheffer",
    position: "Functie Ipsum",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", // Demo image
    linkedinUrl: "https://www.linkedin.com/in/myrthe-scheffer",
    ...getCardColorThemeByPosition(1)
  },
  {
    id: 3,
    name: "Tamara Stroop",
    position: "Functie Ipsum",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face", // Demo image
    linkedinUrl: "https://www.linkedin.com/in/tamara-stroop",
    ...getCardColorThemeByPosition(2)
  },
  {
    id: 4,
    name: "Tristan Melano",
    position: "Functie Ipsum",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", // Demo image
    linkedinUrl: "https://www.linkedin.com/in/tristan-melano",
    ...getCardColorThemeByPosition(3)
  },
  {
    id: 5,
    name: "Naam Lorum",
    position: "Functie Ipsum",
    // image: "/team/naam-lorum.jpg", // No image to test avatar fallback
    linkedinUrl: "https://www.linkedin.com/in/naam-lorum",
    ...getCardColorThemeByPosition(4)
  },
  {
    id: 6,
    name: "Alex Johnson",
    position: "Senior Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face", // Demo image
    linkedinUrl: "https://www.linkedin.com/in/alex-johnson",
    ...getCardColorThemeByPosition(5)
  }
];

interface TeamSliderProps {
  teamMembers?: TeamMember[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function TeamSlider({
  teamMembers = MOCK_TEAM_MEMBERS,
  title = "We are in this together",
  subtitle = "Ons team",
  className = ""
}: TeamSliderProps) {
  // Responsive breakpoints for Swiper
  const swiperBreakpoints = {
    // Mobile: 1 card
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // Tablet: 3 cards
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    // Desktop/Laptop: 5 cards
    1024: {
      slidesPerView: 5,
      spaceBetween: 16,
    }
  };

    return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            style={{ fontFamily: "var(--font-funnel-sans)" }}
            className="text-sm text-gray-500 uppercase tracking-wide mb-2"
          >
            {subtitle}
          </p>
          <h2
            style={{ fontFamily: "var(--font-funnel-display)" }}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800"
          >
            {title}
          </h2>
        </div>

        {/* Team Slider */}
        <div className="relative overflow-hidden">
          <SwiperWrapper
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={false}
            loop={true}
            navigation={true}
            allowOverlap={false}
            breakpoints={swiperBreakpoints}
            navigationId="team"
            className="py-8 team-slider"
          >
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </SwiperWrapper>
        </div>
      </div>
    </section>
  );
}
