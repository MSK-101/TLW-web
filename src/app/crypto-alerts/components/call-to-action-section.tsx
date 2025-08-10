import Markdown from "@/components/ui/markdown";
import Image from "next/image";
import Link from "next/link";

export default function CallToActionSection({
  callToActionSectionData,
}: {
  callToActionSectionData: any;
}) {
  const { heading, description, button_text, image } = callToActionSectionData;

  if (!callToActionSectionData) {
    return null;
  }

  return (
    <div className="bg-[url(/background.png)] bg-bottom bg-cover bg-no-repeat rounded-2xl lg:rounded-b-4xl p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-auto self-center lg:pl-6 flex flex-col items-center md:items-start">
          <h1 className="text-5xl xl:text-7xl font-bold opacity-80 leading-[90%] max-w-[400px]">
            {heading}
          </h1>
          <div className="text-base lg:text-md mb-4 mt-10 max-w-[400px]">
            <Markdown>{description}</Markdown>
          </div>
          <Link
            href="https://wwwthelimitlesswaynl.plugandpay.com/checkout/event"
            target="_blank"
          >
            <button className="bg-[#7F65CA] text-white px-8 py-3 rounded-xl hover:bg-[#5a4a9a] transition-colors duration-300">
              {button_text}
            </button>
          </Link>
        </div>
        <div className="col-auto py-6 flex items-center justify-center lg:justify-end lg:pr-8">
          <Image
            src={image.url}
            width={300}
            height={400}
            alt="Tineke Zwart"
            className="h-auto w-auto max-h-[400px] max-w-[300px] object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
