import WaitlistModal from "@/components/WaitlistModal";
import Image from "next/image";

export default function WishlistSection() {
  return (
    <div className="flex flex-col items-center mb-[124px]">
      <Image
        src="/logos/pre-launch-logo.png"
        width={250}
        height={250}
        alt="Pre-Launch Logo"
      />
      <div className="text-xl text-center max-w-[850px]">
        Helaas moet je nog even wachten totdat je de app kunt gebruiken. We
        lanceren de app op vrijdag 17 oktober 2025. Schrijf je hieronder in voor
        de wachtlijst en ontvang meteen een mail zodra de app live is. Daarnaast
        krijg je tot de livegang regelmatig updates over de cryptomarkt en
        investeringstips van Tineke Zwart.
      </div>

      <div className="mt-10">
        <WaitlistModal
          buttonVariant="custom"
          buttonClassName="bg-[#282828] text-gray-50 py-6 px-[32px] cursor-pointer hover:scale-105"
        />
      </div>
    </div>
  );
}

