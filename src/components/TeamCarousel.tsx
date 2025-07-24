"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const team = [
  {
    name: "Tineke Zwart",
    imageUrl: "/team/member1.png",
    label: "Co-founder & Crypto expert, Keynote spreker",
  },
  {
    name: "Myrthe Scheffer",
    imageUrl: "/team/member2.png",
    label: "Co-founder & Visie, dagvoorzitter",
  },
  {
    name: "Tamara Stroop",
    imageUrl: "/team/member3.png",
    label: "Chief Content Officer",
  },
  {
    name: "Tristan Melano",
    imageUrl: "/team/member4.png",
    label: "Chief Audiovisual Officer",
  },
  {
    name: "Barry Nijkamp",
    imageUrl: "/team/member8.png",
    label: "CFO",
  },
  {
    name: "Danitsha van der Reijken",
    imageUrl: "/team/member6.png",
    label: "Personal Assistant Tineke & Myrte",
  },
  {
    name: "Anníka van Loon",
    imageUrl: "/team/member7.png",
    label: "Crypto expert",
  },
  {
    name: "Team Communicatiemakers",
    imageUrl: "/team/member9.png",
    label: "Ontwikkeling visual design app",
  },
  {
    name: "Team DevRepublic",
    imageUrl: "/team/member10.png",
    label: "Ontwikkeling app",
  },
  {
    name: "Patricia Oostvogels",
    imageUrl: "/team/member11.png",
    label: "Boekhouding",
  },
  {
    name: "Ravikumar Sharma",
    imageUrl: "/team/member5.png",
    label: "Technical Architect DevRepublic (a.i.)",
  },
  {
    name: "Sophie van Koert",
    imageUrl: "/team/member12.png",
    label: "Projectsupport",
  },
];

export default function TeamCarousel() {
  return (
    <div className="mb-[124px] 2xl:px-14">
      <div className="text-center mb-15">
        <h2>Ons team</h2>
        <p className="text-[48px] leading-none">We are in this together</p>
      </div>
      <div className="relative">
        <div
          id="swiperBtnNext"
          className="absolute top-[50%] -translate-y-[50%] -right-5 bg-[#282828] rounded-full aspect-square w-10 text-gray-50 flex justify-center items-center z-10 cursor-pointer hover:scale-105"
        >
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </div>
        <div
          id="swiperBtnPrev"
          className="absolute top-[50%] -translate-y-[50%] -left-5 bg-[#282828] rounded-full aspect-square w-10 text-gray-50 flex justify-center items-center z-10 cursor-pointer hover:scale-105"
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
            1450: {
              slidesPerView: 5,
            },
          }}
          centerInsufficientSlides={true}
          navigation={{
            nextEl: "#swiperBtnNext",
            prevEl: "#swiperBtnPrev",
          }}
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
        >
          {team.map((member, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="rounded-2xl overflow-hidden relative aspect-[266/343] mx-auto">
                  <Image
                    src={member["imageUrl"]}
                    width={266}
                    height={343}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute w-full bottom-0 h-1/2 flex px-[24px] pb-[16px] bg-linear-180 from-transparent to-[#7F65CA]">
                    <div className="flex mt-auto items-center flex-1 text-gray-50">
                      <div className="flex-1">
                        <div className="font-medium text-lg">
                          {member["name"]}
                        </div>
                        <div className="text-sm">{member["label"]}</div>
                      </div>
                      <svg
                        width="31"
                        height="36"
                        viewBox="0 0 31 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_385_2440)">
                          <path
                            d="M28.1892 3H2.46819C1.28962 3 0.332031 3.97098 0.332031 5.16295V30.8371C0.332031 32.029 1.28962 33 2.46819 33H28.1892C29.3677 33 30.332 32.029 30.332 30.8371V5.16295C30.332 3.97098 29.3677 3 28.1892 3ZM9.39899 28.7143H4.95257V14.3973H9.40569V28.7143H9.39899ZM7.17578 12.442C5.74944 12.442 4.59766 11.2835 4.59766 9.86384C4.59766 8.4442 5.74944 7.28571 7.17578 7.28571C8.59542 7.28571 9.75391 8.4442 9.75391 9.86384C9.75391 11.2902 8.60212 12.442 7.17578 12.442ZM26.0664 28.7143H21.62V21.75C21.62 20.0893 21.5865 17.9531 19.3097 17.9531C16.9927 17.9531 16.6378 19.7612 16.6378 21.6295V28.7143H12.1914V14.3973H16.457V16.3527H16.5173C17.1133 15.2277 18.5664 14.0424 20.7294 14.0424C25.2294 14.0424 26.0664 17.0089 26.0664 20.8661V28.7143Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_385_2440">
                            <rect
                              width="30"
                              height="34.2857"
                              fill="white"
                              transform="translate(0.332031 0.856934)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
