"use client";

import ReactMarkdown from "react-markdown";

type BenefitsSectionProps = {
  benefitsSectionData: any;
};

export default function BenefitsSection({
  benefitsSectionData,
}: BenefitsSectionProps) {
  console.log(benefitsSectionData);

  const { heading, description, button_text, benefits } = benefitsSectionData;

  if (!benefitsSectionData) {
    return null;
  }

  return (
    <div className="flex md:flex-row flex-col gap-16">
      <div className="flex-2/5 text-center md:text-left mb-5 flex flex-col gap-8">
        <h2 className="text-5xl">{heading}</h2>
        {description?.map((item: { id: number; text: string }) => (
          <div key={item.id}>
            <ReactMarkdown>{item.text}</ReactMarkdown>
          </div>
        ))}
        <button className="bg-[#7F65CA] text-white px-8 py-3 rounded-xl hover:bg-[#5a4a9a] transition-colors duration-300 self-center md:self-start">
          {button_text}
        </button>
      </div>
      <div className="flex-3/5 flex flex-col lg:flex-row gap-4 items-center justify-center">
        <div className="flex flex-col gap-4 lg:flex-1/2">
          {benefits
            .slice(0, Math.ceil(benefits.length / 2))
            .map((benefit: any) => (
              <div
                className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-end"
                key={benefit.id}
              >
                <div className="text-2xl xl:text-3xl">{benefit.heading}</div>

                <p className="mt-3">{benefit.description}</p>
              </div>
            ))}
        </div>

        <div className="flex flex-col gap-4 lg:flex-1/2">
          {benefits
            .slice(Math.ceil(benefits.length / 2))
            .map((benefit: any) => (
              <div
                className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-end"
                key={benefit.id}
              >
                <div className="text-2xl xl:text-3xl">{benefit.heading}</div>

                <p className="mt-3">{benefit.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
