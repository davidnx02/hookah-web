import { fetchAPI } from "@/lib/api";
import { TCategory, TGeneral, TItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SubpageHeading } from "../components/shared/subpage-heading";
import { MenuModal } from "../components/menu-modal";
import Image from "next/image";

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
  const categories = response.data.filter(
    (category) => category.attributes.name !== "Voľba majstra"
  );

  const itemsRes: FetchResponse<TItem[]> = await fetchAPI(
    "items?populate=*&pagination[pageSize]=50"
  );
  const items = itemsRes.data;

  console.log(items.length);

  return (
    <>
      <SubpageHeading image={"/menu2.png"} name="MENU" />
      <section className={cn("custom-section", "py-20 sm:py-24 relative")}>
        <Image
          src={"/smoke.png"}
          alt="Dym"
          width={0}
          height={0}
          className="absolute max-w-[1200px] z-0 h-auto w-full -top-[50px] -left-[200px] opacity-65 scale-x-[-1]"
          sizes="1200px"
        />
        <div
          className={cn(
            "custom-container",
            "grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:gap-6 relative z-10"
          )}
        >
          {categories.map((category) => {
            // Filter items for the current category
            const categoryItems = items.filter(
              (item) =>
                item?.attributes?.category?.data?.attributes?.slug ===
                category.attributes.slug
            );

            return (
              <MenuModal
                key={category.attributes.name}
                category={category}
                offers={categoryItems.map((item) => ({
                  name: item.attributes.name,
                  description: item.attributes.description,
                  price: item.attributes.price,
                }))}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
