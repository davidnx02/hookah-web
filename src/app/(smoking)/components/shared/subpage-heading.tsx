import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { MdOutlineArrowRight } from "react-icons/md";

export const SubpageHeading = ({
  title,
  image,
  breadcrumbs,
}: {
  title: string;
  image: string;
  breadcrumbs: {
    name: string;
    url: string;
  };
}) => {
  return (
    <section className={cn("custom-section", "relative pt-32 md:pt-[200px] pb-16 md:pb-[100px]")}>
      <div
        className={cn(
          "custom-container",
          "flex flex-col items-start justify-start gap-2 relative z-[5]"
        )}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h2>
        <div className="w-fit flex items-center justify-start gap-3 font-bold">
          <Link
            prefetch={false}
            href={"/"}
            className="text-sm sm:text-base md:text-lg xl:text-xl text-white"
          >
            Domov
          </Link>
          <MdOutlineArrowRight size={20} className="text-white" />
          <Link
            prefetch={false}
            href={`/${breadcrumbs.url}`}
            className="text-sm sm:text-base md:text-lg xl:text-xl text-primary"
          >
            {breadcrumbs.name}
          </Link>
        </div>
      </div>
      <div className="w-full h-full inset-0 z-[1] absolute bg-black/50" />
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
        className="absolute inset-0 w-full h-full z-[0]"
        priority={true}
        loading="eager"
        quality={100}
      />
    </section>
  );
};
