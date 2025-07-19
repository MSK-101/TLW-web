"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GroupSection() {
  const benefits = [
    "Als je al een portfolio hebt, maar je eigenlijk geen idee hebt waar je op moet letten",
    "Wilt profiteren van deze bull run maar niet alles zelf wilt uitzoeken",
    "Op de hoogte wilt blijven van cryptonieuws zonder er veel tijd aan kwijt te zijn",
    "Wilt leren van praktijkvoorbeelden en echte situaties",
    "Het nieuws wel volgt, maar eigenlijk niet weet wat dit voor jouw crypto betekent",
    "Je mijn Crypto Cursus niet hebt gevolgd, maar wel graag updates van mij ontvangt",
    "Je mijn Crypto Cursus wel hebt gevolgd en ook graag mijn updates ontvangt"
  ];

  return (
    <div className="bg-[url(/group.png)] bg-center bg-cover bg-no-repeat rounded-2xl lg:rounded-b-4xl -mx-5 lg:-mx-[100px] px-6 lg:px-[124px] py-12 lg:py-20" style={{ height: '891px' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Heading */}
        <div className="col-auto self-start text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-[90%] mb-8">
            <span className="text-[#282828]">Voor wie is </span>
            <br />
            <span className="text-[#7F65CA]">Crypto Alerts</span>
            <br />
            <span className="text-[#282828]"> interessant?</span>
          </h2>
        </div>

        {/* Right Side - Card */}
        <div className="col-auto self-center lg:self-end lg:ml-11 lg:pt-20 lg:pr-5">
          <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-lg w-full md:w-full lg:max-w-md">
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 mt-1"
                  >
                    <path
                      d="M16.6667 5L7.5 14.1667L3.33333 10"
                      stroke="#7F65CA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#282828] text-sm lg:text-base leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="https://wwwthelimitlesswaynl.plugandpay.com/checkout/event"
              target="_blank"
            >
              <Button className="bg-[#7F65CA] text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-[#6B5BB8] transition-colors">
                Direct aanmelden
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
