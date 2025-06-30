import { Button } from "@/components/ui/button"
import { faArrowDown, faArrowUpRightFromSquare, faCalendar, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function HeroSection(){
  return <div className="p-[20px] md:p-[24px] bg-[#282828]">
    <div className="bg-[url(/hero_image_event.jpg)] bg-center bg-cover bg-no-repeat rounded-[32px] pt-[104px] px-[24px] pb-[32px] lg:py-[118px] lg:px-[124px]">
      <h1 className="font-extrabold text-[42px] leading-[34.18px] md:text-[100px] md:leading-[105px] text-gray-50 w-full lg:w-[80%] xl:w-[70%]">Euismod mauris diam mattis aenean.</h1>
      <div className="flex gap-2 lg:gap-6 mt-6">
        <Button className="bg-[#E6C7FF] text-[#282828] py-[6px] px-[11px] md:px-[32px] flex-1 md:flex-none gap-[18px] h-[32px] md:h-[52px]">Bestel je ticket <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </Button>
        <Button variant={'outline'} className="bg-[#282828] text-gray-50 py-[6px] px-[11px] md:px-[32px] flex-1 md:flex-none gap-[18px] h-[32px] md:h-[52px]">Meer informatie <FontAwesomeIcon icon={faArrowDown} /></Button>
      </div>

      <div className="w-full xl:w-[80%] 2xl:w-[50%]">
        <div className="flex gap-3 mt-20 flex-wrap">
          <div className="bg-gray-50 flex grow items-center rounded-[20px] p-[12px] lg:p-[16px] lg:pr-[32px] gap-4">
              <FontAwesomeIcon icon={faCalendar} width={24} className="text-[#7F65CA]"/>
              <div className="flex flex-col">
                <div className="text-[#282828] font-semibold">Datum</div>
                <div className="text-[#525252]">17 oktober 2025</div>
              </div>
          </div>
          <div className="bg-gray-50 flex grow items-center rounded-[20px] p-[12px] lg:p-[16px] lg:pr-[32px] gap-4">
            <FontAwesomeIcon icon={faClock} width={24} className="text-[#7F65CA]"/>
              <div className="flex flex-col">
                <div className="text-[#282828] font-semibold">Tijd</div>
                <div className="text-[#525252]">14:00 - 18:00</div>
              </div>
          </div>
          <div className="bg-gray-50 flex grow items-center rounded-[20px] p-[12px] lg:p-[16px] lg:pr-[32px] gap-4">
            <FontAwesomeIcon icon={faLocationDot} width={24} className="text-[#7F65CA]"/>
              <div className="flex flex-col">
                <div className="text-[#282828] font-semibold">Locatie</div>
                <div className="text-[#525252]">Green Village - Nieuwegein</div>
              </div>
          </div>

          <div className="bg-[#7F65CA] rounded-[20px] p-[12px] lg:py-[24px] lg:px-[16px] flex w-full text-gray-50">
            <div className="flex flex-col flex-1 justify-center items-center border-r">
              <div className="font-semibold text-3xl lg:text-[48px]">00</div>
              <div className="text-sm lg:text-base">Dagen</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center grow border-r">
              <div className="font-semibold text-3xl lg:text-[48px]">00</div>
              <div className="text-sm lg:text-base">Uren</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center grow border-r">
              <div className="font-semibold text-3xl lg:text-[48px]">00</div>
              <div className="text-sm lg:text-base">Minuten</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center">
              <div className="font-semibold text-3xl lg:text-[48px]">00</div>
              <div className="text-sm lg:text-base">Seconden</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
