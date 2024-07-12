import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "./components/navigation/navbar";
import { ContactBanner } from "./components/shared/contact-banner";
import { Footer } from "./components/homepage/footer";

const exo = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
            "bg-[#0E0E0E] relative min-h-screen flex flex-col",
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