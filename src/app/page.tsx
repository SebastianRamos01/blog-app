'use client'

import Lenis from 'lenis';
import BannerSlider from './components/BannerSlider';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


export default function Home() {

  //Initial smooth scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time : any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  //Traking of the Page Scroll
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div>
      <Header></Header>
      <main className='relative'>
        <div className='h-screen sticky top-0 z-0'>
          <motion.div style={{opacity}} className='h-full bg-black w-full absolute top-0 left-0 z-20'>
          </motion.div>
          <BannerSlider></BannerSlider>
        </div>
        <div className='px-5 py-10 lg:px-10 h-fit bg-white relative z-10'>
          <List></List>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
