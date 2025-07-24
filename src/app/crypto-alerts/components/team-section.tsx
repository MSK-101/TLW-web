"use client";

import Image from "next/image";

export default function TeamSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 my-8 lg:my-12">
      <div className="bg-red-500 rounded-2xl overflow-hidden order-1 md:order-1 max-h-[500px]">
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
          Ik ben Tineke Zwart en ik ben crypto-miljonair
        </h2>
        <div className="space-y-4 text-[#282828] leading-relaxed">
          <p>
            Al sinds 2010 ben ik actief in de cryptomarkt. In het begin was ik
            nog wat terughoudend, maar na verloop van tijd begon ik steeds meer
            te investeren. Uiteindelijk heb ik meer dan €300.000 geïnvesteerd in
            verschillende cryptocurrencies.
          </p>
          <p>
            Tegenwoordig werk ik als marketing consultant in de crypto wereld en
            help ik bedrijven hun weg te vinden in deze nieuwe technologie.
            Samen met mijn zakenpartner en vriendin Tamara deel ik graag mijn
            kennis en ervaring.
          </p>
        </div>
      </div>
      <div className="bg-blue-500 rounded-2xl overflow-hidden order-3 md:order-4 max-h-[500px]">
        <Image
          src="/tamara.png"
          width={400}
          height={500}
          alt="Tamara Stroop"
          className="w-full h-full object-cover object-top lg:object-[0%_25%]"
        />
      </div>
      <div className="flex flex-col justify-center order-4 md:order-3">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-6">
          Ik ben Tamara Stroop en samen met Tineke ondersteun ik je graag in je
          crypto avontuur.
        </h2>
        <div className="space-y-4 text-[#282828] leading-relaxed">
          <p>
            Mijn crypto reis begon met veel enthousiasme, maar na een bull run
            zag ik mijn portfolio flink dalen. Dit was het moment waarop ik
            besloot om me echt te verdiepen in de marktdynamiek en te begrijpen
            hoe alles werkt.
          </p>
          <p>
            Wat ik heb geleerd is dat crypto niet alleen een financieel spel is,
            maar ook een mentaal spel. Het is een tool voor persoonlijke groei
            en het ontwikkelen van discipline. 😊
          </p>
          <p>
            Uiteindelijk heb ik al mijn spaargeld geïnvesteerd in crypto en
            andere assets, en nu deel ik graag mijn ervaringen met anderen. ✈️
          </p>
        </div>
      </div>
    </div>
  );
}
