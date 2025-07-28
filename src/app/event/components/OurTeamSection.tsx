"use client";

import OurTeamSwiper from "@/components/OurTeamSwiper";

export default function OurTeamSection() {
  return (
    <div className="mb-[124px] 2xl:px-14">
      <div className="text-center mb-15">
        <h2>Ons team</h2>
        <p className="text-[48px] leading-none">We are in this together.</p>
        <p className="my-4 max-w-[650px] mx-auto">
          De afgelopen maanden hebben we met een groot team hard gewerkt om de
          app te kunnen lanceren op 17 oktober. Hieronder vind je een overzicht
          van iedereen die hier een bijdrage aan heeft geleverd.
        </p>
      </div>
      <OurTeamSwiper />
    </div>
  );
}
