import { fetchAPI } from "@/lib/api";

import { TCategory, TGeneral } from "@/lib/types";
import { QueryProvider } from "../components/query-provider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SubpageHeading } from "../components/shared/subpage-heading";

type FetchResponse<T> = {
  data: T;
};

export async function generateMetadata() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return {
    title: "Smoking Hookah | Menu",
    description:
      "Objavte menu Smoking Hookah v srdci Trnavy s prémiovými vodnými fajkami, osviežujúcimi limonádami, alkoholickými aj nealkoholickými nápojmi. V ponuke nájdete aj čaje, kávu, pochutiny a doplnky k fajke. Relaxujte v štýlovom prostredí a vychutnajte si jedinečný zážitok",
    keywords: [
      "Smoking Hookah",
      "vodné fajky Trnava",
      "prémiové vodné fajky",
      "degustačný lounge Trnava",
      "limonády Trnava",
      "alkoholické nápoje",
      "nealkoholické nápoje",
      "čaje a káva",
      "doplnky k fajke",
      "pochutiny k vodným fajkám",
      "relax Trnava",
      "hookah bar Trnava",
      "fajčenie vodnej fajky",
    ],
    openGraph: {
      title: "Smoking Hookah | Menu",
      description:
        "Preskúmajte naše jedinečné menu v Smoking Hookah Trnava, kde ponúkame prémiové vodné fajky, osviežujúce limonády, alkoholické aj nealkoholické nápoje, čaje, kávu a pochutiny. Vytvárame dokonalý priestor pre relax a zábavu v srdci Trnavy.",
      image: general?.logo?.data?.attributes?.url ?? "",
      url: "https://hookah.sk/menu",
    },
  };
}

export default async function Page() {
  const response: FetchResponse<TCategory[]> = await fetchAPI(
    "categories?populate=*"
  );
  const categories = response.data.filter(category => category.attributes.name !== 'Voľba majstra');

  return (
    <>
    <SubpageHeading image={'/menu2.png'} name='MENU' />
      <section className={cn("custom-section", "py-20 sm:py-24")}>
        <div
          className={cn(
            "custom-container",
            "grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:gap-6"
          )}
        >
          {categories.map((category) => (
            <div
              key={category.attributes.name}
              className={cn(
                "aspect-square bg-[#151515] col-span-1 w-full flex flex-col items-center justify-center gap-2 sm:gap-4"
              )}
            >
              <Image
                src={category.attributes.background.data.attributes.url}
                alt={category.attributes.name}
                width={100}
                height={100}
              />
              <h3 className="font-heading text-lg sm:text-xl lg:text-2xl text-center text-white font-medium">
                {category.attributes.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
