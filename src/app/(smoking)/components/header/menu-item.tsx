"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { TNavLink } from "@/lib/types";
import { cn } from "@/lib/utils";

export function MenuItem({ link }: { link: TNavLink }) {
  const pathname = usePathname();
  const isActive = pathname === link.url;

  return (
    <li key={link.name}>
      <Link
        prefetch={false}
        href={link.url}
        className={cn(
          "text-xl font-bold py-1 px-2.5 font-heading",
          isActive
            ? "text-primary bg-white cursor-context-menu"
            : "text-white bg-transparent"
        )}
      >
        {link.name}
      </Link>
    </li>
  );
}
