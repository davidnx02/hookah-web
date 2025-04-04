import { cn } from "@/lib/utils";

interface HtmlContentProps {
  content: string;
  className?: string;
  size?: "sm" | "base";
  color?: "white" | "muted-foreground";
}

export function HtmlContent({
  content,
  className,
  size = "base",
  color = "muted-foreground",
}: HtmlContentProps) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className={cn(
        "html-content",
        size === "sm" && "html-content--sm",
        size === "base" && "html-content--base",
        color === "white" && "text-white",
        color === "muted-foreground" && "text-[#b9b9b9]",
        className
      )}
    />
  );
}
