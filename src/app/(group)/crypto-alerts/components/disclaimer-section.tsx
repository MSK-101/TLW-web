"use client";

import TLWButton from "@/components/TlwButton";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function DisclaimerSection({
  disclaimerSectionData,
}: {
  disclaimerSectionData: any;
}) {
  const { button, disclaimer } = disclaimerSectionData;

  if (!disclaimerSectionData) {
    return null;
  }

  return (
    <div className="flex flex-col gap-5 items-center mt-20">
      <TLWButton button={button} icon={faBell} />

      <p className="text-gray-50 max-w-[500px] text-center">{disclaimer}</p>
    </div>
  );
}
