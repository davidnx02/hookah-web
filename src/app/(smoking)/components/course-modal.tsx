"use client";

import Image from "next/image";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TCourse } from "@/lib/types";
import { useMediaQuery } from "@/lib/use-media-query";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HtmlContent } from "./shared/html-content";
import { cn, flattenRichTextToHTML } from "@/lib/utils";

export function CourseModal({ courses }: { courses: TCourse[] }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const Wrapper = isMobile ? Sheet : Dialog;
  const Trigger = isMobile ? SheetTrigger : DialogTrigger;
  const Content = isMobile ? SheetContent : DialogContent;

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 sm:gap-5">
      {courses.map((course, index) => (
        <Wrapper key={course.name}>
          <Trigger className="p-4 sm:py-5 sm:px-5 lg:px-6 w-full bg-[#151515] flex items-center justify-between hover:opacity-90 transition-all">
            <div className="flex items-center justify-start gap-4">
              <span className="text-2xl sm:text-3xl font-medium font-heading text-accent">
                0{index + 1}
              </span>
              <div className="w-[1px] h-6 sm:h-[30px] bg-white/30" />
              <h4 className="text-2xl sm:text-3xl font-heading font-medium text-white">
                {course.name}
              </h4>
            </div>
            <MdOutlineKeyboardArrowRight size={24} className="text-white" />
          </Trigger>
          <Content
            side={"bottom"}
            className={cn(
              "p-0 bg-[#151515] flex flex-col items-start justify-start md:max-w-[800px] border-none overflow-y-scroll max-h-[90vh] md:max-h-[80vh] rounded-none",
              "course-modal__content",
              "hide-scroll-bar"
            )}
          >
            <div className="w-full flex flex-col items-start justify-start gap-8 px-6 py-8 sm:py-10 sm:px-12">
              <div className="w-full flex flex-col items-start justify-start sm:flex-row  sm:items-center sm:justify-between gap-2 sm:gap-4">
                <h4 className="text-4xl font-medium uppercase text-white font-heading">
                  {course.name}
                </h4>
                <span className="font-heading font-medium text-2xl sm:text-3xl text-accent whitespace-nowrap">
                  {course.price}
                </span>
              </div>
              <HtmlContent
                content={flattenRichTextToHTML(course.description as any)}
              />
            </div>
          </Content>
        </Wrapper>
      ))}
    </div>
  );
}
