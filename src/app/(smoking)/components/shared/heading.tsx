import { cn } from "@/lib/utils";

export function Heading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      dangerouslySetInnerHTML={{ __html: title }}
      className={cn(
        "shared-title",
        "font-heading",
        className,
        "text-4xl sm:text-5xl font-medium text-white leading-tight sm:leading-[1.15] text-balance sm:text-balance"
      )}
    />
  );
}
