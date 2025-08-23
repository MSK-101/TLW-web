import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function TicketCTA() {
  return (
    <div className="flex flex-col items-center mb-[124px]">
      <div className="text-4xl text-center max-w-[650px]">
        Bestel nu je ticket voor slechts €69 inclusief 21% BTW.
        <p className="text-xl mt-6">Graag tot 17 oktober!</p>
      </div>
      <Link
        href="https://wwwthelimitlesswaynl.plugandpay.com/checkout/event"
        target="_blank"
      >
        <Button className="bg-[#282828] text-gray-50 py-[6px] px-[32px] h-[42px] mt-10 cursor-pointer hover:scale-105">
          Bestel je ticket <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Button>
      </Link>
    </div>
  );
}
