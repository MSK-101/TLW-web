"use client";

import Link from "next/link";

export default function GroupSection() {
  const benefits = [
    "Je hebt al een cryptoportfolio en wilt leren hoe je hier slimmer en strategischer mee omgaat",
    "Je hebt misschien al wat ervaring met traden (bijvoorbeeld via Crypto Alerts) en wilt zelf leren analyseren",
    "Je wilt meer verdieping: technische analyses, patronen herkennen en eigen strategieën ontwikkelen",
    "Je zoekt een leeromgeving waarin alles begrijpelijk wordt uitgelegd — ook de complexere materie",
    "Je wilt niet alles alleen doen, maar samen groeien in een betrokken, toegankelijke community",
    "Je hebt behoefte aan begeleiding van echte traders, maar zonder afhankelijk te zijn van “signalen”",
    "Je bent al bekend met de basis van crypto — dit is geen instapgroep voor beginners",
  ];

  return (
    <div
      className="bg-[url(/group.png)] bg-center bg-cover bg-no-repeat rounded-2xl lg:-mx-[84px] px-6 lg:px-[124px] py-12 lg:py-20"
      style={{ height: "891px" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-end justify-center md:justify-between">
        {/* Left Side - Heading */}
        <div className="col-auto self-start text-center lg:text-left">
          <h2 className="text-5xl xl:text-6xl font-bold leading-[90%] mb-8 text-[#282828]">
            Voor wie is
            <br />
            <span className="text-[#7F65CA]">Trade & Invest Academy</span>{" "}
            <br />
            interessant?
          </h2>
        </div>

        {/* Right Side - Card */}
        <div className="col-auto bg-white rounded-2xl px-6 lg:px-10 py-8 lg:py-12 shadow-l mx-auto max-w-[450px] flex flex-col gap-4">
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

          <Link
            href="https://wwwthelimitlesswaynl.plugandpay.com/checkout/event"
            target="_blank"
            className="cursor-pointer mt-3"
          >
            <button className="bg-[#7F65CA] text-white px-8 py-3 rounded-xl hover:bg-[#5a4a9a] transition-colors duration-300">
              Direct aanmelden
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
