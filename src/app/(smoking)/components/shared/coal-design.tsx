import Image from "next/image";

import { cn } from "@/lib/utils";

export const CoalDesign = ({
  variant,
  className,
}: {
  variant: 1 | 2;
  className?: string;
}) => {
  return (
    <>
      {variant === 1 && (
        <div
          className={cn(
            "absolute right-0 z-[4] bg-red-400 top-0 w-[250px] hidden xl:block",
            className
          )}
        >
          <div className="relative w-full">
            <div className="w-[450px] rounded-full aspect-square blur-[320px] bg-[#B52227]/75 absolute -right-0 top-0 z-[5]" />
            <Image
              src={"/uhlik1.png"}
              alt="Uhlik"
              height={0}
              width={0}
              className="absolute right-0 -top-24 z-[6] w-[250px] h-auto"
              sizes="250px"
            />
          </div>
        </div>
      )}
      {variant === 2 && (
        <div
          className={cn(
            "absolute left-0 z-[4] bg-red-400 top-0 w-[210px] hidden xl:block",
            className
          )}
        >
          <div className="relative w-full">
            <div className="w-[450px] rounded-full aspect-square blur-[320px] bg-[#B52227]/75 absolute -left-0 top-0 z-[5]" />
            <Image
              src={"/uhliky.png"}
              alt="Uhlik"
              height={0}
              width={0}
              className="absolute left-0 -top-24 z-[6] w-[210px] h-auto"
              sizes="250px"
            />
          </div>
        </div>
      )}
    </>
  );
};
