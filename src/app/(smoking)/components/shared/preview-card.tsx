import Image from "next/image";

import type { TPreviewCard } from "@/lib/types";

import { cn } from "@/lib/utils";
import { HtmlContent } from "./html-content";

export function PreviewCard({ item }: { item: { attributes: TPreviewCard } }) {
  return (
    <div
      className={cn(
        "group overflow-hidden",
        "w-full col-span-1 h-[490px] sm:h-[480px] lg:h-[442px] relative pt-12 px-6 flex items-center justify-start gap-6"
      )}
    >
      <div
        className={cn(
          "absolute w-full left-0 top-12 translate-y-full z-10 flex flex-col items-center justify-start gap-6 px-6 h-full",
          "group-hover:translate-y-0 transition-all"
        )}
      >
        <h3 className="font-heading text-3xl font-medium text-center z-10 relative text-accent">
          {item.attributes.name}
        </h3>
        <HtmlContent
          content={item.attributes.description}
          className="w-full text-center"
          size="sm"
        />
      </div>
      <div
        className={cn(
          "absolute w-full h-full inset-0 z-[1] opacity-50 bg-black/70 transition-all",
          "group-hover:opacity-100 group-hover:backdrop-blur-sm"
        )}
      />
      <Image
        src={item.attributes.image.data.attributes.url}
        alt={item.attributes.name}
        width={0}
        height={0}
        className="absolute w-full h-full inset-0 z-0 object-cover object-center"
        sizes="400px"
      />
    </div>
  );
}
