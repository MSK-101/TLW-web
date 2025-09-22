import type { Metadata } from "next";
import { Funnel_Display, Funnel_Sans } from "next/font/google";
import "./globals.css";
import GTM from "@/components/GTM";
import CookieBot from "react-cookiebot";
import { NotificationProvider } from "@/contexts/NotificationContext";
import NotificationContainer from "@/components/NotificationContainer";
import Script from "next/script";

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
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="1f8dd403-2e24-492d-b605-a1ea8d0d2f42"
          data-blockingmode="auto"
          type="text/javascript"
        ></Script>
        <Script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/1f8dd403-2e24-492d-b605-a1ea8d0d2f42/cd.js"
          type="text/javascript"
          async
        ></Script>
      </head>
      <body>
        <GTM />
        <NotificationProvider>
          {children}
          <NotificationContainer />
        </NotificationProvider>
      </body>
    </html>
  );
}
