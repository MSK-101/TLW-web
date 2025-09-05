import type { Metadata } from "next";
import { Funnel_Display, Funnel_Sans } from "next/font/google";
import "./globals.css";
import GTM from "@/components/GTM";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-funnel-display",
});

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-funnel-sans",
});

export const metadata: Metadata = {
  title: "The Limitless Way",
  description: "The Limitless Way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="dl"
      className={`${funnelDisplay.variable} ${funnelSans.variable} antialiased scroll-smooth`}
    >
      <body>
        <GTM />
        {children}
      </body>
    </html>
  );
}
