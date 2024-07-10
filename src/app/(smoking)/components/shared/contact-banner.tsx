import { fetchAPI } from "@/lib/api";
import { TGeneral } from "@/lib/types";
import Link from "next/link";
import { BiMapPin } from "react-icons/bi";

export async function ContactBanner() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return (
    <div className="fixed bottom-0 left-0 w-full flex items-center justify-center py-2.5 sm:py-3 px-6 gap-4 bg-primary text-white z-[60]">
      <div className="flex items-center justify-center gap-2.5 sm:gap-3 font-medium">
        <BiMapPin className="w-5 h-5 sm:w-6 sm:h-6" />
        <p className="text-xs sm:text-sm">
          {general.address}, {general.city}
        </p>
      </div>
      <div className="h-4 sm:h-5 w-[1px] bg-white" />
      <Link
        prefetch={false}
        target="_blank"
        href={general.phone}
        className="text-xs sm:text-sm font-medium underline"
      >
        Rezervácia {general.phone}
      </Link>
    </div>
  );
}
