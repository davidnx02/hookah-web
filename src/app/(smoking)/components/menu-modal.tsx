"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TCategory } from "@/lib/types";
import { useMediaQuery } from "@/lib/use-media-query";
import { cn } from "@/lib/utils";

export function MenuModal({
  category,
  offers,
}: {
  category: TCategory;
  offers: { name: string; description?: string; price: string }[];
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const Wrapper = isMobile ? Sheet : Dialog;
  const Trigger = isMobile ? SheetTrigger : DialogTrigger;
  const Content = isMobile ? SheetContent : DialogContent;

  return (
    <Wrapper key={category.attributes.name}>
      <Trigger className="aspect-square bg-[#151515] col-span-1 w-full flex flex-col items-center justify-center gap-2 sm:gap-4 hover:opacity-90 transition-all">
        <Image
          src={category.attributes.background.data.attributes.url}
          alt={category.attributes.name}
          width={0}
          height={0}
          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
        />
        <h3 className="font-heading text-lg sm:text-xl lg:text-2xl text-center text-white font-medium">
          {category.attributes.name}
        </h3>
      </Trigger>
      <Content
        side={"bottom"}
        className={cn(
          "p-0 bg-black flex flex-col items-center justify-center w-full border-none overflow-y-scroll max-h-[90vh] md:max-h-[80vh] rounded-none md:max-w-[460px]",
          "course-modal__content",
          "hide-scroll-bar"
        )}
      >
        <div className="md:max-w-[460px] w-full px-4 sm:px-6 lg:px-8 py-8 bg-[#111112] flex flex-col items-start justify-start gap-4 relative z-10">
          {offers.map((offer, index) => (
            <div
              key={offer.name}
              className={cn(
                "w-full flex flex-col items-start justify-start gap-2",
                index !== offers.length - 1 && "border-b border-white/30 pb-4"
              )}
            >
              <div className="w-full flex items-end justify-between gap-0.5">
                <p className="text-lg sm:text-xl lg:text-2xl font-heading text-white font-normal whitespace-nowrap">
                  {offer.name}
                </p>
                <div
                  className="flex-grow -translate-y-2 opacity-25"
                  style={{
                    borderBottom: "2px dotted white",
                    margin: "0 8px",
                  }}
                />
                <p className="text-lg sm:text-xl lg:text-2xl font-heading text-white font-normal whitespace-nowrap">
                  {offer.price}€
                </p>
              </div>
              {offer.description && (
                <p className="text-xs text-[#B9B9B9] font-normal">
                  {offer.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </Content>
    </Wrapper>
  );
}
