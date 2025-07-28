"use client";

import OurTeamSwiper from "./OurTeamSwiper";

export default function TeamCarousel() {
  return (
    <div className="mb-[124px] 2xl:px-14">
      <div className="text-center mb-15">
        <h2>Ons team</h2>
        <p className="text-[48px] leading-none">We are in this together</p>
      </div>
      <OurTeamSwiper />
    </div>
  );
}
