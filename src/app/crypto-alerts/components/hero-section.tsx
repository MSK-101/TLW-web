import Image from "next/image";
import ReactMarkdown from "react-markdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

type HeroSectionProps = {
  heroSectionData: any;
};

export default function HeroSection({ heroSectionData }: HeroSectionProps) {
  console.log(heroSectionData);

  const { heading, description, button_text, phone_image, popup_text } =
    heroSectionData;

  if (!heroSectionData) {
    return null;
  }

  return (
    <section className="bg-[url(/cs_hero_bg.png)] bg-center bg-cover bg-no-repeat rounded-[32px] bg-[#F0F0F0] pt-25 pb-8 xl:pb-12 px-2 lg:pt-32 xl:pt-44 lg:pb-10 lg:pl-20 xl:pl-30 2xl:pr-30">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-8">
        <div className="grow-0 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left max-w-[610px]">
          <div className="text-[#282828] font-extrabold text-3xl md:text-6xl lg:text-7xl xl:text-[110px] font-funnel-display lg:w-max">
            {heading}
          </div>
          {description?.map((item: { id: number; text: string }) => (
            <div
              key={item.id}
              className="text-lg text-[#525252] leading-relaxed"
            >
              <ReactMarkdown>{item.text}</ReactMarkdown>
            </div>
          ))}
          <button className="bg-[#7F65CA] lg:mt-4 text-white px-8 py-3 rounded-xl hover:bg-[#5a4a9a] transition-colors duration-300">
            {button_text}
          </button>
        </div>

        {/* Phone Image */}
        <div className="relative">
          <Image
            src={phone_image?.url || "/crypto_phone.png"}
            alt="Crypto Phone"
            width={500}
            height={500}
            className="animate-slide-in-right max-w-[400px] 2xl:max-w-[480px] object-contain"
          />

          {/* Floating Info Box */}
          <div className="absolute top-[40%] lg:-translate-x-[10%] xl:-translate-x-[40%] animate-slide-in-right bg-[#E6C7FF] rounded-2xl pl-4 pr-3 py-2 shadow-lg flex gap-1">
            <div className="max-w-[160px] text-sm leading-[1.2] flex flex-col gap-1">
              {popup_text?.map((item: { id: number; text: string }) => (
                <div key={item.id}>
                  <ReactMarkdown>{item.text}</ReactMarkdown>
                </div>
              ))}
            </div>
            <Image
              src="/team/tineke-zwart.jpeg"
              alt="Tineke Zwart"
              width={80}
              height={80}
              className="object-cover object-center rounded-md aspect-square"
            />
          </div>
        </div>
      </div>

      <div className="justify-self-center items-center text-[#525252] px-4 lg:px-0 lg:gap-20 mt-8 xl:mt-20">
        <div className="w-8 h-14 rounded-full border border-gray-600 relative text-[22px]">
          <FontAwesomeIcon
            icon={faArrowDown}
            width={22}
            className="absolute left-[50%] text-center -translate-x-[50%] animate-custom-bounce top-4"
          />
        </div>
      </div>
    </section>
  );
}
