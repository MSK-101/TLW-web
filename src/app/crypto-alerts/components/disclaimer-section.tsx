"use client";

import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DisclaimerSection({
  disclaimerSectionData,
}: {
  disclaimerSectionData: any;
}) {
  const { button_text, disclaimer } = disclaimerSectionData;

  return (
    <div className="flex flex-col gap-5 items-center mt-20">
      <button className="bg-[#7F65CA] text-white px-8 py-3 rounded-xl hover:bg-[#5a4a9a] transition-colors duration-300">
        {button_text}
        <FontAwesomeIcon icon={faBell} className="ml-3" />
      </button>

      <p className="text-gray-50 max-w-[500px] text-center">{disclaimer}</p>
    </div>
  );
}
