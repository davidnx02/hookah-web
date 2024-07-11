"use client";

import { cn } from "@/lib/utils";
import { SubpageHeading } from "../shared/subpage-heading";
import { TCategory, TItem } from "@/lib/types";
import { useState } from "react";
import { getStrapiUrl } from "@/lib/get-strapi-url";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { MenuItem } from "./menu-item";
import { MenuContentContainer } from "./menu-content-container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const MenuList = ({ categories }: { categories: TCategory[] }) => {
  const [activeTab, setActiveTab] = useState(categories[0].attributes.name);
  const activeCategory = categories.find(
    (category) => category.attributes.name === activeTab
  );

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData", activeTab],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/items?populate=*&filters[category][slug][$eq]=${activeCategory?.attributes.slug}`
      ).then((res) => res.json()),
  });

  console.log(data);

  return (
    <>
      <SubpageHeading
        title="MENU"
        breadcrumbs={{ name: "Menu", url: "menu" }}
        image={getStrapiUrl(
          activeCategory?.attributes?.background?.data?.attributes?.url ?? ""
        )}
      />
      <section
        className={cn(
          "custom-section",
          "pt-12 mb-24 gap-12",
          "menu-list__section"
        )}
      >
        <h2 className="hidden sm:block text-4xl lg:text-5xl font-bold text-center text-white">
          {activeCategory?.attributes.name}
        </h2>
        <Tabs
          defaultValue={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          value={activeTab}
          className="w-full max-w-[705px] hidden sm:flex flex-col items-center justify-center gap-12"
        >
          <TabsList className="w-full flex items-center justify-center flex-wrap gap-4 h-fit p-0 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.attributes.name}
                value={category.attributes.name}
                className={cn(
                  "tabs-menu-list__trigger",
                  "h-fit w-fit bg-transparent border border-white text-white py-3 px-8 text-base font-bold rounded-none"
                )}
              >
                {category.attributes.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent
            value={activeTab}
            className="flex items-center justify-center flex-col w-full"
          >
            {isPending && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
              <MenuContentContainer>
                {data.data.map((item: TItem) => (
                  <MenuItem item={item} key={item.attributes.name} />
                ))}
              </MenuContentContainer>
            )}
          </TabsContent>
        </Tabs>
        <div className="w-full flex flex-col items-center justify-center gap-8 sm:hidden">
          <Select
            defaultValue={activeTab}
            value={activeTab}
            onValueChange={(value) => setActiveTab(value)}
          >
            <div className="w-full h-fit px-6 flex items-center justify-center">
            <SelectTrigger
              className={cn(
                "menu-list__select-trigger",
                "bg-transparent rounded-none items-center justify-center flex relative py-3 h-fit text-white text-center text-xl font-bold focus:outline-none focus:border-none"
              )}
            >
              <SelectValue placeholder={activeTab} className="" />
              <SelectContent className={cn("menu-list__select-content top-2 rounded-none")}>
                {categories.map((category) => (
                  <SelectItem
                    key={category.attributes.name}
                    value={category.attributes.name}
                    className={cn("menu-list__select-trigger")}
                  >
                    {category.attributes.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectTrigger>
            </div>

          </Select>
          {isPending && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data && (
            <MenuContentContainer>
              {data.data.map((item: TItem) => (
                <MenuItem item={item} key={item.attributes.name} />
              ))}
            </MenuContentContainer>
          )}
        </div>
      </section>
    </>
  );
};
