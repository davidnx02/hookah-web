import Image from "next/image";

import { fetchAPI } from "@/lib/api";
import { TGeneral, TLemonade } from "@/lib/types";
import { cn } from "@/lib/utils";



type FetchResponse<T> = {
  data: T;
};

export async function generateMetadata() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return {
    title: 'Smoking Hookah | Limonády',
    description: 'Objavte osviežujúce limonády v Smoking Hookah, kde nájdete jedinečné chute ako broskyňa na čaji Pu-erh, brusnicový refresher, mango a marakuja s kokosom, a mnoho ďalších. Doprajte si lahodný zážitok v štýlovom prostredí.',
    keywords: [
      'limonády Trnava',
      'osviežujúce limonády',
      'broskyňa na čaji Pu-erh',
      'brusnicový refresher',
      'malina a mäta',
      'mango a marakuja',
      'kokosová limonáda',
      'melón jahoda limonáda',
      'višňa a vanilka',
      'hookah bar Trnava',
      'degustačný lounge Trnava'
    ],
    openGraph: {
      title: 'Smoking Hookah | Limonády',
      description: 'Preskúmajte lahodné limonády v Smoking Hookah Trnava, ktoré ponúkajú unikátne kombinácie chutí ako broskyňa na čaji Pu-erh, malina s mätou, mango s kokosom a ďalšie osviežujúce nápoje.',
      image: general?.logo?.data?.attributes?.url ?? '',
      url: 'https://hookah.sk/limonady'
    },
  };
}


export default async function Page() {
  const response: FetchResponse<TLemonade[]> = await fetchAPI(
    "lemonades?populate=*"
  );
  const lemonades = response.data;

  return (
    <>
      {/* <SubpageHeading
        title="LIMONÁDY" // "Limonády"
        breadcrumbs={{ name: "Limonády", url: "limonady" }}
        image={"/limonady.jpg"}
      />
      <section className={cn("custom-section", 'relative')}>
      <CoalDesign variant={1} className="top-[240px] sm:top-0" />
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
                  "<p>Vychutnajte si osviežujúce limonády v Smoking Hookah. Od broskyne na čaji Pu-erh až po mango s marakujou a kokosom, naše nápoje ponúkajú jedinečné chute, ktoré potešia každého milovníka limonád.</p>",
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
                <div className="w-full flex flex-col items-start justify-start gap-4 md:max-w-[600px]">
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
      </section> */}
    </>
  );
}
