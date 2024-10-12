import { cn } from "@/lib/utils";
import { MenuItemSkeleton } from "./menu-item-skeleton";

export const MenuListSkeleton = () => {
  return (
    <div
      className={cn(
        "animate-pulse",
        "w-full mt-0 max-w-[605px] p-6 sm:p-8 bg-[#0a0a0a] shadow-2xl flex flex-col items-center justify-center gap-6"
      )}
    >
      <MenuItemSkeleton />
      <MenuItemSkeleton />
      <MenuItemSkeleton />
      <MenuItemSkeleton />
      <MenuItemSkeleton />
      <MenuItemSkeleton />
    </div>
  );
};
