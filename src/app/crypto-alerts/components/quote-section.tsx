"use client";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <div className="my-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10">
          <Image
            src="/quote.png"
            alt="Decorative quote marks"
            width={80}
            height={80}
            className="mx-auto w-16 h-16 lg:w-20 lg:h-20"
          />
        </div>

        <blockquote className="text-3xl lg:text-4xl font-medium text-[#282828] leading-relaxed mb-8">
          &quot;Mijn verwachting is dat veel
          <br />
          cryptomunten x10 gaan de
          <br />
          komende maanden&quot;
        </blockquote>

        {/* Name */}
        <cite className="text-md lg:text-lg text-gray-600">- Tineke Zwart</cite>
      </div>
    </div>
  );
}
