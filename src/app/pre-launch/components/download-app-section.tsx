import Image from "next/image";

export default function DownloadAppSection() {
  return (
    <div className="bg-[url(/background.png)] bg-bottom bg-cover bg-no-repeat rounded-2xl lg:rounded-b-4xl p-6 lg:px-[64px] lg:-mx-[76px]">
      <div className="grid grid-cols-2">
        <div className="col-auto self-center lg:pl-6 max-w-[750px]">
          <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold opacity-80 leading-[90%]">
            Download de app en werk aan je eigen toekomst.
          </h1>
          <p className="mt-8">
            De app wordt gelanceerd op donderdag 25 september 2025! Non ultrices
            ac quis id tincidunt cursus.
          </p>
        </div>
        <div className="col-auto py-6">
          <Image
            src={"/phone.png"}
            width={1106}
            height={822}
            alt=""
            className="h-full w-full translate-y-6 translate-x-6 lg:translate-x-0 max-h-[420px] object-contain scale-105 lg:scale-120 animate-slide-in-right"
          />
        </div>
      </div>
    </div>
  );
}
