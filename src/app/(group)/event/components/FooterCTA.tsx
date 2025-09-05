import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <div className="bg-[url(/background.png)] bg-bottom bg-cover bg-no-repeat rounded-2xl lg:rounded-4xl mb-32 px-6 py-2 lg:py-6 xl:px-[124px]">
      <div className="grid grid-cols-2">
        <div className="col-auto self-center lg:pl-6">
          <h1 className="text-3xl md:text-6xl 2xl:text-8xl font-bold opacity-80 leading-[90%]">
            Bestel nu <br /> je ticket!
          </h1>
          <Link
            href="https://wwwthelimitlesswaynl.plugandpay.com/checkout/event"
            target="_blank"
          >
            <Button className="bg-gray-50 text-[#282828] py-[6px] px-3 lg:px-[32px] h-[30px] lg:h-[42px] mt-6 md:mt-8 2xl:mt-12 cursor-pointer hover:scale-105">
              Bestel je ticket
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Button>
          </Link>
        </div>
        <div className="col-auto py-6">
          <Image
            src={"/phone.png"}
            width={1106}
            height={822}
            alt=""
            className="h-full w-full translate-y-2 md:translate-y-12 translate-x-7 lg:translate-x-0 max-h-[460px] object-contain scale-120 animate-slide-in-right"
          />
        </div>
      </div>
    </div>
  );
}
