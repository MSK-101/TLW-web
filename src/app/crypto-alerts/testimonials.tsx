"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Florien Oost",
      content: "**Tineke’s uitleg is helder en to-the-point. Wat ik vooral waardeer, is dat ze niet alleen haar keuzes onderbouwt, maar ook actuele nieuwsberichten en relevante ontwikkelingen deelt die je helpen om zelf betere beslissingen te nemen.** Binnen de Crypto Collective heerst een fijne, open sfeer. De communicatie in de verschillende groepen is vriendelijk, respectvol, en behulpzaam. Er zijn meerdere groepen binnen het programma, zoals een kletsgroep en een Q&A-groep, waardoor er voor iedereen iets passends is. **Ik heb in korte tijd ontzettend veel geleerd over traden en investeren in crypto, en ik ben meer dan tevreden met de winst die ik tot nu toe heb behaald**. Tineke’s enthousiasme en enorme kennis van crypto zijn aanstekelijk, en je merkt dat ze er plezier in heeft om haar kennis te delen en anderen te helpen groeien. **Als je serieus bent over crypto en op zoek bent naar een betrouwbare en inspirerende gids, dan is dit dé plek om te zijn.**",
      date: ""
    },
    {
      name: "Naam Achternaam",
      content: "Zo blij dat ik ben ingestapt! Dankjewel, Tineke. Het gaat voor mij verder dan de winsten pakken. Ik leer veel en alleen al het feit om hiermee bezig te zijn voelt supergoed. Ik had eerder al crypto’s gekocht maar wist eerlijk gezegd niet wat ik er verder mee moest. Nu kan ik bouwen op de info en support van Tineke. Ik kan me voorstellen dat crypto’s best een beetje verslavend kunnen werken (dat gevoel als er weer een coin de limietorder heeft bereikt is eerlijk best lekker), maar omdat Tineke er zo strategisch in zit, laat je je niet leiden door gevoel en dopmineshotjes 😉 Tineke is duidelijk, betrouwbaar en ik heb respect hoe ze deze groep zo strak weet te leiden. Dikke aanrader! ",
      date: "21 maand 2025"
    },
    {
      name: "Naam Achternaam",
      content: "Ik ben ontzettend blij dat ik de stap heb gezet in de wereld van crypto, en ik had het niet anders gewild dan leren van Tineke. Tineke legt alles altijd helder en begrijpelijk uit, neemt de tijd om al mijn vragen te beantwoorden, en denkt actief mee over hoe we in de crypto collective het maximale uit ons geld kunnen halen. Ik ben dankbaar dat ik van haar mag leren!",
      date: "21 maand 2025"
    },
    {
      name: "Naam Achternaam",
      content: "Tineke neemt je elke dag mee in wat zij doet en legt duidelijk uit waarom ze wat doet. In makkelijk taal zodat iedereen dit begrijpt. Ik heb echt mega winsten behaald waar ik alleen maar van kon dromen. De whatsapp groep is heel fijn om met andere te sparren en te leren hoe Crypto ook voor jou kan werken zonder dat je een expert bent, want dat is Tineke. Ik raad dit iedereen aan die geld wilt verdienen met Crypto. ",
      date: "21 maand 2025"
    }
  ];

    return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#282828] mb-6">
            Wat anderen vinden..
          </h2>
          <p className="text-lg lg:text-xl text-[#282828] max-w-4xl mx-auto">
            De reviews zijn afkomstig van deelnemers die meededen met de Crypto Cursus, de Trading cursus en/of de Crypto Alerts.
          </p>
        </div>

        {/* Testimonials Flex Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left Column */}
          <div className="flex-1 space-y-8">
            {/* Top Left */}
            <div className="bg-[#E6C7FF] rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl text-[#282828] mb-4">
                {testimonials[0].name}
              </h3>
              <div className="text-[#282828] leading-relaxed mb-4">
                {testimonials[0].content.split('**').map((part, index) =>
                  index % 2 === 0 ? part : <strong key={index}>{part}</strong>
                )}
              </div>
              {testimonials[0].date && (
                <p className="text-sm text-gray-600">{testimonials[0].date}</p>
              )}
            </div>

            {/* Bottom Left */}
            <div className="bg-[#E6C7FF] rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl text-[#282828] mb-4">
                {testimonials[2].name}
              </h3>
              <div className="text-[#282828] leading-relaxed mb-4">
                {testimonials[2].content.split('**').map((part, index) =>
                  index % 2 === 0 ? part : <strong key={index}>{part}</strong>
                )}
              </div>
              {testimonials[2].date && (
                <p className="text-sm text-gray-600">{testimonials[2].date}</p>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-8">
            {/* Top Right */}
            <div className="bg-[#E6C7FF] rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl text-[#282828] mb-4">
                {testimonials[1].name}
              </h3>
              <div className="text-[#282828] leading-relaxed mb-4">
                {testimonials[1].content.split('**').map((part, index) =>
                  index % 2 === 0 ? part : <strong key={index}>{part}</strong>
                )}
              </div>
              {testimonials[1].date && (
                <p className="text-sm text-gray-600">{testimonials[1].date}</p>
              )}
            </div>

            {/* Bottom Right */}
            <div className="bg-[#E6C7FF] rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl text-[#282828] mb-4">
                {testimonials[3].name}
              </h3>
              <div className="text-[#282828] leading-relaxed mb-4">
                {testimonials[3].content.split('**').map((part, index) =>
                  index % 2 === 0 ? part : <strong key={index}>{part}</strong>
                )}
              </div>
              {testimonials[3].date && (
                <p className="text-sm text-gray-600">{testimonials[3].date}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
