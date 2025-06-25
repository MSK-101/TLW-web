import { Button } from "@/components/ui/button"
import { faArrowDown, faArrowUpRightFromSquare, faCalendar, faClock, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Event(){
  return <div className="p-[24px] bg-[#282828]">
    <div className="bg-[url(/hero_image_event.jpg)] bg-center bg-cover bg-no-repeat rounded-[32px] pt-[104px] px-[24px] pb-[32px] lg:px-[124px] lg:py-[118px]">
      <h1 className="font-extrabold text-[100px] leading-[105px] text-gray-50">Euismod mauris diam mattis aenean.</h1>
      <div className="flex gap-6 mt-6">
        <Button className="bg-[#E6C7FF] flex-none text-[#282828]">Bestel je ticket <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </Button>
        <Button variant={'outline'} className="flex-none">Meer informatie <FontAwesomeIcon icon={faArrowDown} /></Button>
      </div>

      <div className="w-full xl:w-[50%]">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-20">
          <div className="bg-gray-50 flex items-center rounded-[20px] p-[16px] pr-[32px] gap-4">
              <FontAwesomeIcon icon={faCalendar} width={24} className="text-[#7F65CA]"/>
              <div className="flex flex-col">
                <div className="text-[#282828] font-semibold">Datum</div>
                <div className="text-[#525252]">17 oktober 2025</div>
              </div>
          </div>
          <div className="bg-gray-50 flex items-center rounded-[20px] p-[16px] pr-[32px] gap-4">
            <FontAwesomeIcon icon={faClock} width={24} className="text-[#7F65CA]"/>
              <div className="flex flex-col">
                <div className="text-[#282828] font-semibold">Tijd</div>
                <div className="text-[#525252]">14:00 - 18:00</div>
              </div>
          </div>
          <div className="bg-gray-50 flex items-center rounded-[20px] p-[16px] pr-[32px] gap-4 col-span-2 lg:col-span-1">
            <FontAwesomeIcon icon={faLocationDot} width={24} className="text-[#7F65CA]"/>
              <div className="flex flex-col">
                <div className="text-[#282828] font-semibold">Locatie</div>
                <div className="text-[#525252]">Green Village - Nieuwegein</div>
              </div>
          </div>
          <div className="bg-[#7F65CA] rounded-[20px] py-[24px] px-[16px] inline-flex text-gray-50 w-full col-span-2 lg:col-span-3">
            <div className="flex flex-col border-r flex-1 justify-center items-center">
              <div className="font-semibold text-[48px]">00</div>
              <div>Dagen</div>
            </div>
            <div className="flex flex-col border-r flex-1 justify-center items-center">
              <div className="font-semibold text-[48px]">00</div>
              <div>Uren</div>
            </div>
            <div className="flex flex-col border-r flex-1 justify-center items-center">
              <div className="font-semibold text-[48px]">00</div>
              <div>Minuten</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center">
              <div className="font-semibold text-[48px]">00</div>
              <div>Seconden</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
