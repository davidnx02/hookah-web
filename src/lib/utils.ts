import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { fetchAPI } from "./api";
import { TInfoSection } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const flattenRichTextToHTML = (richText: any[], includeParagraphs: boolean = true): string => {
  return richText
    .map((block) => {
      if (block.type === "paragraph") {
        const content = block.children
          .map((child: any) =>
            child.bold ? `<strong>${child.text}</strong>` : child.text
          )
          .join("");
        return includeParagraphs ? `<p>${content}</p>` : content; // Toggle <p> based on flag
      } else if (block.type === "list") {
        const listItems = block.children
          .map((item: any) => `<li>${item.children[0].text}</li>`)
          .join("");
        return block.format === "unordered" ? `<ul>${listItems}</ul>` : `<ol>${listItems}</ol>`;
      }
      return "";
    })
    .join("");
};

// Fetch and transform InfoSections
export async function fetchInfoSections(page: string): Promise<TInfoSection[]> {
 return fetchAPI("info-sections", {
    filters: { page },
    populate: "*",
  }).then((response) =>
    (response as { data: any[] }).data.map((item) => {
      const mappedItem = {
        id: item.id,
        title: flattenRichTextToHTML(item.attributes.title, false), // No <p> for title
        description: flattenRichTextToHTML(item.attributes.description, true), // Keep <p> for description
        button: item.attributes.button
          ? {
              name: item.attributes.button.name,
              url: item.attributes.button.url,
              variant: item.attributes.button.variant || "default",
            }
          : undefined,
        image1: item.attributes.image1?.data
          ? {
              url: item.attributes.image1.data.attributes.url,
              alt: item.attributes.image1.data.attributes.alternativeText || "",
            }
          : { url: "", alt: "" },
        image2: item.attributes.image2?.data
          ? {
              url: item.attributes.image2.data.attributes.url,
              alt: item.attributes.image2.data.attributes.alternativeText || "",
            }
          : { url: "", alt: "" },
        page: item.attributes.page,
      };
      return mappedItem as unknown as TInfoSection;
    })
  );
}