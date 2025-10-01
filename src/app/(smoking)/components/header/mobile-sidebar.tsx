"use client";

import Link from "next/link";

import { LucideMenu, LucideX } from "lucide-react";

import { TNavigation } from "@/lib/types";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { TbPhoneCall } from "react-icons/tb";

export function MobileSidebar({ menu }: { menu: TNavigation }) {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-start gap-2 uppercase font-bold">
        <LucideMenu />
        MENU
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-[80vw] border-none shadow-none flex flex-col items-start gap-6 justify-start bg-[#040405] px-5 pt-32"
      >
        <SheetClose asChild>
          <LucideX className="absolute top-6 right-5 text-white/75" />
        </SheetClose>
        <div className="w-full flex flex-col items-start justify-start gap-4">
          {menu.links.map((link) => (
            <SheetClose key={link.name} asChild>
              <Link
                prefetch={false}
                href={link.url}
                className="text-xl text-white"
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </div>
        <div className="w-full h-[1px] bg-white/20" />
        <SheetClose asChild className="w-full">
          <Link
            prefetch={false}
            href={"https://wa.me/+421919370232"}
            target="_blank"
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-base transition-colors disabled:pointer-events-none disabled:opacity-50 font-medium h-12 px-6 bg-primary text-white"
          >
            <TbPhoneCall size={20} /> Rezervácia
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
