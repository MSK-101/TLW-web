import Image from "next/image";

export default function Features() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Main content */}
          <div className="lg:pr-8 text-center lg:text-left">
            <span className="text-sm text-gray-500 uppercase tracking-wide mb-4 block">Features</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#282828] mb-6 lg:mb-8 leading-tight">
              Turpis at donec ut urna malesuada
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt cursus arcu imperdiet elementum. Vulputate enim aliquet viverra aliquam venenatis felis. Vitae nam sit eget nunc iaculis lorem.
            </p>
          </div>

          {/* Right side - Feature cards */}
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-[1fr,1fr] md:gap-6 lg:h-[420px] xl:h-[470px]">
            {/* Traden */}
            <div className="bg-[#F0F0F0] rounded-2xl p-6 flex flex-col md:row-span-1 min-h-[160px] md:min-h-[200px]">
              <div className="flex items-center mb-4">
                <Image
                  src="/traden.png"
                  alt="Traden"
                  width={32}
                  height={32}
                  className="mr-3 flex-shrink-0"
                />
                <h3 className="text-xl font-semibold text-[#282828]">Traden</h3>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-gray-600 text-base leading-relaxed pb-2">
                  Mi velit tortor mi feugiat. Tincidunt vestibulum tortor habitasse tincidunt non. Purus varius sed massa risus ut pellentesque.
                </p>
              </div>
            </div>

            {/* Jouw plan */}
            <div className="bg-[#F0F0F0] rounded-2xl p-6 flex flex-col md:justify-end md:row-span-1 min-h-[160px] md:h-[180px] md:self-end lg:h-[190px] xl:h-[200px]">
              <div className="flex items-center mb-4">
                <Image
                  src="/jouw.png"
                  alt="Jouw plan"
                  width={32}
                  height={32}
                  className="mr-3 flex-shrink-0"
                />
                <h3 className="text-xl font-semibold text-[#282828]">Jouw plan</h3>
              </div>
              <div className="overflow-hidden">
                <p className="text-gray-600 text-base leading-relaxed pb-2">
                  Purus varius sed massa risus ut pellentes. Turpis at donec ut urna netus malesuada blandit pellentesque.
                </p>
              </div>
            </div>

            {/* Educatie */}
            <div className="bg-[#F0F0F0] rounded-2xl p-6 flex flex-col md:row-span-1 min-h-[160px] md:min-h-[200px]">
              <div className="flex items-center mb-4">
                <Image
                  src="/educatie.png"
                  alt="Educatie"
                  width={32}
                  height={32}
                  className="mr-3 flex-shrink-0"
                />
                <h3 className="text-xl font-semibold text-[#282828]">Educatie</h3>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-gray-600 text-base leading-relaxed pb-2">
                  In mauris felis nec placerat ultrices quis aliquam amet. Morbi interdum enim viverra ut urna mi auctor feugiat massa. Mauris facililis pellentesque sit sagittis pretium blandit scelerisque.
                </p>
              </div>
            </div>

            {/* Spaardoelen */}
            <div className="bg-[#F0F0F0] rounded-2xl p-6 flex flex-col md:row-span-1 min-h-[160px] md:h-[180px] md:self-start lg:h-[190px] xl:h-[200px]">
              <div className="flex items-center mb-4">
                <Image
                  src="/spaardoelen.png"
                  alt="Spaardoelen"
                  width={32}
                  height={32}
                  className="mr-3 flex-shrink-0"
                />
                <h3 className="text-xl font-semibold text-[#282828]">Spaardoelen</h3>
              </div>
              <div className="overflow-hidden">
                <p className="text-gray-600 text-base leading-relaxed pb-4">
                  Augue vitae ullamcorper nunc consequat cursus urna vestibulum pharetra convallis. Felis tortor feugiat et in congue nunc magna enim facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
