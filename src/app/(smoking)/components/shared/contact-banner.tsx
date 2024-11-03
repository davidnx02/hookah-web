import Link from "next/link";

import { fetchAPI } from "@/lib/api";
import { TGeneral } from "@/lib/types";
import { BiMapPin, BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocalPhone, MdOutlinePhoneInTalk } from "react-icons/md";

export async function ContactBanner() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;

  return (
    <div className="fixed bottom-0 left-0 w-full flex items-center justify-center py-2.5 sm:py-3 px-6 gap-4 bg-primary text-white z-[60]">
      <Link
        prefetch={false}
        target="_blank"
        href={
          "https://www.google.sk/maps/place/SmoKing+hookah+lounge/@48.3801672,17.5842728,95m/data=!3m1!1e3!4m14!1m7!3m6!1s0x476ca181ca917375:0xd052bb7e26dbeea9!2sSmoKing+hookah+lounge!8m2!3d48.3801748!4d17.584455!16s%2Fg%2F11flfcqzgf!3m5!1s0x476ca181ca917375:0xd052bb7e26dbeea9!8m2!3d48.3801748!4d17.584455!16s%2Fg%2F11flfcqzgf?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
        }
        className="flex items-center justify-center gap-2.5 sm:gap-3 font-medium"
      >
        <BiMapPin className="w-5 h-5 sm:w-6 sm:h-6" />
        <p className="text-xs sm:text-sm">
          {general.address}, {general.city}
        </p>
      </Link>
      <div className="h-4 sm:h-5 w-[1px] bg-white" />
      <Link
        prefetch={false}
        href={`https://wa.me/${general.phone}`}
        target="_blank"
        className="text-xs sm:text-sm font-medium flex items-center justify-start gap-2.5 sm:gap-3"
      >
        <MdOutlineLocalPhone className="w-5 h-5 sm:w-6 sm:h-6" />
        Rezervovať stôl
      </Link>
    </div>
  );
}
