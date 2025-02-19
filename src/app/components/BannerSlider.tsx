'use client'

import React from "react";
import { posts } from "../data/data";
import Button from "./Button";

export default function BannerSlider() {

  //Filter by Featured
  const featuredPosts = posts.filter((post: any) => post.featured);

  return (
    <ul className="h-screen">
      {featuredPosts.map((post) => (
        <li
          key={post.id}
          className="text-white relative h-full overflow-hidden"
        >
          <div className="absolute h-full w-full">
            <img
              src={`/${post.image}`}
              alt="post"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="absolute bottom-0 left-0 z-10 font-normal w-full px-5 lg:px-10 my-14 flex justify-between items-end">
            <div className="">
              <ul className="flex gap-2 text-sm my-1 font-medium">
                {post.category.map((el, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <div className="size-1 bg-white rounded"></div>
                    {el}
                  </li>
                ))}
              </ul>
              <h1 className="text-4xl md:w-1/2 leading-9 font-semibold">
                {post.header}
              </h1>
              <Button action={"See more"}></Button>
            </div>
            <div className="text-xs text-nowrap font-semibold">
              {post.createdAt}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
