import Image from "next/image";

export default function DownloadAppSection() {
  return (
    <div className="bg-[url(/background.png)] bg-bottom bg-cover bg-no-repeat rounded-2xl lg:rounded-4xl p-6 lg:py-8 lg:px-[64px]">
      <div className="grid grid-cols-2 space-x-2">
        <div className="col-auto self-center lg:pl-8 max-w-[700px]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold opacity-80 -mr-8 sm:-mr-0 leading-[100%] md:leading-[90%]">
            Download de app en werk aan je eigen toekomst.
          </h1>
          <p className="mt-2 md:mt-8 text-gray-700 lg:mr-10">
            De app wordt gelanceerd op vrijdag 17 oktober 2025!
          </p>
        </div>
        <div className="col-auto py-6">
          <Image
            src={"/phone.png"}
            width={1106}
            height={822}
            alt=""
            className="h-full w-full translate-y-2 lg:translate-y-18 translate-x-4 max-h-[500px] object-contain scale-110 lg:scale-120 animate-slide-in-right"
          />
        </div>
      </div>
    </div>
  );
}

