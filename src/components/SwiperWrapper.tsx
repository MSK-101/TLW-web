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
}

const NavigationArrow = ({ direction }: { direction: 'prev' | 'next' }) => (
  <button
    className={`
      swiper-button-${direction}-custom
      w-12 h-12 bg-black bg-opacity-80 hover:bg-opacity-100
      text-white rounded-full flex items-center justify-center
      transition-all duration-200 shadow-lg z-10
      disabled:opacity-50 disabled:cursor-not-allowed
    `}
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === 'prev' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
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
  allowOverlap = false,
  breakpoints,
  className = ''
}: SwiperWrapperProps) {
  const modules = [
    ...(navigation ? [Navigation] : []),
    ...(pagination ? [Pagination] : []),
    ...(autoplay ? [Autoplay] : [])
  ];

    return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="relative flex items-center justify-center">
        {/* Cards Container - Centered */}
        <div className="max-w-5xl w-full overflow-hidden">
          <Swiper
            modules={modules}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            centeredSlides={centeredSlides}
            loop={loop}
            navigation={navigation ? {
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            } : false}
            pagination={pagination ? { clickable: true } : false}
            autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
            breakpoints={breakpoints}
            className={`w-full ${className}`}
          >
            {children.map((child, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                {child}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Conditional Overlapping Styles */}
          {allowOverlap && (
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
          )}
        </div>

        {/* Navigation Arrows - Absolutely positioned with equal distance */}
        {navigation && (
          <>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
              <NavigationArrow direction="prev" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
              <NavigationArrow direction="next" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
