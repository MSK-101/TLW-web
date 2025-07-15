"use client";

import Script from "next/script";

export default function NewsletterSignup() {
  return (
    <section className="flex justify-center text-[#282828] rounded-2xl lg:rounded-[32px] mx-4 lg:mx-0 mt-16 lg:mt-20 py-20 lg:pt-40">
      <div className="w-full flex flex-col lg:flex-row">
        <h1 className="text-4xl lg:text-6xl text-left sm:text-center lg:text-left 2xl:text-7xl px-5 w-full lg:w-1/2">
          Meld je aan en blijf op de hoogte van de ontwikkelingen.
        </h1>
        <div className="_form_1 w-full lg:w-1/2 lg:-mt-8">
          <Script
            src="https://thelimitlesswaybv.activehosted.com/f/embed.php?id=1"
            strategy="afterInteractive"
            onError={(e) => console.error("Script failed to load", e)}
          />
        </div>
      </div>
    </section>
  );
}
