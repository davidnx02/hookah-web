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
    title: 'Smoking Hookah | Exkluzívny Lounge v Trnave',
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
      title: 'Smoking Hookah | Exkluzívny Lounge v Trnave',
      description: 'Objavte prémiové vodné fajky a osviežujúce limonády v exkluzívnom Smoking Hookah lounge v centre Trnavy. Doprajte si jedinečný zážitok v štýlovom prostredí, kde sa relax a zábava stretávajú.',
      image: general?.logo?.data?.attributes?.url ?? '',
      url: 'https://hookah.sk'
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
