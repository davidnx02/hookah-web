import Image from "next/image";

import { cn } from "@/lib/utils";

export function MaintananceScreen() {
  return (
    <section
      className={cn(
        "custom-section",
        "bg-[radial-gradient(ellipse_at_center,#09162D_0%,#030C1C_100%)]",
        "h-screen flex items-center justify-center"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
        <Image 
          src={'/smoking_logo.svg'}
          alt="Smoking Hookah"
          width={0}
          height={0}
          className="h-auto w-32 sm:w-36 object-contain object-center bg-white rounded-full p-0.5"
          sizes="160px"
        />
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-white leading-tight sm:leading-tight">
          <span className="text-primary bg-white py-1 px-5">SMOKING HOOKAH</span><br></br>
          SHISHA LOUNGE V TRNAVE
        </h1>
        <p className="text-[#B9B9B9] text-base sm:text-lg lg:text-xl text-center">Web sa pripravuje</p>
      </div>
    </section>
  );
}
