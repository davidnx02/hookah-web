import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "./components/navigation/navbar";
import { ContactBanner } from "./components/shared/contact-banner";
import { Footer } from "./components/homepage/footer";

const exo = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smoking Hookah",
  description: "Objavte Smoking Hookah: degustačný lounge s vodnými fajkami a limonádami. Perfektné miesto na oddych a socializáciu. Príďte zažiť nezabudnuteľnú atmosféru.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body
          className={cn(
            "bg-[#0E0E0E] relative min-h-screen flex flex-col w-screen overflow-x-hidden",
            exo.className
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
