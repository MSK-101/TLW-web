import { Review } from './ReviewCard';
import ReviewCard from './ReviewCard';
import SwiperWrapper from './SwiperWrapper';
import { getCardColorThemeByPosition } from '../utils/cardColors';

// Mock data - easily replaceable with API data
const MOCK_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Naam Achternaam",
    username: "Gebruikersnaam",
    stars: 5,
    content: "Suspendisse non ni sed tincidunt tortor sed. Dui vitae molestmod diam porttitor nunc elementum sed mattis vulputate. Nec volutpat duis pretium sapien velit in.",
    date: "21 maand 2025",
    ...getCardColorThemeByPosition(0)
  },
  {
    id: 2,
    name: "Naam Achternaam",
    username: "Gebruikersnaam",
    stars: 3,
    content: "Faucibus augiat et in congue nunc vitae facilisis. Eu tristique vel commodo dolor lorem urna et. Turpis rutrum risus ornare mi ipsum in augue urna.",
    date: "18 maand 2025",
    ...getCardColorThemeByPosition(7)
  },
  {
    id: 3,
    name: "Naam Achternaam",
    username: "Gebruikersnaam",
    stars: 3,
    content: "Mauris nec placerat ultrices turpis amet. Morbi bibendum lacinia ut urna mi auctor faucibus imperdiet facibus pellentesque magna etium blandit scelerisque magna. Cursus nulla quis et id felis.",
    date: "15 maand 2025",
    ...getCardColorThemeByPosition(5)
  },
  {
    id: 4,
    name: "Naam Achternaam",
    username: "Gebruikersnaam",
    stars: 3,
    content: "Sed diam porttitor nunc elementum mattis vulputate. Nec volutpat duis pretium sapien velit in. Suspendisse non ni sed tincidunt.",
    date: "12 maand 2025",
    ...getCardColorThemeByPosition(3)
  }
];

interface ReviewSliderProps {
  reviews?: Review[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ReviewSlider({
  reviews = MOCK_REVIEWS,
  title = "Wat vinden gebruikers van The Limitless Way?",
  subtitle = "Rating en reviews",
  className = ""
}: ReviewSliderProps) {
        // Responsive breakpoints for Swiper
  const swiperBreakpoints = {
    // Mobile: 1 card
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // Tablet: 2 cards
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // Desktop: 3 cards with overlapping
    1024: {
      slidesPerView: 3,
      spaceBetween: -80, // Negative spacing for overlap
    }
  };

  return (
    <section className={`py-16 bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            {subtitle}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            {title}
          </h2>
        </div>

        {/* Reviews Slider */}
        <SwiperWrapper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          navigation={true}
          allowOverlap={true}
          breakpoints={swiperBreakpoints}
          navigationId="reviews"
          className="py-8"
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </SwiperWrapper>
      </div>
    </section>
  );
}
