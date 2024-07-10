import { TGeneral } from "@/lib/types";
import { fetchAPI } from "@/lib/api";

import { Hero } from "./components/homepage/hero";
import { AboutUs } from "./components/homepage/about-us";
import { OurMenu } from "./components/homepage/our-menu";
import { GridInfo } from "./components/homepage/grid-info";

export default async function Home() {
  const data = (await fetchAPI("general?populate=*")) as TGeneral;

  return (
    <>
      <Hero />
      <AboutUs />
      <OurMenu />
      <GridInfo />
    </>
  );
}
