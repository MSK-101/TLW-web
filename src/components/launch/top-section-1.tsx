"use client";
import { UserIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ModalWrapper } from "@/components/ui/modal-wrapper";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";
import TestpanelModal from "@/components/TestpanelModal";

export default function TopSection1() {
  const [openUser, setOpenUser] = useState(false);

  return (
    <div className="flex mt-8 sm:mt-0 flex-col lg:flex-row items-end justify-start lg:justify-end lg:items-start gap-1 lg:gap-3 mx-[24px]">
      <WaitlistModal />
      {/* <TestpanelModal /> */}
      <Button
        className="md:h-12 md:rounded-xl bg-gray-50 cursor-pointer"
        onClick={() => setOpenUser(true)}
      >
        <UserIcon />
      </Button>

      <ModalWrapper
        open={openUser}
        setOpen={setOpenUser}
        bgColor="bg-[#e6c7ff]"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#333]">
            This function becomes available after the launch on October 17th
            2025
          </h2>
          <Button
            className="mt-4 bg-[#333] text-white hover:bg-[#444] w-full text-xl py-8 cursor-pointer"
            onClick={() => setOpenUser(false)}
          >
            Oke
          </Button>
        </div>
      </ModalWrapper>
    </div>
  );
}
