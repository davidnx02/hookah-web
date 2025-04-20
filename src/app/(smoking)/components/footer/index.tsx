import Image from "next/image";
import Link from "next/link";

import type { TGeneral, TNavigation } from "@/lib/types";

import { fetchAPI } from "@/lib/api";
import { cn } from "@/lib/utils";

export async function Footer() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;
  const menu = (await fetchAPI("navigation?populate=*")) as TNavigation;

  return (
    <section
      className={cn(
        "custom-section",
        "pt-12 bg-[#0A0A0B] border-t border-t-white/10 pb-14 sm:pb-14"
      )}
    >
      {/* <div
        className={cn(
          "custom-container",
          "flex flex-col items-center justify-center gap-12 sm:gap-16"
        )}
      >
        <div className="w-full flex flex-col items-center justify-center gap-10 sm:gap-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <Link prefetch={false} href={"/"}>
              <Image
                src={general.logo.data.attributes.url}
                alt="Smoking Hookah"
                width={0}
                height={0}
                className="w-16 h-16 sm:w-20 sm:h-20 p-[3px] bg-white rounded-full object-cover"
              />
            </Link>
            <h2>
              <span className="bg-white text-primary font-heading text-3xl font-bold px-3 py-0.5 leading-normal sm:text-5xl sm:leading-normal">
                SMOKING HOOKAH
              </span>
              <br></br>
              <span className="text-lg tracking-[0.0425em] sm:text-2xl sm:tracking-[0.115em] text-white font-heading leading-normal">
                DEGUSTAČNÝ LOUNGE V TRNAVE
              </span>
            </h2>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-y-4 gap-x-6 sm:gap-x-8 sm:flex-row">
            {menu.links.map((item) => (
              <Link
                prefetch={false}
                href={item.url}
                key={item.name}
                className="text-white text-lg md:text-xl font-medium uppercase font-heading"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div> */}
      <div
        className={cn(
          "custom-container",
          "flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-center sm:justify-between"
        )}
      >
        <Link prefetch={false} href={"/"}>
          <Image
            src={general.logo.data.attributes.url}
            alt="Smoking Hookah"
            width={0}
            height={0}
            className="w-16 h-16 sm:w-20 sm:h-20 p-1 bg-white rounded-full object-cover"
          />
        </Link>
        <div className="flex items-center justify-center flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-6 md:gap-8">
          {menu.links.map((item) => (
            <Link
              prefetch={false}
              href={item.url}
              key={item.name}
              className="text-white text-lg md:text-xl font-medium uppercase font-heading text-center"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
