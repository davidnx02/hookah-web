"use client";

import Link from "next/link";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { TGeneral } from "@/lib/types";
import { useMediaQuery } from "@/lib/use-media-query";
import { cn } from "@/lib/utils";

export const ReservationButton = ({
  children,
  general,
}: {
  children: React.ReactNode;
  general: TGeneral;
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isMobile ? (
        <Button asChild className="w-full sm:w-fit">
          <Link prefetch={false} href={`tel:${general.phone}`} target="_blank">
            {children}
          </Link>
        </Button>
      ) : (
        <Dialog>
          <DialogTrigger>
            <Button>{children}</Button>
          </DialogTrigger>
          <DialogContent className="w-full bg-transparent h-full  border-none rounded-none shadow-none flex items-center justify-center">
            <div className={cn('custom-container', 'bg-white rounded-none h-[600px]')}>

            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
