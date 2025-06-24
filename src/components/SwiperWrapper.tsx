'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SwiperWrapperProps {
  children: ReactNode[];
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
  centeredSlides?: boolean;
  loop?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  autoplay?: boolean;
  allowOverlap?: boolean;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween?: number;
    };
  };
  className?: string;
  navigationId?: string; // Unique ID for navigation
}

const NavigationArrow = ({ direction, navigationId }: { direction: 'prev' | 'next', navigationId: string }) => (
  <button
    className={`
      swiper-button-${direction}-${navigationId}
      w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
      bg-black/90 hover:bg-black
      text-white rounded-full flex items-center justify-center
      transition-all duration-300 ease-out shadow-xl hover:shadow-2xl
      disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100
      backdrop-blur-sm border border-white/10
      hover:scale-110 active:scale-95
    `}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(`${direction} arrow clicked for ${navigationId}`);

      // Force trigger swiper navigation - REVERSED LOGIC
      const swiperContainer = document.querySelector(`.swiper-container-${navigationId} .swiper`) as HTMLElement & { swiper?: { slidePrev: () => void; slideNext: () => void } };
      if (swiperContainer?.swiper) {
        const swiper = swiperContainer.swiper;
        // Reversed: left arrow (prev) now goes forward, right arrow (next) now goes backward
        if (direction === 'prev') {
          swiper.slideNext(); // Left arrow now moves forward
        } else {
          swiper.slidePrev(); // Right arrow now moves backward
        }
      }
    }}
    style={{
      pointerEvents: 'auto',
      display: 'flex',
      visibility: 'visible',
      opacity: 1,
      zIndex: 9999,
      position: 'relative'
    }}
  >
        <svg
      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === 'prev' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
      {/* Debug: Add direction indicator */}
      <title>{direction === 'prev' ? 'Previous (Left)' : 'Next (Right)'}</title>
    </svg>
  </button>
);

export default function SwiperWrapper({
  children,
  spaceBetween = 20,
  slidesPerView = 1,
  centeredSlides = true,
  loop = true,
  navigation = true,
  pagination = false,
  autoplay = false,
  allowOverlap = false, // Keep for future use but currently unused
  breakpoints,
  className = '',
  navigationId = 'default'
}: SwiperWrapperProps) {
  // Suppress unused variable warning - allowOverlap kept for future use
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _allowOverlap = allowOverlap;

  const modules = [
    ...(navigation ? [Navigation] : []),
    ...(pagination ? [Pagination] : []),
    ...(autoplay ? [Autoplay] : [])
  ];

    return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="relative px-16 sm:px-20 lg:px-24" style={{ position: 'relative', zIndex: 1 }}>
        {/* Navigation Arrows - Positioned within the padded container */}
        {navigation && (
          <>
            <div className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center">
              <NavigationArrow direction="prev" navigationId={navigationId} />
            </div>
            <div
              className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center"
              style={{
                position: 'absolute',
                zIndex: 9999,
                pointerEvents: 'auto',
                display: 'flex'
              }}
            >
              <NavigationArrow direction="next" navigationId={navigationId} />
            </div>
          </>
        )}
        {/* Cards Container */}
        <div className="w-full overflow-hidden">
          <Swiper
            modules={modules}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            centeredSlides={centeredSlides}
            loop={loop}
            speed={800}
            effect="slide"
            grabCursor={true}
            touchRatio={1}
            threshold={10}
            longSwipes={true}
            longSwipesRatio={0.5}
            longSwipesMs={300}
            followFinger={true}
            allowTouchMove={true}
            resistance={true}
            resistanceRatio={0.85}
            watchSlidesProgress={true}
            watchOverflow={true}
            navigation={navigation ? {
              prevEl: `.swiper-button-prev-${navigationId}`,
              nextEl: `.swiper-button-next-${navigationId}`,
              disabledClass: 'opacity-30 cursor-not-allowed',
              hideOnClick: false,
            } : false}
            pagination={pagination ? {
              clickable: true,
              dynamicBullets: true
            } : false}
            autoplay={autoplay ? {
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            } : false}
            breakpoints={breakpoints}
            className={`w-full ${className} swiper-container-${navigationId}`}
            onSlideChange={(swiper) => {
              // Force update navigation state
              console.log(`Slide changed for ${navigationId}:`, {
                activeIndex: swiper.activeIndex,
                realIndex: swiper.realIndex,
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd
              });
            }}
            onSwiper={(swiper) => {
              // Ensure navigation is properly initialized
              setTimeout(() => {
                swiper.navigation?.update();
                // Force enable navigation on desktop
                if (window.innerWidth >= 1024) {
                  swiper.allowSlideNext = true;
                  swiper.allowSlidePrev = true;
                }
              }, 100);
            }}
          >
            {children.map((child, index) => (
              <SwiperSlide key={index} className="flex justify-center items-stretch">
                {child}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Conditional Overlapping Styles - Only for reviews */}
          {/* {allowOverlap && (
            <style jsx global>{`
              @media (min-width: 1024px) {
                .swiper-slide:not(.swiper-slide-active) {
                  transform: scale(0.9);
                  opacity: 0.8;
                }

                .swiper-slide-active {
                  transform: scale(1);
                  opacity: 1;
                  z-index: 10;
                }
              }
            `}</style>
          )} */}
        </div>
      </div>
    </div>
  );
}
