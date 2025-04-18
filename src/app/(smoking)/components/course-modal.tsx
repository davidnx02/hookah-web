"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TCourse } from "@/lib/types";
import { useMediaQuery } from "@/lib/use-media-query";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
          <Content side={'bottom'} className="p-0 bg-black flex items-center justify-center md:max-w-[600px] h-[400px] border-none">
            <p className="text-4xl text-white font-heading font-medium">{course.name}</p>
          </Content>
        </Wrapper>
      ))}
    </div>
  );
}
