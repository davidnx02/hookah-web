import { fetchAPI } from "@/lib/api";
import { TNavigation } from "@/lib/types";
import { cn } from "@/lib/utils";

import { MenuItem } from "./menu-item";
import { MobileSidebar } from "./mobile-sidebar";

export async function Header() {
  const menu = (await fetchAPI('navigation?populate=*')) as TNavigation;

  return (
    <header className={cn('custom-section', 'absolute py-8 z-[40] text-white')}>
      <ul className="hidden sm:flex items-center justify-center gap-6">
        {menu.links.map(link => (
          <MenuItem link={link} key={link.name} />
        ))}
      </ul>
      <div className='w-full flex sm:hidden items-center justify-between'>
        <MobileSidebar menu={menu} />
      </div>
    </header>
  );
};