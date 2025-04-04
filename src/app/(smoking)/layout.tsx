import type { Metadata } from "next";

import { Barlow_Condensed, Poppins } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { MaintananceScreen } from "./components/maintanance-screen";
import { Header } from "./components/header";

export const barlow = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Smoking Hookah",
  description:
    "Objavte Smoking Hookah: degustačný lounge s vodnými fajkami a limonádami. Perfektné miesto na oddych a socializáciu. Príďte zažiť nezabudnuteľnú atmosféru.",
    viewport: "width=device-width, initial-scale=1",
};

const maintananceMode = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (maintananceMode) {
    return (
      <html>
        <body className={cn(barlow.className)}>
          <MaintananceScreen />
        </body>
      </html>
    );
  }

  return (
    <html lang="sk">
      <body
        className={cn(
          "bg-[#040405] relative min-h-screen flex flex-col overflow-x-hidden w-full",
          poppins.className,
          barlow.variable,
        )}
      >
        <Header />
        {/* <ContactBanner /> */}
        {children}
      </body>
    </html>
  );
}
