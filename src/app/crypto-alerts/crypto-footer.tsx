"use client";

import Link from "next/link";

export default function CryptoFooter() {
  return (
        <div className="bg-[#282828] py-20 lg:py-32">
      <div className="w-full px-4 lg:px-8 text-center">

        {/* Call-to-Action Button */}
        <div className="mb-12">
          <button className="bg-[#7565CA] hover:bg-[#D4B5F0] transition-colors duration-300 text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center mx-auto space-x-3">
            <span>Ik wil geen Alert missen!</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
        </div>

        {/* Disclaimer Text */}
        <div className="mb-12">
          <p className="text-white text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Wat ik deel is geen financieel advies, maar een kijkje in mijn aanpak. Wat je hiermee doet, is jouw verantwoordelijkheid.
          </p>
        </div>

        {/* Separator Line */}
        <div className="border-t border-[#7A7A7A] mb-8"></div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center items-center text-[#7A7A7A] text-sm lg:text-base space-x-6">
          <Link href="/copyright" className="hover:underline">
            © 2017 - 2025 Tineke Zwart
          </Link>
          <Link href="/kvk" className="hidden lg:inline text-[#7A7A7A]">
            |
          </Link>
          <Link href="/kvk-info" className="hover:underline">
            KvK 80644279
          </Link>
          <Link href="/btw-separator" className="hidden lg:inline text-[#7A7A7A]">
            |
          </Link>
          <Link href="/btw-info" className="hover:underline">
            BTW nr: NL861746995B01
          </Link>
          <Link href="/separator-1" className="hidden lg:inline text-[#7A7A7A]">
            |
          </Link>
          <Link href="/privacy-statement" className="hover:underline">
            Privacyverklaring
          </Link>
          <Link href="/separator-2" className="hidden lg:inline text-[#7A7A7A]">
            |
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Algemene voorwaarden
          </Link>
          <Link href="/separator-3" className="hidden lg:inline text-[#7A7A7A]">
            |
          </Link>
          <Link href="/cookie-statement" className="hover:underline">
            Cookiestatement
          </Link>
          <Link href="/separator-4" className="hidden lg:inline text-[#7A7A7A]">
            |
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center z-50"
      >
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
