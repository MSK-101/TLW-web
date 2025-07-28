"use client";

export default function NewsletterSignup() {
  return (
    <section
      id="newsletter"
      className="flex justify-center text-[#282828] rounded-2xl lg:rounded-[32px] mx-4 lg:mx-0 mt-16 lg:mt-20 py-20 lg:pt-40"
    >
      <div className="w-full flex flex-col lg:flex-row">
        <h6 className="text-xl lg:text-2xl text-left sm:text-center lg:text-left 2xl:text-3xl px-5 w-full lg:w-1/2">
          Kun je niet naar het event komen, maar wil je de komende maanden wel
          op de hoogte worden gehouden over de ontwikkelingen met betrekking tot
          de app en daarbij regelmatig investeringstips krijgen? Meld je dan aan
          voor de wachtlijst van de app
        </h6>
        <div className="w-full lg:w-1/2">
          <iframe
            src="https://thelimitlesswaybv.activehosted.com/f/1"
            className="w-full h-[300px] p-0 m-0"
            title="Nieuwsbrief inschrijving"
            frameBorder="0"
          />
        </div>
      </div>
    </section>
  );
}
