"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <div className="lg:px-14">
      <div className="text-center mb-15">
        <h2>FAQ</h2>
        <p className="text-[48px]">Veelgestelde vragen</p>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="cursor-pointer">
            Ik gebruik maar 1 exchange en heb geen hardware wallet. Is de app
            dan ook handig voor mij mij om te gebruiken?
          </AccordionTrigger>
          <AccordionContent>
            Ja, zeker. Je hebt dan niet het voordeel dat je meerdere
            portfolio&apos;s vanuit onze app kunt managen, maar daarnaast zijn
            er nog veel meer voordelen. Je hebt bijvoorbeeld veel meer inzicht
            in je winst, verlies en gemiddelde aankoopkoers per coin. Ook kun je
            spaardoelen aanmaken, je beleggersprofiel ontdekken, je
            vrijheidsgetal berekenen en verschillende cursussen volgen.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="cursor-pointer">
            Ik vind het spannend om mijn exchanges te koppelen aan deze app. Is
            dat wel veilig?
          </AccordionTrigger>
          <AccordionContent>
            Dat snappen we. We maken echter gebruik van de meest veilige
            systemen die er zijn en we werken met een partij die al jaren ISO
            gecertificeerd is. Ook kun je ervoor kiezen om handmatig je
            portfolio&apos;s in te voeren zodat je geen koppeling hoeft te maken
            met de API.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="cursor-pointer">
            Hoe lang zit ik vast aan een abonnement?
          </AccordionTrigger>
          <AccordionContent>
            Als je kiest voor een maandabonnement is het maandelijks opzegbaar.
            Als je kiest voor een jaarabonnement, is het opzegbaar vanaf de
            einddatum van je abonnement.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="cursor-pointer">
            Hoe volg ik de cursussen binnen de app? Gaat dat via de app of is er
            een aparte online leeromgeving?
          </AccordionTrigger>
          <AccordionContent>
            Op dit moment gaat dat nog via de app. We zijn alleen wel een online
            leeromgeving aan het bouwen zodat je de cursussen straks ook op je
            computer kunt volgen.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

