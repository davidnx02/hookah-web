import { fetchAPI } from "@/lib/api";
import { MenuList } from "../components/menu/menu-list";
import { TCategory, TGeneral } from "@/lib/types";
import { QueryProvider } from "../components/query-provider";

type FetchResponse<T> = {
  data: T;
};

export async function generateMetadata() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return {
    title: 'Smoking Hookah | Menu',
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
      url: 'https://hookah.sk/menu'
    },
  };
}


export default async function Page() {
  const response: FetchResponse<TCategory[]> = await fetchAPI(
    "categories?populate=*"
  );
  const categories = response.data;



  return (
    <>
      <QueryProvider>
        <MenuList categories={categories} />
      </QueryProvider>
    </>
  );
}
