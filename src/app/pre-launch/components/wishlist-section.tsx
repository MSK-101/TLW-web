import { Button } from "@/components/ui/button";
import { WishlistIconLight } from "@/components/icons";

export default function WishlistSection() {
  return (
    <div className="flex flex-col items-center mb-[124px]">
      <div className="text-4xl text-center max-w-[850px]">
        Schrijf je hieronder in voor de wachtlijst. Dan ontvang je meteen een
        mail zodra de app live is.
      </div>
      <Button className="bg-[#282828] text-gray-50 py-[6px] px-[32px] h-[42px] mt-10 cursor-pointer hover:scale-105">
        Ik wil op de wachtlijst <WishlistIconLight />
      </Button>
    </div>
  );
}
