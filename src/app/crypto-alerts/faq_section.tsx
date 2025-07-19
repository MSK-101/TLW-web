"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <div className="mb-[124px] lg:px-14 mt-20">
      <div className="text-center mb-15">
        <p className="text-[48px]">Veelgestelde vragen</p>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="cursor-pointer">
            Neem je ons mee in welke coins nu interessant zijn om in te investeren?
          </AccordionTrigger>
          <AccordionContent>
            We hebben veel waardevolle producten voor beginners, maar dit event
            is bedoeld voor mensen die al crypto bezitten. Je hoeft er echter
            niet per se veel over te weten om mee te kunnen doen.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="cursor-pointer">
            Is er ruimte om vragen te stellen?
          </AccordionTrigger>
          <AccordionContent>
            In sommige gevallen kan dat, maar in de meeste gevallen niet. Het
            wisselt ook per bedrijf. Daarom is het slim om dit even met je
            boekhouder te checken.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="cursor-pointer">
            Ben ik niet al te laat voor deze bull run?
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
            Ik heb nog helemaal geen crypto en ik heb de cursus niet gedaan, is dit product interessant voor mij?
          </AccordionTrigger>
          <AccordionContent>
            Ja, dit product is interessant voor jou. Je kunt deze producten gebruiken om jezelf te informeren over de cryptomarkt en om jezelf te voorbereiden op de komende bull run.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
