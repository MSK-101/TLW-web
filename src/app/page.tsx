import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#282828] py-8">
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="Logo"
        className="mix-blend-difference fixed top-14 left-14"
      />
      <section className="bg-[url(/cs_hero_bg.png)] bg-center bg-cover bg-no-repeat rounded-[32px] bg-[#F0F0F0] md:mx-8 pt-24 pb-12">
        <div className="flex items-center justify-center pb-12">
          <div className="w-1/2 pl-36">
            <div
              style={{ fontFamily: "var(--font-funnel-display)" }}
              className="text-[#282828] font-extrabold leading-[120px] tracking-wide text-[120px] -mr-[500px]"
            >
              Grip op je crypto, controle over je toekomst.
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <Image
              src="/cs_hero_phone.png"
              alt="Phone"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="w-1/2 justify-self-center items-center text-[#525252] flex gap-20">
          <p className="w-[60%]">
            Korte uitleg over de app. Lorem ipsum dolor sit amet consectetur.
            Rhoncus in eget eleifend velit arcu ut. Non ac tellus tortor ut
            mattis placerat. A dolor et ac purus sed ullamcorper. In.
          </p>
          <div className="p-2 pb-0 h-16 rounded-full border flex">
            <FontAwesomeIcon
              icon={faArrowDown}
              width={16}
              className="animate-bounce-infinite"
            />
          </div>
        </div>
      </section>

      <section className="py-40">
        <p className="font-bold text-center text-8xl">The Limitless Way</p>
        <p className="mt-6 text-xl text-center md:w-[40rem] mx-auto">
          Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt
          cursus arcu imperdiet elementum. Vitae nam sit eget nunc iaculis
          lorem.
        </p>
      </section>

      <section className="flex mx-8">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-5xl mb-8">Neem contact op</h2>
          <p className="text-center text-lg">
            The Limitless Way BV <br />
            Lorem ipsum <br />
            0000 AA Lorem <br />
            The Netherlands
          </p>
          <a
            href="mailto:lorem@thelimitlessway.nl"
            className="flex gap-4 cursor-pointer mt-8 hover:underline"
          >
            <FontAwesomeIcon icon={faEnvelope} width={20} />
            <p className="text-lg">lorem@thelimitlessway.nl</p>
          </a>
        </div>

        <div className="w-1/2 flex justify-center">
          <Image src="/cs_seminar.png" alt="Seminar" width={800} height={800} />
        </div>
      </section>

      <section className="flex justify-center bg-white text-[#282828] rounded-[32px] mt-20 py-40">
        <div className="lg:w-1/3 text-center">
          <h1 className="text-7xl mb-8">Felis tortor feugiat et in congue.</h1>
          <div className="flex items-center relative mb-4">
            <input
              type="email"
              placeholder="janjansen@mail.com"
              className="w-full bg-[#F0F0F0] rounded-full py-4 pl-6 pr-14 focus:outline-[#7F65CA]"
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              width={20}
              className="cursor-pointer hover:text-gray-500 absolute right-4"
            />
          </div>
          <input type="checkbox" className="mr-2" />
          <span className="text-gray-600">
            Ik ga akkoord met de algemene voorwaarden
          </span>
        </div>
      </section>

      <footer className="mt-40 flex flex-col items-center px-10">
        <Image src="/footer_logo.png" alt="Logo" width={800} height={800} />
        <div className="flex gap-8 mt-28 text-xl text-[#F0F0F0] font-extralight">
          <Link href="https://facebook.com" target="_blank">
            Facebook
          </Link>
          <Link href="https://instagram.com" target="_blank">
            Instagram
          </Link>
          <Link href="https://linkedin.com/company" target="_blank">
            LinkedIn
          </Link>
          <Link href="https://youtube.com" target="_blank">
            Youtube
          </Link>
          <Link href="https://twitter.com" target="_blank">
            Twitter
          </Link>
        </div>
        <div className="flex justify-between w-full mt-16 pt-4 border-t border-[#7A7A7A] text-[#7A7A7A]">
          <p>&copy; {new Date().getFullYear()} The Limitless Way BV</p>
          <div className="flex gap-4">
            <Link href="/security" className="hover:underline">
              Security
            </Link>
            <Link href="/privacy-statement" className="hover:underline">
              Privacy Statement
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/customer-service" className="hover:underline">
              Customer Service
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
