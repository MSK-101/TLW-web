"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurrentUser, signOut } from "aws-amplify/auth";
import "../../../lib/cognito";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = pathname.split("/dashboard/")[1];

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const logoutHandler = async () => {
    await signOut();
    console.log("here");
    router.push("/login");
  };

  useEffect(() => {
    const checkUserLogin = async () => {
      try {
        const currentUser = await getCurrentUser();
        console.log(currentUser);
        if (!currentUser) {
          router.push("/login");
        }
      } catch (error) {
        console.log("User not logged in:", error);
        router.push("/login");
      }
    };
    checkUserLogin();
  }, []);

  const hamburgerBtnHandler = () => {
    setOpenMobileMenu((prev) => !prev);
  };

  const NavLinks = () => {
    return (
      <>
        <Link
          href="/dashboard/profile"
          className={`${currentPage == "profile" ? "underline" : ""}`}
          onClick={() => setOpenMobileMenu(false)}
        >
          Overzicht
        </Link>
        <Link
          href="/dashboard/subscriptions"
          className={`${currentPage == "subscriptions" ? "underline" : ""}`}
          onClick={() => setOpenMobileMenu(false)}
        >
          Abonnement en facturering
        </Link>
      </>
    );
  };

  return (
    <nav>
      <div className="flex justify-between h-16">
        {/* <!-- Brand Name --> */}
        <div className="flex items-center">
          <Image
            src={"/logos/logo animation.svg"}
            width={100}
            height={100}
            alt="Logo"
            className="w-15"
          />
        </div>

        {/* <!-- Desktop Navigation Links (hidden on mobile) --> */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        {/* <!-- Desktop Username (hidden on mobile) --> */}
        <div className="hidden md:flex items-center gap-3">
          <div className="cursor-pointer" onClick={logoutHandler}>
            Uitloggen
          </div>
          <Image
            src={"/user-purple.svg"}
            width={100}
            height={100}
            alt="User"
            className="w-10"
          />
        </div>

        {/* <!-- Mobile Hamburger Menu Button --> */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-button"
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            onClick={hamburgerBtnHandler}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* <!-- Mobile Navigation Menu (hidden by default) --> */}
      <div
        id="mobile-menu"
        className={`md:hidden relative ${openMobileMenu ? "" : "hidden"}`}
      >
        <div className="flex flex-col gap-3 px-3 pt-3 pb-6 bg-white absolute -top-4 left-0 right-0 rounded-2xl">
          {/* <!-- Username first on mobile --> */}
          <div className="flex gap-3 items-center border-b border-gray-200 pb-3">
            <Image
              src={"/user-purple.svg"}
              width={100}
              height={100}
              alt="User"
              className="w-10"
            />
            <div className="cursor-pointer" onClick={logoutHandler}>
              Uitloggen
            </div>
          </div>
          {/* <!-- Navigation Links --> */}
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
