'use client'; // if you're using Next.js App Router and server components

import { Button } from "@/components/ui/button"
import { faArrowUpRightFromSquare, faChartLine, faChevronLeft, faChevronRight, faGraduationCap, faPiggyBank } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import eventAgenda from "@/utils/eventAgenda"
import { faCircleDot, faCircleUser } from "@fortawesome/free-regular-svg-icons"
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useState } from "react";
import Image from "next/image";

export default function AgendaSection(){
  const [team, setTeam] = useState([
    {'name': 'Tineke Zwart', 'imageUrl': '/team/member1.png', 'label': 'Functie Ipsum'},
    {'name': 'Myrthe Scheffer', 'imageUrl': '/team/member2.png', 'label': 'Functie Ipsum'},
    {'name': 'Tamara Stroop', 'imageUrl': '/team/member3.png', 'label': 'Functie Ipsum'},
    {'name': 'Tristan Melano', 'imageUrl': '/team/member4.png', 'label': 'Functie Ipsum'},
  ]);

  return <div className="bg-[#282828] px-[24px] py-[124px]">
    <div className="bg-gray-50 py-[124px] rounded-[32px] px-[24px] lg:px-[124px]">
      <div className="flex lg:flex-row flex-col gap-6 mb-[124px]">
        <div className="lg:max-w-[426px] text-center lg:text-left mb-5">
          <h2 className="text-sm">Agenda</h2>
          <h2 className="text-5xl">Metus dolor enim pellentesque</h2>
          <p className="my-10">Ut felis vitae ullamcorper ultricies blandit facilisis faucibus. Velit non at et tincidunt tempor suspendisse cursus. Augue ut purus lorem malesuada.</p>
          <Button className="bg-[#282828] text-gray-50 py-[6px] px-[32px] h-[42px]">Bestel je ticket <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </Button>
        </div>
        <div className="">
          {Array.isArray(eventAgenda) && eventAgenda.map((agenda: any, agendaIndex: number) => (
            <div key={agendaIndex} className="flex flex-col items-start mb-10">
              <div className="px-[24px] py-[8px] rounded bg-[#E6C7FF] mb-2">{agenda['time']}</div>
              <div className="text-2xl">{agenda['title']}</div>
              <div className="text-[#525252]">{agenda['description']}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mb-[124px]">
        <div className="text-4xl text-center max-w-[650px]">Bestel nu je Early Bird ticket tot en met 25 juli voor €57,50.</div>
        <Button className="bg-[#282828] text-gray-50 py-[6px] px-[32px] h-[42px] mt-10">Bestel je ticket <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </Button>
      </div>

      <div className="mb-[124px]">
          <div className="text-center mb-15">
            <h2>Ons team</h2>
            <p className="text-[48px]">We are in this together</p>
          </div>
        <div className="relative">
          <div id="swiperBtnNext" className="absolute top-[50%] -translate-y-[50%] -right-5 bg-[#282828] rounded-full aspect-square w-10 text-gray-50 flex justify-center items-center z-10"><FontAwesomeIcon icon={faChevronRight} /></div>
          <div id="swiperBtnPrev" className="absolute top-[50%] -translate-y-[50%] -left-5 bg-[#282828] rounded-full aspect-square w-10 text-gray-50 flex justify-center items-center z-10"><FontAwesomeIcon icon={faChevronLeft} /></div>
          <Swiper
            modules={[Navigation]}
            breakpoints={{
              640:{
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1536:{
                slidesPerView: 5,
              }
            }}
            centerInsufficientSlides={true}
            navigation={{
              nextEl: '#swiperBtnNext',
              prevEl: '#swiperBtnPrev',
            }}

            spaceBetween={15}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            {team.map(member => {
              return <SwiperSlide className="">
                <div className="rounded-2xl overflow-hidden relative aspect-[266/343] mx-auto">
                  <Image src={member['imageUrl']} width={266} height={343} alt="" className="w-full h-full object-cover"/>
                  <div className="absolute w-full bottom-0 h-1/2 flex px-[24px] pb-[16px] bg-linear-180 from-transparent to-[#7F65CA]">
                    <div className="flex mt-auto items-center flex-1 text-gray-50">
                      <div className="flex-1">
                        <div className="font-medium text-lg">{member['name']}</div>
                        <div className="text-sm">{member['label']}</div>
                      </div>
                      <FontAwesomeIcon icon={faCircleUser} size="2x"/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-6 mb-[124px]">
        <div className="lg:max-w-[426px] text-center lg:text-left mb-5">
          <h2 className="text-sm">Features</h2>
          <h2 className="text-5xl">Turpis at donec ut urna  malesuada </h2>
          <p className="my-10">Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt cursus arcu imperdiet elementum. Vulputate enim aliquet viverra aliquam venenatis felis. Vitae nam sit eget nunc iaculis lorem.</p>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-end">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faChartLine} className="h-6 w-6"/>
                <div className="text-2xl"> Traden</div>
              </div>
              <p className="text-sm mt-3">Mi velit tortor mi feugiat. Tincidunt vestibulum tortor habitasse tincidunt non. Purus varius sed massa risus ut pellentesque. </p>
            </div>
            <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-end">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCircleDot} className="h-6 w-6"/>
                <div className="text-2xl"> Jouw plan</div>
              </div>
              <p className="text-sm mt-3">Purus varius sed massa risus ut pellentes. Turpis at donec ut urna netus malesuada blandit pellentesque. </p>
            </div>
            <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-start">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faGraduationCap} className="h-6 w-6"/>
                <div className="text-2xl"> Educatie</div>
              </div>
              <p className="text-sm mt-3">In mauris felis nec placerat ultrices quis aliquam amet. Morbi interdum enim viverra ut urna mi auctor feugiat massa. Mauris facilisis pellentesque sit sagittis pretium blandit scelerisque. </p>
            </div>
            <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-start">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPiggyBank} className="h-6 w-6"/>
                <div className="text-2xl"> Spaardoelen</div>
              </div>
              <p className="text-sm mt-3">Augue vitae ullamcorper nunc consequat cursus urna vestibulum pharetra convallis. Felis tortor feugiat et in congue nunc magna enim facilisis. </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
}
