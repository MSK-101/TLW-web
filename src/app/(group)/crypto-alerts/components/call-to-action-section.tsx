import Markdown from "@/components/ui/markdown";
import Image from "next/image";
import Link from "next/link";

export default function CallToActionSection({
  callToActionSectionData,
}: {
  callToActionSectionData: any;
}) {
  const { heading, description, button_text, image_1, image_2 } =
    callToActionSectionData;

  if (!callToActionSectionData) {
    return null;
  }

  return (
    <div className="bg-[url(/background.png)] bg-bottom bg-cover bg-no-repeat rounded-2xl lg:rounded-b-4xl p-10 xl:p-25">
      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        <div className="flex flex-col items-center lg:items-start min-w-[300px]">
          <h1 className="text-5xl xl:text-7xl font-bold opacity-80 leading-[90%] max-w-[400px] xl:max-w-[500px]">
            {heading}
          </h1>
          <div className="text-base lg:text-md mb-4 mt-10 max-w-[400px] xl:max-w-[500px] flex flex-col gap-4">
            <Markdown>{description}</Markdown>
          </div>
          <Link
            href="https://wwwthelimitlesswaynl.plugandpay.com/checkout/trade-invest-academy"
            target="_blank"
          >
            <button className="cursor-pointer bg-[#7F65CA] text-white px-8 py-3 rounded-xl hover:bg-[#5a4a9a] transition-colors duration-300">
              {button_text}
            </button>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          {image_1 && (
            <Image
              src={image_1?.url}
              width={300}
              height={400}
              alt="Tineke Zwart"
              className="h-70 w-50 xl:h-90 xl:w-70 object-cover rounded-2xl"
            />
          )}
          {image_2 && (
            <Image
              src={image_2?.url}
              width={300}
              height={400}
              alt="Tineke Zwart"
              className="h-70 w-50 xl:h-90 xl:w-70 object-cover rounded-2xl"
            />
          )}
        </div>
      </div>
    </div>
  );
}
