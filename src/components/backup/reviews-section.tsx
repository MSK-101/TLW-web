"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

// Review data
const reviews = [
  {
    full_name: "Marjolein Baas",
    username: "(cursist)",
    rating: 5,
    text: "Niemand kan dit soort ingewikkelde en technische dingen zo makkelijk uitleggen als dat Tineke dat kan.",
    date: "21 maart 2025",
    bgColor: "#E6C7FF",
    textColor: "#525252",
  },
  {
    full_name: "Nasser el Kamouchi",
    username: "(eigenaar Whello)",
    rating: 5,
    text: "Myrte is echt een topaanwinst voor elk bedrijf dat wil groeien en die dat wil doen met een vernieuwend concept.",
    date: "21 maart 2025",
    bgColor: "#7F65CA",
    textColor: "#FFFFFF",
  },
  {
    full_name: "Yara Gilissen",
    username: "",
    rating: 4.5,
    text: "Ik ben met een relatief klein bedrag ingestapt en dat is nu al bijna verdrievoudigd.",
    date: "21 maart 2025",
    bgColor: "#F9F6B3",
    textColor: "#525252",
  },
  {
    full_name: "Marjolein Baas",
    username: "",
    rating: 5,
    text: "Niemand kan dit soort ingewikkelde en technische dingen zo makkelijk uitleggen als dat Tineke dat kan.",
    date: "21 maart 2025",
    bgColor: "#282828",
    textColor: "#CCC",
  },
  {
    full_name: "Sionna Smith",
    username: "",
    rating: 4.8,
    text: "Ze geeft ontzettend veel waarde en blijft dat ook uitbreiden, dus ik voel me zeker en in staat om mijn eigen portfolio nu te beheren.",
    date: "21 maart 2025",
    bgColor: "#e3f0d5",
    textColor: "#525252",
  },
  {
    full_name: "Anoniem",
    username: "",
    rating: 5,
    text: "De markt is zeer volatiel. Je ziet je geld hard stijgen en dalen. Door de begeleiding van Tineke lukt het mij om focus te houden op de lange termijn en dat vind ik heel waardevol.",
    date: "21 maart 2025",
    bgColor: "#f7e3cb",
    textColor: "#525252",
  },
];

// StarRating component for dynamic stars
function StarRating({ rating, color }: { rating: number; color: string }) {
  const stars = [];
  let remaining = rating;
  for (let i = 0; i < 5; i++) {
    if (remaining >= 1) {
      stars.push(
        <FontAwesomeIcon
          icon={faStar}
          key={i}
          style={{ color, fontSize: "1.25rem" }}
        />
      );
      remaining -= 1;
    } else if (remaining >= 0.5) {
      stars.push(
        <FontAwesomeIcon
          icon={faStarHalfStroke}
          key={i}
          style={{ color, fontSize: "1.25rem" }}
        />
      );
      remaining -= 0.5;
    } else {
      stars.push(
        <FontAwesomeIcon
          icon={faStarRegular}
          key={i}
          style={{ color, fontSize: "1.25rem" }}
        />
      );
    }
  }
  return <div className="flex gap-1">{stars}</div>;
}

export default function ReviewsSection() {
  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl leading-none max-w-[400px] text-center mx-auto">
          Wat vinden gebruikers van The Limitless Way?
        </h1>
      </div>
      <div className="relative px-20 review-slider">
        <div
          id="reviewBtnNext"
          className="absolute top-[50%] -translate-y-[50%] right-0 bg-[#282828] rounded-full aspect-square w-14 h-14 text-gray-50 flex justify-center items-center z-10 cursor-pointer hover:scale-105 shadow-lg"
        >
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </div>
        <div
          id="reviewBtnPrev"
          className="absolute top-[50%] -translate-y-[50%] left-0 bg-[#282828] rounded-full aspect-square w-14 h-14 text-gray-50 flex justify-center items-center z-10 cursor-pointer hover:scale-105 shadow-lg"
        >
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </div>
        <Swiper
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1450: {
              slidesPerView: 4,
            },
          }}
          centerInsufficientSlides={true}
          navigation={{
            nextEl: "#reviewBtnNext",
            prevEl: "#reviewBtnPrev",
          }}
          spaceBetween={-150}
          slidesPerView={1}
          loop={true}
          className="rounded-4xl"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="rounded-4xl relative mx-auto p-9"
                style={{
                  height: "420px",
                  width: "100%",
                  backgroundColor: review.bgColor,
                  color: review.textColor,
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/user.svg"
                      alt="User avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="md:text-lg">{review.full_name}</div>
                      <div className="text-xs md:text-sm">
                        {review.username}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 mb-3">
                    <StarRating
                      rating={review.rating}
                      color={review.textColor}
                    />
                  </div>

                  <div className="font-normal flex-grow mt-5">
                    {review.text}
                  </div>

                  <div className="mt-auto">
                    <div className="text-sm mt-4">{review.date}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
