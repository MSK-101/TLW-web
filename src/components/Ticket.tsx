import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Ticket() {
  return (
    <section className="bg-white text-[#282828] mt-16 pt-20 py-20 lg:py-20 px-4 lg:px-8">
      <div className="bg-[url(/cs_hero_bg.png)] bg-center bg-cover bg-no-repeat rounded-[32px] relative min-h-[200px] lg:min-h-[400px] overflow-hidden lg:overflow-visible">
        <div className="grid grid-cols-2 h-full">
          {/* Left side - Text content */}
          <div className="px-4 sm:px-8 lg:px-16 py-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#282828] leading-tight mb-6">
              Bestel nu<br />je ticket!
            </h2>
            <button className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold text-sm sm:text-base px-5 py-3 rounded-full hover:bg-gray-100 transition">
              Bestel je ticket
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-600" />
            </button>
          </div>

          {/* Right side - Phone image */}
          <div className="relative flex justify-center lg:justify-end items-center h-full">
            <div className="absolute lg:right-0 lg:top-1/2 lg:transform sm:transform sm:-translate-y-1/2 lg:-translate-y-1/2">
                <Image
                  src="/inverted_phone_cropped.svg"
                  alt="Phone"
                  width={170}
                  height={170}
                  className="animate-slide-in-right w-400 lg:w-200 lg:pt-10 scale-150 pr-10 lg:pr-40"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
