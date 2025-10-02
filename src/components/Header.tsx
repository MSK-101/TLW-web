"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WaitlistModal from "./WaitlistModal";
import { Button } from "./ui/button";
import { UserIcon } from "./icons";
import { ModalWrapper } from "./ui/modal-wrapper";
import { useState } from "react";

export default function Header() {
  const [openUser, setOpenUser] = useState(false);
  const pathname = usePathname();
  const activeLinkClasses = "bg-[#7F65CA] text-white px-8";

  return (
    <div className="bg-white/70 fixed top-12 left-12 right-12 z-50 p-3 rounded-full bg-header flex justify-between items-center">
      <Link href="/" className="h-full">
        <Image
          src="/logos/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className="inline-block"
        />
      </Link>
      <nav className="flex items-center gap-8">
        <Link
          href="/"
          className={`py-2 rounded-full ${
            pathname == "/" ? activeLinkClasses : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/event"
          className={`py-2 rounded-full ${
            pathname == "/event" ? activeLinkClasses : ""
          }`}
        >
          Events
        </Link>
        <Link
          href="/crypto-alerts"
          className={`py-2 rounded-full ${
            pathname == "/crypto-alerts" ? activeLinkClasses : ""
          }`}
        >
          Crypto Alerts
        </Link>
        <Link
          href="/trade-and-invest-academy"
          className={`py-2 rounded-full ${
            pathname == "/trade-and-invest-academy" ? activeLinkClasses : ""
          }`}
        >
          T&I Academy
        </Link>
      </nav>
      <div className="flex gap-2">
        <WaitlistModal />
        {/* <TestpanelModal /> */}
        <Button
          className="md:h-12 md:rounded-full bg-gray-50 cursor-pointer"
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
    </div>
  );
}
