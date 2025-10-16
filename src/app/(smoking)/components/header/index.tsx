import Link from "next/link";

import { fetchAPI } from "@/lib/api";
import { TNavigation } from "@/lib/types";
import { cn } from "@/lib/utils";

import { MenuItem } from "./menu-item";
import { MobileSidebar } from "./mobile-sidebar";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export async function Header() {
  const menu = (await fetchAPI("navigation?populate=*")) as TNavigation;

  return (
    <header
      className={cn(
        "custom-section",
        "absolute py-4 sm:py-8 z-[40] text-white"
      )}
    >
      <ul className="hidden sm:flex items-center justify-center gap-6">
        {menu.links.map((link) => (
          <MenuItem link={link} key={link.name} />
        ))}
      </ul>
      <div className="w-full flex sm:hidden items-center justify-between">
        <MobileSidebar menu={menu} />
        <div className="flex items-center justify-end gap-4">
          <Link
            prefetch={false}
            href={"https://wa.me/+421919370232"}
            target="_blank"
            className="rounded-full w-11 h-11 flex items-center justify-center bg-primary"
          >
            <MdOutlinePhoneInTalk size={20} className="text-white" />
          </Link>
          <Link
            prefetch={false}
            href={"https://www.instagram.com/smoking.hookah.sk/"}
            target="_blank"
            className="rounded-full w-11 h-11 flex items-center justify-center bg-white text-black"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
