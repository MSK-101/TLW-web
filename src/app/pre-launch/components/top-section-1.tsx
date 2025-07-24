"use client";
import {
  UserCheckIconLight,
  UserIcon,
  WishlistIconLight,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ModalWrapper } from "@/components/ui/modal-wrapper";
import { useState } from "react";
import Script from "next/script";

export default function TopSection1() {
  const [openWachtlijst, setOpenWachtlijst] = useState(false);
  const [openTestpanel, setOpenTestpanel] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  return (
    <div className="flex mt-8 sm:mt-0 flex-col lg:flex-row items-end justify-start lg:justify-end lg:items-start gap-1 lg:gap-3 mx-[24px]">
      <Button
        className="md:px-[32px] md:h-12 md:rounded-xl cursor-pointer"
        onClick={() => setOpenWachtlijst(true)}
      >
        Ik wil op de wachtlijst <WishlistIconLight />
      </Button>
      <Button
        className="md:px-[32px] md:h-12 md:rounded-xl cursor-pointer"
        onClick={() => setOpenTestpanel(true)}
      >
        Ik wil in het Testpanel <UserCheckIconLight />
      </Button>
      <Button
        className="md:h-12 md:rounded-xl bg-gray-50 cursor-pointer"
        onClick={() => setOpenUser(true)}
      >
        <UserIcon />
      </Button>

      {/* Wachtlijst Modal */}
      <ModalWrapper
        open={openWachtlijst}
        setOpen={setOpenWachtlijst}
        title="Ik wil op de wachtlijst"
      >
        <div className="_form_1 w-full">
          <Script
            src="https://thelimitlesswaybv.activehosted.com/f/embed.php?id=1"
            strategy="afterInteractive"
            onError={(e) => console.error("Script failed to load", e)}
          />
        </div>
      </ModalWrapper>

      {/* Testpanel Modal */}
      <ModalWrapper
        open={openTestpanel}
        setOpen={setOpenTestpanel}
        title="Ik wil in het Testpanel"
      >
        <Script
          src="https://thelimitlesswaybv.activehosted.com/f/embed.php?id=1"
          strategy="afterInteractive"
          onError={(e) => console.error("Script failed to load", e)}
        />
        <div className="_form_1 w-full" />
      </ModalWrapper>

      {/* User Modal (empty for now) */}
      <ModalWrapper open={openUser} setOpen={setOpenUser} title="Gebruiker">
        {/* Empty modal for now */}
      </ModalWrapper>
    </div>
  );
}
