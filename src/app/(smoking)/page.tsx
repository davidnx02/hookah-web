import { Hero } from "./components/homepage/hero";
import { AboutUs } from "./components/homepage/about-us";
import { OurMenu } from "./components/homepage/our-menu";
import { GridInfo } from "./components/homepage/grid-info";
import { TGeneral } from "@/lib/types";
import { fetchAPI } from "@/lib/api";

export async function generateMetadata() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return {
    title: 'Smoking Hookah | Degustačný lounge',
    description: 'Vitajte v Smoking Hookah, prémiovom degustačnom lounge v centre Trnavy. Ponúkame najlepšie vodné fajky, osviežujúce limonády a skvelú atmosféru pre váš relax a zábavu. Navštívte nás a užite si jedinečný zážitok.',
    keywords: [
      'Smoking Hookah',
      'vodné fajky Trnava',
      'prémiové vodné fajky',
      'hookah bar Trnava',
      'degustačný lounge Trnava',
      'relax Trnava',
      'vodná fajka',
      'limonády Trnava',
      'hookah lounge',
      'vodné fajky a limonády',
      'relax a zábava Trnava',
      'degustácia vodných fajok'
    ],    
    openGraph: {
      title: 'Smoking Hookah | Degustačný lounge',
      description: 'Objavte prémiové vodné fajky a osviežujúce limonády v exkluzívnom Smoking Hookah lounge v centre Trnavy. Doprajte si jedinečný zážitok v štýlovom prostredí, kde sa relax a zábava stretávajú.',
      image: general?.logo?.data?.attributes?.url ?? '',
      url: 'https://hookah.sk'
    },
  };
}

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurMenu />
      <GridInfo />
    </>
  );
}
