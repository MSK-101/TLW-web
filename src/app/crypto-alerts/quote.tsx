"use client";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <div className="py-20 lg:py-32 mt-20">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <div className="mb-10">
          <Image
            src="/quote.png"
            alt="Decorative quote marks"
            width={80}
            height={80}
            className="mx-auto w-16 h-16 lg:w-20 lg:h-20"
          />
        </div>

        <blockquote className="text-3xl lg:text-5xl font-medium text-[#282828] leading-relaxed mb-8">
          "Mijn verwachting is dat veel
          <br />
          cryptomunten x10 gaan de
          <br />
          komende maanden"
        </blockquote>

        {/* Name */}
        <cite className="text-lg lg:text-xl text-gray-600">
          - Tineke Zwart
        </cite>
      </div>
    </div>
  );
}
