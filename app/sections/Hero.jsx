"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { resumeData } from "../constants/resumeData";

const Hero = () => {
  const { name, jobTitle, headline } = resumeData;
  const { scrollY } = useScroll();

  const x1 = useTransform(scrollY, [0, 500], [0, -200]);
  const x2 = useTransform(scrollY, [0, 500], [0, 200]);
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id='hero' className="relative flex items-center justify-center h-screen overflow-hidden dark:bg-black">
      {/* Background Image */}
      {/* <Image 
        src={assets.portfolio_background} // Ensure this is imported correctly
        alt="hero background"
        fill
        className="object-cover opacity-60 z-0"
        priority
      /> */}

      {/* BIG PARALLAX TEXT (Middle Layer) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none">
        <motion.p
          style={{ x: x1, opacity }}
          className="will-change-transform font-heading font-black text-cyan-700 dark:text-white opacity-20 text-[60px] md:text-[150px] lg:text-[200px] uppercase leading-none"
        >
          {name.firstName}
        </motion.p>

        <motion.p
          style={{ x: x2, opacity }}
          className="will-change-transform font-heading font-black text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,1)] dark:[-webkit-text-stroke:2px_rgba(255,255,255,0.5)] text-[60px] md:text-[150px] lg:text-[200px] uppercase leading-none"
        >
          {name.lastName}
        </motion.p>
      </div>

      {/* DECORATIVE SHAPE */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-80 bottom-0 z-5 w-64 h-96 bg-linear-to-t from-cyan-500/50 to-transparent rounded-t-full blur-3xl"
      />

      {/* HERO IMAGE */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-0 left-0 lg:right-20 z-20"
      >
        <Image
          src={assets.hero_image}
          alt={`${name.firstName} ${name.lastName}`}
          width={500}
          className="w-72 md:w-96 lg:w-xl object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* CONTENT */}
      <div className="absolute bottom-12 left-0 right-0 z-30 flex flex-col items-center px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="dark:text-white text-2xl md:text-4xl font-heading font-bold uppercase tracking-[0.2em]"
        >
          {jobTitle[0]}
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
