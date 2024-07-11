import { cn } from "@/lib/utils";
import { SubpageHeading } from "../components/shared/subpage-heading";
import { Heading } from "../components/shared/heading";
import { fetchAPI } from "@/lib/api";
import { TCatering } from "@/lib/types";
import { CateringService } from "../components/catering/catering-service";
import Image from "next/image";
import { getStrapiUrl } from "@/lib/get-strapi-url";

export default async function Page() {
  const catering = (await fetchAPI("catering?populate=*")) as TCatering;

  console.log(catering.gallery.data);

  return (
    <>
      <SubpageHeading
        title="Catering"
        image="/placeholder.png"
        breadcrumbs={{
          name: "Catering",
          url: "catering",
        }}
      />
      <section className={cn("custom-section")}>
        <Heading
          subtitle={catering.subtitle}
          title={catering.title}
          className={{
            container: "text-center items-center justify-center mt-16",
          }}
        />
        <div
          className={cn(
            "custom-container",
            "flex flex-col items-center justify-center gap-12 mt-16"
          )}
        >
          {catering.services.map((service, index) => (
            <>
              <CateringService
                service={service}
                index={index}
                key={service.name}
              />
            </>
          ))}
        </div>
      </section>
      <section className={cn("custom-section", 'my-24')}>
        <div
          className={cn(
            "custom-container",
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          )}
        >
          {catering.gallery.data.map((image, index) => (
            <div key={index} className='w-full col-span-1 aspect-square relative'>
              <Image 
                src={getStrapiUrl(image?.attributes?.url)}
                alt={image?.attributes?.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
