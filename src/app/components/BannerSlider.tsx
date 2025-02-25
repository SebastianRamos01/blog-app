'use client'

import React, { useEffect, useState } from "react";
import { posts } from "../data/data";
import Button from "./Button";
import { motion } from "framer-motion";

const featuredPosts = posts.filter((post) => post.featured); //Filter by Featured

export default function BannerSlider() {
  
  const [index, setIndex] = useState(featuredPosts.length - 1);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % featuredPosts.length);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, [index]);
  
    const opacity = {
      initial: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
        scale: 1.08,
        transition: {
          duration: 2.5,
        },
      },
      exit: {
        opacity: 0,
        scale: 1.05,
        transition: {
          duration: 2.5,
        },
      },
    };
    
    const perspective = {
      initial: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
        top: '10%',
        transition: {
          duration: 2.5,
        },
      },
      exit: {
        opacity: 0,
        top: '50px',
        transition: {
          duration: 2.5,
        },
      },
    };
  
    return (
      <div>
        <ul className="h-screen relative overflow-hidden">
          {featuredPosts.map((post, i) => (
            <motion.li
              key={post.id}
              variants={opacity}
              initial="initial"
              animate={i === index ? "enter" : "exit"}
              className="absolute top-0 left-0 h-full w-full"
              style={{
                zIndex: i === index ? 10 : 1,
                opacity: i === index ? 1 : 0.5,
                transition: "opacity 2s ease-in-out",
              }}
            >
              <div className="h-full w-full">
                <img
                  src={`/${post.image}`}
                  alt="post"
                  className="object-cover h-full w-full"
                />
              </div>
            </motion.li>
          ))}
          <Dots currentIndex={index} total={featuredPosts.length} />
        </ul>
        <div className="h-screen w-full absolute overflow-hidden top-0 z-20">
          {featuredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              variants={perspective}
              initial="initial"
              animate={i === index ? "enter" : "exit"}
              style={{
                zIndex: i === index ? 10 : 1,
                opacity: i === index ? 1 : 0.5,
                transition: "opacity 2s ease-in-out",
              }}
              className="absolute bottom-0 font-normal w-full px-5 lg:px-10 my-14 flex justify-between items-end"
            >
              <div className="text-white">
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
              <div className="text-xs text-nowrap font-semibold text-white">
                {post.createdAt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  
  function Dots({
    currentIndex,
    total,
  }: {
    currentIndex: number;
    total: number;
  }) {
    return (
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-5 h-1 ${
              i === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    );
  }
  
