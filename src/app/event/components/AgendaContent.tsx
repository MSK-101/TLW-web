import eventAgenda from "@/utils/eventAgenda";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface AgendaItem {
  time: string;
  title: string;
  description: string;
}

export default function AgendaContent() {
  return (
    <div className="flex lg:flex-row flex-col gap-20 mb-20 lg:px-14">
      <div className="lg:max-w-[426px] text-center lg:text-left mb-5">
        <h2 className="text-sm">Agenda</h2>
        <h2 className="text-4xl mt-2">
          We kijken ernaar uit om je te zien op vrijdag 17 oktober.
        </h2>
        <div className="text-[#525252] space-y-5 mt-5">
          <p>
            We hebben een gevarieerd programma samengesteld waarin kennis,
            inspiratie, netwerken en de lancering van de app samenkomen.
          </p>
          <p>
            Het event vindt plaats in de prachtige &ldquo;Green Village&rdquo;
            in Nieuwegein (Blokhoeve 7).
          </p>
          <p>Het programma duurt van 14:00 tot 18:00 uur.</p>
          <p>Hopelijk tot dan!</p>
        </div>
        <Link
          href="https://wwwthelimitlesswaynl.plugandpay.com/checkout/event"
          target="_blank"
        >
          <Button className="bg-[#282828] text-gray-50 mt-5 py-[6px] px-[32px] h-[42px] cursor-pointer hover:scale-105">
            Bestel je ticket
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Button>
        </Link>
      </div>
      <div>
        {Array.isArray(eventAgenda) &&
          eventAgenda.map((agenda: AgendaItem, agendaIndex: number) => (
            <div key={agendaIndex} className="flex flex-col items-start mb-10">
              <div className="px-[24px] py-[8px] rounded bg-[#E6C7FF] mb-2">
                {agenda["time"]}
              </div>
              <div className="text-2xl">{agenda["title"]}</div>
              <div className="text-[#525252]">{agenda["description"]}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
