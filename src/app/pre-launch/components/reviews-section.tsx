"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

// Review data
const reviews = [
  {
    full_name: "Naam Achternaam",
    username: "Gebruikersnaam",
    rating: 5,
    text: "Suspendisse non in sed tincidunt tortor sed. Dui euismod diam porttitor nunc elementum sed mattis vulputate. Nec volutpat duis pretium sapien velit in.",
    date: "21 maart 2025",
    bgColor: "#E6C7FF",
    textColor: "#525252",
  },
  {
    full_name: "Naam Achternaam",
    username: "Gebruikersnaam",
    rating: 5,
    text: "Felis tortor feugiat et in congue nunc magna enim facilisis. Eu tristique vel facilisi aliquet lorem urna et. Turpis egestas proin risus ornare mi ipsum feugiat dictum urna.",
    date: "21 maart 2025",
    bgColor: "#7F65CA",
    textColor: "#CCC",
  },
  {
    full_name: "Naam Achternaam",
    username: "Gebruikersnaam",
    rating: 5,
    text: "In mauris felis nec placerat ultrices quis aliquam amet. Morbi interdum enim viverra ut urna mi auctor feugiat massa. Mauris facilisis pellentesque sit sagittis pretium blandit scelerisque ligula nullam. Cursus nulla quis et id condimentum.",
    date: "21 maart 2025",
    bgColor: "#F9F6B3",
    textColor: "#525252",
  },
  {
    full_name: "Naam Achternaam",
    username: "Gebruikersnaam",
    rating: 5,
    text: "Dui euismod diam porttitor nunc elementum sed mattis vulputate. Nec volutpat duis pretium sapien velit in.",
    date: "21 maart 2025",
    bgColor: "#282828",
    textColor: "#CCC",
  },
  {
    full_name: "Naam Achternaam",
    username: "Gebruikersnaam",
    rating: 5,
    text: "Felis tortor feugiat et in congue nunc magna enim facilisis. Eu tristique vel facilisi aliquet lorem urna et. Turpis egestas proin risus ornare mi ipsum feugiat dictum urna.",
    date: "21 maart 2025",
    bgColor: "#7F65CA",
    textColor: "#CCC",
  },
  {
    full_name: "Naam Achternaam",
    username: "Gebruikersnaam",
    rating: 5,
    text: "In mauris felis nec placerat ultrices quis aliquam amet. Morbi interdum enim viverra ut urna mi auctor feugiat massa. Mauris facilisis pellentesque sit sagittis pretium blandit scelerisque ligula nullam. Cursus nulla quis et id condimentum.",
    date: "21 maart 2025",
    bgColor: "#F9F6B3",
    textColor: "#525252",
  },
  {
    full_name: "Naam Achternaam",
    username: "Gebruikersnaam",
    rating: 5,
    text: "Dui euismod diam porttitor nunc elementum sed mattis vulputate. Nec volutpat duis pretium sapien velit in.",
    date: "21 maart 2025",
    bgColor: "#282828",
    textColor: "#CCC",
  },
];

export default function ReviewsSection() {
  return (
    <div className="mb-24 xl:mx-20">
      <div className="text-center mb-12">
        <h2>Rating en reviews</h2>
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
            1280: {
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

                  <div className="text-base md:text-xl font-normal flex-grow mt-5">
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
