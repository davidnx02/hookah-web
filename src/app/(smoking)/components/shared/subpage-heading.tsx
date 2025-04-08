import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function SubpageHeading({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <section className={cn("custom-section", "relative pt-[180px] pb-16")}>
      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
        <h2 className="text-4xl px-5 py-[6px] bg-white uppercase font-bold font-heading text-primary">
          {name}
        </h2>
        <div className="flex items-center justify-start gap-1 text-base font-heading uppercase font-bold text-white">
          <Link prefetch={false} href={'/'} className="text-base font-heading uppercase font-bold">
            Domov
          </Link>
          /
          <span className="text-base font-heading uppercase font-bold">
            {name}
          </span>
        </div>
      </div>
      <div className="absolute w-full h-full inset-0 z-[1] bg-black/60" />
      <Image
        src={image}
        alt={name}
        width={0}
        height={0}
        className="absolute w-full h-full object-cover z-0 object-center inset-0"
        sizes="100bw"
        loading="eager"
      />
    </section>
  );
}
