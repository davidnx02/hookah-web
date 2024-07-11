import { Hero } from "./components/homepage/hero";
import { AboutUs } from "./components/homepage/about-us";
import { OurMenu } from "./components/homepage/our-menu";
import { GridInfo } from "./components/homepage/grid-info";

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
