'use client'; // if you're using Next.js App Router and server components

import { Button } from "@/components/ui/button"
import { faArrowUpRightFromSquare, faChartLine, faChevronLeft, faChevronRight, faGraduationCap, faPaperPlane, faPiggyBank } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import eventAgenda from "@/utils/eventAgenda"
import { faCircleDot } from "@fortawesome/free-regular-svg-icons"
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from "react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function AgendaSection(){
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const [team, setTeam] = useState([
    {'name': 'Tineke Zwart', 'imageUrl': '/team/member1.png', 'label': 'Functie Ipsum'},
    {'name': 'Myrthe Scheffer', 'imageUrl': '/team/member2.png', 'label': 'Functie Ipsum'},
    {'name': 'Tamara Stroop', 'imageUrl': '/team/member3.png', 'label': 'Functie Ipsum'},
    {'name': 'Tristan Melano', 'imageUrl': '/team/member4.png', 'label': 'Functie Ipsum'},
    {'name': 'Naam Lorum', 'imageUrl': '/team/member5.png', 'label': 'Functie Ipsum'},
    {'name': 'Tristan Melano', 'imageUrl': '/team/member4.png', 'label': 'Functie Ipsum'},
    {'name': 'Tristan Melano', 'imageUrl': '/team/member4.png', 'label': 'Functie Ipsum'},
    {'name': 'Tristan Melano', 'imageUrl': '/team/member4.png', 'label': 'Functie Ipsum'},
  ]);

  const handleIconClick = () => {
    if (isChecked) {
      // Handle email submission logic here
      console.log("Email submitted");
    }
  };

  return <div className="bg-[#282828] px-[24px] py-[124px]">
    <div className="bg-gray-50 py-[124px] rounded-[32px] px-[24px] lg:px-[124px]">
      <div className="flex lg:flex-row flex-col gap-16 mb-[124px]">
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
          <div id="swiperBtnNext" className="absolute top-[50%] -translate-y-[50%] -right-5 bg-[#282828] rounded-full aspect-square w-10 text-gray-50 flex justify-center items-center z-10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div id="swiperBtnPrev" className="absolute top-[50%] -translate-y-[50%] -left-5 bg-[#282828] rounded-full aspect-square w-10 text-gray-50 flex justify-center items-center z-10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
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
                      <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_385_2440)">
                        <path d="M28.1892 3H2.46819C1.28962 3 0.332031 3.97098 0.332031 5.16295V30.8371C0.332031 32.029 1.28962 33 2.46819 33H28.1892C29.3677 33 30.332 32.029 30.332 30.8371V5.16295C30.332 3.97098 29.3677 3 28.1892 3ZM9.39899 28.7143H4.95257V14.3973H9.40569V28.7143H9.39899ZM7.17578 12.442C5.74944 12.442 4.59766 11.2835 4.59766 9.86384C4.59766 8.4442 5.74944 7.28571 7.17578 7.28571C8.59542 7.28571 9.75391 8.4442 9.75391 9.86384C9.75391 11.2902 8.60212 12.442 7.17578 12.442ZM26.0664 28.7143H21.62V21.75C21.62 20.0893 21.5865 17.9531 19.3097 17.9531C16.9927 17.9531 16.6378 19.7612 16.6378 21.6295V28.7143H12.1914V14.3973H16.457V16.3527H16.5173C17.1133 15.2277 18.5664 14.0424 20.7294 14.0424C25.2294 14.0424 26.0664 17.0089 26.0664 20.8661V28.7143Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_385_2440">
                        <rect width="30" height="34.2857" fill="white" transform="translate(0.332031 0.856934)"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-16 mb-[124px]">
        <div className="lg:max-w-[426px] text-center lg:text-left mb-5">
          <h2 className="text-sm">Features</h2>
          <h2 className="text-5xl">Turpis at donec ut urna  malesuada </h2>
          <p className="my-10">Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt cursus arcu imperdiet elementum. Vulputate enim aliquet viverra aliquam venenatis felis. Vitae nam sit eget nunc iaculis lorem.</p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-end">
              <div className="flex items-center gap-3">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.1667 15L25.7083 28.4583L18.625 21.375L8 32" stroke="#282828" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30.668 15H39.168V23.5" stroke="#282828" strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <div className="text-3xl"> Traden</div>
              </div>
              <p className="text-sm mt-3">Mi velit tortor mi feugiat. Tincidunt vestibulum tortor habitasse tincidunt non. Purus varius sed massa risus ut pellentesque. </p>
            </div>
            <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-end">
              <div className="flex items-center gap-3">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.0035 43C21.3755 43 18.9053 42.5013 16.593 41.504C14.2807 40.5067 12.2693 39.1532 10.559 37.4435C8.84867 35.7338 7.4945 33.7233 6.4965 31.412C5.49883 29.1007 5 26.6312 5 24.0035C5 21.3755 5.49867 18.9053 6.496 16.593C7.49333 14.2807 8.84683 12.2693 10.5565 10.559C12.2662 8.84867 14.2767 7.4945 16.588 6.4965C18.8993 5.49883 21.3688 5 23.9965 5C26.6245 5 29.0947 5.49867 31.407 6.496C33.7193 7.49333 35.7307 8.84683 37.441 10.5565C39.1513 12.2662 40.5055 14.2767 41.5035 16.588C42.5012 18.8993 43 21.3688 43 23.9965C43 26.6245 42.5013 29.0947 41.504 31.407C40.5067 33.7193 39.1532 35.7307 37.4435 37.441C35.7338 39.1513 33.7233 40.5055 31.412 41.5035C29.1007 42.5012 26.6312 43 24.0035 43ZM24 40C28.4667 40 32.25 38.45 35.35 35.35C38.45 32.25 40 28.4667 40 24C40 19.5333 38.45 15.75 35.35 12.65C32.25 9.55 28.4667 8 24 8C19.5333 8 15.75 9.55 12.65 12.65C9.55 15.75 8 19.5333 8 24C8 28.4667 9.55 32.25 12.65 35.35C15.75 38.45 19.5333 40 24 40ZM24.0045 35C20.9502 35 18.3525 33.931 16.2115 31.793C14.0705 29.655 13 27.0588 13 24.0045C13 20.9502 14.069 18.3525 16.207 16.2115C18.345 14.0705 20.9412 13 23.9955 13C27.0498 13 29.6475 14.069 31.7885 16.207C33.9295 18.345 35 20.9412 35 23.9955C35 27.0498 33.931 29.6475 31.793 31.7885C29.655 33.9295 27.0588 35 24.0045 35ZM24 32C26.2 32 28.0833 31.2167 29.65 29.65C31.2167 28.0833 32 26.2 32 24C32 21.8 31.2167 19.9167 29.65 18.35C28.0833 16.7833 26.2 16 24 16C21.8 16 19.9167 16.7833 18.35 18.35C16.7833 19.9167 16 21.8 16 24C16 26.2 16.7833 28.0833 18.35 29.65C19.9167 31.2167 21.8 32 24 32ZM24 27C23.182 27 22.4775 26.7045 21.8865 26.1135C21.2955 25.5225 21 24.818 21 24C21 23.182 21.2955 22.4775 21.8865 21.8865C22.4775 21.2955 23.182 21 24 21C24.818 21 25.5225 21.2955 26.1135 21.8865C26.7045 22.4775 27 23.182 27 24C27 24.818 26.7045 25.5225 26.1135 26.1135C25.5225 26.7045 24.818 27 24 27Z" fill="#282828"/>
                </svg>
                <div className="text-3xl"> Jouw plan</div>
              </div>
              <p className="text-sm mt-3">Purus varius sed massa risus ut pellentes. Turpis at donec ut urna netus malesuada blandit pellentesque. </p>
            </div>
            <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-start">
              <div className="flex items-center gap-3">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.1992 39.4002L11.5992 33.2002C11.1992 33.0002 10.7992 32.4002 10.7992 31.8002V21.8002L6.19922 19.4002C5.19922 18.8002 5.19922 17.4002 6.19922 16.8002L23.1992 7.6002C23.5992 7.4002 24.1992 7.4002 24.5992 7.6002L42.9992 17.6002C43.3992 17.8002 43.7992 18.4002 43.7992 19.0002V31.0002C43.7992 31.8002 43.1992 32.4002 42.3992 32.4002C41.5992 32.4002 40.9992 31.8002 40.9992 31.0002V19.8002L36.9992 22.0002V32.0002C36.9992 32.6002 36.5992 33.0002 36.1992 33.4002L24.5992 39.6002C24.1992 39.8002 23.5992 39.8002 23.1992 39.6002V39.4002ZM23.9992 25.4002L37.5992 18.0002L23.9992 10.6002L10.3992 18.0002L23.9992 25.4002ZM23.9992 36.2002L33.9992 30.8002V23.4002L24.9992 28.4002C24.3992 28.8002 23.5992 28.8002 22.9992 28.4002L13.9992 23.4002V30.8002L23.9992 36.2002Z" fill="#282828"/>
                </svg>
                <div className="text-3xl"> Educatie</div>
              </div>
              <p className="text-sm mt-3">In mauris felis nec placerat ultrices quis aliquam amet. Morbi interdum enim viverra ut urna mi auctor feugiat massa. Mauris facilisis pellentesque sit sagittis pretium blandit scelerisque. </p>
            </div>
            <div className="rounded-3xl bg-[#F0F0F0] text-[#282828] p-[32px] self-start">
              <div className="flex items-center gap-3">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.0008 21.8C32.4008 21.8 33.0008 21.8 33.2008 21.2C33.6008 20.8 33.8008 20.4 33.8008 20C33.8008 19.6 33.8008 19 33.2008 18.8C32.8008 18.4 32.4008 18.2 32.0008 18.2C31.6008 18.2 31.0008 18.2 30.8008 18.8C30.4008 19.2 30.2008 19.6 30.2008 20C30.2008 20.4 30.2008 21 30.8008 21.2C31.2008 21.6 31.6008 21.8 32.0008 21.8ZM17.4008 17.4H24.4008C25.2008 17.4 25.8008 16.8 25.8008 16C25.8008 15.2 25.2008 14.4 24.4008 14.4H17.4008C16.6008 14.4 16.0008 15 16.0008 15.8C16.0008 16.6 16.6008 17.4 17.4008 17.4ZM11.2008 41C10.4008 41 9.60078 40.4 9.20078 39.6C8.20078 36.4 7.40078 33.2 6.40078 30.2C5.40078 26.6 4.80078 22.8 4.80078 19C4.80078 15.2 5.80078 13.8 7.80078 12C9.80078 10 12.2008 9 14.8008 9H25.4008C26.4008 7.8 27.4008 6.8 28.6008 6C29.8008 5.2 31.2008 5 32.8008 5C34.4008 5 33.8008 5 34.2008 5.6C34.6008 6.2 34.8008 6.4 34.8008 7C34.8008 7.6 34.8008 7.2 34.8008 7.4C34.8008 7.4 34.8008 7.6 34.8008 7.8C34.8008 8.2 34.4008 8.8 34.4008 9.2C34.4008 9.8 34.2008 10.2 34.0008 10.8L39.2008 16H41.0008C42.2008 16 43.0008 16.8 43.0008 18V26.8C43.0008 27.6 42.4008 28.4 41.6008 28.8L37.6008 30.2L34.8008 39.8C34.6008 40.6 33.8008 41.2 32.8008 41.2H27.0008C25.8008 41.2 25.0008 40.4 25.0008 39.2V37.2H19.0008V39.2C19.0008 40.4 18.2008 41.2 17.0008 41.2H11.2008V41ZM12.0008 38H16.0008V36C16.0008 34.8 16.8008 34 18.0008 34H26.0008C27.2008 34 28.0008 34.8 28.0008 36V38H32.0008L34.8008 28.6C34.8008 28 35.4008 27.4 36.0008 27.2L40.0008 25.8V18.8H38.0008L31.0008 11.8C31.0008 11.2 31.0008 10.4 31.0008 9.8C31.0008 9.2 31.2008 8.6 31.4008 8C30.4008 8.2 29.6008 8.8 28.8008 9.4C28.0008 10 27.6008 10.8 27.2008 11.8H14.8008C13.2008 11.8 11.6008 12.4 10.4008 13.4C9.20078 14.4 7.80078 16.6 7.80078 18.8C7.80078 22 8.20078 25.2 9.20078 28.4C10.2008 31.6 11.0008 34.6 11.8008 37.8L12.0008 38Z" fill="#282828"/>
                </svg>

                <div className="text-3xl"> Spaardoelen</div>
              </div>
              <p className="text-sm mt-3">Augue vitae ullamcorper nunc consequat cursus urna vestibulum pharetra convallis. Felis tortor feugiat et in congue nunc magna enim facilisis. </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[124px]">
        <div className="text-center mb-15">
          <h2>FAQ</h2>
          <p className="text-[48px]">Veelgestelde vragen</p>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Lorem ipsum dolor sit amet consectetur. Rhoncus eget massa porttitor ullamcorper tincidunt quis dictum adipiscing?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores dolorem nemo eaque! Sed, explicabo. Sed recusandae repellendus, explicabo quibusdam quisquam commodi, sequi necessitatibus ducimus dolores deserunt, reprehenderit sunt ab velit?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Mi velit tortor mi feugiat. Tincidunt vestibulum tortor habitasse tincidunt non?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa asperiores recusandae nemo deleniti sunt error hic sapiente quos placeat ducimus libero atque ratione voluptas consequatur, architecto, explicabo non unde!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Morbi interdum enim viverra ut urna mi auctor feugiat massa?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas accusantium nam perspiciatis incidunt architecto sit at modi, cum quisquam animi voluptate illo maiores dolorem. Hic veniam deleniti molestias architecto?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Ut consequat quam aliquam feugiat sed sapien fermentum. In ut ullamcorper vestibulum sit?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas accusantium nam perspiciatis incidunt architecto sit at modi, cum quisquam animi voluptate illo maiores dolorem. Hic veniam deleniti molestias architecto?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-[url(/background.png)] bg-bottom bg-cover bg-no-repeat rounded-[32px] lg:-mx-[100px] px-[40px] lg:px-[124px]">
          <div className="grid grid-cols-2">
            <div className="col-auto self-center">
              <h1 className="text-3xl lg:text-6xl font-extrabold leading-[90%]">Bestel nu <br /> je ticket!</h1>
              <Button className="bg-gray-50 text-[#282828] py-[6px] px-[32px] h-[30px] lg:h-[42px] mt-8">Bestel je ticket <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </Button>
            </div>
            <div className="col-auto py-6">
              <Image src={'/phone.png'} width={1106} height={822} alt="" className="h-full w-full translate-y-6 max-h-[420px] object-contain scale-120"/>
            </div>
          </div>

      </div>

      <section className="flex justify-center text-[#282828] rounded-2xl lg:rounded-[32px] mx-4 lg:mx-0 mt-16 lg:mt-20 py-20 lg:py-40">
        <div className="w-full px-6 lg:px-0 lg:w-2/4 text-center">
          <h1 className="text-4xl lg:text-7xl mb-6 lg:mb-8 px-5 text-center">
            Felis tortor feugiat et in congue.
          </h1>
          <div className="flex items-center relative mb-4">
            <input
              type="email"
              placeholder="janjansen@mail.com"
              className="w-full bg-[#F0F0F0] rounded-full py-3 lg:py-4 pl-6 pr-14 focus:outline-[#7F65CA]"
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              width={20}
              className={`cursor-pointer absolute right-4 ${
                isChecked
                  ? "text-[#7F65CA] hover:text-[#5a4a9a]"
                  : "text-gray-400 cursor-not-allowed"
              }`}
              onClick={handleIconClick}
            />
          </div>
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              className="mr-2"
              id="tnc_checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="text-gray-600 text-sm lg:text-base" htmlFor="tnc_checkbox">
              Ik ga akkoord met de algemene voorwaarden
            </label>
          </div>
        </div>
      </section>
    </div>
  </div>
}
