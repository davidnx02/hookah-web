import Image from "next/image";
import Link from "next/link";

import type { TGeneral, TNavigation } from "@/lib/types";

import { fetchAPI } from "@/lib/api";

import { cn } from "@/lib/utils";
import { getStrapiUrl } from "@/lib/get-strapi-url";
import { NavLink } from "./nav-link";
import { Button } from "@/components/ui/button";

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Sidebar } from "./sidebar";

export async function NavBar() {
  const navigation = (await fetchAPI("navigation?populate=*")) as TNavigation;
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return (
    <nav
      className={cn(
        "custom-section",
        "py-4 absolute top-0 w-full left-0 z-[50]"
      )}
    >
      <div
        className={cn("custom-container", "flex items-center justify-between")}
      >
        <Link
          prefetch={false}
          href={"/"}
          className="w-16 h-16 md:w-20 md:h-20 relative"
        >
          <Image
            src={getStrapiUrl(general?.logo?.data?.attributes?.url)}
            fill
            alt={"Smoking Hookah"}
            sizes="(max-width: 768px) 64px, 100px"
          />
        </Link>

        <div className="hidden md:flex items-center justify-end gap-8 lg:gap-16">
          <ul className="flex items-center justify-end gap-6 lg:gap-12">
            {navigation?.links?.map((link) => (
              <NavLink link={link} key={link.url} />
            ))}
          </ul>
          <Button asChild className="uppercase">
            <Link prefetch={false} href={`tel:${general.phone}`}>
              REZERVOVAť
              <MdOutlinePhoneInTalk size={24} className="text-white" />
            </Link>
          </Button>
        </div>
        <div className="block md:hidden">
          <Sidebar links={navigation.links} phone={general.phone} />
        </div>
      </div>
    </nav>
  );
}
