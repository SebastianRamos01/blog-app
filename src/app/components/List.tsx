'use client'

import React from 'react'
import { posts } from '../data/data'

export default function List() {

    //Last on top
    const postReverse = posts.reverse()

  return (
    <section className='bg-white'>
        <div className='flex justify-between font-semibold my-2'>
            <div>
                All Articles
            </div>
            <div className='flex gap-1 items-baseline'>
                <div className='text-gray-400 font-normal text-xs'>
                    Sort By :
                </div>
                <div className='font-medium'>
                    Newest
                </div>
            </div>
        </div>
        <ul className='flex flex-col md:flex-row flex-wrap md:justify-between md:gap-0'>
            {postReverse.map((post) => (
                <li key={post.id} className='w-full font-medium text-lg relative md:w-[32.5%] border-b flex flex-col my-2'>
                    <div className='absolute top-0 left-0 text-white text-xs flex justify-between w-full p-3 z-10'>
                        <ul className='flex gap-2'>
                            {post.category.map((el, i) => (
                                <li key={i} className='flex items-center gap-1'><div className='size-1 bg-white rounded'></div>{el}</li>
                            ))}
                        </ul>
                        <div>{post.createdAt}</div>
                    </div>
                    <div className='w-full h-[16em] overflow-hidden cursor-pointer rounded-t'>
                        <img src={`/${post.image}`} alt='image-post' className='object-cover w-full h-full hover:scale-105 duration-150'/>
                    </div>
                    <div className='my-2 leading-5 font-semibold text-base w-11/12'>
                        {post.header}
                    </div>
                </li>
            ))}
        </ul>
    </section>
  )
}
