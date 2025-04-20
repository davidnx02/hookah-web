import { SubpageHeading } from "../components/shared/subpage-heading";
import { cn, fetchInfoSections } from "@/lib/utils";
import { fetchAPI } from "@/lib/api";
import { TDrinkPage, TPreviewCard } from "@/lib/types";
import { InfoSection } from "../components/shared/info-section";
import { PricesTable } from "../components/shared/prices-table";
import { Heading } from "../components/shared/heading";
import { PreviewCard } from "../components/shared/preview-card";
import Image from "next/image";

export default async function Page() {
  const lemonades = (await fetchAPI("lemonades?populate=*").then(
    (r) => r.data
  )) as TPreviewCard[];
  const page = (await fetchAPI("drink-page?populate=*")) as TDrinkPage;
  const infoSections = await fetchInfoSections("drinky");

  return (
    <>
      <SubpageHeading name={page.name} image={page.image.data.attributes.url} />
      <section className={cn("custom-section", "py-20 sm:py-24 relative !px-0")}>
        <Image
          src={"/smoke.png"}
          alt="Dym"
          width={0}
          height={0}
          className="absolute max-w-[1200px] z-0 h-auto w-full -top-[100px] -left-[200px] opacity-65 scale-x-[-1]"
          sizes="1200px"
        />
        {infoSections.map((section, index) => (
          <InfoSection
            key={index}
            index={index}
            section={section}
            rightContent={<PricesTable offers={page.offers} />}
            className={{ container: "md:items-start" }}
          />
        ))}
      </section>
      <section className={cn("custom-section", "pb-20 sm:pb-24 relative")}>
        <Image
          src={"/smoke.png"}
          alt="Dym"
          width={0}
          height={0}
          className="absolute max-w-[1200px] z-0 h-auto w-full top-[100px] -right-[200px] opacity-65"
          sizes="1200px"
        />
        <div
          className={cn(
            "custom-container",
            "flex flex-col items-center justify-center gap-12 sm:gap-14 lg:gap-16"
          )}
        >
          <div className="max-w-[740px] w-full text-center flex flex-col items-center justify-center gap-4 sm:gap-5 lg:gap-6">
            <Heading title="LIMONÁDY" />
            <p className="text-sm sm:text-base text-center text-[#B9B9B9] leading-loose sm:leading-loose">
              Naše limonády v Smoking Hookah Lounge sú svieže, plné ovocných
              chutí a originálnych kombinácií, ako broskyňa s čajom pu-erh či
              mango s kokosom. <br></br><br></br>Každý si u nás nájde tú svoju osviežujúcu chuť!
            </p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lemonades.map((lemonade) => (
              <PreviewCard key={lemonade.name} item={lemonade as any} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
