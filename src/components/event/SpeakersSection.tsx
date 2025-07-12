import Image from "next/image";

export default function SpeakersSection() {
  return (
    <div className="p-6 md:p-12">
      <section className="bg-[url(/cs_hero_bg.png)] bg-center bg-cover bg-no-repeat rounded-[32px] text-[#282828] bg-[#F0F0F0] lg:mx-10 xl:mx-40 mt-20 pt-20 pb-8 lg:pb-14 px-4 lg:px-24">
        <h1 className="text-5xl font-funnel-display">
          Exclusief event: maximaal 250 gasten
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-20 mt-12">
          <p className="lg:w-1/2">
            Kom, samen met ons, in 1 middag je financiële kennis vergroten en je
            strategie naar financiële vrijheid verbeteren.
            <br />
            <br />
            Dit event is
            <span className="font-bold">
              &nbsp;voor iedereen die al crypto bezit
            </span>
            en zich afvraagt: hoe kan ik hier nog meer uithalen? En hoe kan ik
            mijn doelen zo snel mogelijk behalen?
            <br />
            <br />
            Of je nu ooit begon uit nieuwsgierigheid, FOMO of omdat je geloofde
            in de toekomst, dit is het moment om verder te denken.
            <br />
            <br />
            Wat haal je eruit?
            <br />
            <br />
            We geven je inzicht in hoe je crypto, maar ook andere assets, kunt
            gebruiken als slim onderdeel van
            <span className="font-bold">
              &nbsp;een groter plan richting financiële vrijheid
            </span>
            . Je krijgt inspiratie en praktische handvatten om jouw vermogen
            doelgericht te laten groeien.
            <br />
            <br />
            Alles is, zoals altijd, weer in begrijpelijke taal.
          </p>
          <div className="lg:w-1/2">
            <h2 className="font-bold text-lg">Je leert:</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Hoe je minder hoeft te gokken en meer strategisch kunt sturen
              </li>
              <li>
                Hoe je tussendoor concrete spaardoelen kunt realiseren met
                crypto
              </li>
              <li>
                Wat er precies nodig is om, in jouw situatie, financieel vrij te
                worden
              </li>
              <li>
                Hoe je veel makkelijker en sneller je crypto portfolio kunt
                managen
              </li>
              <li>
                Hoe je goed kunt bijhouden of je &apos;on track&apos; bent met
                betrekking tot je financiële doelen
              </li>
              <li>Hoe je met kleine aanpassingen grote stappen kunt zetten</li>
              <li>
                Wat de verwachtingen zijn voor de komende jaren voor crypto,
                edelmetalen, ETF&apos;s en aandelen
              </li>
              <li>Het verschil tussen een goede en slechte strategie</li>
              <li>
                Hoe je makkelijk op de hoogte kunt blijven van alles wat er
                speelt, zonder dat je er een dagtaak aan hebt
              </li>
            </ul>
            <h2 className="font-bold text-lg lg:text-2xl mt-4">
              En niet te vergeten: Hoe onze nieuwe app je op al deze gebieden
              kan helpen.
            </h2>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center">
        <h1 className="text-gray-50 text-3xl lg:text-[64px] font-bold mt-24">
          Sprekers
        </h1>
        <p className="text-[#CCCCCC] md:w-[584px] text-center text-lg mt-2">
          Op deze middag kun je naar meerdere inspirerende sprekers luisteren en
          daarbij kun je deels zelf aangeven bij wiens presentatie je wilt zijn.
          <span className="italic">
            Je kunt je <span className="underline">voorkeur</span> aangeven
            nadat je je ticket hebt gekocht en dichter na het event toe ontvang
            je hierover per mail meer informatie.
          </span>
        </p>
        <p className="text-[#CCCCCC] font-bold mt-4 md:w-[584px] text-lg text-center">
          Tineke begint de middag met een plenaire keynote presentatie en daarna
          kun je 2 workshops van 45 minuten over specifieke financiële
          onderwerpen volgen bij 2 andere sprekers. Hierbij kun je kiezen uit
          maar liefst 6 verschillende experts.
          <br />
          <br />
          We sluiten af met de lancering van de app door Myrte.
        </p>
      </div>

      <div className="xl:mx-10 2xl:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-[32px] mt-10">
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <Image
            src="/speakers/tineke.png"
            alt="Tineke"
            width={100}
            height={123}
            className="object-cover object-top w-full h-96 md:h-full"
          />
          <div className="px-[24px] py-[40px] col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">
              Tineke Zwart - Co-founder TLW & Crypto Educator Technische analyse
              voor beginners: leer de basis en pas direct toe
            </h2>
            <p className="text-[18px] text-[#525252] line-clamp-3">
              Wat voor type belegger ben jij? In deze interactieve sessie ontdek
              je jouw investeerdersprofiel en leer je welke assets daarbij
              passen – voor meer grip op je keuzes en een strategie die écht bij
              je past.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <Image
            src="/speakers/annika.png"
            alt="Annika"
            width={100}
            height={123}
            className="object-cover object-center md:object-top w-full h-96 md:h-full"
          />
          <div className="px-[24px] py-[40px] col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">
              Anníka van Loon - TLW Crypto Expert Wat is jouw investor hat?
              Ontdek je beleggersprofiel en bijpassende assets
            </h2>
            <p className="text-[18px] text-[#525252] line-clamp-3">
              Ontdek hoe je als beginnende belegger koersgrafieken leert lezen
              en slimme beslissingen maakt op basis van technische analyse. Deze
              praktische sessie geeft je direct toepasbare inzichten waarmee jij
              zelf koersbewegingen kunt begrijpen én benutten.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <Image
            src="/speakers/kim.png"
            alt="Kim"
            width={100}
            height={123}
            className="object-cover object-top w-full h-96 md:h-full"
          />
          <div className="px-[24px] py-[40px] col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">
              Kim de Graeve - Finance Mentor & Freedom Coach Financiële vrijheid
              met laagdrempelige assets – hoe bouw je een stevig fundament?
            </h2>
            <p className="text-[18px] text-[#525252] line-clamp-3">
              Ook met kleine bedragen kun je financieel vrij worden. Kim laat
              zien hoe je met slimme keuzes en een heldere focus een krachtig
              fundament bouwt voor jouw lange termijn vermogen.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <Image
            src="/speakers/giovanni.png"
            alt="Giovanni"
            width={100}
            height={123}
            className="object-cover object-top w-full h-96 md:h-full"
          />
          <div className="px-[24px] py-[40px] col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">
              Giovanni Jimmink - Vastgoedinvesteerder & Ondernemer Investeren in
              buitenlands vastgoed – de do&apos;s & dont&apos;s
            </h2>
            <p className="text-[18px] text-[#525252] line-clamp-3">
              Wat doe je met je cryptowinst en welke manieren van vastgoed
              investeren zijn er? Giovanni deelt zijn lessen en valkuilen uit
              jarenlange ervaring met vastgoed in Spanje. Leer hoe jij deze
              route zelf kunt verkennen – praktisch, eerlijk en zonder poespas.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <Image
            src="/speakers/otto.png"
            alt="Otto"
            width={100}
            height={123}
            className="object-cover object-center md:object-top w-full h-96 md:h-full"
          />
          <div className="px-[24px] py-[40px] col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">
              Otto Schapendonk - De Cijferdokter & Financieel Analist Van crypto
              tot goud – slim spreiden over verschillende assets
            </h2>
            <p className="text-[18px] text-[#525252] line-clamp-3">
              Crypto, vastgoed, goud – hoe combineer je dat slim? Otto legt je
              op begrijpelijke wijze uit hoe verschillende assets scoren op
              risico, rendement en timing. Met rekenvoorbeelden en inzichten op
              1 A4.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <Image
            src="/speakers/tim.png"
            alt="Tim"
            width={100}
            height={123}
            className="object-cover object-center md:object-top w-full h-96 md:h-full"
          />
          <div className="px-[24px] py-[40px] col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">
              Tim Kamp - Crypto Expert De invloed van de macro economie op de
              crypto markt
            </h2>
            <p className="text-[18px] text-[#525252] line-clamp-3">
              De cryptomarkt wordt erg beïnvloed alles wat er gebeurt op macro
              economisch en geopolitiek vlak. Tim vertelt exact welke dingen een
              positieve en negatieve impact hebben op de koersen zodat je daar
              voortaan rekening mee kunt houden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
