import Image from "next/image";

export default function SpeakersSection() {
  return (
    <div className="p-6 md:p-12">
      <div className="flex flex-col items-center">
        <div className="max-w-[500px] text-[#CCCCCC] text-sm text-center my-20">
          <p>
            In quis enim duis luctus. Pharetra feugiat quam ipsum cras.
            Adipiscing ipsum odio rhoncus tortor maecenas. Enim lacus tempor
            sapien sollicitudin dolor.
          </p>
          <p className="mt-5">
            Sed est nibh sit ut iaculis egestas. Sed quis arcu augue lorem.
            Fames egestas faucibus duis nibh est velit. In venenatis enim
            consectetur sit massa vulputate sit. Mattis nunc mauris lobortis non
            feugiat ut. Auctor viverra vestibulum interdum morbi iaculis.
          </p>
        </div>

        <h1 className="text-gray-50 text-3xl lg:text-[64px] font-bold">
          Sprekers
        </h1>
        <p className="text-[#CCCCCC] md:w-[584px] text-center">
          Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt
          cursus arcu imperdiet elementum. Vitae nam sit eget nunc iaculis
          lorem.{" "}
        </p>
      </div>
      <div className="lg:px-[124px] grid grid-cols-1 lg:grid-cols-2 gap-[32px] mt-10">
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <div className="h-[202px] sm:h-[242px] col-span-1">
            <Image
              src="/speaker_default.png"
              alt="Speaker"
              width={100}
              height={123}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-[24px] py-[40px] col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">Mark Hordijk</h2>
            <p className="text-[18px] text-[#525252] line-clamp-3">
              Ullamcorper nulla egestas suscipit purus mattis eu. Habitant
              tortor ultricies ornare non congue aliquet turpis non habitant.
              Pellentesque vulputate.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <div className="h-[202px] sm:h-[242px] col-span-1">
            <Image
              src="/speaker.png"
              alt="Speaker"
              width={100}
              height={123}
              className="object-contain sm:object-cover w-full h-full"
            />
          </div>
          <div className="px-[24px] py-[40px] col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">Mark Hordijk</h2>
            <p className="text-[18px] text-[#525252] line-clamp-3">
              Ullamcorper nulla egestas suscipit purus mattis eu. Habitant
              tortor ultricies ornare non congue aliquet turpis non habitant.
              Pellentesque vulputate.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <div className="h-[202px] sm:h-[242px] col-span-1">
            <Image
              src="/speaker_default.png"
              alt="Speaker"
              width={100}
              height={123}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-[24px] py-[40px] col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">Mark Hordijk</h2>
            <p className="text-[18px] text-[#525252] line-clamp-3">
              Ullamcorper nulla egestas suscipit purus mattis eu. Habitant
              tortor ultricies ornare non congue aliquet turpis non habitant.
              Pellentesque vulputate.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <div className="h-[202px] sm:h-[242px] col-span-1">
            <Image
              src="/speaker_default.png"
              alt="Speaker"
              width={100}
              height={123}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-[24px] py-[40px] col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">Mark Hordijk</h2>
            <p className="text-[18px] text-[#525252] line-clamp-3">
              Ullamcorper nulla egestas suscipit purus mattis eu. Habitant
              tortor ultricies ornare non congue aliquet turpis non habitant.
              Pellentesque vulputate.
            </p>
          </div>
        </div>
        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-3 bg-gray-50 overflow-hidden">
          <div className="h-[202px] sm:h-[242px] col-span-1">
            <Image
              src="/speaker_default.png"
              alt="Speaker"
              width={100}
              height={123}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-[24px] py-[40px] col-span-1 sm:col-span-2">
            <h2 className="font-medium text-[23px]">Mark Hordijk</h2>
            <p className="text-[18px] text-[#525252] line-clamp-3">
              Ullamcorper nulla egestas suscipit purus mattis eu. Habitant
              tortor ultricies ornare non congue aliquet turpis non habitant.
              Pellentesque vulputate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
