"use client";

export default function BenefitsSection() {
  return (
    <div className="flex lg:flex-row flex-col gap-16 xl:gap-24 mb-[124px] lg:px-14">
      <div className="xl:max-w-[600px] text-center lg:text-left mb-5">
        <h2 className="text-5xl">Wat krijg je?</h2>
        <p className="my-10 text-lg text-gray-600">
          In de besloten Crypto Alerts Whatsapp Community ontvang je dagelijks een alert waarin ik (van ma t/m do) en Níek (van vrij t/m zo) tips, kennis en trades deelt.
          <br />
          <br /> Daarnaast zit er in de Crypto Alerts Whatsapp Community een aparte Q&A Whatsapp-groep waar je ma t/m do al je vragen kan stellen. Níek en ik zullen een groot deel van de meest relevante vragen beantwoorden.
          <br />
          <br />
          Je betaalt een maandelijks bedrag van €77,- inclusief BTW. Maandelijks opzegbaar.
          <br />
          <br />
          Bonus: 1 á 2 keer per maand zijn er masterclasses met experts die hun ervaring en ideeën vertellen over geld, investeren, goud, beleggen of ander relevante onderwerpen.
        </p>
        <button className="bg-[#7F65CA] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#5a4a9a] transition-colors duration-300">
          Direct aanmelden
        </button>
      </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-end">
            <div className="flex items-center gap-3">
              <div className="text-4xl"> Crypto updates in Jip & Janneke taal </div>
            </div>
            <p className="text-sm mt-3">
              Je hoeft niet zelf alles uit te pluizen of je door ingewikkelde analyses heen te worstelen. We vertellen je gewoon wat er speelt in de cryptowereld, hoe je dat kunt interpreteren en wat je ermee zou kunnen doen. Behapbaar en begrijpelijk.
            </p>
          </div>
          <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px]">
            <div className="flex items-center gap-3">
              <div className="text-4xl"> Extra inhoudelijke kennis </div>
            </div>
            <p className="text-md mt-3">
              Regelmatig delen we lessen over bijvoorbeeld het herkennen van bepaalde patronen of duiken we dieper in op belangrijk nieuws. Want hoe meer kennis je hebt, hoe beter je kunt inspelen op wat er gebeurt. 😉
            </p>
          </div>
          <div className="space-y-5">
            <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-start">
              <div className="flex items-center gap-3">
                <div className="text-4xl"> Interessante marktbewegingen</div>
              </div>
              <p className="text-sm mt-3">
                We nemen je mee in wat er speelt in de markt en deel interessante bewegingen die we zien. Zo leer je steeds beter zelf kansen spotten 🚀
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px]">
            <div className="flex items-center gap-3 shrink-0 grow-0">
              <div className="text-4xl">Meekijken met interessante trades</div>
            </div>
            <p className="text-md mt-3">
              Geregeld delen ik of mijn teamleden (Jeroen en Michael) trade-suggesties waarvan we denken dat ze op korte termijn potentie hebben. We onderbouwen waarom een bepaalde coin interessant is en wat de gedachtegang erachter is. Het blijft natuurlijk aan jou wat je daarmee doet.            </p>
          </div>
        </div>
    </div>
  );
}
