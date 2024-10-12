import Image from "next/image";
import Link from "next/link";

import { fetchAPI } from "@/lib/api";
import { getStrapiUrl } from "@/lib/get-strapi-url";
import { TGeneral, TNavigation } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Heading } from "../shared/heading";
import { PostsSwiper } from "./posts-swiper";

export async function Footer() {
  const general = (await fetchAPI("general?populate=*")) as TGeneral;
  const navigation = (await fetchAPI("navigation?populate=*")) as TNavigation;

  const posts = [
    {
      image: "/posts/1.jpg",
      link: 'https://www.instagram.com/p/DA8q86LqcKv/'
    },
    {
      image: "/posts/2.jpg",
      link: 'https://www.instagram.com/p/DA2_HgJu11f/'
    },
    {
      image: "/posts/3.jpg",
      link: 'https://www.instagram.com/p/DAymdqPOHbg/'
    },
    {
      image: "/posts/4.jpg",
      link: 'https://www.instagram.com/p/DAtEq-bKv_V/'
    },
    {
      image: "/posts/5.jpg",
      link: 'https://www.instagram.com/p/DAlVp8ZKe4i/'
    },
    {
      image: "/posts/6.jpg",
      link: 'https://www.instagram.com/p/DAgeVViqXdx/'
    },
  ]

  return (
    <>
      <section className={cn('custom-section', 'my-16 sm:my-24')}>
        <div className={cn('custom-container', 'flex flex-col items-center justify-center gap-8')}>
          <Heading title="SLEDUJTE NÁŠ <span>INSTAGRAM!</span>" />
          <PostsSwiper posts={posts} />
        </div>
      </section>
      <footer
        className={cn(
          "custom-section",
          "bg-[#050505] pb-16 pt-12 sm:pt-16 sm:pb-24"
        )}
      >
        <div
          className={cn(
            "custom-container",
            "flex items-center justify-center gap-8 sm:gap-16 flex-col"
          )}
        >
          <div className="flex items-center justify-center sm:justify-between w-full">
            <Image
              src={getStrapiUrl(general?.logo?.data?.attributes?.url)}
              height={0}
              width={0}
              alt={"Smoking Hookah"}
              sizes="(max-width: 768px) 64px, 100px"
              className="w-16 h-16 md:w-24 md:h-24"
            />
            <div className="hidden sm:flex items-center justify-end gap-10">
              {navigation?.links?.map((link) => (
                <Link
                  key={link.url}
                  prefetch={false}
                  href={link.url}
                  className="text-base font-bold text-white uppercase"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                prefetch={false}
                href={"/gdpr"}
                className="text-base font-bold text-white uppercase"
              >
                GDPR
              </Link>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#373737]" />
          <p className="text-[#5C5C5C] text-center">
            Všetky práva vyhradené &copy;2024
          </p>
        </div>
      </footer>
    </>
  );
}
