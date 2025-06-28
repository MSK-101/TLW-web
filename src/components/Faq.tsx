"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Rhoncus eget massa porttitor ullamcorper tincidunt quis dictum adipiscing?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    question: "Mi velit tortor mi feugiat. Tincidunt vestibulum tortor habitasse tincidunt non?",
    answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
  },
  {
    question: "Morbi interdum enim viverra ut urna mi auctor feugiat massa?",
    answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
  },
  {
    question: "Ut consequat quam aliquam feugiat sed sapien fermentum. In ut ullamcorper vestibulum sit?",
    answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  }
];

export default function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-500 uppercase tracking-wide">FAQ</span>
          <h2 className="text-2xl lg:text-4xl font-bold text-[#282828] mt-2">
            Veelgestelde vragen
          </h2>
        </div>

        <div className="space-y-4 px-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#F0F0F0] rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg lg:text-xl text-[#282828] font-medium pr-8">
                  {item.question}
                </span>
                <FontAwesomeIcon
                  icon={openItems.includes(index) ? faMinus : faPlus}
                  className="text-[#282828] text-xl flex-shrink-0"
                />
              </button>

              {openItems.includes(index) && (
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-[#282828] hover:text-[#7F65CA] transition-colors inline-flex items-center">
            Bekijk alle vragen
            <Image
              src="/arrow_icon.svg"
              alt="Arrow down"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
