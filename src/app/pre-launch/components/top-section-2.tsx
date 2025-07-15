import { DownArrowIcon } from "@/components/icons";
import Image from "next/image";

export default function TopSection2() {
  const MovingLogo = () => {
    // width = (800 x 4 + 40 x 4) / 2
    // md:width = (900 x 4 + 80 x 4) / 2
    // lg:width = (1730 x 4 + 100 x 4) / 2
    return (
      <div className="overflow-hidden w-screen">
        <div className="flex gap-[40px] md:gap-[80px] lg:gap-[100px] w-[1680px] md:w-[1960px] lg:w-[3660px] animate-rtl md:animate-rtl-md">
          {[...Array(4)].map((_, index) => (
            <Image
              src="/moving-logo.svg"
              width={1730}
              height={187}
              alt="Moving Logo"
              className="my-auto w-[800px] md:w-[900px] lg:w-[1730px]"
              key={index}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-[80px] basis-full">
      <div className="h-[346px] sm:h-[450px] md:h-[500px] lg:h-[721px] xl:mt-4 relative flex justify-center">
        {/* Layer - Moving Logo */}
        <div className="abdolute h-[346px] sm:h-[450px]  md:h-[500px] lg:h-[658px] flex items-center w-full">
          <MovingLogo />
        </div>

        {/* Layer - Image */}
        <Image
          src="/phones/phone-1.png"
          width={1428}
          height={719}
          alt="Hero Image"
          className="absolute h-[346px] sm:h-[450px] md:h-[500px] lg:h-[721px] object-cover object-top ml-10 md:ml-20"
        />

        {/* Layer - Hovering Objects */}
        <Image
          src="/hovering_objects_md.svg"
          width={1428}
          height={719}
          alt="Hovering Objects"
          className="absolute md:h-[650px] lg:h-[900px] object-cover object-center hidden md:block"
        />

        {/* Layer - Hovering Objects */}
        <Image
          src="/hovering_objects_sm.svg"
          width={1428}
          height={719}
          alt="Hovering Objects"
          className="absolute h-[386px] sm:h-[450px] object-fill object-[0_-56px] block md:hidden"
        />
      </div>
      <div className="self-center px-[24px] md:px-[120px] max-w-[1102px] flex justify-start items-center shrink gap-[30px] md:gap-[119px]">
        <p className="max-w-[506px] text-sm">
          Korte uitleg over de app. Lorem ipsum dolor sit amet consectetur.
          Rhoncus in eget eleifend velit arcu ut. Non ac tellus tortor ut mattis
          placerat. A dolor et ac purus sed ullamcorper. In.
        </p>
        <div className="shrink-0 border rounded-full border-gray-800 w-[34px] h-[60px] flex items-center justify-center">
          <DownArrowIcon className="animate-custom-bounce" />
        </div>
      </div>

      <h1 className="px-[24px] pb-[40px] md:px-[100px] md:pb-[100px] text-[42px] font-extrabold leading-[34.181px] md:text-[70px] md:leading-[60px] lg:text-[160px] lg:leading-[130px]">
        Grip op je crypto, controle over je toekomst.
      </h1>
    </div>
  );
}
