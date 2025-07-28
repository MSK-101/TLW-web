import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <section className="bg-[url(/cs_hero_bg.png)] bg-center bg-cover bg-no-repeat rounded-[32px] bg-[#F0F0F0] pt-25 pb-8 xl:pb-12 px-2 lg:pt-32 xl:pt-44 lg:pb-10 lg:pl-20 xl:pl-30 2xl:pr-30">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-8">
        <div className="grow-0 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left 2xl:max-w-[650px]">
          <div className="text-[rgb(40,40,40)] font-extrabold text-3xl md:text-6xl lg:text-7xl xl:text-[110px] font-funnel-display">
            Crypto Tech & Teach
          </div>
          <p className="font-bold text-lg lg:text-xl xl:text-2xl xl:mt-4 xl:mr-20 2xl:mr-0">
            Marktupdates, technische analyses, trading tutorials en live
            inzichten van twee toptraders uit Team TLW. Alles wat jij nodig hebt
            om zélf te leren analyseren in deze bull run. 📈
          </p>

          <p className="text-base lg:text-lg xl:mr-20 2xl:mr-0">
            Met Crypto Tech & Teach krijg je dagelijks een exclusieve kijk in de
            denkwijze en strategieën van ervaren én zeer bevlogen traders Sjoerd
            en Michael. In een besloten WhatsApp- en Discord-community delen zij
            marktupdates, technische setups en teaching content, waarmee jij
            stap voor stap leert hoe je zelf sterke analyses maakt.
          </p>
          <p className="text-base lg:text-lg xl:mr-20 2xl:mr-0">
            <span className="font-bold">
              Meld je aan via de knop hieronder.
            </span>
            <span className="ml-2">
              Je zit nergens aan vast – het is gewoon maandelijks opzegbaar.
            </span>
          </p>
          <button className="bg-[#7F65CA] lg:mt-4 text-white px-8 py-3 rounded-xl hover:bg-[#5a4a9a] transition-colors duration-300">
            Count me in!
          </button>
        </div>

        {/* Phone Image */}
        <div className="relative">
          <Image
            src="/crypto_phone.png"
            alt="Crypto Phone"
            width={500}
            height={500}
            className="animate-slide-in-right max-w-[400px] 2xl:max-w-[480px] object-contain"
          />

          {/* Floating Info Box */}
          <div className="absolute top-[40%] lg:-translate-x-[10%] xl:-translate-x-[40%] animate-slide-in-right bg-[#E6C7FF] rounded-2xl pl-4 pr-3 py-2 shadow-lg flex gap-1">
            <div className="max-w-[160px] text-sm leading-[1.2]">
              <p>De Crypto Alerts wordt geleid door</p>
              <p className="font-medium mt-1">
                Tineke Zwart en is een product van The Limitless Way.
              </p>
            </div>
            <Image
              src="/speakers/tineke.jpeg"
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
