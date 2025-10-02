"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WaitlistModal from "./WaitlistModal";
import { Button } from "./ui/button";
import { UserIcon, HamburgerIcon, CloseIcon } from "./icons";
import { ModalWrapper } from "./ui/modal-wrapper";
import { useState } from "react";

export default function Header() {
  const [openUser, setOpenUser] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const activeLinkClasses = "bg-[#7F65CA] text-white px-8";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="bg-white/70 fixed top-12 left-12 right-12 z-50 rounded-4xl bg-header overflow-hidden transition-all duration-300 ease-in-out">
        {/* Header Top Row */}
        <div className="p-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="h-full">
            <Image
              src="/logos/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className="inline-block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
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

          {/* Desktop Actions */}
          <div className="hidden lg:flex gap-2">
            {pathname == "/" && (
              <>
                <WaitlistModal />
                <Button
                  className="md:h-12 md:rounded-full bg-gray-50 cursor-pointer"
                  onClick={() => setOpenUser(true)}
                >
                  <UserIcon />
                </Button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <Button
            className="lg:hidden cursor-pointer p-2 rounded-full bg-transparent aspect-square"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-6 h-6 text-gray-800" />
            ) : (
              <HamburgerIcon className="w-6 h-6 text-gray-800" />
            )}
          </Button>
        </div>

        {/* Mobile Accordion Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-3 mb-4">
              <Link
                href="/"
                className={`py-2 px-4 rounded-full text-center ${
                  pathname == "/" ? activeLinkClasses : ""
                }`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/event"
                className={`py-2 px-4 rounded-full text-center ${
                  pathname == "/event" ? activeLinkClasses : ""
                }`}
                onClick={closeMobileMenu}
              >
                Events
              </Link>
              <Link
                href="/crypto-alerts"
                className={`py-2 px-4 rounded-full text-center ${
                  pathname == "/crypto-alerts" ? activeLinkClasses : ""
                }`}
                onClick={closeMobileMenu}
              >
                Crypto Alerts
              </Link>
              <Link
                href="/trade-and-invest-academy"
                className={`py-2 px-4 rounded-full text-center ${
                  pathname == "/trade-and-invest-academy"
                    ? activeLinkClasses
                    : ""
                }`}
                onClick={closeMobileMenu}
              >
                T&I Academy
              </Link>
            </nav>

            {/* Mobile Actions */}
            <div className="flex gap-2 justify-center">
              {pathname == "/" && (
                <>
                  <WaitlistModal buttonClassName="w-full py-2 px-4 rounded-full text-center cursor-pointer" />
                  <Button
                    className="py-2 px-4 rounded-full bg-gray-50 cursor-pointer"
                    onClick={() => {
                      setOpenUser(true);
                      closeMobileMenu();
                    }}
                  >
                    <UserIcon />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* User Modal */}
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
    </>
  );
}
