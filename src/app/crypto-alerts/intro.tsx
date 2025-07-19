"use client";

export default function IntroSection() {
    return (
    <div className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">

        {/* First Section - Crypto Market Introduction */}
        <div className="mb-20 px-20">
          {/* Main Heading */}
          <h5 className="text-2xl lg:text-6xl text-left text-[#282828] mb-12">
            De cryptomarkt zit momenteel in een spannende fase, en ik verwacht dat er de komende maanden nog veel gaat gebeuren.
          </h5>

          {/* Halving Explanation */}
          <p className="text-base lg:text-lg text-[#282828] mb-6 leading-relaxed">
            Wist je dat de waarde van Bitcoin en veel andere coins elke vier jaar een enorme stijging doormaakt? Dit komt door de zogenaamde 'halving'. Kort gezegd betekent dit dat er minder nieuwe bitcoins worden gemaakt, waardoor ze schaarser en waardevoller worden.
          </p>

          <p className="text-base lg:text-lg text-[#282828] mb-6 leading-relaxed">
            In totaal zijn er nu vier halvings geweest. Wat opvalt is dat de cryptomarkt binnen 12 tot 18 maanden na zo'n halving explosief groeit. Het goede nieuws? De vierde en meest recente halving vond plaats op 19 april. Als het patroon zich herhaalt, kunnen we tot ongeveer oktober 2025 een sterke stijging verwachten.
          </p>

          <p className="text-base lg:text-lg text-[#282828] mb-6 leading-relaxed">
            Maar oké, dan zit je in crypto, hoe dan verder? Instappen is namelijk één ding, maar begrijpen wat je doet is een tweede. Denk aan het volgen van nieuws, het begrijpen van marktbewegingen, het spotten van kansen en natuurlijk op tijd uit stappen. (Dat laatste gaat vaak mis).
          </p>

          <p className="text-base lg:text-lg text-[#282828] mb-12 leading-relaxed">
            Om je daarbij te helpen, heb ik Crypto Alerts 🔔 ontwikkeld. Hiermee ontvang je in een besloten WhatsApp-groep elke dag een "alert" bestaande uit updates, trade-suggesties, tradinglessen of belangrijk nieuws uit de cryptowereld. Zo kun je goed geïnformeerde beslissingen nemen en haal je het maximale uit jouw crypto-avontuur. 😉
          </p>
        </div>

        <div className="mb-20 px-20">
          <h5 className="text-2xl lg:text-6xl text-left text-[#282828] mb-12">
            Meld je direct aan
          </h5>
          <h6 className="text-xl lg:text-2xl text-[#282828] mb-4">
            Je betaalt een maandelijks bedrag van €77,- inclusief BTW. 
          </h6>

          <p className="text-base lg:text-lg text-[#282828] leading-relaxed">
            De reviews zijn afkomstig van deelnemers die meededen met de Crypto Cursus, de Trading cursus en/of de Crypto Alerts.
          </p>
        </div>
      </div>

      <div className="mb-20 px-20 mt-40">
        <h5 className="text-2xl lg:text-6xl text-center text-[#282828] mb-12">
          Wat anderen vinden..
        </h5>
        <h6 className="text-xl  lg:px-50 lg:text-2xl text-center text-[#282828] mb-4">
          De reviews zijn afkomstig van deelnemers die meededen met de Crypto Cursus, de Trading cursus en/of de Crypto Alerts.
        </h6>
      </div>
    </div>
  );
}
