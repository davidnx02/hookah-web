"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TNavLink } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

export const Sidebar = ({
  links,
  phone,
}: {
  links: TNavLink[];
  phone: string;
}) => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <RiMenu3Line size={32} className="text-white" />
      </SheetTrigger>
      <SheetContent className="bg-[#0E0E0E]/25 px-6 border-l border-l-accent w-screen pt-24">
        <div className="flex flex-col items-center justify-center">
          {links.map((link, index) => (
            <SheetClose key={link.url} asChild>
              <Link
                prefetch={false}
                href={link.url}
                className={cn(
                  "text-white border-b border-b-neutral-100/25 py-6 max-w-[200px] w-full flex items-center justify-center font-bold text-2xl",
                  index === links.length - 1 && "border-b-0",
                  pathname === link.url && "text-primary"
                )}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </div>
        <Button asChild className="uppercase mt-8">
          <Link prefetch={false} href={`tel:${phone}`}>
            Rezervovať teraz
            <MdOutlinePhoneInTalk size={24} className="text-white" />
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
};
