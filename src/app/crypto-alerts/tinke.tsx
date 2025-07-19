import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Tinke() {
  return (
    <div className="bg-[url(/background.png)] bg-bottom bg-cover bg-no-repeat rounded-2xl lg:rounded-b-4xl -mx-5 lg:-mx-[100px] px-6 lg:px-[124px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="col-auto self-center text-center lg:text-left lg:pl-6">
          <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold opacity-80 leading-[90%]">
            Meld je<br /> direct aan!
          </h1>
          <p className="text-base lg:text-md mb-4 mt-10">
            Aftrekbaar voor ondernemers, per maand opzegbaar. Na aanmelding ontvang je <br/> meteen de onboarding en de Crypto Alerts WhatsApp Community link.
          </p>
          <Link
            href="https://wwwthelimitlesswaynl.plugandpay.com/checkout/event"
            target="_blank"
          >
            <Button className="bg-[#7F65CA] text-white py-[6px] px-3 lg:px-[32px] h-[30px] lg:h-[42px] mt-10 cursor-pointer hover:scale-105">
              ik do mee!
            </Button>
          </Link>
        </div>
        <div className="col-auto py-6 flex items-center justify-center lg:justify-end lg:pr-8">
          <Image
            src={"/tinke_crypto.jpg"}
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
