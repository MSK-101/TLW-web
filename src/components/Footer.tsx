"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

function CookieSettingsButton() {
  const handleCookieSettings = () => {
    if (typeof window !== "undefined") {
      // Clear the cookie consent to show the banner again
      document.cookie =
        "tlw-cookie-consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.reload();
    }
  };

  return (
    <button
      onClick={handleCookieSettings}
      className="hover:underline text-[#7A7A7A] hover:text-white transition-colors bg-transparent border-none cursor-pointer text-sm"
    >
      Cookie Settings
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="pt-20 lg:pt-32 flex flex-col items-center px-6 lg:px-10 bg-[#282828]">
      <Image src="/footer_logo.png" alt="Logo" width={600} height={600} />
      <div className="flex text-white flex-wrap justify-center gap-4 lg:gap-8 mt-16 lg:mt-28 text-base lg:text-xl font-extralight">
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
          <CookieSettingsButton />
        </div>
      </div>

      {/* ActiveCampaign Visitor Tracking */}
      <Script id="activecampaign-tracking" strategy="afterInteractive">
        {`(function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
vgo('setAccount', '226993343');
vgo('setTrackByDefault', true);
vgo('process');`}
      </Script>
    </footer>
  );
}
