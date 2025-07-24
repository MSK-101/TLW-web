"use client";

export default function BenefitsSection() {
  return (
    <div className="flex md:flex-row flex-col gap-16">
      <div className="flex-2/5 text-center md:text-left mb-5 flex flex-col gap-3">
        <h2 className="text-5xl mb-5">Wat krijg je?</h2>
        <p>
          In de
          <span className="font-bold mx-1">
            besloten Crypto Tech & Teach Discord- en WhatsApp-community
          </span>
          zijn Sjoerd en Michael iedere dag actief om jou te helpen groeien als
          trader.
        </p>
        <p className="text-sm">
          Je ontvangt dagelijks een marktupdate – inclusief het grotere
          macro-economische plaatje van Tineke of haar team – zodat je beter
          snapt wat er speelt en waarom dat ertoe doet.
        </p>
        <p className="text-sm">
          Daarnaast delen Sjoerd en Michael meerdere keren per week technische
          setups, educatieve inzichten én zijn er vaste Q&A-momenten waarin je
          al je vragen kunt stellen. Ook kun je al je vragen stellen aan Sjoerd
          en Michael. Dit is geen financieel advies, maar bedoeld om jou als
          investeerder slimmer, zelfstandiger en strategischer te maken. Wat je
          ermee doet? Jouw eigen verantwoordelijkheid. 😉
        </p>
        <p className="text-sm underline">
          Let op: deze groep is niet geschikt voor beginners, maar echt voor
          mensen die al wat verder zijn in hun crypto reis en hun kennis over de
          (termen van) traden.
        </p>
        <p className="font-bold">
          Alles draait hier om community, leren, oefenen en verdiepen.
        </p>
        <p className="text-sm italic">
          Dit is geen financieel advies, maar een leeromgeving waarin jij als
          investeerder groeit in kennis, vertrouwen en zelfstandigheid. 📊
        </p>
        <p className="text-sm">
          Je betaalt een maandelijks bedrag van XX euro en kunt op elk moment
          opzeggen.
        </p>
        <p className="text-sm">
          Ben je al lid van de Crypto Alerts? Dan geldt er een speciaal aanbod
          (meer info volgt).
        </p>
        <p className="text-sm">Bonus: … (wordt nog ingevuld)</p>
        <button className="bg-[#7F65CA] text-white px-8 py-3 rounded-xl hover:bg-[#5a4a9a] transition-colors duration-300 self-center md:self-start">
          Direct aanmelden
        </button>
      </div>
      <div className="flex-3/5 flex flex-col lg:flex-row gap-4 items-center justify-center">
        <div className="flex flex-col gap-4 lg:flex-1/2">
          <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-end">
            <div className="text-2xl xl:text-4xl">
              Leer traden als een pro — mét begeleiding van echte traders
            </div>

            <p className="text-sm">
              Geen eindeloze YouTube-rabbit holes waar je niets mee kunt. In
              <span className="font-bold mx-1">Crypto Tech & Teach</span> laten
              we je zien wat er speelt, leggen we uit hoe je dat technisch én
              strategisch interpreteert én leren we je hoe je zélf sterke
              analyses maakt.
            </p>
          </div>
          <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-start">
            <div className="text-2xl xl:text-4xl">
              Ontwikkel je eigen strategie — met begeleiding
            </div>

            <p className="text-sm">
              Het doel van Crypto Tech & Teach is niet dat je klakkeloos iets
              overneemt, maar dat je zélf nog meer leert denken als een trader.
              Je leert hoe je signalen herkent, hoe je marktbewegingen
              interpreteert en hoe je daar je eigen strategie op baseert. Kom je
              er even niet uit? Dan kun je altijd je vragen stellen aan Sjoerd,
              Michael of andere leden in de community.
            </p>
            <p>Samen groeien = sneller leren. 💡</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-1/2">
          <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px]">
            <div className="text-2xl xl:text-4xl">
              Dieper inzicht in de markt
            </div>

            <p className="text-md">
              Sjoerd en Michael delen regelmatig lessen over het herkennen van
              patronen, technische indicatoren en hoe je marktbewegingen leert
              lezen. Ook leggen ze uit welke invloed nieuws heeft op de charts.
              Want hoe beter jij begrijpt wat er gebeurt, hoe slimmer je kunt
              handelen. 😉
            </p>
          </div>
          <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px]">
            <div className="text-2xl xl:text-4xl">
              Kijk mee over de schouder van een pro
            </div>

            <p className="text-md">
              Sjoerd en Michael laten je regelmatig meekijken met interessante
              trades: waar zien zij kansen, welke indicatoren gebruiken ze, en
              hoe bepalen ze hun entry en exit? Ze nemen je mee in hun
              denkwijze, zodat jij leert hoe je zélf zulke afwegingen maakt. Wat
              je ermee doet, is helemaal aan jou.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
