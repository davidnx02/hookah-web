import Image from "next/image";
import Link from "next/link";

import { fetchAPI } from "@/lib/api";
import { TGeneral, THero } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Heading } from "../shared/heading";
import { Button } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa";
import { getStrapiUrl } from "@/lib/get-strapi-url";

export async function Hero() {
  const hero = (await fetchAPI("hero?populate=*")) as THero;
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return (
    <section className={cn("custom-section", "relative pt-[160px] sm:pt-[220px] pb-[200px] sm:pb-[160px]")}>
      <div
        className={cn(
          "custom-container",
          "flex flex-col items-start justify-start gap-16 relative z-[5]"
        )}
      >
        <div className="w-full flex flex-col items-start justify-start gap-8">
          <Heading
            title={hero.title}
            className={{
              subtitle: 'hero__subtitle',
              title: 'hero__title',
            }}
          />
          <p className="text-[#d9d9d9] font-medium max-w-[650px] w-full text-sm sm:text-base lg:text-lg">
            {hero.description}
          </p>
        </div>
        <Button
          asChild
          className="bg-transparent border-2 border-white text-white hover:bg-transparent hover:opacity-90 transition"
        >
          <Link prefetch={false} href={`https://wa.me/${general.phone}`} target="_blank">
            {hero.button_label}
            <FaAngleRight
              className="text-white"
              width={24}
              height={24}
            />
          </Link>
        </Button>
      </div>
      <div className="w-full h-full absolute inset-0 bg-black/45 z-[2]" />
      <Image
        src={getStrapiUrl(hero.background.data.attributes.url)}
        alt="Degustation Lounge Smoking Hookah"
        fill
        className="absolute w-full h-full inset-0 z-[1] object-cover object-center"
        sizes="100vw"
        priority={true}
        loading="eager"
      />
    </section>
  );
}
