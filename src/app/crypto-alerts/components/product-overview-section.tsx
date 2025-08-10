"use client";

import Markdown from "@/components/ui/markdown";

export default function ProductOverviewSection({
  productOverviewSectionData,
}: {
  productOverviewSectionData: any;
}) {
  const { product_overview, call_to_action } = productOverviewSectionData;

  if (!productOverviewSectionData) {
    return null;
  }

  return (
    <div className="md:max-w-[60%] mx-auto text-[#282828]">
      <div className="flex flex-col gap-5">
        <h5 className="text-4xl">{product_overview.heading}</h5>

        <div className="flex flex-col gap-5">
          <Markdown>{product_overview.text}</Markdown>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        <h5 className="text-4xl">{call_to_action.heading}</h5>
        <div className="flex flex-col gap-5">
          <Markdown>{call_to_action.text}</Markdown>
        </div>
      </div>
    </div>
  );
}
