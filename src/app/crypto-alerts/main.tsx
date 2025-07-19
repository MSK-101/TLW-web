import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function CryptoAlertsMain() {
  return (
    <section className="bg-[url(/cs_hero_bg.png)] bg-center bg-cover bg-no-repeat rounded-[32px] bg-[#F0F0F0] mx-4 lg:mx-8 pt-24 pb-8 lg:pb-8">
    <div className="flex flex-col lg:flex-row items-start justify-center pb-8 lg:pb-12">
      <div className="w-full lg:w-1/2 px-6 lg:pl-36 lg:pr-0">
        <div className="text-[#282828] font-extrabold xl:leading-[120px] xl:tracking-wide text-5xl sm:text-6xl lg:text-7xl xl:text-[120px] lg:-mr-[250px] font-funnel-display mb-8 text-center lg:text-left">
          Crypto Alerts
        </div>

        <div className="text-[#525252] max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
          <p className="font-bold text-lg lg:text-xl mb-4">
            Marktupdates, tradinglessen, masterclasses, trade-suggesties en interessante inzichten op weg naar de piek van deze bull run. 🚀
          </p>
          <p className="text-base lg:text-md mb-4">
            Met <span className="font-bold">Crypto Alerts 🔔</span> krijg je dagelijks een &ldquo;alert&rdquo; bestaande uit de belangrijkste crypto-updates, concrete tradinglessen én de belangrijkste tips voor een geweldige bull run.
          </p>
          <p className="text-base lg:text-md mb-6">
            Ook mag je vragen stellen in de Q&A groep en worden er geregeld trade-suggesties gedaan door mij en mijn team. Dit is geen financieel advies, maar een kijkje in de keuken van ervaren traders. Wat je daarmee doet is jouw eigen verantwoordelijkheid. 😉
          </p>
          <p className="text-base lg:text-md mb-6">
            <span className="font-bold">Meld je via de knop hieronder aan.</span> Het is maandelijks opzegbaar.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#7F65CA] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#5a4a9a] transition-colors duration-300">
              Count me in!
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:ml-20 mt-8 lg:mt-0 relative">
        {/* Phone Image */}
        <div className="relative">
          <Image
            src="/crypto_phone.png"
            alt="Crypto Phone"
            width={500}
            height={500}
            className="animate-slide-in-right"
          />

          {/* Floating Info Box */}
          <div className="absolute animate-slide-in-right left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 lg:left-auto lg:-left-16 lg:transform-none bg-[#E6C7FF] rounded-2xl p-4 lg:p-6 shadow-lg max-w-[280px] lg:max-w-[320px]">
            <div className="flex items-start space-x-3 lg:space-x-4">
              <div className="flex-1">
                <p className="text-[#282828] text-sm lg:text-base leading-relaxed">
                  De Crypto Alerts wordt geleid door <br/><span className="font-bold">Tineke Zwart en is een product van The Limitless Way.</span>
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/speakers/tineke.png"
                  alt="Tineke Zwart"
                  width={80}
                  height={80}
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="justify-self-center items-center text-[#525252] px-4 lg:px-0 lg:gap-20">
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
