import WaitlistModal from "@/components/WaitlistModal";

export default function WishlistSection() {
  return (
    <div className="flex flex-col items-center mb-[124px]">
      <div className="text-4xl text-center max-w-[850px]">
        Schrijf je hieronder in voor de wachtlijst. Dan ontvang je meteen een
        mail zodra de app live is.
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
