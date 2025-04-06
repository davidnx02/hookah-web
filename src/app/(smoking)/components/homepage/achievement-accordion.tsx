"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Achievement } from "@/lib/types";
import { cn } from "@/lib/utils";
import { HtmlContent } from "../shared/html-content";

export function AchievementAccordion({
  achievements,
}: {
  achievements: Achievement[];
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn(
        "md:max-w-[488px] w-full flex flex-col items-start justify-start gap-8"
      )}
    >
      {achievements.map((achievement) => (
        <AccordionItem
          value={achievement.name}
          key={achievement.name}
          className="bg-[#0A0A0A] relative border-none w-full"
        >
          <span className="absolute left-4 -top-4 sm:-top-5 text-accent font-medium text-lg sm:text-2xl lg:text-3xl font-heading">
            {achievement.place}
          </span>
          <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-medium text-white hover:no-underline px-4 sm:px-5 lg:px-8 py-5 sm:py-6 lg:py-8 gap-3">
            {achievement.name}
          </AccordionTrigger>
          <AccordionContent className="pt-0 pb-5 sm:pb-6 lg:pb-8 px-4 sm:px-5 lg:px-8">
            <HtmlContent
              content={achievement.description}
              className="w-full text-left"
              size="sm"
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
