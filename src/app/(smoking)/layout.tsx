import type { Metadata } from "next";

import { Barlow_Condensed, Poppins } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { MaintenanceScreen } from "./components/maintenance-screen";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { InformationBar } from "./components/information-bar";

const barlow = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const poppins = Poppins({
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

const maintenanceMode = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (maintenanceMode) {
    return (
      <html>
        <body className={cn(barlow.className)}>
          <MaintenanceScreen />
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
        <InformationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
