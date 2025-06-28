import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import ReviewSlider from "@/components/ReviewSlider";
import TeamSlider from "@/components/TeamSlider";
import Main from "@/components/Contact";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import Ticket from "@/components/Ticket";

export default function Home() {
  return (
    <main className="bg-[#282828] py-4 lg:py-8">
      <section className="bg-[url(/cs_hero_bg.png)] bg-center bg-cover bg-no-repeat rounded-[32px] bg-[#F0F0F0] mx-4 lg:mx-8 pt-24 pb-8 lg:pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-center pb-8 lg:pb-12">
          <div className="w-full lg:w-1/2 px-6 lg:pl-36 lg:pr-0">
            <div
              style={{ fontFamily: "var(--font-funnel-display)" }}
              className="text-[#282828] font-extrabold xl:leading-[120px] xl:tracking-wide text-5xl sm:text-6xl lg:text-7xl xl:text-[120px] lg:-mr-[250px]"
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
            Korte uitleg over de app. Lorem ipsum dolor sit amet consectetur.
            Rhoncus in eget eleifend velit arcu ut. Non ac tellus tortor ut
            mattis placerat. A dolor et ac purus sed ullamcorper. In.
          </p>
          <div className="p-2 pb-0 h-14 rounded-full border flex justify-center">
            <FontAwesomeIcon
              icon={faArrowDown}
              width={16}
              className="animate-bounce-infinite"
            />
          </div>
        </div>
      </section>

      <section className="py-20 text-white lg:py-40 px-4">
        <p className="font-bold text-center text-4xl sm:text-6xl lg:text-8xl">
          The Limitless Way
        </p>
        <p className="mt-6 text-base lg:text-xl text-center lg:w-[40rem] mx-auto px-4 lg:px-0">
          Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt
          cursus arcu imperdiet elementum. Vitae nam sit eget nunc iaculis
          lorem.
        </p>
      </section>

      <section className="flex flex-col text-white lg:flex-row mx-4 lg:mx-8 gap-10 lg:gap-0">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-3xl lg:text-5xl mb-6 lg:mb-8">Neem contact op</h2>
          <p className="text-center text-base lg:text-lg">
            The Limitless Way B.V. <br />
            Lorem ipsum <br />
            0000 AA Lorem <br />
            The Netherlands
          </p>
          <Link
            href="mailto:info@thelimitlessway.nl"
            className="flex gap-4 cursor-pointer mt-6 lg:mt-8 hover:text-[#7F65CA]"
          >
            <FontAwesomeIcon icon={faEnvelope} width={20} />
            <p className="text-base lg:text-lg">info@thelimitlessway.nl</p>
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

      <ReviewSlider />

      <TeamSlider />

      <Main />

      <Features />

      <Faq />

      <Ticket />
    </main>
  );
}
