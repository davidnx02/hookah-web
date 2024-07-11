import Image from "next/image";
import Link from "next/link";

import { fetchAPI } from "@/lib/api";
import { getStrapiUrl } from "@/lib/get-strapi-url";
import { TGeneral, TPromotion } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Heading } from "../shared/heading";
import { Button } from "@/components/ui/button";

export async function GridInfo() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;
  const promotion = (await fetchAPI("promotion?populate[boxes][populate][0]=image")) as TPromotion;

  console.log(promotion);

  return (
    <section className="w-full flex flex-col items-center justify-items-center gap-0 mt-24 max-w-[1940px] mx-auto">
      {promotion.boxes.map((box, index) => (
        <div
          key={box.subtitle}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0"
        >
          <div
            className={cn(
              "col-span-1 h-[300px] sm:h-[490px] relative",
              index % 2 === 0 ? "lg:order-1" : "lg:order-2"
            )}
          >
            <Image
              src={getStrapiUrl(box?.image?.data?.attributes?.url)}
              alt={box.subtitle}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
            />
          </div>
          <div
            className={cn(
              "col-span-1 h-full flex flex-col items-center justify-center gap-6 px-6 xl:px-12 2xl:px-16 py-16 lg:py-0",
              index % 2 === 0 ? "lg:order-2" : "lg:order-1"
            )}
          >
            <Heading 
              subtitle={box.subtitle}
              title={box.title}
              className={{
                container: 'text-center justify-center items-center'
              }}
            />
            <p className="text-sm sm:text-base font-medium text-[#d9d9d9] text-center max-w-[800px]">{box.description}</p>
            <Button asChild>
              <Link prefetch={false} href={box.button_link}>
                {box.button_label}
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}
