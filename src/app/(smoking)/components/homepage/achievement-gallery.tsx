"use client";

import Image from "next/image";
import React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getStrapiUrl } from "@/lib/get-strapi-url";
import { TImage } from "@/lib/types";
import { cn } from "@/lib/utils";

export function AchievementGallery({ images }: { images: any[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  console.log(images);

  return (
    <div className="w-full md:max-w-[472px] flex flex-col items-start justify-start gap-4">
      <Carousel setApi={setApi} className="w-full transition-all">
        <CarouselContent className="w-full flex items-center justify-start gap-4  h-[387px] sm:h-[420px] lg:h-[505px]">
          {images.map((image, index) => {
            const isActive = current === index + 1;

            return (
              <CarouselItem
                key={index}
                className={cn(
                  "w-full relative p-0 m-0 transition-all",
                  isActive
                    ? "h-[387px] sm:h-[420px] lg:h-[505px] max-w-[252px] sm:max-w-[280px] lg:max-w-[328px]"
                    : "h-[313px] sm:h-[340px] lg:h-[410px] max-w-[200px] sm:max-w-[220px] lg:max-w-[260px]"
                )}
              >
                <div
                  className={cn(
                    "absolute w-full h-full inset-0 z-[1]",
                    "bg-gradient-to-t from-black/80 to-black/20"
                  )}
                />
                <Image
                  src={getStrapiUrl(image.attributes.url)}
                  alt="Achievement"
                  width={0}
                  height={0}
                  className="absolute w-full h-full object-cover object-center"
                  sizes="50vw"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="w-full flex items-center justify-between mt-4">
          <div className="flex items-center justify-start">
            <strong className="text-2xl sm:text-3xl font-semibold text-white">
              0{current}
            </strong>
            <p className="text-sm sm:text-base lg:text-xl text-white font-normal">
              /0{count}
            </p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 rounded-none bg-primary text-white border-none hover:bg-primary/90 hover:text-white" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 rounded-none bg-primary text-white border-none hover:bg-primary/90 hover:text-white" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
