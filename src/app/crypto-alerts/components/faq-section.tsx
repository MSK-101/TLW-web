"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Markdown from "@/components/ui/markdown";

export default function FAQSection({
  faqSectionData,
}: {
  faqSectionData: any;
}) {
  const { heading, question_answers } = faqSectionData;

  return (
    <div className="">
      <div className="text-center mb-15">
        <p className="text-[48px]">{heading}</p>
      </div>
      <Accordion type="single" collapsible>
        {question_answers.map((faq: any, index: number) => (
          <AccordionItem value={`item_${index + 1}`} key={index}>
            <AccordionTrigger className="cursor-pointer">
              <Markdown>{faq.question}</Markdown>
            </AccordionTrigger>
            <AccordionContent>
              <Markdown>{faq.answer}</Markdown>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
