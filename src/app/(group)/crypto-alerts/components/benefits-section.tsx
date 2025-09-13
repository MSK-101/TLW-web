"use client";

import TLWButton from "@/components/TlwButton";
import Markdown from "@/components/ui/markdown";

type BenefitsSectionProps = {
  benefitsSectionData: any;
};

export default function BenefitsSection({
  benefitsSectionData,
}: BenefitsSectionProps) {
  const { heading, description, button, benefits } = benefitsSectionData;

  if (!benefitsSectionData) {
    return null;
  }

  return (
    <div className="flex md:flex-row flex-col gap-16">
      <div className="flex-2/5 text-center md:text-left mb-5 flex flex-col gap-4">
        <h2 className="text-5xl">{heading}</h2>
        <Markdown>{description}</Markdown>
        <div>
          <TLWButton button={button} />
        </div>
      </div>
      <div className="flex-3/5 flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-4 lg:flex-1/2">
          {benefits
            .slice(0, Math.ceil(benefits.length / 2))
            .map((benefit: any) => (
              <div
                className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px]"
                key={benefit.id}
              >
                <div className="text-2xl xl:text-3xl mb-4">
                  {benefit.heading}
                </div>

                <Markdown>{benefit.description}</Markdown>
              </div>
            ))}
        </div>

        <div className="flex flex-col gap-4 lg:flex-1/2">
          {benefits
            .slice(Math.ceil(benefits.length / 2))
            .map((benefit: any) => (
              <div
                className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px]"
                key={benefit.id}
              >
                <div className="text-2xl xl:text-3xl mb-4">
                  {benefit.heading}
                </div>

                <Markdown>{benefit.description}</Markdown>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
