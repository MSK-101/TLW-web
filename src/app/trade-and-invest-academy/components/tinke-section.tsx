import Image from "next/image";
import Link from "next/link";

export default function TinkeSection() {
  return (
    <div className="bg-[url(/background.png)] bg-bottom bg-cover bg-no-repeat rounded-2xl lg:rounded-b-4xl p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-auto self-center lg:pl-6 flex flex-col items-center md:items-start">
          <h1 className="text-5xl xl:text-7xl font-bold opacity-80 leading-[90%]">
            Meld je
            <br /> direct aan!
          </h1>
          <p className="text-base lg:text-md mb-4 mt-10 max-w-[400px]">
            Aftrekbaar voor ondernemers, per maand opzegbaar. Na aanmelding
            ontvang je meteen de onboarding en de Crypto Alerts WhatsApp
            Community link.
          </p>
          <Link
            href="https://wwwthelimitlesswaynl.plugandpay.com/checkout/event"
            target="_blank"
          >
            <button className="bg-[#7F65CA] text-white px-8 py-3 rounded-xl hover:bg-[#5a4a9a] transition-colors duration-300">
              ik do mee!
            </button>
          </Link>
        </div>
        <div className="col-auto py-6 flex items-center justify-center lg:justify-end lg:pr-8">
          <Image
            src={"/team/tinke_crypto.jpg"}
            width={300}
            height={400}
            alt="Tineke Zwart"
            className="h-auto w-auto max-h-[400px] max-w-[300px] object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
