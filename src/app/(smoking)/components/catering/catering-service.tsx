import Link from "next/link";
import React from "react";

import { TCateringService, TGeneral } from "@/lib/types";
import { cn } from "@/lib/utils";

import { IoMdPricetags } from "react-icons/io";
import { RxLapTimer } from "react-icons/rx";
import { CateringServiceIcon } from "./catering-service-icons";
import { Button } from "@/components/ui/button";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { fetchAPI } from "@/lib/api";

export const CateringService = async ({
  service,
  index,
}: {
  service: TCateringService;
  index: number;
}) => {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  const icons = [
    {
      image: "/hookah-icon.svg",
      name: "Počet fajok",
      value: service.hookah_amount,
    },
    {
      icon: <RxLapTimer className="text-white w-8 h-8" />,
      name: "Dlžka služby",
      value: service.duration,
    },
    {
      icon: <IoMdPricetags className="text-white w-8 h-8" />,
      name: "Cena",
      value: `${service.price},00 €`,
    },
  ];

  return (
    <div
      className={cn(
        "w-full flex flex-col gap-8",
        index % 2 !== 0
          ? "items-start justify-start lg:justify-end lg:items-end"
          : "justify-start"
      )}
    >
      <div
        className={cn(
          "w-full flex gap-3 sm:gap-4 lg:gap-6 flex-col",
          index % 2 !== 0
            ? "lg:flex-row-reverse lg:items-center items-start"
            : "lg:flex-row lg:items-center items-start"
        )}
      >
        <span className="w-16 h-16 bg-primary flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
          0{index + 1}
        </span>
        <h4
          className={cn(
            "text-white font-bold text-2xl uppercase",
            index % 2 !== 0 ? "text-left lg:text-right" : "text-left"
          )}
        >
          {service.name}
        </h4>
      </div>
      <div
        className={cn(
          "flex items-start lg:items-center gap-5 flex-col md:flex-row",
          index % 2 !== 0 ? "justify-start lg:justify-end" : "justify-start"
        )}
      >
        {icons.map((icon, i) => (
          <React.Fragment key={icon.name}>
            <CateringServiceIcon icon={icon} index={i} />
            {i < icons.length - 1 && (
              <div
                className={cn("w-[1px] h-[64px] bg-white/30 hidden md:block")}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <p
        className={cn(
          "text-[#d9d9d9] text-sm sm:text-base font-normal max-w-[700px] w-full",
          index % 2 !== 0 ? "text-left lg:text-right" : "text-left"
        )}
      >
        {service.description}
      </p>
      <Button asChild className="w-full sm:w-fit">
        <Link prefetch={false} href={`https://wa.me/${general.phone}`} target="_blank">
          Mám záujem o službu
          <MdOutlinePhoneInTalk size={24} className="text-white" />
        </Link>
      </Button>
    </div>
  );
};
