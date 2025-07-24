import {
  UserCheckIconLight,
  UserIcon,
  WishlistIconLight,
} from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function TopSection1() {
  return (
    <div className="flex mt-8 sm:mt-0 flex-col lg:flex-row items-end justify-start lg:justify-end lg:items-start gap-1 lg:gap-3 mx-[24px]">
      <Button className="md:px-[32px] md:h-12 md:rounded-xl">
        Ik wil op de wachtlijst <WishlistIconLight />
      </Button>
      <Button className="md:px-[32px] md:h-12 md:rounded-xl">
        Ik wil in het Testpanel <UserCheckIconLight />
      </Button>
      <Button className="md:h-12 md:rounded-xl bg-gray-50">
        <UserIcon />
      </Button>
    </div>
  );
}
