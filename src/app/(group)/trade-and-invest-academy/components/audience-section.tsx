"use client";

import TLWButton from "@/components/TlwButton";
import Markdown from "@/components/ui/markdown";

export default function AudienceSection({
  audienceSectionData,
}: {
  audienceSectionData: any;
}) {
  const { audience_benefits, button, background_image } = audienceSectionData;

  if (!audienceSectionData) {
    return null;
  }

  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-2xl lg:-mx-[84px] px-6 lg:px-[124px] py-12 lg:py-20"
      style={{
        height: "891px",
        backgroundImage: `url(${background_image.url})`,
      }}
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
          {audience_benefits.map((benefit: { id: number; text: string }) => (
            <div key={benefit.id} className="flex items-start gap-3">
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
              <div className="text-[#282828] text-sm lg:text-base leading-relaxed">
                <Markdown>{benefit.text}</Markdown>
              </div>
            </div>
          ))}

          <TLWButton button={button} />
        </div>
      </div>
    </div>
  );
}
