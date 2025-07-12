import Image from "next/image";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function FooterCTA() {
  return (
    <div className="bg-[url(/background.png)] bg-bottom bg-cover bg-no-repeat rounded-2xl lg:rounded-b-4xl -mx-5 lg:-mx-[100px] px-6 lg:px-[124px]">
      <div className="grid grid-cols-2">
        <div className="col-auto self-center lg:pl-6">
          <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold opacity-80 leading-[90%]">
            Bestel nu <br /> je ticket!
          </h1>
          <Button className="bg-gray-50 text-[#282828] py-[6px] px-3 lg:px-[32px] h-[30px] lg:h-[42px] mt-10">
            Bestel je ticket
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Button>
        </div>
        <div className="col-auto py-6">
          <Image
            src={"/phone.png"}
            width={1106}
            height={822}
            alt=""
            className="h-full w-full translate-y-6 translate-x-6 lg:translate-x-0 max-h-[420px] object-contain scale-105 lg:scale-120 animate-slide-in-right"
          />
        </div>
      </div>
    </div>
  );
}
