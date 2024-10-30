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
import { CoalDesign } from "../shared/coal-design";
import { MenuListSkeleton } from "./menu-list-skeleton";
import Link from "next/link";

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
          "pt-12 sm:mb-24 gap-12 relative",
          "menu-list__section"
        )}
      >
        <CoalDesign variant={1} className="top-[80px] sm:top-0" />
        <CoalDesign variant={2} className="top-1/2" />
        <h2 className="hidden sm:block text-4xl lg:text-5xl font-bold text-center text-white">
          {activeCategory?.attributes.name}
        </h2>
        <Tabs
          defaultValue={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          value={activeTab}
          className="w-full max-w-[900px] hidden sm:flex flex-col items-center justify-center gap-12"
        >
          <TabsList className="w-full flex items-center justify-center flex-wrap gap-4 h-fit p-0 bg-transparent">
            {categories.map((category) => {
              return (
                <>
                  {category.attributes.slug === "volba-majstra" ? (
                    <Link
                      prefetch={false}
                      key={"volba-majstra"}
                      href={"/volba-majstra"}
                      className={cn(
                        "tabs-menu-list__trigger",
                        "h-fit w-fit bg-transparent border border-white text-white py-3 px-8 text-base font-bold rounded-none"
                      )}
                    >
                      {category.attributes.name}
                    </Link>
                  ) : (
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
                  )}
                </>
              );
            })}
          </TabsList>
          <TabsContent
            value={activeTab}
            className="flex items-center justify-center flex-col w-full relative z-10"
          >
            {isPending && <MenuListSkeleton />}
            {error && <p>Error: {error.message}</p>}
            {data && (
              <MenuContentContainer>
                {data.data.map((item: TItem) => (
                  <>
                    <MenuItem item={item} key={item.attributes.name} />
                    <div className={cn("w-full h-[1px] bg-white/10 block")} />
                  </>
                ))}
              </MenuContentContainer>
            )}
          </TabsContent>
        </Tabs>
        <div className="w-full flex flex-col items-center justify-center gap-12 sm:hidden">
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
                <SelectContent
                  className={cn("menu-list__select-content top-2 rounded-none")}
                >
                  {categories.map((category) => {
                    return (
                      <>
                        {category.attributes.slug === "volba-majstra" ? (
                          <Link
                            prefetch={false}
                            key={"volba-majstra"}
                            href={"/volba-majstra"}
                            className={cn("menu-list__select-trigger", '!text-white text-sm pl-8 pt-2')}
                          >
                            {category.attributes.name}
                          </Link>
                        ) : (
                          <SelectItem
                            key={category.attributes.name}
                            value={category.attributes.name}
                            className={cn("menu-list__select-trigger")}
                          >
                            {category.attributes.name}
                          </SelectItem>
                        )}
                      </>
                    );
                  })}
                </SelectContent>
              </SelectTrigger>
            </div>
          </Select>
          {isPending && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data && (
            <MenuContentContainer>
              {data.data.map((item: TItem) => (
                <>
                  <MenuItem item={item} key={item.attributes.name} />
                  <div className={cn("w-full h-[1px] bg-white/10 block")} />
                </>
              ))}
            </MenuContentContainer>
          )}
        </div>
      </section>
    </>
  );
};
