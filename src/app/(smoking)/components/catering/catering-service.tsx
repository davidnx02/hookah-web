import React from "react";

import { TCateringService } from "@/lib/types";
import { cn } from "@/lib/utils";

import { IoMdPricetags } from "react-icons/io";
import { RxLapTimer } from "react-icons/rx";
import { CateringServiceIcon } from "./catering-service-icons";

export const CateringService = ({
  service,
  index,
}: {
  service: TCateringService;
  index: number;
}) => {
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
        index % 2 !== 0 ? "justify-end items-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "w-full flex items-center gap-3 sm:gap-4 lg:gap-6",
          index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
        )}
      >
        <span className="w-16 h-16 bg-primary flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
          0{index + 1}
        </span>
        <h4 className="text-white font-bold text-2xl uppercase">
          {service.name}
        </h4>
      </div>
      <div
        className={cn(
          "flex items-center gap-5",
          index % 2 !== 0 ? "justify-end" : "justify-start"
        )}
      >
        {icons.map((icon, i) => (
          <React.Fragment key={icon.name}>
            <CateringServiceIcon icon={icon} index={i} />
            {i < icons.length - 1 && (
              <div className={cn("w-[1px] h-[64px] bg-white/30")} />
            )}
          </React.Fragment>
        ))}
      </div>
      <p
        className={cn(
          "text-[#d9d9d9] text-sm sm:text-base font-normal max-w-[700px] w-full",
          index % 2 !== 0 ? "text-right" : "text-left"
        )}
      >
        {service.description}
      </p>
    </div>
  );
};
