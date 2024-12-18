import Image from "next/image";

import type { TAbout } from "@/lib/types";

import { getStrapiUrl } from "@/lib/get-strapi-url";
import { Heading } from "../shared/heading";
import { fetchAPI } from "@/lib/api";
import { cn } from "@/lib/utils";
import { LiaTrophySolid } from "react-icons/lia";
import { CoalDesign } from "../shared/coal-design";

export async function AboutUs() {
  const about = (await fetchAPI("about?populate=*")) as TAbout;

  return (
    <section className={cn("custom-section", "pt-24 relative")}>
      <CoalDesign variant={1} />
      <div
        className={cn(
          "custom-container",
          "flex items-center justify-center md:justify-between gap-16 md:gap-8 lg:gap-16 flex-col md:flex-row z-10"
        )}
      >
        <div className="max-w-[576px] w-full h-[540px] sm:h-[600px] md:h-[450px] lg:h-[700px] xl:h-[900px] relative">
          <Image
            src={getStrapiUrl(about?.image?.data?.attributes?.url)}
            alt={"Alex Aturov"}
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            sizes="100vw"
            quality={100}
            className="relative z-[5] "
          />
          <div className="w-[75%] h-full absolute top-0 left-1/2 -translate-x-1/2 z-0 border-[10px] border-primary" />
        </div>
        <div className="md:max-w-[643px] w-full flex flex-col items-starts justify-start gap-8">
          <Heading title={about.title} />
          <div
            className={cn("w-full text-[#d9d9d9]", "about-us__description")}
            dangerouslySetInnerHTML={{ __html: about.description }}
          />
          <div className="w-full flex flex-col sm:flex-row flex-wrap items-start justify-start gap-8">
            {about.trophies.map((trophy) => (
              <div
                key={trophy.competition}
                className="flex items-center justify-start gap-2.5"
              >
                <LiaTrophySolid size={64} className="text-accent" />
                <div className="w-fit flex flex-col gap-[-8px] text-white">
                  <p className="font-normal text-lg">{trophy.competition}</p>
                  <span className="font-bold text-sm text-accent  tracking-widest">
                    {trophy.place}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
