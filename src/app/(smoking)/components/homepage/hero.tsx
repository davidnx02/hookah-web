import Image from "next/image";
import Link from "next/link";

import type { TGeneral, THero } from "@/lib/types";

import { getStrapiUrl } from "@/lib/get-strapi-url";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export async function Hero({
  hero,
  general,
}: {
  hero: THero;
  general: TGeneral;
}) {
  return (
    <section
      className={cn(
        "custom-section",
        "relative pt-[180px] lg:pt-48 lg:pb-48 pb-32 z-10"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-8 relative z-10">
        <Image
          src={general.logo.data.attributes.url}
          alt="Smoking Hookah"
          width={0}
          height={0}
          className="w-32 h-32 p-0.5 bg-white rounded-full"
          sizes="128px"
        />
        <h1 className="uppercase text-4xl sm:text-5xl font-bold text-center text-white flex flex-col font-heading items-center justify-center gap-2">
          <span className="bg-white py-1 px-6 text-primary w-fit">
            SMOKING HOOKAH
          </span>
          {hero.title}
        </h1>
        <div className="w-full grid grid-cols-2 gap-3 sm:flex items-center justify-center sm:gap-4">
          {hero.buttons.map((button) => (
            <Button asChild variant={button.variant} key={button.name}>
              <Link prefetch={false} href={button.url}>
                {button.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="absolute w-full h-full inset-0 z-[1] bg-black/50" />
      <Image 
        src={hero.image.data.attributes.url}
        alt={hero.title}
        width={0}
        height={0}
        className="absolute w-full h-full inset-0 z-0 object-cover object-center"
        sizes="100vw"
        loading="eager"
        priority={true}
      />
    </section>
  );
}
