import Image from "next/image";

import { cn } from "@/lib/utils";
import { SubpageHeading } from "../components/shared/subpage-heading";
import { Heading } from "../components/shared/heading";
import { fetchAPI } from "@/lib/api";
import { TCatering, TGeneral } from "@/lib/types";
import { CateringService } from "../components/catering/catering-service";
import { getStrapiUrl } from "@/lib/get-strapi-url";
import { CoalDesign } from "../components/shared/coal-design";

export async function generateMetadata() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return {
    title: "Smoking Hookah | Catering",
    description:
      "Využite prémiové cateringové služby Smoking Hookah pre vaše podujatia. Ponúkame vodné fajky, jedinečné limonády a nápoje priamo na vašu oslavu, aby ste si mohli dopriať exkluzívny zážitok kdekoľvek.",
    keywords: [
      "catering Trnava",
      "catering vodné fajky",
      "hookah catering",
      "vodné fajky na oslavu",
      "cateringové služby Trnava",
      "vodné fajky na event",
      "prenosné vodné fajky",
      "exkluzívny catering Trnava",
      "catering na podujatia",
      "fajčenie vodnej fajky na evente",
    ],
    openGraph: {
      title: "Smoking Hookah | Catering",
      description:
        "Doprajte si jedinečný zážitok s cateringom od Smoking Hookah. Ponúkame vodné fajky a osviežujúce limonády priamo na vaše podujatie pre exkluzívnu atmosféru.",
      image: general?.logo?.data?.attributes?.url ?? "",
      url: "https://hookah.sk/catering",
    },
  };
}

export default async function Page() {
  const catering = (await fetchAPI("catering?populate=*")) as TCatering;

  return (
    <>
      <SubpageHeading
        title="Catering"
        image="/catering-auto.jpg"
        breadcrumbs={{
          name: "Catering",
          url: "catering",
        }}
      />
      <section className={cn("custom-section", "relative")}>
        <CoalDesign variant={1} />
        <CoalDesign variant={2} className="top-full" />
        <div className="w-full flex-col items-center justify-center relative z-10">
          <Heading
            title={catering.title}
            className={{
              container: "text-center items-center justify-center mt-16",
            }}
          />
          <div
            className={cn(
              "w-full max-w-[800px] text-center mx-auto about-us__description mt-8"
            )}
            dangerouslySetInnerHTML={{
              __html:
                "<p>Vychutnajte si špičkové cateringové služby od Smoking Hookah na vašich podujatiach. Ponúkame vodné fajky a osviežujúce nápoje, ktoré prinesú jedinečný zážitok priamo na vašu oslavu.</p>",
            }}
          />
        </div>
        <div
          className={cn(
            "custom-container",
            "flex flex-col items-center justify-center gap-16 lg:gap-12 mt-16 relative z-10"
          )}
        >
          {catering.services.map((service, index) => (
            <>
              <CateringService
                service={service}
                index={index}
                key={service.name}
              />
            </>
          ))}
        </div>
      </section>
      <section className={cn("custom-section", "my-24")}>
        <div
          className={cn(
            "custom-container",
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          )}
        >
          {catering.gallery.data.map((image, index) => (
            <div
              key={index}
              className="w-full col-span-1 aspect-square relative"
            >
              <Image
                src={getStrapiUrl(image?.attributes?.url)}
                alt={image?.attributes?.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
