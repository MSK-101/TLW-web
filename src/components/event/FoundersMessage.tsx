import Image from "next/image";

export default function FoundersMessage() {
  return (
    <div className="bg-[#F0F0F0] p-4 sm:p-8 rounded-[64px] flex flex-col lg:flex-row items-center xl:items-stretch mb-20">
      <Image
        src="/founders.png"
        alt="Founders"
        width={1000}
        height={1000}
        className="rounded-[64px] sm:rounded-[32px] lg:w-1/2 h-full xl:h-auto object-cover object-center"
      />
      <div className="lg:w-1/2 2xl:mt-4 opacity-80 my-6 lg:my-0 lg:pl-10 2xl:px-16">
        <h1 className="text-4xl">Message from the founders</h1>
        <div className="2xl:text-lg mt-3 space-y-2">
          <p>
            Wij zijn Myrte Scheffer en Tineke Zwart, de founders van The
            Limitless Way (TLW). Achter de schermen zijn we al een paar jaar
            bezig met deze app en nu is eindelijk het moment daar. We gaan bijna
            live.
          </p>

          <p>
            We zijn begonnen met ons concept vanuit persoonlijk gemis. We misten
            bepaalde dingen in de cryptowereld en toen hebben we gezegd: Dan
            moeten we het zelf maar regelen.
          </p>

          <p className="font-bold">Zo gezegd, zo gedaan.</p>

          <p>
            Beide hebben we onze eigen expertise en vanaf het begin af aan
            hebben we gemerkt dat we elkaar heel goed aanvullen.
          </p>

          <p>
            Myrte is fantastisch in het uitdenken van concepten (
            <span className="font-bold">de app was haar idee!</span>) en het
            neerzetten van alle 'grote lijnen'. Zij houdt zich dus vooral bezig
            met: Waar willen we uiteindelijk naartoe en wat is daar nú voor
            nodig? Dit doet ze inmiddels al 15 jaar voor andere bedrijven, maar
            nu voor TLW. Leuk weetje: alle bedrijven waar ze dit voor heeft
            gedaan, zijn inmiddels miljoenenbedrijven.
          </p>

          <p>
            Tineke focust op de inhoud, de sales & marketing en managet samen
            met een team van experts onze community. Ze is inmiddels
            <span className="font-bold">
              &nbsp;8 jaar actief in de cryptomarkt
            </span>
            &nbsp;en heeft inmiddels meerdere tonnenbedrijven en een
            miljoenenbedrijf gebouwd.
          </p>

          <p>
            Daarom dachten we: We hebben nog nooit een app gebouwd, dus we
            hebben geen idee hoe dat werkt maar volgens mij kunnen we dat wel
            als we het samen doen :) We kijken er enorm naar uit om op
            <span className="font-bold"> 17 oktober </span> onze kennis én de
            app met jullie te delen.
          </p>
        </div>
      </div>
    </div>
  );
}
