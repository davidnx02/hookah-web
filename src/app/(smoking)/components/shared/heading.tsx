import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";

const decorative_font = Playfair_Display({ subsets: ["latin"] });

export const Heading = ({
  subtitle,
  title,
  className,
}: {
  subtitle: string;
  title: string;
  className?: {
    container?: string;
    subtitle?: string;
    title?: string;
  };
}) => {
  return (
    <div className={cn("flex flex-col gap-2", className?.container)}>
      <h3
        className={cn(
          "text-xl sm:text-2xl text-white",
          decorative_font.className
        )}
      >
        {subtitle}
      </h3>
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
