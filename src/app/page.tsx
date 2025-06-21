"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleIconClick = () => {
    if (isChecked) {
      // Handle email submission logic here
      console.log("Email submitted");
    }
  };

  return (
    <main className="bg-[#282828] py-4 lg:py-8">
      <section className="bg-[url(/cs_hero_bg.png)] bg-center bg-cover bg-no-repeat rounded-[32px] bg-[#F0F0F0] mx-4 lg:mx-8 pt-24 pb-8 lg:pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-center pb-8 lg:pb-12">
          <div className="w-full lg:w-1/2 px-6 lg:pl-36 lg:pr-0">
            <div
              className="text-[#282828] font-extrabold xl:leading-[120px] xl:tracking-wide text-5xl sm:text-6xl lg:text-7xl xl:text-[120px] lg:-mr-[250px] font-funnel-display"
            >
              Grip op je crypto, controle over je toekomst.
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <Image
              src="/cs_hero_phone.png"
              alt="Phone"
              width={1000}
              height={1000}
              className="animate-slide-in-right"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:w-1/2 justify-self-center items-center text-[#525252] px-4 lg:px-0 lg:gap-20">
          <p className="w-full lg:w-[60%] mb-5 lg:mb-0">
          The Limitless Way is de nieuwe crypto-app die overzicht, slimme strategieën en persoonlijke begeleiding samenbrengt in één krachtig platform. Of je nu net begint of al meerdere exchanges gebruikt: wij maken investeren eenvoudig, leuk én effectief – zodat jij met vertrouwen kunt bouwen aan je financiële toekomst.
          </p>
          <div className="w-8 h-14 rounded-full border relative text-[22px]">
            <FontAwesomeIcon
              icon={faArrowDown}
              width={22}
              className="absolute left-[50%] -translate-x-[50%] animate-custom-bounce top-4"
            />
          </div>
        </div>
      </section>

      <section className="py-20 text-white lg:py-40 px-4">
        <p className="font-bold text-center text-4xl sm:text-6xl lg:text-8xl">
          The Limitless Way
        </p>
        <p className="mt-6 font-bold text-lg lg:text-2xl text-center lg:w-[40rem] mx-auto px-4 lg:px-0">
          Binnenkort lanceren wij onze nieuwe website en onze app is in ontwikkeling.
        </p>
        <p className="mt-6 text-base lg:text-xl text-center lg:w-[40rem] mx-auto px-4 lg:px-0">
          Save the date: op 17 oktober 2025 vindt de app lancering plaats in Utrecht. Meer informatie volgt in juli 2025. Via de link onderaan de pagina kun je aangeven of je op de hoogte gehouden wil worden.
        </p>
      </section>

      <section className="flex flex-col text-white lg:flex-row mx-4 lg:mx-8 gap-10 lg:gap-0">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-3xl lg:text-5xl mb-6 lg:mb-8">Neem contact op</h2>
          <p className="text-center text-base lg:text-lg">
            The Limitless Way BV <br />
            KVK: 96470186 <br /><br />
            The Netherlands
          </p>
          <Link
            href="mailto:info@thelimitlessway.nl"
            className="flex gap-4 cursor-pointer mt-6 lg:mt-8 hover:text-[#7F65CA] items-center"
          >
            <FontAwesomeIcon icon={faEnvelope} width={20} />
            <span className="text-base lg:text-lg">info@thelimitlessway.nl</span>
          </Link>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/cs_seminar.png"
            alt="Seminar"
            width={800}
            height={800}
            className="w-full lg:w-3xl"
          />
        </div>
      </section>

      <section className="flex justify-center bg-white text-[#282828] rounded-2xl lg:rounded-[32px] mx-4 lg:mx-0 mt-16 lg:mt-20 py-20 lg:py-40">
        <div className="w-full px-6 lg:px-0 lg:w-2/4 text-center">
          <h1 className="text-4xl lg:text-7xl mb-6 lg:mb-8">
            Op de hoogte blijven van de app & lanceringsevent op 17.10.2025?
          </h1>
          <div className="flex items-center relative mb-4">
            <input
              type="email"
              placeholder="janjansen@mail.com"
              className="w-full bg-[#F0F0F0] rounded-full py-3 lg:py-4 pl-6 pr-14 focus:outline-[#7F65CA]"
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              width={20}
              className={`cursor-pointer absolute right-4 ${
                isChecked
                  ? "text-[#7F65CA] hover:text-[#5a4a9a]"
                  : "text-gray-400 cursor-not-allowed"
              }`}
              onClick={handleIconClick}
            />
          </div>
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              className="mr-2"
              id="tnc_checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="text-gray-600 text-sm lg:text-base" htmlFor="tnc_checkbox">
              Ik ga akkoord met de algemene voorwaarden
            </label>
          </div>
        </div>
      </section>
    </main>
  );
}
