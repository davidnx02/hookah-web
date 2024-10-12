import Image from "next/image";

import { fetchAPI } from "@/lib/api";
import { TLemonade } from "@/lib/types";
import { cn } from "@/lib/utils";

import { SubpageHeading } from "../components/shared/subpage-heading";
import { Heading } from "../components/shared/heading";
import { getStrapiUrl } from "@/lib/get-strapi-url";
import { CoalDesign } from "../components/shared/coal-design";

type FetchResponse<T> = {
  data: T;
};

export default async function Page() {
  const response: FetchResponse<TLemonade[]> = await fetchAPI(
    "lemonades?populate=*"
  );
  const lemonades = response.data;

  return (
    <>
      <SubpageHeading
        title="LIMONÁDY" // "Limonády"
        breadcrumbs={{ name: "Limonády", url: "limonady" }}
        image={"/hookah.jpg"}
      />
      <section className={cn("custom-section", 'relative')}>
      <CoalDesign variant={1} />
      <CoalDesign variant={2} className="top-1/3" />
      <CoalDesign variant={1} className="top-2/3" />
        <div
          className={cn(
            "custom-container",
            "flex flex-col items-center justify-center gap-24 my-12 sm:my-16 lg:my-32 relative z-10"
          )}
        >
          <div className="w-full text-center flex flex-col items-center justify-center gap-6">
            <Heading title="Výber <span>POCTIVÝCH</span> LIMONÁD" />
            <div
              className={cn("w-full max-w-[800px] text-center mx-auto about-us__description")}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>",
              }}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-16">
            {lemonades.map((lemonade, index) => (
              <div
                key={index}
                className={cn(
                  "w-full flex items-start justify-start gap-8 flex-col md:items-center md:justify-between lg:gap-16 xl:gap-24",
                  {
                    "md:flex-row-reverse": index % 2 === 0,
                    "md:flex-row": index % 2 !== 0,
                  }
                )}
              >
                <Image
                  src={getStrapiUrl(
                    lemonade.attributes.image.data.attributes.url
                  )}
                  alt={lemonade.attributes.name}
                  height={0}
                  width={0}
                  style={{ objectFit: "cover" }}
                  className="w-full h-[260px] sm:h-[350px] object-cover max-w-[380px] lg:max-w-[600px] object-center shadow-[0px_0px_80px_0px_rgba(255,254,250,0.05)]"
                  sizes="(max-width: 760px) 100vw, 680px"
                  quality={100}
                />
                <div className="w-full flex flex-col items-start justify-start gap-8 md:max-w-[600px]">
                  <Heading title={lemonade.attributes.name} className={{ title: 'text-accent' }} />
                  <div
                    className={cn("w-full master-choice__description")}
                    dangerouslySetInnerHTML={{
                      __html: `<p>${lemonade.attributes.description}</p>`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
