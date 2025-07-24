"use client";

import Image from "next/image";

export default function TeamSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 my-8 lg:my-12">
      <div className="bg-red-500 rounded-2xl overflow-hidden order-1 md:order-1 max-h-[600px]">
        <Image
          src="/tinke_red.png"
          width={400}
          height={500}
          alt="Tineke Zwart"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col justify-center order-2 md:order-2">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-6">
          Jouw volgende stap begint hier — met een team dat met je meegroeit
        </h2>
        <div className="space-y-4 text-[#282828] leading-relaxed">
          <p>
            Mijn reis in crypto begon klein, maar groeide uit tot een diepgaande
            expertise en uiteindelijk zelfs veel financieel succes, ik mag
            mezelf tegenwoordig cryptomiljonair noemen - hoewel ik dat nog
            steeds raar vind om op te schrijven.
          </p>
          <p>
            Die kennis geef ik nu door via The Limitless Way, het platform dat
            ik samen met Myrte Scheffer heb opgericht.
          </p>
          <p>
            We geloven dat je sneller groeit als je leert van mensen die verder
            zijn — en dat je nóg sterker wordt als je onderdeel bent van een
            community die met je meedenkt.
            <span className="font-bold mx-1">
              Daarom werken we met een team van 12 experts aan onze content en
              begeleiding, én bouwen er 10 techspecialisten fulltime aan onze
              crypto app die we lanceren op 17 oktober 2025.
            </span>
          </p>
          <p className="font-bold">
            Voor Crypto Tech & Teach bundelen we de krachten met twee van onze
            meest ervaren traders: Sjoerd en Michael.
          </p>
          <p>
            Zij nemen je mee in hun strategie, denken hardop met je mee en leren
            je hoe jij zélf beter wordt in analyseren, interpreteren en
            beslissingen nemen.
          </p>
          <p>👇 Maak hieronder kennis met Sjoerd en Michael.</p>
        </div>
      </div>
    </div>
  );
}
