import Link from "next/link";

import { fetchAPI } from "@/lib/api";
import { TNavigation } from "@/lib/types";
import { cn } from "@/lib/utils";

import { MenuItem } from "./menu-item";
import { MobileSidebar } from "./mobile-sidebar";
import { Button } from "@/components/ui/button";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export async function Header() {
  const menu = (await fetchAPI('navigation?populate=*')) as TNavigation;

  return (
    <header className={cn('custom-section', 'absolute py-4 sm:py-8 z-[40] text-white')}>
      <ul className="hidden sm:flex items-center justify-center gap-6">
        {menu.links.map(link => (
          <MenuItem link={link} key={link.name} />
        ))}
      </ul>
      <div className='w-full flex sm:hidden items-center justify-between'>
        <MobileSidebar menu={menu} />
          <Link prefetch={false} href={'https://wa.me/+421919270232'} target="_blank" className="rounded-full w-11 h-11 flex items-center justify-center bg-primary">
            <MdOutlinePhoneInTalk size={20} className="text-white" />
          </Link>
      </div>
    </header>
  );
};