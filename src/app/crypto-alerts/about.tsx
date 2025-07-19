"use client";

export default function AboutSection() {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">

        {/* Main Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#282828] text-center mb-8">
          Over The Limitless Way
        </h2>

        {/* Introductory Paragraphs */}
        <div className="space-y-6 mb-12">
          <p className="text-lg lg:text-xl text-[#282828] leading-relaxed">
            The Limitless Way is een digitale community en platform voor iedereen die grip wil krijgen op zijn financiële toekomst met crypto.
          </p>

          <p className="text-lg lg:text-xl text-[#282828] leading-relaxed">
            Opgericht door Tineke Zwart en Myrte Scheffer, bouwen we aan toegankelijke producten die kennis, strategie en overzicht combineren. Ons team bestaat inmiddels uit meer dan 15 experts uit binnen- en buitenland.
          </p>
        </div>

        {/* Subtitle */}
        <h3 className="text-2xl lg:text-3xl font-bold text-[#282828] mb-8">
          We bieden nu twee krachtige formats:
        </h3>

        {/* Formats List */}
        <div className="space-y-6 mb-12">
          <div className="flex items-start space-x-4">
            <span className="text-2xl">🔔</span>
            <div>
              <p className="text-lg lg:text-xl text-[#282828] leading-relaxed">
                <strong>Crypto Alerts</strong> - dagelijkse updates, signalen en inzichten om mee te bewegen met de markt.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-2xl">📊</span>
            <div>
              <p className="text-lg lg:text-xl text-[#282828] leading-relaxed">
                <strong>Crypto Tech & Teach</strong> - een leercommunity waarin je zelf leert analyseren en traden. Hierin werken 2 van onze beste traders iedere dag samen met de community!
              </p>
            </div>
          </div>
        </div>

        {/* Concluding Paragraph */}
        <p className="text-lg lg:text-xl text-[#282828] leading-relaxed">
          Daarnaast ontwikkelen we op dit moment een alles-in-één app waarin je je portfolio beheert, leert investeren en persoonlijke doelen stelt. Alles overzichtelijk op één plek — voor beginners én ervaren investeerders.
        </p>
      </div>
    </div>
  );
}
