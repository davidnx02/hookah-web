import { fetchAPI } from "@/lib/api";
import { TMaster } from "@/lib/types";
import { cn } from "@/lib/utils";

import { SubpageHeading } from "../components/shared/subpage-heading";
import { Heading } from "../components/shared/heading";
import Image from "next/image";
import { getStrapiUrl } from "@/lib/get-strapi-url";

type FetchResponse<T> = {
  data: T;
};

export default async function Page() {
  const response: FetchResponse<TMaster[]> = await fetchAPI(
    "masters?populate=*"
  );
  const masters = response.data;

  return (
    <>
      <SubpageHeading
        title="VOĽBA MAJSTRA"
        breadcrumbs={{ name: "Voľba majstra", url: "volba-majstra" }}
        image={"/hookah.jpg"}
      />
      <section className={cn("custom-section")}>
        <div
          className={cn(
            "custom-container",
            "flex flex-col items-center justify-center gap-24 my-12 sm:my-16 lg:my-32"
          )}
        >
          <div className="w-full text-center flex flex-col items-center justify-center gap-6">
            <Heading title="Výber <span>MAJSTERSKÝCH VODNÝCH</span>" />
            <div
              className={cn("w-full max-w-[800px] text-center mx-auto about-us__description")}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>",
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
                  className="w-full h-[600px] object-cover max-w-[400px] object-center"
                  sizes="400px"
                />
                <div className="w-full flex flex-col items-start justify-start gap-8">
                  <Heading title={master.attributes.name} />
                  <div
                    className={cn("w-full master-choice__description")}
                    dangerouslySetInnerHTML={{
                      __html: `<p>${master.attributes.description}</p>`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
