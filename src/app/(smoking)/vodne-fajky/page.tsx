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
      <SubpageHeading name="Vodné fajky" image={page.image.data.attributes.url} />
      <section className={cn("custom-section", "py-20 sm:py-24")}>
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
      <section className={cn("custom-section", "pb-20 sm:pb-24")}>
        <div
          className={cn(
            "custom-container",
            "flex flex-col items-center justify-center gap-12 sm:gap-14 lg:gap-16"
          )}
        >
          <div className="max-w-[657px] w-full text-center flex flex-col items-center justify-center gap-4 sm:gap-5 lg:gap-6">
            <Heading title="VOĽBA MASJTRA" />
            <p className="text-sm sm:text-base text-center text-[#B9B9B9] leading-loose sm:leading-loose">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {masters.map((master) => (
              <PreviewCard
                key={master.attributes.name}
                item={master.attributes}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
