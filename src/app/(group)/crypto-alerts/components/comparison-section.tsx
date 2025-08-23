"use client";
import React from "react";

export default function ComparisonSection({
  perksComparisonSectionData,
}: {
  perksComparisonSectionData: any;
}) {
  const { heading, perks } = perksComparisonSectionData;

  if (!perksComparisonSectionData) {
    return null;
  }

  const availablity = (for_type: any) => {
    switch (for_type.availablity) {
      case "Yes":
        return "✓";
      case "No":
        return "✗";
      case "Other":
        return for_type.text;
    }
  };

  const features = perks.map((perk: any) => ({
    name: perk.perk,
    cryptoAlerts: availablity(perk.for_crypto_alerts),
    cryptoTechTeach: availablity(perk.for_crypto_tech_and_tech),
  }));

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#282828] mb-16">
          {heading}
        </h2>

        <div className="relative overflow-x-auto">
          <div className="grid grid-cols-3 w-full text-center">
            {/* Header Row */}
            <div className="py-4 text-lg lg:text-3xl font-bold text-[#282828] text-left sm:text-center"></div>

            <div className="py-4 text-lg lg:text-3xl font-bold text-[#282828] bg-[#faf6b4] rounded-t-md">
              Crypto Alerts
            </div>

            <div className="py-4 text-lg lg:text-3xl font-bold text-[#282828]">
              Trade & Invest Academy
            </div>

            {/* Feature Rows */}
            {features.map((feature: any, index: number) => {
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
                    className={`py-6 px-2 lg:py-8 lg:px-6 bg-[#faf6b4] ${
                      isFirst ? "rounded-t-md" : isLast ? "rounded-b-md" : ""
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
                    className={`py-6 px-2 lg:py-8 lg:px-6 text-[#282828] ${
                      isFirst ? "" : "border-t border-dashed border-gray-300"
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
