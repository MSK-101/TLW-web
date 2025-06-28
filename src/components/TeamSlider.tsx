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
    image: "/tineke_twart.png",
    linkedinUrl: "https://www.linkedin.com/in/tineke-zwart",
    ...getCardColorThemeByPosition(0)  // Purple gradient
  },
  {
    id: 2,
    name: "Myrthe Scheffer",
    position: "Functie Ipsum",
    image: "/myrthe_scheffer.png",
    linkedinUrl: "https://www.linkedin.com/in/myrthe-scheffer",
    ...getCardColorThemeByPosition(1)  // Red gradient
  },
  {
    id: 3,
    name: "Tamara Stroop",
    position: "Functie Ipsum",
    image: "/tamara_stroop.png",
    linkedinUrl: "https://www.linkedin.com/in/tamara-stroop",
    ...getCardColorThemeByPosition(2)  // Blue gradient
  },
  {
    id: 4,
    name: "Tristan Melano",
    position: "Functie Ipsum",
    image: "/tristan_melano.png",
    linkedinUrl: "https://www.linkedin.com/in/tristan-melano",
    ...getCardColorThemeByPosition(3)  // Green gradient
  },
  {
    id: 5,
    name: "Naam Lorum",
    position: "Functie Ipsum",
    image: "/no_image.png", // Commented out to show gradient with initials
    linkedinUrl: "https://www.linkedin.com/in/naam-lorum",
    ...getCardColorThemeByPosition(4)  // Yellow gradient
  },
  {
    id: 6,
    name: "Alex Johnson",
    position: "Senior Developer",
    image: "/no_image.png", // Commented out to show gradient with initials
    linkedinUrl: "https://www.linkedin.com/in/alex-johnson",
    ...getCardColorThemeByPosition(5)  // Gray gradient
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
  // Responsive breakpoints for Swiper - Updated to match requirements
  const swiperBreakpoints = {
    // Mobile: 1 card
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // Tablet: 3 cards
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // Desktop/Laptop: 5 cards
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
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
