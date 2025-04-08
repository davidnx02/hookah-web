import Image from "next/image";

import { TStat } from "@/lib/types";
import { cn } from "@/lib/utils";

export async function Stats({ stats }: { stats: TStat[] }) {
  return (
    <section
      className={cn("custom-section", "pt-16 sm:pt-20 lg:pt-24 relative")}
    >
      <Image
        src={"/smoke.png"}
        alt="Dym"
        width={0}
        height={0}
        className="absolute max-w-[1400px] z-0 h-auto w-full scale-x-[-1] -top-[50px] -left-[300px] opacity-65"
        sizes="1400px"
      />
      <div
        className={cn(
          "custom-container",
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8"
        )}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center gap-1 text-center col-span-1"
          >
            <strong className="text-[40px] font-semibold text-white">
              {stat.value}
            </strong>
            <p className="text-base font-medium text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
