"use client";

export default function NewsletterSignup() {
  return (
    <section
      id="newsletter"
      className="flex justify-center text-[#282828] rounded-2xl lg:rounded-[32px] mx-4 lg:mx-0 lg:py-20"
    >
      <div className="w-full flex flex-col lg:flex-row gap-10">
        <h6 className="text-xl lg:text-2xl text-left sm:text-center lg:text-left 2xl:text-3xl px-5 w-full lg:mt-8 lg:w-1/2">
          We lanceren de app op vrijdag 17 oktober 2025. Meld je hier aan voor
          de wachtlijst en ontvang meteen een mail zodra de app live is. Ook
          ontvang je tot de livegang regelmatig updates over de cryptomarkt en
          investeringstips van Tineke Zwart.
        </h6>
        <div className="w-full lg:w-1/2">
          <iframe
            src="https://thelimitlesswaybv.activehosted.com/f/1"
            className="w-full h-[398px] p-0 m-0"
            title="Nieuwsbrief inschrijving"
            frameBorder="0"
          />
        </div>
      </div>
    </section>
  );
}
