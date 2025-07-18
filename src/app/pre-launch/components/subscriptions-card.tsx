import { CheckIcon } from "@/components/icons";
import Image from "next/image";
import React from "react";

interface SubscriptionCardProps {
  headingTitle: string;
  headingColor: string;
  headingImageSrc: string;
  features: string[];
}

export default function SubscriptionCard({
  headingTitle,
  headingColor,
  headingImageSrc,
  features,
}: SubscriptionCardProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={headingImageSrc}
        width={215}
        height={175}
        alt="Image"
        className="w-[120px] -mb-[55px] z-10"
      />
      <div className="rounded-3xl overflow-hidden">
        <h2
          className="text-gray-50 text-xl p-5 pt-12 text-center"
          style={{ backgroundColor: headingColor }}
        >
          {headingTitle}
        </h2>
        <div className="flex flex-col px-5 py-7 bg-[#F0F0F0] gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3">
              <CheckIcon className="flex-none" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
