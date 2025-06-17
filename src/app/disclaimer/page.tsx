
export default function Disclaimer() {
  return (
    <div className="bg-white flex items-center justify-center px-4 lg:px-40 pb-16 lg:pb-24 pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          style={{ fontFamily: "var(--font-funnel-display)" }}
          className="text-[#282828] font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8 lg:mb-12"
        >
          Disclaimer
        </h1>

        <div
          style={{ fontFamily: "var(--font-funnel-sans)" }}
          className="text-[#282828] text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-relaxed space-y-6 lg:space-y-8"
        >
          <p>
            Deze website is bedoeld als tijdelijke landingspagina ter voorbereiding op de lancering van onze applicatie.
            De inhoud van deze pagina is met zorg samengesteld, maar er kunnen geen rechten worden ontleend aan de informatie
            die op deze site wordt weergegeven.
          </p>

          <p>
            Wij aanvaarden geen aansprakelijkheid voor directe of indirecte schade die voortvloeit uit het gebruik van deze
            website of de (tijdelijke) onbeschikbaarheid ervan.
          </p>
        </div>
      </div>
    </div>
  );
}
