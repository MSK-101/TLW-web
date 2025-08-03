"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <div className="lg:px-14 mb-32">
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
            We hebben veel waardevolle producten voor beginners, maar dit event
            is bedoeld voor mensen die al crypto bezitten. Je hoeft er echter
            niet per se veel over te weten om mee te kunnen doen.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="cursor-pointer">
            Ik ben ondernemer. Kan ik de kosten van dit event ook aftrekken?
          </AccordionTrigger>
          <AccordionContent>
            In sommige gevallen kan dat, maar in de meeste gevallen niet. Het
            wisselt ook per bedrijf. Daarom is het slim om dit even met je
            boekhouder te checken.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="cursor-pointer">
            Wat zijn de annuleringsvoorwaarden voor het event?
          </AccordionTrigger>
          <AccordionContent>
            Je kunt je kaartje aan iemand anders geven als je echt niet kan,
            maar terug doen kan helaas niet. Dit mede in verband met het
            reserveren van de locatie op basis van het aantal mensen dat erbij
            is.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="cursor-pointer">
            Waar kan ik parkeren?
          </AccordionTrigger>
          <AccordionContent>
            Op en rondom het terrein van Green Village is voldoende gratis
            parkeerplek.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
