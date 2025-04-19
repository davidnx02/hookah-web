import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { TInfoSection } from "@/lib/types";
import { HtmlContent } from "./html-content";
import { Button } from "@/components/ui/button";
import { Heading } from "./heading";

export function InfoSection({
  section,
  index,
  leftContent,
  rightContent,
  className
}: {
  section: TInfoSection;
  index: number;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: {
    container?: string;
  }
}) {
  return (
    <div
      className={cn(
        "custom-container",
        "flex flex-col items-start justify-start md:items-center md:justify-between gap-12 lg:gap-16",
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
        className?.container,
      )}
    >
      <div className="md:max-w-[451px] w-full flex flex-col items-start justify-start gap-4 sm:gap-6 px-5 sm:px-0">
        <Heading title={section.title} />
        <HtmlContent
          content={section.description}
          className="flex flex-col items-start justify-start gap-4"
        />
        {section.button && (
          <Button
            asChild
            variant={section.button.variant}
            className="w-full sm:w-fit"
          >
            <Link prefetch={false} href={section.button.url}>
              {section.button.name}
            </Link>
          </Button>
        )}
        {leftContent && leftContent}
      </div>

      <div className="flex items-start justify-center md:max-w-[510px] gap-6 w-full">
        {section.image1.url && section.image2.url && (
          <>
            <div className="basis-1/2 w-full relative h-[310px] sm:h-[400px] lg:h-[433px]">
              <div
                className={cn(
                  "absolute w-full h-full z-[1]",
                  "bg-gradient-to-t from-black/80 to-black/20"
                )}
              />
              <Image
                src={section.image1.url}
                alt={section.button?.name ?? ""}
                width={0}
                height={0}
                className="absolute w-full h-full object-cover z-0 object-center"
                sizes="(max-width: 640px) 45vw, 245px"
              />
            </div>
            <div className="basis-1/2 w-full relative h-[310px] sm:h-[400px] lg:h-[433px] mt-6 sm:mt-8">
              <div
                className={cn(
                  "absolute w-full h-full z-[1]",
                  "bg-gradient-to-t from-black/80 to-black/20"
                )}
              />
              <Image
                src={section.image2.url}
                alt={section.button?.name ?? ""}
                width={0}
                height={0}
                className="absolute w-full h-full object-cover z-0 object-center"
                sizes="(max-width: 640px) 45vw, 245px"
              />
            </div>
          </>
        )}
        {rightContent && rightContent}
      </div>
    </div>
  );
}
