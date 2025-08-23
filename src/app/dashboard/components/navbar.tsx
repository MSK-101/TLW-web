"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const currentPage = pathname.split("/dashboard/")[1];

  return (
    <div className="flex items-center justify-between">
      <Image
        src={"/logos/logo animation.svg"}
        width={100}
        height={100}
        alt="Logo"
        className="w-15"
      />

      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/profile"
          className={`${currentPage == "profile" ? "underline" : ""}`}
        >
          Overzicht
        </Link>
        <Link
          href="/dashboard/subscriptions"
          className={`${currentPage == "subscriptions" ? "underline" : ""}`}
        >
          Abonnement en facturering
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        <div>Uitloggen</div>
        <Image
          src={"/user-purple.svg"}
          width={100}
          height={100}
          alt="User"
          className="w-10"
        />
      </div>
    </div>
  );
}
