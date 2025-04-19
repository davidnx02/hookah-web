import { SubpageHeading } from "../components/shared/subpage-heading";
import { fetchAPI } from "@/lib/api";
import { TCoursePage, TGeneral, TVisitUs } from "@/lib/types";
import { VisitUs } from "../components/homepage/visit-us";

export default async function Page() {
  const page = (await fetchAPI("kontakt-page?populate=*")) as TCoursePage;
  const general = (await fetchAPI("general?populate=*")) as TGeneral;
  const visitUs = (await fetchAPI("visit-us?populate=*")) as TVisitUs;

  return (
    <>
      <SubpageHeading name={page.name} image={page.image.data.attributes.url} />
      <VisitUs data={visitUs} general={general} />
    </>
  );
}
