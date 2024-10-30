"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { TPost } from "@/lib/types";
import { getStrapiUrl } from "@/lib/get-strapi-url";

export const PostsSwiper = ({ posts }: { posts: TPost[]; }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-full"
      slidesPerView={"auto"}
      spaceBetween={16}
    >
      {posts.map((post, index) => (
        <SwiperSlide
          key={index}
          className="min-w-[180px] sm:min-w-[220px] md:min-w-[300px] max-w-[180px] sm:max-w-[220px] md:max-w-[300px] aspect-square relative"
        >
          <Link
            prefetch={false}
            target="_blank"
            href={post.link}
            className="w-full h-full"
          >
            <Image
              src={getStrapiUrl(post.image.data.attributes.url)}
              alt={"Smoking Hookah"}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 300px"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
