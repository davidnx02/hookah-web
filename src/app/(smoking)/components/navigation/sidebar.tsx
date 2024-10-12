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
        <RiMenu3Line size={24} className="text-white" />
      </SheetTrigger>
      <SheetContent className="bg-[#0E0E0E] !px-6 sm:px-6 w-[340px] pt-24 border-none">
        <div className="flex flex-col items-start justify-start">
          {links.map((link, index) => (
            <SheetClose key={link.url} asChild>
              <Link
                prefetch={false}
                href={link.url}
                className={cn(
                  "text-white py-2 max-w-[200px] w-full flex items-start justify-start font-normal text-xl",

                  pathname === link.url && "text-accent font-bold"
                )}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </div>
        <Button asChild className="w-full mt-8">
          <Link prefetch={false} href={`tel:${phone}`}>
            Rezervovať teraz
            <MdOutlinePhoneInTalk size={24} className="text-white" />
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
};
