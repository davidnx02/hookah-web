import Image from "next/image";

import { SubpageHeading } from "../components/shared/subpage-heading";
import { cn, fetchInfoSections } from "@/lib/utils";
import { fetchAPI } from "@/lib/api";
import { TCoursePage } from "@/lib/types";
import { InfoSection } from "../components/shared/info-section";
import { CourseModal } from "../components/course-modal";

export default async function Page() {
  const page = (await fetchAPI(
    "course-page?populate[image]=*&populate[courses][populate]=image"
  )) as TCoursePage;
  const infoSections = await fetchInfoSections("skola-majstra");

  return (
    <>
      <SubpageHeading name={page.name} image={page.image.data.attributes.url} />
      <section
        className={cn(
          "custom-section",
          "py-20 sm:py-24 relative",
          "ea-skola-majstra__section"
        )}
      >
        <Image
          src={"/smoke.png"}
          alt="Dym"
          width={0}
          height={0}
          className="absolute max-w-[1200px] z-0 h-auto w-full -top-[100px] -left-[200px] opacity-65 scale-x-[-1]"
          sizes="1200px"
        />
        {infoSections.map((section, index) => (
          <InfoSection
            key={index}
            index={index}
            section={section}
            leftContent={<CourseModal courses={page.courses} />}
            className={{ container: 'relative z-10' }}
          />
        ))}
      </section>
    </>
  );
}
