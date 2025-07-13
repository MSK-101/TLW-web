import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-20 lg:pt-32 flex flex-col items-center px-6 lg:px-10 bg-[#282828]">
      <Image src="/footer_logo.png" alt="Logo" width={600} height={600} />
      <div className="flex text-white flex-wrap justify-center gap-4 lg:gap-8 mt-16 lg:mt-28 text-base lg:text-xl text-[#F0F0F0] font-extralight">
        {/* <Link href="#" target="_blank" className="hover:scale-110 transition-all duration-300">
          Facebook
        </Link> */}
        <Link
          href="https://www.instagram.com/tlw_official2025"
          target="_blank"
          className="hover:scale-110 transition-all duration-300"
        >
          Instagram
        </Link>
        <Link
          href="https://www.linkedin.com/in/tineke-zwart"
          target="_blank"
          className="hover:scale-110 transition-all duration-300"
        >
          LinkedIn Tineke
        </Link>
        <Link
          href="https://www.linkedin.com/in/myrte-scheffer/"
          target="_blank"
          className="hover:scale-110 transition-all duration-300"
        >
          LinkedIn Myrte
        </Link>
        <Link
          href="https://open.spotify.com/show/4awEL2IeSlqyr2rOQwNhH8?si=27feaf31a51e4d95"
          target="_blank"
          className="hover:scale-110 transition-all duration-300"
        >
          Spotify
        </Link>
        <Link
          href="http://www.youtube.com/@thelimitlessway_official"
          target="_blank"
          className="hover:scale-110 transition-all duration-300"
        >
          YouTube
        </Link>

        {/* <Link href="#" target="_blank" className="hover:scale-110 transition-all duration-300">
          Youtube
        </Link>
        <Link href="#" target="_blank" className="hover:scale-110 transition-all duration-300">
          Twitter
        </Link> */}
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full my-8 lg:mt-16 pt-4 border-t border-[#7A7A7A] text-[#7A7A7A]">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p>&copy; {new Date().getFullYear()} The Limitless Way B.V.</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4 lg:gap-4 items-center">
          <Link href="/disclaimer" className="hover:underline">
            Disclaimer
          </Link>
          <Link href="/privacy-statement" className="hover:underline">
            Privacystatement
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          {/* <Link href="/customer-service" className="hover:underline">
            Customer Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
