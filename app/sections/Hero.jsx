import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useResume } from "../context/ResumeContext";

const Hero = () => {
  const { personalInfo } = useResume();

  const { name, jobTitle, headline } = personalInfo || {};
  const { scrollY } = useScroll({
    layoutEffect: false,
  });

  const x1 = useTransform(scrollY, [0, 300], [0, -200]);
  const x2 = useTransform(scrollY, [0, 300], [0, 200]);
  const y1 = useTransform(scrollY, [0, 300], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden dark:bg-black"
    >
      {/* Background Image */}
      <Image 
        src={assets.portfolio_background_left} // Ensure this is imported correctly
        // src={assets.hero_image_center}
        alt="hero background"
        fill
        className="object-cover opacity-60 z-0"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/75 to-transparent z-21" />

{/* HERO IMAGE */}
      {/* <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        // className="absolute top-20 md:top-0 md:bottom-0 z-20"
        className="absolute bottom-0 z-20"
      >
        <Image
          src={assets.hero_image_center}
          alt={`${name?.firstName} ${name?.lastName}`}
          width={500}
          className="w-32 rounded-full md:rounded-none ring-1 ring-cyan-700 bg-linear-to-r from-cyan-500 to-blue-500 md:bg-none md:ring-0 md:w-96 lg:w-300 object-contain drop-shadow-2xl"
          priority
        />
      </motion.div> */}

      {/* HERO IMAGE */}
      {/* <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        // className="absolute top-20 md:top-0 md:bottom-0 z-20"
        className="absolute bottom-0"
      >
        <Image
          src={assets.hero_image}
          alt={`${name?.firstName} ${name?.lastName}`}
          width={500}
          className="w-32 rounded-full md:rounded-none ring-1 ring-cyan-700 bg-linear-to-r from-cyan-500 to-blue-500 md:bg-none md:ring-0 md:w-96 lg:w-72 object-contain drop-shadow-2xl"
          priority
        />
      </motion.div> */}

      {/* DECORATIVE SHAPE */}
      {/* <motion.div
        style={{ y: y1 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-5 w-64 h-96 bg-linear-to-t from-cyan-500/50 to-transparent rounded-t-full blur-3xl"
      /> */}

      <div>
        {/* BIG PARALLAX TEXT (Middle Layer) */}
        {/* <div className="absolute inset-0 flex flex-col items-start justify-center z-20 pointer-events-none select-none">
          <motion.p
            style={{ x: x1, opacity }}
            aria-hidden="true"
            className="will-change-transform font-heading font-black text-cyan-700 dark:text-white opacity-20 text-[50px] md:text-[100px] lg:text-[100px] uppercase leading-none tracking-widest"
          >
            {name?.firstName || ""}
          </motion.p>
          <motion.p
            style={{ x: x2, opacity }}
            aria-hidden="true"
            className="will-change-transform font-heading font-black text-cyan-700 dark:text-white opacity-20 text-[50px] md:text-[100px] lg:text-[100px] uppercase leading-none tracking-widest"
          >
            {name?.lastName || ""}
          </motion.p>
        </div> */}

        {/* CONTENT */}
        <div className="absolute top-45 left-20 z-30 flex flex-col items-start justify-start px-6">
          <motion.p
            style={{ x: x1, opacity }}
            aria-hidden="true"
            className="will-change-transform font-heading font-black text-cyan-700 dark:text-white opacity-20 text-[50px] md:text-[100px] lg:text-[100px] uppercase leading-none tracking-widest"
          >
            {name?.firstName || ""}
          </motion.p>
          <motion.p
            style={{ x: x2, opacity }}
            aria-hidden="true"
            className="will-change-transform font-heading font-black text-cyan-700 dark:text-white opacity-20 text-[50px] md:text-[100px] lg:text-[100px] uppercase leading-none tracking-widest"
          >
            {name?.lastName || ""}
          </motion.p>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 dark:text-white text-2xl md:text-4xl font-heading font-bold uppercase text-right tracking-[0.2em]"
          >
            {jobTitle && jobTitle[0] ? jobTitle[0] : ""}
          </motion.h2>

          <motion.p className="mt-10 text-justify max-w-xl text-gray-600 dark:text-gray-300 leading-tight">
            {headline || ""}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex gap-4 min-w-sm"
          >
            <a
              href="#contact"
              className="px-6 py-3 w-1/2 bg-cyan-700 text-white rounded-full font-heading text-center"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 w-1/2 bg-white/20 border rounded-full font-heading dark:text-white text-center"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
