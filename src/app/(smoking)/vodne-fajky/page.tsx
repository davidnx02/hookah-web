import { fetchAPI } from "@/lib/api";
import { SubpageHeading } from "../components/shared/subpage-heading";
import { TMaster } from "@/lib/types";

export default async function Page() {
  const masters = (await fetchAPI("masters?populate=*")) as TMaster[];

  return (
    <>
      <SubpageHeading name="Vodné fajky" image="/placeholder.png" />
    </>
  );
};