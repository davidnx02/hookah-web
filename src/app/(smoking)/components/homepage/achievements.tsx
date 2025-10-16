import Image from "next/image";

import { cn } from "@/lib/utils";
import { Heading } from "../shared/heading";
import { TAchievement } from "@/lib/types";
import { HtmlContent } from "../shared/html-content";
import { AchievementAccordion } from "./achievement-accordion";
import { AchievementGallery } from "./achievement-gallery";

export function Achievements({ data }: { data: TAchievement }) {
  return (
    <section
      className={cn("custom-section", "py-16 sm:py-20 lg:py-24 relative")}
    >
      <Image
        src={"/smoke.png"}
        alt="Dym"
        width={0}
        height={0}
        className="absolute max-w-[1400px] z-0 h-auto w-full -top-10 -right-[100px] sm:-top-[300px] sm:-right-[300px] opacity-100 sm:opacity-60"
        sizes="1400px"
      />
      <div
        className={cn(
          "custom-container",
          "flex flex-col items-center justify-center gap-12 sm:gap-16 relative z-10"
        )}
      >
        <div className="w-full flex flex-col items-center justify-center gap-4 sm:gap-6">
          <Heading
            title={data.title}
            className="text-center max-w-[430px] w-full"
          />
          <HtmlContent
            content={data.description}
            className="max-w-[661px] w-full text-center"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-8 sm:gap-12 lg:gap-16 md:flex-row md:items-start md:justify-between">
          <AchievementAccordion achievements={data.achievements} />
          <AchievementGallery images={data.images.data} />
        </div>
      </div>
      <Image
        src={"/smoke.png"}
        alt="Dym"
        width={0}
        height={0}
        className="block sm:hidden absolute max-w-[1400px] z-0 h-auto w-[600px] sm:w-full top-[340px] -left-[300px] sm:-top-[300px] sm:-right-[300px] opacity-100 sm:opacity-60"
        sizes='(max-width: 640px) 100vw, 1400px'
      />
    </section>
  );
}
