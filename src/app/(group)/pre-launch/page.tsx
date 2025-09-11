"use client";

import TopSection1 from "./components/top-section-1";
import TopSection2 from "./components/top-section-2";
import Image from "next/image";
import { BitvavoLogo } from "@/components/logos";
import SubscriptionCard from "./components/subscriptions-card";
import subscriptions from "@/utils/subscriptions";

import WishlistSection from "./components/wishlist-section";
import DownloadAppSection from "./components/download-app-section";
import TeamCarousel from "@/components/TeamCarousel";
import FAQSection from "./components/FAQSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import WaitlistModal from "@/components/WaitlistModal";
import TestpanelModal from "@/components/TestpanelModal";
import FeaturesSection from "./components/FeaturesSection";
import FoundersMessage from "./components/FoundersMessage";
import ReviewsSection from "./components/ReviewsSection";

export default function PreLaunch() {
  return (
    <div className="bg-[#282828] p-[24px]">
      <div className="bg-[url(/cs_hero_bg.png)] bg-center bg-cover bg-no-repeat rounded-[32px] bg-[#F0F0F0] py-[24px] overflow-hidden">
        <div className="flex flex-col mt-8">
          <TopSection1 />
          <TopSection2 />
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center text-gray-50 text-center">
          <h2 className="text-[32px] md:text-7xl font-bold mt-20 max-w-[1200px]">
            Op 17 oktober 2025 lanceren wij dé alles-in-één app voor jouw crypto
          </h2>
          <Image
            src="/logos/pre-launch-logo.png"
            width={350}
            height={350}
            alt="Pre-Launch Logo"
            className="mt-4 w-[250px] md:w-[350px]"
          />
          <p className="text-sm md:text-xl max-w-[800px] mt-4">
            Beheer veilig al je crypto vanuit 1 overzichtelijke en
            gebruiksvriendelijke app en meld je alvast via deze website aan voor
            de wachtlijst
            <br />
            <br />
            Vraag jezelf nooit meer af hoeveel winst of verlies je eigenlijk
            hebt per coin of in totaal. In onze app wordt alles automatisch voor
            je berekend zodat je continu weet hoe je portfolio ervoor staat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-6 md:gap-6 items-center justify-center my-20">
          {/* Row-1 Col-1  */}
          <div className="flex flex-col justify-center items-center gap-4 px-[40px] text-center">
            <div className="bg-[#E6C7FF] rounded-full py-[12px] px-[36px] text-[#282828]">
              Stap 1
            </div>
            <h2 className="text-[26px] md:text-[48px] text-gray-50 max-w-[568px] leading-[100%]">
              Download de app gratis via de app store
            </h2>
            <p className="text-gray-50 max-w-[568px]">
              Maak een gratis account aan en je kunt meteen aan de slag.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-10">
              <WaitlistModal buttonVariant="dark" />
              {/* <TestpanelModal buttonVariant="dark" /> */}
            </div>
          </div>
          {/* Row-1 Col-2  */}
          <div className="bg-[#E6C7FF] rounded-3xl flex justify-center">
            <Image
              src="/phones/phone-2.png"
              width={415}
              height={734}
              alt="Phone"
              className=""
            />
          </div>

          {/* Row-2 Col-1  */}
          <div className="flex flex-col justify-center items-center gap-4 px-[40px] text-center">
            <div className="bg-[#E6C7FF] rounded-full py-[12px] px-[36px] text-[#282828]">
              Stap 2
            </div>
            <h2 className="text-[26px] md:text-[48px] text-gray-50 max-w-[568px] leading-[100%]">
              Koppel je crypto exchanges en/of hardware wallet
            </h2>
            <p className="text-gray-50 max-w-[568px]">
              Binnen een paar minuten kun je op een veilige manier jouw crypto
              exchanges en/of hardware wallet koppelen aan de app. Daarna kun je
              je bestaande crypto beheren, maar ook nieuwe crypto kopen.
            </p>
            <div className="flex flex-wrap gap-x-3 md:gap-x-8 gap-y-3 md:gap-y-3 justify-center items-center mt-10">
              <BitvavoLogo />
              <Image
                src="/logos/coinbase.svg"
                width={106}
                height={24}
                alt="Logo Coinbase"
                className="h-[18px]"
              />

              <Image
                src="/logos/bybit-logo-white.svg"
                width={55}
                height={24}
                alt="Logo bybit"
                className="h-[20px]"
              />

              <Image
                src="/logos/mexc.svg"
                width={95}
                height={24}
                alt="Logo Mexc"
                className="h-[14px]"
              />
            </div>
          </div>

          {/* Row-2 Col-2  */}
          <div className="bg-[#E6C7FF] rounded-3xl flex justify-center">
            <Image
              src="/phones/phone-2.png"
              width={415}
              height={734}
              alt="Phone"
              className=""
            />
          </div>

          {/* Row-3 Col-1  */}
          <div className="flex flex-col justify-center items-center gap-4 px-[40px] text-center">
            <div className="bg-[#E6C7FF] rounded-full py-[12px] px-[36px] text-[#282828]">
              Stap 3
            </div>
            <h2 className="text-[26px] md:text-[48px] text-gray-50 max-w-[568px] leading-[100%]">
              Create a new reality
            </h2>
            <p className="text-gray-50 max-w-[568px]">
              Ga aan de slag met jouw persoonlijke plan om financieel vrij te
              worden en leer alles, in Jip & Janneke taal, over de cryptomarkt.
              Van slim investeren voor de langere termijn tot snel geld
              verdienen door te traden.
            </p>
            <div className="flex mt-10 items-center gap-2">
              <Image
                src="/team/tineke-zwart-sm.png"
                width={68}
                height={68}
                alt="User Image"
                className="rounded-full"
              />
              <div className="text-gray-50 flex flex-col items-start">
                <p className="font-bold">Tineke Zwart</p>
                <p className="text-left max-w-[300px]">
                  In de app zitten 3 uitgebreide cursussen die gemaakt zijn door
                  cryptomiljonair Tineke Zwart
                </p>
              </div>
            </div>
          </div>

          {/* Row-3 Col-2  */}
          <div className="bg-[#E6C7FF] rounded-3xl flex justify-center">
            <Image
              src="/phones/phone-2.png"
              width={415}
              height={734}
              alt="Phone"
              className=""
            />
          </div>
        </div>
      </div>

      <div className="-mx-[24px] px-[24px] lg:px-[124px] py-[100px] rounded-3xl bg-gray-50 flex flex-col gap-[100px]">
        <FeaturesSection />
        <ReviewsSection />
        <WishlistSection />
        <FoundersMessage />

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col mt-10">
              <h2>Abonnementen</h2>
              <p className="text-[20px] md:text-[40px] leading-none">
                Kies het abonnement dat bij je past en haal het maximale uit je
                crypto portfolio.
              </p>
            </div>
            <SubscriptionCard {...subscriptions[0]} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <SubscriptionCard {...subscriptions[1]} />
            <SubscriptionCard {...subscriptions[2]} />
            <SubscriptionCard {...subscriptions[3]} />
          </div>
        </div>

        <TeamCarousel />

        <div className="lg:-mx-[56px]">
          <FAQSection />
        </div>

        <DownloadAppSection />
        <NewsletterSignup />
      </div>
    </div>
  );
}
