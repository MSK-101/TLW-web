import { Button } from "@/components/ui/button";
import TopSection1 from "./components/top-section-1";
import TopSection2 from "./components/top-section-2";
import { UserCheckIconDark, WishlistIconDark } from "@/components/icons";
import Image from "next/image";
import { BitvavoLogo, FinstLogo } from "@/components/logos";
import SubscriptionCard from "./components/subscriptions-card";
import subscriptions from "@/utils/subscriptions";

export default function PreLaunch() {
  return (
    <>
      <div className="bg-[#282828] p-[24px]">
        <div className="bg-[url(/cs_hero_bg.png)] bg-center bg-cover bg-no-repeat rounded-[32px] bg-[#F0F0F0] py-[24px] overflow-hidden">
          <div className="flex flex-col">
            <TopSection1 />
            <TopSection2 />
          </div>
        </div>
      </div>

      <div className="bg-[#282828] p-[24px]">
        <div className="flex flex-col justify-center items-center text-gray-50 text-center">
          <h2 className="text-[32px] md:text-[96px] font-bold mt-20">
            Hoe werkt het?
          </h2>
          <p className="text-sm md:text-[23px] max-w-[584px]">
            Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt
            cursus arcu imperdiet elementum. Vitae nam sit eget nunc iaculis
            lorem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-6 md:gap-6 items-center justify-center my-20">
          {/* Row-1 Col-1  */}
          <div className="flex flex-col justify-center items-center gap-4 px-[40px] text-center">
            <div className="bg-[#E6C7FF] rounded-full py-[12px] px-[36px] text-[#282828]">
              Stap 1
            </div>
            <h2 className="text-[26px] md:text-[48px] text-gray-50 max-w-[568px] leading-[100%]">
              Nibh vulputate enim aliquet
            </h2>
            <p className="text-gray-50 max-w-[568px]">
              Tincidunt cursusarcu imperdiet elementum.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-10">
              <Button className="md:h-12 md:rounded-xl bg-gray-50 text-gray-900">
                Ik wil op de wachtlijst <WishlistIconDark />
              </Button>
              <Button className="md:h-12 md:rounded-xl bg-gray-50 text-gray-900">
                Ik wil in het Testpanel <UserCheckIconDark />
              </Button>
            </div>
          </div>
          {/* Row-1 Col-2  */}
          <div className="bg-[#E6C7FF] rounded-3xl flex justify-center">
            <Image
              src="/phones/phone-2.png"
              width={415}
              height={734}
              alt="Phone"
              className=""
            />
          </div>

          {/* Row-2 Col-1  */}
          <div className="flex flex-col justify-center items-center gap-4 px-[40px] text-center">
            <div className="bg-[#E6C7FF] rounded-full py-[12px] px-[36px] text-[#282828]">
              Stap 2
            </div>
            <h2 className="text-[26px] md:text-[48px] text-gray-50 max-w-[568px] leading-[100%]">
              Koppel je favoriete crypto platforms
            </h2>
            <p className="text-gray-50 max-w-[568px]">
              Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt
              cursus arcu imperdiet elementum. Nibh vulputate enim aliquet
              viverra aliquam venenatis felis.
            </p>
            <div className="flex gap-x-3 md:gap-x-8 justify-center mt-10">
              <BitvavoLogo />
              <Image
                src="/logos/Coinmerce-diap.png"
                width={109}
                height={23}
                alt="Logo Coinmerce-diap"
              />
              <FinstLogo />
            </div>
          </div>

          {/* Row-2 Col-2  */}
          <div className="bg-[#E6C7FF] rounded-3xl flex justify-center">
            <Image
              src="/phones/phone-2.png"
              width={415}
              height={734}
              alt="Phone"
              className=""
            />
          </div>

          {/* Row-3 Col-1  */}
          <div className="flex flex-col justify-center items-center gap-4 px-[40px] text-center">
            <div className="bg-[#E6C7FF] rounded-full py-[12px] px-[36px] text-[#282828]">
              Stap 3
            </div>
            <h2 className="text-[26px] md:text-[48px] text-gray-50 max-w-[568px] leading-[100%]">
              Create a new reality
            </h2>
            <p className="text-gray-50 max-w-[568px]">
              Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt
              cursus arcu imperdiet elementum. Nibh vulputate enim aliquet
              viverra aliquam venenatis felis.
            </p>
            <div className="flex mt-10 items-center gap-2">
              <Image
                src="/team/user-1.png"
                width={68}
                height={68}
                alt="User Image"
                className="rounded-full"
              />
              <div className="text-gray-50">
                <p className="font-bold">Tineke Zwart</p>
                <p className="ml-4">cryptomiljonair</p>
              </div>
            </div>
          </div>

          {/* Row-3 Col-2  */}
          <div className="bg-[#E6C7FF] rounded-3xl flex justify-center">
            <Image
              src="/phones/phone-2.png"
              width={415}
              height={734}
              alt="Phone"
              className=""
            />
          </div>
        </div>
      </div>

      <div className="bg-[#282828]">
        <div className="px-[24px] py-[100px] rounded-3xl bg-gray-50 flex flex-col gap-[100px]">
          <div className="rounded-3xl flex flex-col lg:flex-row justify-between overflow-hidden p-[36px] lg:p-[100px] bg-[url('/hero_image_event.jpg')] bg-cover bg-center h-[792px]">
            <div className="text-gray-50">
              <h2>Over ons</h2>
              <p className="text-[48px] font-extrabold max-w-[490px]">
                "Ligula mauris et scelerisque nullam pellente"
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 self-end sm:max-w-[380px]">
              In mauris felis nec placerat ultrices quis aliquam amet. Morbi
              interdum enim viverra ut urna mi auctor feugiat massa. Mauris
              facilisis pellentesque sit sagittis pretium blandit scelerisque
              ligula nullam. Cursus nulla quis et id condimentum. Orci nisi
              neque laoreet convallis malesuada venenatis mauris at. Mattis
              turpis amet mauris sit. Augue vitae ullamcorper nunc cursus urna
              vestibulum pharetra convallis.
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:px-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <h2>Abonnementen</h2>
                <p className="text-[26px] md:text-[48px]">
                  Kies het abonnement dat bij je past en haal alles uit de app
                </p>
              </div>
              <SubscriptionCard {...subscriptions[0]} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <SubscriptionCard {...subscriptions[1]} />
              <SubscriptionCard {...subscriptions[2]} />
              <SubscriptionCard {...subscriptions[3]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
