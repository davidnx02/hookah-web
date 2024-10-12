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
            "absolute right-0 z-[4] bg-red-400 top-0 w-[200px] sm:w-[250px] block",
            className
          )}
        >
          <div className="relative w-full">
            <div className="w-[120px] sm:w-[200px] md:w-[300px] lg:w-[450px] rounded-full aspect-square blur-[100px] sm:blur-[180px] md:blur-[320px] bg-[#B52227]/75 absolute -right-0 lg:-right-3/4 top-0 z-[5]" />
            <Image
              src={"/uhlik1.png"}
              alt="Uhlik"
              height={0}
              width={0}
              className="absolute right-0 -top-6 sm:-top-24 z-[6] w-[105px] sm:w-[140px] md:w-[175px] lg:w-[250px] h-auto"
              sizes="250px"
            />
          </div>
        </div>
      )}
      {variant === 2 && (
        <div
          className={cn(
            "absolute left-0 z-[4] bg-red-400 top-0 w-[180px] sm:w-[210px] block",
            className
          )}
        >
          <div className="relative w-full">
            <div className="w-[120px] sm:w-[200px] md:w-[300px] lg:w-[450px] rounded-full aspect-square blur-[100px] sm:blur-[180px] md:blur-[320px] bg-[#B52227]/75 absolute -left-1/3 sm:-left-2/3 top-0 z-[5]" />
            <Image
              src={"/uhliky.png"}
              alt="Uhlik"
              height={0}
              width={0}
              className="absolute left-0 -top-24 z-[6] w-[100px] md:w-[160px] lg:w-[210px] h-auto"
              sizes="250px"
            />
          </div>
        </div>
      )}
    </>
  );
};
