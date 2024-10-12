import { Hero } from "./components/homepage/hero";
import { AboutUs } from "./components/homepage/about-us";
import { OurMenu } from "./components/homepage/our-menu";
import { GridInfo } from "./components/homepage/grid-info";
import { TGeneral } from "@/lib/types";
import { fetchAPI } from "@/lib/api";

export async function generateMetadata() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return {
    title: 'Smoking Hookah | Hlavná stránka',
    description: 'Objavte menu Smoking Hookah v srdci Trnavy s prémiovými vodnými fajkami, osviežujúcimi limonádami, alkoholickými aj nealkoholickými nápojmi. V ponuke nájdete aj čaje, kávu, pochutiny a doplnky k fajke. Relaxujte v štýlovom prostredí a vychutnajte si jedinečný zážitok',
    keywords: [
      'Smoking Hookah',
      'vodné fajky Trnava',
      'prémiové vodné fajky',
      'degustačný lounge Trnava',
      'limonády Trnava',
      'alkoholické nápoje',
      'nealkoholické nápoje',
      'čaje a káva',
      'doplnky k fajke',
      'pochutiny k vodným fajkám',
      'relax Trnava',
      'hookah bar Trnava',
      'fajčenie vodnej fajky'
    ],    
    openGraph: {
      title: 'Smoking Hookah | Menu',
      description: 'Preskúmajte naše jedinečné menu v Smoking Hookah Trnava, kde ponúkame prémiové vodné fajky, osviežujúce limonády, alkoholické aj nealkoholické nápoje, čaje, kávu a pochutiny. Vytvárame dokonalý priestor pre relax a zábavu v srdci Trnavy.',
      image: general?.logo?.data?.attributes?.url ?? '',
      url: 'https://yourwebsite.com/menu'
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
