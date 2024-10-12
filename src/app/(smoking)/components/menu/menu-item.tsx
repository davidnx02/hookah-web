import { TItem } from "@/lib/types";

export const MenuItem = ({ item }: { item: TItem }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2.5 sm:gap-3">
      <div className="w-full flex items-center justify-between">
        <p className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl uppercase">
          {item.attributes.name}
        </p>
        {item.attributes.price && (
          <span className="text-accent py-[5px] px-2 bg-transparent border border-accent text-sm sm:text-base md:text-lg lg:text-xl uppercase font-bold">
            {item.attributes.price}&nbsp;€
          </span>
        )}
      </div>
      {item.attributes.description && (
        <p className="text-xs sm:text-sm text-[#d9d9d9] font-normal text-left w-full">
          {item.attributes.description}
        </p>
      )}
    </div>
  );
};
