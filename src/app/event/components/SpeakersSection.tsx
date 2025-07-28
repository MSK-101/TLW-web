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
            strategie naar financiële vrijheid creëren of optimaliseren.
            <br />
            <br />
            Dit event is
            <span className="font-bold mx-1">
              voor iedereen die al crypto bezit
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
              kan helpen. Je kunt de app tijdens het event downloaden en ook
              meteen gebruiken.
            </h2>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center">
        <h1 className="text-gray-50 text-3xl lg:text-[64px] font-bold mt-24">
          Sprekers
        </h1>
        <div className="text-[#CCCCCC] md:w-[584px] text-center text-lg flex flex-col gap-3 mt-3">
          <p>
            Op deze middag kun je naar meerdere inspirerende sprekers luisteren
            en daarbij kun je deels zelf aangeven bij wiens presentatie je wilt
            zijn.
          </p>
          <p>
            Je kunt je voorkeur aangeven nadat je je ticket hebt gekocht en
            dichter na het event toe ontvang je hierover per mail meer
            informatie.
          </p>
          <p>
            Tineke Zwart begint de middag met een plenaire keynote presentatie
            en daarna kun je 2 workshops van 45 minuten over specifieke
            financiële onderwerpen volgen bij andere sprekers
          </p>
          <p>Hierbij kun je kiezen uit maar liefst 6 verschillende experts.</p>
          <p>
            We sluiten af met de lancering van de app door Tineke Zwart en Myrte
            Scheffer.
          </p>
        </div>
      </div>

      <div className="xl:mx-10 2xl:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-[32px] mt-10">
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <Image
            src="/speakers/tineke.jpeg"
            alt="Tineke"
            width={100}
            height={123}
            className="object-cover object-top w-full h-96 md:h-full"
          />
          <div className="px-[24px] py-6 col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">
              Tineke Zwart - Co-founder TLW & Crypto Educator
            </h2>
            <p className="font-bold text-lg">
              Technische analyse voor beginners: leer de basis en pas direct toe
            </p>
            <p className="text-[#525252]">
              Ontdek hoe je als beginnende belegger koersgrafieken leert lezen
              en slimme beslissingen maakt op basis van technische analyse. Deze
              praktische sessie geeft je direct toepasbare inzichten waarmee jij
              zelf koersbewegingen kunt begrijpen én benutten.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <Image
            src="/speakers/annika.png"
            alt="Annika"
            width={1000}
            height={1000}
            className="object-cover object-center md:object-top w-full h-96 md:h-full"
          />
          <div className="px-[24px] py-6 col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">
              Anníka van Loon - TLW Crypto Expert
            </h2>
            <p className="font-bold text-lg">
              Wat is jouw investeer Hat? Ontdek je beleggersprofiel en
              bijpassende assets
            </p>
            <p className="text-[#525252]">
              Wat voor type belegger ben jij? In deze interactieve sessie ontdek
              je jouw investeerdersprofiel en leer je welke assets daarbij
              passen - voor meer grip op je keuzes en een strategie die écht bij
              je past.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <Image
            src="/speakers/kim.jpeg"
            alt="Kim"
            width={1000}
            height={1000}
            className="object-cover object-top w-full h-96 md:h-full"
          />
          <div className="px-[24px] py-6 col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">
              Kim de Graeve – Finance Mentor & Freedom Coach
            </h2>
            <p className="font-bold text-lg">
              Hoe bouw je een stevig fundament?
            </p>
            <p className="text-[#525252]">
              Financiële vrijheid hoeft geen traag traject te zijn. Kim ging in
              2 jaar tijd van nul euro op haar rekening naar financiële vrijheid
              en toont hoe je met scherpe keuzes en een andere manier van denken
              over tijd, geld en energie, op korte termijn een fundament legt
              dat levenslang rendeert.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <Image
            src="/speakers/giovanni.png"
            alt="Giovanni"
            width={1000}
            height={1000}
            className="object-cover object-top w-full h-96 md:h-full"
          />
          <div className="px-[24px] py-6 col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">
              Giovanni Jimmink - Vastgoedinvesteerder & Ondernemer
            </h2>
            <p className="font-bold text-lg">
              Investeren in buitenlands vastgoed - de do&apos;s &amp;
              don&apos;ts
            </p>
            <p className="text-[18px] text-[#525252]">
              Wat doe je met je cryptowinst en welke manieren van vastgoed
              investeren zijn er? Giovanni deelt zijn lessen en valkuilen uit
              jarenlange ervaring met vastgoed in Spanje. Leer hoe jij deze
              route zelf kunt verkennen - praktisch, eerlijk en zonder poespas.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <Image
            src="/speakers/otto.jpeg"
            alt="Otto"
            width={1000}
            height={1000}
            className="object-cover object-center md:object-top w-full h-96 md:h-full"
          />
          <div className="px-[24px] py-6 col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">
              Otto Schapendonk - De Cijferdokter & Financieel Analist
            </h2>
            <p className="font-bold text-lg">
              Van Crypto tot goud - slim spreiden over verschillende assets
            </p>
            <p className="text-[18px] text-[#525252]">
              Crypto, vastgoed, goud - hoe combineer je dat slim? Otto legt je
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
            width={1000}
            height={1000}
            className="object-cover object-center md:object-top w-full h-96 md:h-full"
          />
          <div className="px-[24px] py-6 col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">
              Michael de Jong &amp; Sjoerd Lommen - Ervaren traders.
            </h2>
            <p className="font-bold text-lg">
              Technische analyse en traden voor beginners. Leer grafieken lezen
              en geld verdienen met traden.
            </p>
            <p className="text-[18px] text-[#525252]">
              Je kunt investeren voor de lange termijn, maar je kunt er ook voor
              kiezen om korte termijn trades te doen. In deze workshop nemen
              Michael en Sjoerd je mee in de wereld van grafieken lezen, zodat
              je aan de hand daarvan slimme trades kunt nemen en een (extra)
              inkomstenstroom hebt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
