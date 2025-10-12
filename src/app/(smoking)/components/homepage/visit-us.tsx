import Image from "next/image";
import Link from "next/link";

import { TGeneral, TVisitUs } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Heading } from "../shared/heading";
import { HtmlContent } from "../shared/html-content";
import { Button } from "@/components/ui/button";

import { TbClockCheck, TbMapPinDown, TbPhoneCall } from "react-icons/tb";

export function VisitUs({
  data,
  general,
  showSmoke = false,
}: {
  data: TVisitUs;
  general: TGeneral;
  showSmoke?: boolean;
}) {
  return (
    <section
      className={cn(
        "custom-section",
        "py-16 sm:py-20 lg:py-24 px-0 sm:px-5 relative z-10",
        "visit-us__section"
      )}
    >
      {showSmoke && (
        <Image
          src={"/smoke.png"}
          alt="Dym"
          width={0}
          height={0}
          className="absolute max-w-[1200px] z-0 h-auto w-full -top-[100px] -left-[200px] opacity-65 scale-x-[-1]"
          sizes="1200px"
        />
      )}
      <div
        className={cn(
          "custom-container",
          "flex flex-col items-start justify-start md:items-center md:justify-between gap-12 lg:gap-16 md:flex-row"
        )}
      >
        <div className="md:max-w-[451px] w-full flex flex-col items-start justify-start gap-4 sm:gap-6 px-5 sm:px-0">
          <Heading title={data.title} />
          <HtmlContent
            content={
              data.description
            }
            className="flex flex-col items-start justify-start gap-4"
          />
          <div className="w-full grid grid-cols-2 gap-y-8 gap-x-6">
            <div className="w-full col-span-2 sm:col-span-1 flex items-start justify-start gap-4">
              <IconComponent
                icon={<TbMapPinDown className="w-6 h-6 text-white" />}
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
                  917 01 {general.city}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full col-span-2 sm:col-span-1 flex items-start justify-start gap-4 mb-4">
              <IconComponent
                icon={<TbPhoneCall className="w-6 h-6 text-white" />}
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
                icon={<TbClockCheck className="w-6 h-6 text-white" />}
              />
              <div className="w-full flex flex-col items-start justify-start gap-4">
                <h5 className="text-xl sm:text-2xl font-medium text-white font-heading">
                  OTVÁRACIE HODINY
                </h5>
                <div className="w-full flex flex-col items-start justify-start gap-2">
                  <div className="w-full flex items-center justify-between gap-4">
                    <p className="text-sm text-[#b9b9b9] whitespace-nowrap shrink-0">
                      Pondelok - Štvrtok
                    </p>
                    <div className="flex-1 h-[1px] bg-primary" />
                    <p className="text-sm text-[#b9b9b9] whitespace-nowrap shrink-0">
                      15:00 - 01:00
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between gap-4">
                    <p className="text-sm text-[#b9b9b9] whitespace-nowrap shrink-0">
                      Piatok - Nedeľa
                    </p>
                    <div className="flex-1 h-[1px] bg-primary" />
                    <p className="text-sm text-[#b9b9b9] whitespace-nowrap shrink-0">
                      15:00 - 02:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button asChild className="w-full sm:w-fit">
            <Link
              prefetch={false}
              href={
                "https://www.google.sk/maps/place/SmoKing+hookah+lounge/@48.380157,17.5841667,129m/data=!3m1!1e3!4m6!3m5!1s0x476ca181ca917375:0xd052bb7e26dbeea9!8m2!3d48.3801748!4d17.584455!16s%2Fg%2F11flfcqzgf?hl=sk&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
              }
              target="_blank"
            >
              Otvoriť navigáciu
            </Link>
          </Button>
        </div>
        <div className="flex items-start justify-center md:max-w-[510px] gap-6 w-full">
          <div className="basis-1/2 w-full relative h-[310px] sm:h-[400px] lg:h-[433px]">
            <div
              className={cn(
                "absolute w-full h-full z-[1]",
                "bg-gradient-to-t from-black/50 to-black/10"
              )}
            />
            <Image
              src={data.image1.data.attributes.url}
              alt={data.button.name ?? ""}
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
                "bg-gradient-to-t from-black/50 to-black/10"
              )}
            />
            <Image
              src={data.image2.data.attributes.url}
              alt={data.button.name ?? ""}
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
