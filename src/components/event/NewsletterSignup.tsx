"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NewsletterSignup() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleIconClick = () => {
    if (isChecked) {
      // Handle email submission logic here
      console.log("Email submitted");
    }
  };

  return (
    <section className="flex justify-center text-[#282828] rounded-2xl lg:rounded-[32px] mx-4 lg:mx-0 mt-16 lg:mt-20 py-20 lg:py-40">
      <div className="w-full px-6 lg:px-0 lg:w-2/4 text-center">
        <h1 className="text-4xl lg:text-7xl mb-6 lg:mb-8 px-5 text-center">
          Meld je aan en blijf op de hoogte van de ontwikkelingen.
        </h1>
        <div className="flex items-center relative mb-4">
          <input
            type="email"
            placeholder="janjansen@mail.com"
            className="w-full bg-[#F0F0F0] rounded-full py-3 lg:py-4 pl-6 pr-14 focus:outline-[#7F65CA]"
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            width={20}
            className={`cursor-pointer absolute right-4 ${
              isChecked
                ? "text-[#7F65CA] hover:text-[#5a4a9a]"
                : "text-gray-400 cursor-not-allowed"
            }`}
            onClick={handleIconClick}
          />
        </div>
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            className="mr-2"
            id="tnc_checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            className="text-gray-600 text-sm lg:text-base"
            htmlFor="tnc_checkbox"
          >
            Ik ga akkoord met de algemene voorwaarden
          </label>
        </div>
      </div>
    </section>
  );
}
