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
          "py-20 sm:py-24",
          "ea-skola-majstra__section"
        )}
      >
        {infoSections.map((section, index) => (
          <InfoSection
            key={index}
            index={index}
            section={section}
            leftContent={<CourseModal courses={page.courses} />}
          />
        ))}
      </section>
    </>
  );
}
