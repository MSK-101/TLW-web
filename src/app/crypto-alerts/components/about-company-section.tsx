"use client";

import Markdown from "@/components/ui/markdown";

export default function AboutCompanySection({
  aboutCompanySectionData,
}: {
  aboutCompanySectionData: any;
}) {
  const { heading, description } = aboutCompanySectionData;

  return (
    <div className="md:max-w-[60%] mx-auto text-[#282828] text-left flex flex-col gap-15">
      <h2 className="text-3xl lg:text-5xl font-bold text-[#282828]">
        {heading}
      </h2>
      <div className="flex flex-col gap-5">
        <Markdown>{description}</Markdown>
      </div>
    </div>
  );
}
