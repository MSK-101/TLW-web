"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQSection() {
  return (
    <div className="mb-[124px] lg:px-14">
      <div className="text-center mb-15">
        <h2>FAQ</h2>
        <p className="text-[48px]">Veelgestelde vragen</p>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="cursor-pointer">
            Ik doe nog niks met crypto en ik weet er ook nog vrijwel niks van.
            Is het event dan ook voor mij?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            dolorem nemo eaque! Sed, explicabo. Sed recusandae repellendus,
            explicabo quibusdam quisquam commodi, sequi necessitatibus ducimus
            dolores deserunt, reprehenderit sunt ab velit?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="cursor-pointer">
            Ik ben ondernemer. Kan ik de kosten van dit event ook aftrekken?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa
            asperiores recusandae nemo deleniti sunt error hic sapiente quos
            placeat ducimus libero atque ratione voluptas consequatur,
            architecto, explicabo non unde!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="cursor-pointer">
            Wat zijn de annuleringsvoorwaarden voor het event?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            voluptas accusantium nam perspiciatis incidunt architecto sit at
            modi, cum quisquam animi voluptate illo maiores dolorem. Hic veniam
            deleniti molestias architecto?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="cursor-pointer">
            Waar kan ik parkeren?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            voluptas accusantium nam perspiciatis incidunt architecto sit at
            modi, cum quisquam animi voluptate illo maiores dolorem. Hic veniam
            deleniti molestias architecto?
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
