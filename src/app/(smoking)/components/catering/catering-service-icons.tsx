import Image from "next/image";

import { cn } from "@/lib/utils";

export const CateringServiceIcon = ({
  icon,
  index,
}: {
  icon: {
    image?: string;
    icon?: React.ReactNode;
    name: string;
    value: string;
  };
  index: number;
}) => {
  return (
    <div
      className={cn(
        "w-fit flex items-start gap-3",
        index % 2 !== 0 ? "justify-end" : "justify-start"
      )}
    >
      <div className="rounded-full w-16 h-16 bg-primary flex items-center justify-center relative">
        {icon.icon && <>{icon.icon}</>}
        {icon.image && (
          <Image src={icon.image} alt={icon.name} width={32} height={32} />
        )}
      </div>
      <div
        className={cn(
          "flex flex-col items-start gap-0",
          index % 2 !== 0 ? "justify-end" : "justify-start"
        )}
      >
        <p className="text-sm text-white">{icon.name}</p>
        <span className="text-2xl md:text-3xl font-bold text-white">
          {icon.value}
        </span>
      </div>
    </div>
  );
};
