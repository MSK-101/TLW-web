"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Review data
const reviews = [
  {
    name: "Marjolein Baas",
    title: "(cursist)",
    text: "Niemand kan dit soort ingewikkelde en technische dingen zo makkelijk uitleggen als dat Tineke dat kan.",
    date: "21 maart 2025",
    bgColor: "#E6C7FF",
    textColor: "#525252",
  },
  {
    name: "Nasser el Kamouchi",
    title: "(eigenaar Whello)",
    text: "Myrte is echt een topaanwinst voor elk bedrijf dat wil groeien en die dat wil doen met een vernieuwend concept.",
    date: "21 maand 2025",
    bgColor: "#7F65CA",
    textColor: "#FFFFFF",
  },
  {
    name: "Yara Gilissen",
    title: "",
    text: "Ik ben met een relatief klein bedrag ingestapt en dat is nu al bijna verdrievoudigd.",
    date: "19 juli 2025",
    bgColor: "#F9F6B3",
    textColor: "#525252",
  },
  {
    name: "Marjolein Baas",
    title: "",
    text: "Niemand kan dit soort ingewikkelde en technische dingen zo makkelijk uitleggen als dat Tineke dat kan.",
    date: "21 maart 2025",
    bgColor: "#282828",
    textColor: "#CCC",
  },
  {
    name: "Sionna Smith",
    title: "",
    text: "Ze geeft ontzettend veel waarde en blijft dat ook uitbreiden, dus ik voel me zeker en in staat om mijn eigen portfolio nu te beheren.",
    date: "21 maart 2025",
    bgColor: "#e3f0d5",
    textColor: "#525252",
  },
  {
    name: "Anoniem",
    title: "",
    text: "De markt is zeer volatiel. Je ziet je geld hard stijgen en dalen. Door de begeleiding van Tineke lukt het mij om focus te houden op de lange termijn en dat vind ik heel waardevol.",
    date: "21 maart 2025",
    bgColor: "#f7e3cb",
    textColor: "#525252",
  },
];

export default function ReviewSlider() {
  return (
    <div className="mb-24 xl:mx-24">
      <div className="text-center mb-12">
        <h2>Reviews</h2>
        <h1 className="text-4xl leading-none">Wat vinden gebruikers?</h1>
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
                  <div className="text-2xl font-medium mb-4">
                    {review.name}
                    {review.title && (
                      <span className="ml-2 font-normal">{review.title}</span>
                    )}
                  </div>

                  <div className="text-xl font-normal flex-grow">
                    {review.text}
                  </div>

                  <div className="mt-auto">
                    <div className="text-lg mt-4">{review.date}</div>
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
