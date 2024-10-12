import Image from "next/image";
import Link from "next/link";

import { fetchAPI } from "@/lib/api";
import { TGeneral, TMaster } from "@/lib/types";
import { cn } from "@/lib/utils";

import { SubpageHeading } from "../components/shared/subpage-heading";
import { Heading } from "../components/shared/heading";
import { getStrapiUrl } from "@/lib/get-strapi-url";
import { Button } from "@/components/ui/button";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CoalDesign } from "../components/shared/coal-design";

type FetchResponse<T> = {
  data: T;
};

export async function generateMetadata() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return {
    title: 'Smoking Hookah | Voľba majstra',
    description: 'Objavte Voľbu majstra v Smoking Hookah, jedinečný zážitok s 6 prémiovými vodnými fajkami pripravenými v špeciálnych vázach s alkoholom, ovocím a sirupmi. Dokonalé kombinácie chutí vytvorené pre váš pôžitok.',
    keywords: [
      'Voľba majstra',
      'prémiové vodné fajky',
      'vodné fajky s alkoholom',
      'vodné fajky s ovocím',
      'vodné fajky s sirupmi',
      'degustačný lounge Trnava',
      'exkluzívne vodné fajky',
      'unikátne vodné fajky',
      'relax a vodné fajky Trnava',
      'hookah bar Trnava',
      'vodná fajka na mieru',
      'luxusné vodné fajky'
    ],
    openGraph: {
      title: 'Smoking Hookah | Voľba majstra',
      description: 'Vychutnajte si 6 unikátnych vodných fajok v rámci Voľby majstra v Smoking Hookah. Každá fajka je servírovaná v špeciálnej váze s alkoholom, ovocím a sirupmi, vytvorená pre dokonalú harmóniu chutí.',
      image: general?.logo?.data?.attributes?.url ?? '',
      url: 'https://hookah.sk/volba-majstra'
    },
  };
}

export default async function Page() {
  const response: FetchResponse<TMaster[]> = await fetchAPI(
    "masters?populate=*"
  );
  const masters = response.data;

  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return (
    <>
      <SubpageHeading
        title="VOĽBA MAJSTRA"
        breadcrumbs={{ name: "Voľba majstra", url: "volba-majstra" }}
        image={"/hookah.jpg"}
      />
      <section className={cn("custom-section", 'relative')}>
        <CoalDesign variant={1} className="top-[240px] sm:top-0" />
        <CoalDesign variant={2} className="top-1/3" />
        <div
          className={cn(
            "max-w-[1100px] w-full",
            "flex flex-col items-center justify-center gap-24 my-12 sm:my-16 lg:my-32 z-10"
          )}
        >
          <div className="w-full text-center flex flex-col items-center justify-center gap-6">
            <Heading title="Výber <span>MAJSTERSKÝCH VODNÝCH</span>" />
            <div
              className={cn(
                "w-full max-w-[800px] text-center mx-auto about-us__description"
              )}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Zažite exkluzívnu Voľbu majstra v Smoking Hookah - 6 jedinečných vodných fajok servírovaných v špeciálnych vázach s rôznymi druhmi alkoholu, ovocím a sirupmi. Dokonalé kombinácie chutí, ktoré obohatia váš zážitok z fajčenia vodnej fajky</p>",
              }}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-16">
            {masters.map((master, index) => (
              <div
                key={index}
                className={cn(
                  "w-full flex items-start justify-start gap-8 flex-col md:items-center lg:gap-16 xl:gap-32",
                  {
                    "md:flex-row-reverse": index % 2 === 0,
                    "md:flex-row": index % 2 !== 0,
                  }
                )}
              >
                <Image
                  src={getStrapiUrl(
                    master.attributes.image.data.attributes.url
                  )}
                  alt={master.attributes.name}
                  height={0}
                  width={0}
                  style={{ objectFit: "cover" }}
                  className="w-full h-[560px] sm:h-[600px] object-cover max-w-[400px] object-center shadow-[0px_0px_53px_0px_rgba(255,254,250,0.085)]"
                  sizes="400px"
                />
                <div className="w-full flex flex-col items-start justify-start gap-8">
                  <Heading
                    title={master.attributes.name}
                    className={{ title: "text-accent" }}
                  />
                  <div
                    className={cn("w-full master-choice__description")}
                    dangerouslySetInnerHTML={{
                      __html: `<p>${master.attributes.description}</p>`,
                    }}
                  />
                  <Button asChild>
                    <Link
                      prefetch={false}
                      target="_blank"
                      href={`tel:${general.phone}`}
                    >
                      Rezervovať si vodnú <MdOutlinePhoneInTalk size={20} />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
