import Image from "next/image";
import Link from "next/link";

import { TGeneral, TVisitUs } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Heading } from "../shared/heading";
import { HtmlContent } from "../shared/html-content";
import { Button } from "@/components/ui/button";
import { getStrapiUrl } from "@/lib/get-strapi-url";

import { TbClockCheck, TbMapPinDown, TbPhoneCall } from "react-icons/tb";

export function VisitUs({
  data,
  general,
}: {
  data: TVisitUs;
  general: TGeneral;
}) {
  return (
    <section className={cn("custom-section", "py-16 sm:py-20 lg:py-24 px-0 sm:px-5", 'visit-us__section')}>
      <div
        className={cn(
          "custom-container",
          "flex flex-col items-start justify-start md:items-center md:justify-between gap-12 lg:gap-16 md:flex-row"
        )}
      >
        <div className="md:max-w-[451px] w-full flex flex-col items-start justify-start gap-4 sm:gap-6 px-5 sm:px-0">
          <Heading title={data.title} />
          <HtmlContent
            content={data.description}
            className="flex flex-col items-start justify-start gap-4"
          />
          <div className="w-full grid grid-cols-2 gap-y-8 gap-x-6">
            <div className="w-full col-span-2 sm:col-span-1 flex items-start justify-start gap-4">
              <IconComponent
                icon={
                  <TbMapPinDown className="w-6 h-6 text-white" />
                }
              />
              <div className="flex flex-col items-start justify-start gap-4">
                <h5 className="text-xl sm:text-2xl font-medium text-white font-heading">
                  ADRESA
                </h5>
                <div className="w-full flex flex-col items-start justify-start gap-1">
                  <p className="text-[#b9b9b9] text-sm font-normal">
                    Smoking Hookah
                  </p>
                  <p className="text-[#b9b9b9] text-sm font-normal">
                    {general.address}
                  </p>
                  <p className="text-[#b9b9b9] text-sm font-normal">
                    {general.postcode} {general.city}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full col-span-2 sm:col-span-1 flex items-start justify-start gap-4 mb-4">
              <IconComponent
                icon={
                  <TbPhoneCall className="w-6 h-6 text-white" />
                }
              />
              <div className="flex flex-col items-start justify-start gap-4">
                <h5 className="text-xl sm:text-2xl font-medium text-white font-heading">
                  KONTAKT
                </h5>
                <div className="w-full flex flex-col items-start justify-start gap-1">
                  <p className="text-[#b9b9b9] text-sm font-normal">
                    +421 919 370 232
                  </p>
                  <p className="text-[#b9b9b9] text-sm font-normal">
                    {general.email}
                  </p>
                  <Link
                    target="_blank"
                    href={general.instagram_link}
                    className="text-[#b9b9b9] text-sm font-normal underline"
                  >
                    Instagram
                  </Link>
                  <Link
                    target="_blank"
                    href={general.facebook_link}
                    className="text-[#b9b9b9] text-sm font-normal underline"
                  >
                    Facebook
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full col-span-2 flex items-start justify-start gap-4 mb-4">
              <IconComponent
                icon={
                  <TbClockCheck className="w-6 h-6 text-white" />
                }
              />
              <div className="w-full flex flex-col items-start justify-start gap-4">
                <h5 className="text-xl sm:text-2xl font-medium text-white font-heading">
                  OTVÁRACIE HODINY
                </h5>
                <div className="w-full flex flex-col items-start justify-start gap-2">
                  <div className="w-full flex items-center justify-between gap-4">
                    <p className="text-sm text-[#b9b9b9] whitespace-nowrap shrink-0">
                      {data.hours_date_1}
                    </p>
                    <div className="flex-1 h-[1px] bg-primary" />
                    <p className="text-sm text-[#b9b9b9] whitespace-nowrap shrink-0">
                      {data.hours_time_1}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between gap-4">
                    <p className="text-sm text-[#b9b9b9] whitespace-nowrap shrink-0">
                      {data.hours_date_2}
                    </p>
                    <div className="flex-1 h-[1px] bg-primary" />
                    <p className="text-sm text-[#b9b9b9] whitespace-nowrap shrink-0">
                      {data.hours_time_2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            asChild
            variant={data.button.variant}
            className="w-full sm:w-fit"
          >
            <Link prefetch={false} href={data.button.url} target="_blank">
              {data.button.name}
            </Link>
          </Button>
        </div>
        <div className="flex items-start justify-center md:max-w-[510px] gap-6 w-full">
          <div className="basis-1/2 w-full relative h-[310px] sm:h-[400px] lg:h-[433px]">
            <div
              className={cn(
                "absolute w-full h-full z-[1]",
                "bg-gradient-to-t from-black/80 to-black/20"
              )}
            />
            <Image
              src={getStrapiUrl(data.image1.data.attributes.url)}
              alt={data.button?.name ?? ""}
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
              src={getStrapiUrl(data.image2.data.attributes.url)}
              alt={data.button?.name ?? ""}
              width={0}
              height={0}
              className="absolute w-full h-full object-cover z-0 object-center"
              sizes="(max-width: 640px) 45vw, 245px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function IconComponent({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="min-w-12 max-h-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
      {icon}
    </div>
  );
}
