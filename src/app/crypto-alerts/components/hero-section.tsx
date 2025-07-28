import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <section className="bg-[url(/cs_hero_bg.png)] bg-center bg-cover bg-no-repeat rounded-[32px] bg-[#F0F0F0] pt-25 pb-8 xl:pb-12 px-2 lg:pt-32 xl:pt-44 lg:pb-10 lg:pl-20 xl:pl-30 2xl:pr-30">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-8">
        <div className="grow-0 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left max-w-[610px]">
          <div className="text-[#282828] font-extrabold text-3xl md:text-6xl lg:text-7xl xl:text-[110px] font-funnel-display lg:w-max">
            Crypto Alerts
          </div>
          <p className="font-bold text-lg lg:text-xl xl:text-2xl xl:mt-4">
            Marktupdates, tradinglessen, masterclasses, trade-suggesties en
            interessante inzichten op weg naar de piek van deze bull run. 🚀
          </p>

          <p className="text-base xl:text-lg">
            Met <span className="font-bold">Crypto Alerts 🔔</span> krijg je
            dagelijks een &ldquo;alert&rdquo; bestaande uit de belangrijkste
            crypto-updates, concrete tradinglessen én de belangrijkste tips voor
            een geweldige bull run.
          </p>
          <p className="text-base xl:text-lg">
            Ook mag je vragen stellen in de Q&A groep en worden er geregeld
            trade-suggesties gedaan door mij en mijn team. Dit is geen
            financieel advies, maar een kijkje in de keuken van ervaren traders.
            Wat je daarmee doet is jouw eigen verantwoordelijkheid. 😉
          </p>
          <p className="text-base xl:text-lg">
            <span className="font-bold">
              Meld je via de knop hieronder aan.
            </span>
            <span className="ml-2">Het is maandelijks opzegbaar.</span>
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
