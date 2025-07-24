"use client";
import React from "react";

export default function ComparisonSection() {
  const features = [
    { name: "Markt updates", cryptoAlerts: "✓", cryptoTechTeach: "✓" },
    { name: "Q&A", cryptoAlerts: "✓", cryptoTechTeach: "✓" },
    {
      name: "Trade alerts",
      cryptoAlerts: "Regelmatig BTC + altcoins",
      cryptoTechTeach: "Af en toe BTC en ETH",
    },
    {
      name: "Technische analyse op verzoek",
      cryptoAlerts: "✗",
      cryptoTechTeach: "✓",
    },
    { name: "Masterclasses", cryptoAlerts: "✓", cryptoTechTeach: "✗" },
    {
      name: "Trading lessen",
      cryptoAlerts: "Beginners",
      cryptoTechTeach: "Gevorderden",
    },
    {
      name: "Community platform",
      cryptoAlerts: "Whatsapp",
      cryptoTechTeach: "Discord",
    },
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#282828] mb-16">
          Lorem ipsum dolor sit
        </h2>

        <div className="relative overflow-x-auto">
          <div className="grid grid-cols-3 w-full text-center">
            {/* Header Row */}
            <div className="py-4 text-lg lg:text-3xl font-bold text-[#282828] text-left sm:text-center"></div>

            <div className="py-4 text-lg lg:text-3xl font-bold text-[#282828]">
              Crypto Alerts
            </div>

            <div className="py-4 text-lg lg:text-3xl font-bold text-[#282828] rounded-t-md bg-[#E6C7FF]">
              Crypto Tech & Teach
            </div>

            {/* Feature Rows */}
            {features.map((feature, index) => {
              const isFirst = index === 0;
              const isLast = index === features.length - 1;

              return (
                <React.Fragment key={index}>
                  {/* Left Column */}
                  <div
                    className={`py-6 px-2 lg:py-8 lg:px-6 text-sm lg:text-xl text-[#282828] text-center md:text-left ${
                      isFirst ? "" : "border-t border-dashed border-gray-300"
                    }`}
                  >
                    {feature.name}
                  </div>

                  {/* Middle Column (Yellow BG, Rounded top and bottom only) */}
                  <div
                    className={`py-6 px-2 lg:py-8 lg:px-6 ${
                      isFirst
                        ? "rounded-t-md"
                        : isLast
                        ? "rounded-b-md border-t border-dashed"
                        : "border-t border-dashed"
                    }`}
                  >
                    {["✓", "✗"].includes(feature.cryptoAlerts) ? (
                      <div
                        className={`w-6 h-6 lg:w-7 lg:h-7 rounded-md mx-auto flex items-center justify-center ${
                          feature.cryptoAlerts === "✓"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        <span className="text-sm font-bold">
                          {feature.cryptoAlerts}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#282828] text-xs lg:text-base">
                        {feature.cryptoAlerts}
                      </span>
                    )}
                  </div>

                  {/* Right Column */}
                  <div
                    className={`py-6 px-2 lg:py-8 lg:px-6 text-[#282828] bg-[#E6C7FF] ${
                      !isLast
                        ? ""
                        : "rounded-b-md border-t border-dashed border-gray-300"
                    }`}
                  >
                    {["✓", "✗"].includes(feature.cryptoTechTeach) ? (
                      <div
                        className={`w-6 h-6 lg:w-7 lg:h-7 rounded-md mx-auto flex items-center justify-center ${
                          feature.cryptoTechTeach === "✓"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        <span className="text-sm font-bold">
                          {feature.cryptoTechTeach}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs lg:text-base">
                        {feature.cryptoTechTeach}
                      </span>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
