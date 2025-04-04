import type { Metadata } from "next";
import { Barlow_Condensed, Exo } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "./components/navigation/navbar";
import { ContactBanner } from "./components/shared/contact-banner";
import { Footer } from "./components/homepage/footer";
import { MaintananceScreen } from "./components/maintanance-screen";

const barlow = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smoking Hookah",
  description:
    "Objavte Smoking Hookah: degustačný lounge s vodnými fajkami a limonádami. Perfektné miesto na oddych a socializáciu. Príďte zažiť nezabudnuteľnú atmosféru.",
};

const maintananceMode = true;

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
    <html lang="en">
      <body
        className={cn(
          "bg-[#0E0E0E] relative min-h-screen flex flex-col w-screen overflow-x-hidden",
          barlow.className
        )}
      >
        <ContactBanner />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
