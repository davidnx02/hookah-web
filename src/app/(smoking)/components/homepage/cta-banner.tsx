import Image from "next/image";
import Link from "next/link";

import type { TCTABanner } from "@/lib/types";

import { cn } from "@/lib/utils";
import { Heading } from "../shared/heading";
import { HtmlContent } from "../shared/html-content";
import { Button } from "@/components/ui/button";

export function CTABanner({ banner }: { banner: TCTABanner }) {
  return (
    <section
      className={cn("custom-section", "bg-[#111111] py-12 sm:py-14 lg:py-16 relative z-10")}
    >
      <div
        className={cn(
          "custom-container",
          "flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between gap-12 lg:gap-16"
        )}
      >
        <div className="md:max-w-[505px] w-full flex flex-col items-start justify-start gap-4 sm:gap-6">
          <Heading title={banner.title} />
          <HtmlContent content={banner.description} />
          <Button
            asChild
            variant={banner.button.variant}
            className="w-full sm:w-fit"
          >
            <Link prefetch={false} target="_blank" href={banner.button.url}>
              {banner.button.name}
            </Link>
          </Button>
        </div>
        <Image
          src={banner.image.data.attributes.url}
          alt={banner.button.name}
          width={0}
          height={0}
          className="w-full h-auto max-w-[457px] object-contain object-center"
          sizes="(max-width: 457px) 90vw, 457px"
        />
      </div>
    </section>
  );
}
