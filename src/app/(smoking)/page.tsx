import {
  TAchievement,
  TCTABanner,
  TGeneral,
  THero,
  TStats,
  TVisitUs,
} from "@/lib/types";
import { fetchAPI } from "@/lib/api";
import { Stats } from "./components/homepage/stats";
import { InfoSection } from "./components/shared/info-section";
import { CTABanner } from "./components/homepage/cta-banner";
import { Achievements } from "./components/homepage/achievements";
import { VisitUs } from "./components/homepage/visit-us";
import { Hero } from "./components/homepage/hero";
import { cn, fetchInfoSections } from "@/lib/utils";
import Image from "next/image";

export async function generateMetadata() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return {
    title: "Smoking Hookah | Degustačný lounge",
    description:
      "Vitajte v Smoking Hookah, prémiovom degustačnom lounge v centre Trnavy. Ponúkame najlepšie vodné fajky, osviežujúce limonády a skvelú atmosféru pre váš relax a zábavu. Navštívte nás a užite si jedinečný zážitok.",
    keywords: [
      "Smoking Hookah",
      "vodné fajky Trnava",
      "prémiové vodné fajky",
      "hookah bar Trnava",
      "degustačný lounge Trnava",
      "relax Trnava",
      "vodná fajka",
      "limonády Trnava",
      "hookah lounge",
      "vodné fajky a limonády",
      "relax a zábava Trnava",
      "degustácia vodných fajok",
    ],
    openGraph: {
      title: "Smoking Hookah | Degustačný lounge",
      description:
        "Objavte prémiové vodné fajky a osviežujúce limonády v exkluzívnom Smoking Hookah lounge v centre Trnavy. Doprajte si jedinečný zážitok v štýlovom prostredí, kde sa relax a zábava stretávajú.",
      image: general?.logo?.data?.attributes?.url ?? "",
      url: "https://hookah.sk",
    },
  };
}

export default async function Home() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;
  const hero = (await fetchAPI("hero?populate=*")) as THero;
  const stat = (await fetchAPI("stat?populate=*")) as TStats;
  const ctaBanner = (await fetchAPI("cta-banner?populate=*")) as TCTABanner;
  const achievements = (await fetchAPI(
    "achievement?populate=*"
  )) as TAchievement;
  const visitUs = (await fetchAPI("visit-us?populate=*")) as TVisitUs;
  const infoSections = await fetchInfoSections("home");

  return (
    <>
      <Hero general={general} hero={hero} />
      <Stats stats={stat.stat} />
      <section
        className={cn(
          "custom-section",
          "ea-homepage__info-section",
          "gap-24 py-16 sm:py-20 lg:py-24 relative"
        )}
      >
        {infoSections.map((section, index) => (
          <InfoSection key={section.id} section={section} index={index} />
        ))}
        <Image
          src={"/smoke.png"}
          alt="Dym"
          width={0}
          height={0}
          className="absolute max-w-[1400px] z-0 h-auto w-full -bottom-[250px] -right-[200px] opacity-65"
          sizes="1400px"
        />
      </section>
      <CTABanner banner={ctaBanner} />
      <Achievements data={achievements} />
      {/* <Gallery /> */}
      <VisitUs data={visitUs} general={general} />
    </>
  );
}
