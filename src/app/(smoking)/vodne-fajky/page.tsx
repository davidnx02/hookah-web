import Image from "next/image";

import { fetchAPI } from "@/lib/api";
import { SubpageHeading } from "../components/shared/subpage-heading";
import { TMaster, TShishaPage } from "@/lib/types";
import { cn, fetchInfoSections } from "@/lib/utils";
import { InfoSection } from "../components/shared/info-section";
import { PricesTable } from "../components/shared/prices-table";
import { Heading } from "../components/shared/heading";
import { PreviewCard } from "../components/shared/preview-card";

export default async function Page() {
  const masters = (await fetchAPI("masters?populate=*").then(
    (r) => r.data
  )) as TMaster[];
  const page = (await fetchAPI("shisha-page?populate=*")) as TShishaPage;
  const infoSections = await fetchInfoSections("vodne-fajky");

  return (
    <>
      <SubpageHeading
        name="Vodné fajky"
        image={page.image.data.attributes.url}
      />
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
          <div className="max-w-[725px] w-full text-center flex flex-col items-center justify-center gap-4 sm:gap-5 lg:gap-6">
            <Heading title="VOĽBA MASJTRA" />
            <p className="text-sm sm:text-base text-center text-[#B9B9B9] leading-loose sm:leading-loose">
              Voľba Majstra ponúka jedinečné vodné fajky v Egeglass váze s
              prémiovými tabakmi a ingredienciami ako alkohol či citrusy. Každá
              fajka je originálny príbeh plný hudby a vášne!
            </p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {masters.map((master) => (
              <PreviewCard key={master.attributes.name} item={master} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
