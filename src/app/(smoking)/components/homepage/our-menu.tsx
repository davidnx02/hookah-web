import Image from "next/image";
import Link from "next/link";

import { fetchAPI } from "@/lib/api";
import { THookah, TOurMenu } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Heading } from "../shared/heading";
import { getStrapiUrl } from "@/lib/get-strapi-url";
import { Button } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa";

export async function OurMenu() {
  const our_menu = (await fetchAPI("our-menu?populate[hookahs][populate][0]=image")) as TOurMenu;

  return (
    <section className={cn("custom-section", "pt-24 relative")}>
      <div
        className={cn(
          "max-w-[1024px] w-full",
          "flex flex-col items-center justify-center gap-12"
        )}
      >
        <Heading
          subtitle={our_menu?.subtitle}
          title={our_menu?.title}
          className={{
            container: "text-center items-center justify-center",
          }}
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {our_menu?.hookahs?.map((hookah) => (
            <HookahCard hookah={hookah} key={hookah.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

const HookahCard = ({ hookah }: { hookah: THookah }) => {
  return (
    <div
      className={cn(
        "group transition-all",
        "col-span-1 w-full h-[440px] relative overflow-hidden"
      )}
    >
      <Image
        src={getStrapiUrl(hookah.image.data.attributes.url)}
        alt={hookah.name}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute w-full h-full inset-0 z-[1] group-hover:scale-105 transition-all"
        quality={100}
      />
      <div
        className={cn(
          "group-hover:-translate-y-0 transition-all duration-200 ease-in-out z-[6]",
          "absolute top-0 left-0 w-full h-full z-[5] bg-black/75 flex items-center justify-start flex-col px-6 pt-16 translate-y-full gap-6"
        )}
      >
        <h5 className="text-center text-2xl text-accent font-bold uppercase">
          {hookah.name}
        </h5>
        <p className="text-center text-sm text-[#D9D9D9] leading-6">
          {hookah.descripiton}
        </p>
        <Button asChild className="absolute right-0 bottom-16">
          <Link prefetch={false} href={"/menu"}>
            Zobraziť menu
            <FaAngleRight
              className="text-white"
              width={24}
              height={24}
            />
          </Link>
        </Button>
      </div>
    </div>
  );
};
