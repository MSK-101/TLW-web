import termsOfService from '../../utils/termsOfService.js';

export default function TermsOfService() {
  return (
    <div className="bg-white flex items-center justify-center px-4 lg:px-40 pb-16 lg:pb-24 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[#282828] font-bold text-4xl sm:text-5xl lg:text-6xl mb-8 lg:mb-12 text-center font-funnel-display">
          Algemene Voorwaarden
        </h1>

        {Object.entries(termsOfService).map(([heading, content], index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl mb-4 font-bold text-[#282828]">{heading}</h2>
            {Array.isArray(content) && content.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="mb-4 text-[#282828] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <p className="mb-4 text-[#282828] leading-relaxed">Versie: april 2025 - TLW is een handelsnaam voor The Limitless Way B. V.</p>

      </div>
    </div>
  );
}
