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
    <div className="flex mt-8 sm:mt-0 flex-col lg:flex-row items-end justify-start lg:justify-end lg:items-start gap-1 lg:gap-3 mx-[24px]"></div>
  );
}
