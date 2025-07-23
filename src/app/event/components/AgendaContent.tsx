import eventAgenda from "@/utils/eventAgenda";
import { Button } from "../ui/button";
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
          We kijken ernaar uit om julie veel waarde te geven deze middag!
        </h2>
        <div className="text-[#525252] space-y-5 mt-5">
          <p>
            We hebben een gevarieerd programma waarin kennis, inspiratie,
            netwerken en natuurlijk de app lancering samenkomen.
          </p>
          <p>
            Het event vindt plaats in de prachtige &quot;Green Village&quot; in
            Nieuwegein (Blokhoeve 7).
          </p>
          <p>Het programma is van 14-18 uur.</p>
          <p>We zien je graag dan!</p>
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
