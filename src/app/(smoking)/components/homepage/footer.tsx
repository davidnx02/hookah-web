import { fetchAPI } from "@/lib/api";
import { getStrapiUrl } from "@/lib/get-strapi-url";
import { TGeneral, TNavigation } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export async function Footer() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;
  const navigation = (await fetchAPI("navigation?populate=*")) as TNavigation;

  return (
    <footer className={cn("custom-section", "bg-[#050505] py-12 sm:pt-16 sm:pb-24")}>
      <div
        className={cn(
          "custom-container",
          "flex items-center justify-center gap-16 flex-col"
        )}
      >
        <div className="flex items-center justify-between w-full">
          <Image
            src={getStrapiUrl(general?.logo?.data?.attributes?.url)}
            height={0}
            width={0}
            alt={"Smoking Hookah"}
            sizes="(max-width: 768px) 64px, 100px"
            className="w-16 h-16 md:w-24 md:h-24"
          />
          <div className="flex items-center justify-end gap-10">
            {navigation?.links?.map((link) => (
              <Link
                key={link.url}
                prefetch={false}
                href={link.url}
                className="text-base font-bold text-white uppercase"
              >
                {link.name}
              </Link>
            ))}
            <Link
              prefetch={false}
              href={"/gdpr"}
              className="text-base font-bold text-white uppercase"
            >
              GDPR
            </Link>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#373737]" />
        <p className="text-[#5C5C5C] text-center">Všetky práva vyhradené &copy;2024</p>
      </div>
    </footer>
  );
}
