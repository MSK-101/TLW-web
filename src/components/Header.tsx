import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Logo"
          className="mix-blend-difference absolute lg:fixed top-8 left-1/2 -translate-x-1/2 w-16 h-16 lg:translate-0 lg:top-14 lg:left-14 lg:w-24 lg:h-24 animate-slide-in-left z-50"
        />
      </Link>
    </header>
  );
}
