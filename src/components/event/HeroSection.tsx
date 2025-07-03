"use client";

import { Button } from "@/components/ui/button";
import {
  faArrowDown,
  faArrowUpRightFromSquare,
  faCalendar,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("October 17, 2025 14:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[url(/hero_image_event.jpg)] bg-top bg-cover bg-no-repeat rounded-[32px] mx-4 lg:mx-8 pt-28 pb-12 px-[24px] lg:py-36 lg:px-36">
      <h1 className="font-extrabold text-[42px] leading-[34.18px] md:text-[110px] md:leading-[105px] text-gray-50 w-full lg:w-[80%] xl:w-[70%]">
        Euismod mauris diam mattis aenean.
      </h1>
      <div className="flex gap-2 lg:gap-6 mt-6">
        <Link href="https://wwwthelimitlesswaynl.plugandpay.com/checkout/event">
          <Button className="bg-[#E6C7FF] text-[#282828] py-6 px-3 md:px-6 flex-1 md:flex-none gap-[18px] cursor-pointer hover:scale-105">
            Bestel je ticket <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Button>
        </Link>
        <Link href="#agenda">
          <Button
            variant="outline"
            className="bg-[#282828] text-gray-50 py-6 px-3 md:px-6 flex-1 md:flex-none gap-[18px] cursor-pointer hover:scale-105"
          >
            Meer informatie <FontAwesomeIcon icon={faArrowDown} />
          </Button>
        </Link>
      </div>

      <div className="w-full xl:w-[80%] 2xl:w-[50%] mt-28">
        <div className="flex gap-3 flex-wrap">
          <div className="bg-gray-50 flex grow items-center rounded-[20px] p-[12px] lg:p-[16px] lg:pr-[32px] gap-4">
            <FontAwesomeIcon
              icon={faCalendar}
              width={24}
              className="text-[#7F65CA]"
            />
            <div className="flex flex-col">
              <div className="text-[#282828] font-semibold">Datum</div>
              <div className="text-[#525252]">17 oktober 2025</div>
            </div>
          </div>
          <div className="bg-gray-50 flex grow items-center rounded-[20px] p-[12px] lg:p-[16px] lg:pr-[32px] gap-4">
            <FontAwesomeIcon
              icon={faClock}
              width={24}
              className="text-[#7F65CA]"
            />
            <div className="flex flex-col">
              <div className="text-[#282828] font-semibold">Tijd</div>
              <div className="text-[#525252]">14:00 - 18:00</div>
            </div>
          </div>
          <div className="bg-gray-50 flex grow items-center rounded-[20px] p-[12px] lg:p-[16px] lg:pr-[32px] gap-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              width={24}
              className="text-[#7F65CA]"
            />
            <div className="flex flex-col">
              <div className="text-[#282828] font-semibold">Locatie</div>
              <div className="text-[#525252]">Green Village - Nieuwegein</div>
            </div>
          </div>

          <div className="bg-[#7F65CA] rounded-[20px] mt-2 p-[12px] lg:py-5 lg:px-4 flex w-full text-gray-50">
            <div className="flex flex-col flex-1 justify-center items-center border-r">
              <div className="font-semibold text-3xl lg:text-[48px]">
                {String(timeRemaining.days).padStart(2, "0")}
              </div>
              <div className="text-sm lg:text-base">Dagen</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center grow border-r">
              <div className="font-semibold text-3xl lg:text-[48px]">
                {String(timeRemaining.hours).padStart(2, "0")}
              </div>
              <div className="text-sm lg:text-base">Uren</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center grow border-r">
              <div className="font-semibold text-3xl lg:text-[48px]">
                {String(timeRemaining.minutes).padStart(2, "0")}
              </div>
              <div className="text-sm lg:text-base">Minuten</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center">
              <div className="font-semibold text-3xl lg:text-[48px]">
                {String(timeRemaining.seconds).padStart(2, "0")}
              </div>
              <div className="text-sm lg:text-base">Seconden</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
