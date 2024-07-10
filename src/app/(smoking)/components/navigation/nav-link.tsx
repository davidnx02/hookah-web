'use client';

import Link from "next/link";

import { usePathname } from "next/navigation";

import type { TNavLink } from "@/lib/types";
import { cn } from "@/lib/utils";

export const NavLink = ({ link }: { link: TNavLink; }) => {
  const pathname = usePathname();

  return (
      <Link 
        prefetch={false} 
        href={link.url} 
        className={cn('uppercase text-base font-bold',
          pathname === link.url ? 'text-primary nav-link--active text-base' : 'text-white text-base'
        )}>
        {link.name}
      </Link>
  );
};