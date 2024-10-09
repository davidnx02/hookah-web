import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";

const decorative_font = Playfair_Display({ subsets: ["latin"] });

export const Heading = ({
  title,
  className,
}: {
  title: string;
  className?: {
    container?: string;
    subtitle?: string;
    title?: string;
  };
}) => {
  return (
    <div className={cn("flex flex-col gap-2", className?.container)}>
      <h2
        dangerouslySetInnerHTML={{ __html: title }}
        className={cn(
          'heading-title',
          "text-3xl sm:text-4xl lg:text-5xl text-white uppercase font-bold",
          className?.title
        )}
      />
    </div>
  );
};
