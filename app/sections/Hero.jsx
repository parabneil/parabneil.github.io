import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { resumeData } from "../constants/resumeData";

const Hero = () => {
  const { name, jobTitle, headline } = resumeData;
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
      {/* <Image 
        src={assets.portfolio_background} // Ensure this is imported correctly
        alt="hero background"
        fill
        className="object-cover opacity-60 z-0"
        priority
      /> */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40 z-10" />

      {/* HERO IMAGE */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-20 md:top-0 md:bottom-0 md:left-0 z-20"
      >
        <Image
          src={assets.hero_image}
          alt={`${name.firstName} ${name.lastName}`}
          width={500}
          className="w-32 rounded-full md:rounded-none ring-1 ring-cyan-700 bg-linear-to-r from-cyan-500 to-blue-500 md:bg-none md:ring-0 md:w-96 lg:w-xl object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* DECORATIVE SHAPE */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-5 w-64 h-96 bg-linear-to-t from-cyan-500/50 to-transparent rounded-t-full blur-3xl"
      />

      <div>
        {/* BIG PARALLAX TEXT (Middle Layer) */}
        <div
        className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none"
        >
          <motion.p
            style={{ x: x1, opacity }}
            aria-hidden="true"
            className="will-change-transform font-heading font-black text-cyan-700 dark:text-white opacity-20 text-[50px] md:text-[100px] lg:text-[150px] uppercase leading-none"
          >
            {name.firstName}
          </motion.p>

          <motion.p
            style={{ x: x2, opacity }}
            aria-hidden="true"
            className="will-change-transform font-heading font-black text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,1)] dark:[-webkit-text-stroke:2px_rgba(255,255,255,0.5)] text-[50px] md:text-[100px] lg:text-[150px] uppercase leading-none"
          >
            {name.lastName}
          </motion.p>
        </div>

        {/* CONTENT */}
        <div
        className="absolute bottom-5 left-0 right-0 z-30 flex flex-col items-center px-6"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="dark:text-white text-2xl md:text-4xl font-heading font-bold uppercase text-center tracking-[0.2em]"
          >
            {jobTitle[0]}
          </motion.h2>

          <motion.p
          className="mt-4 text-center max-w-xl text-gray-600 dark:text-gray-300 leading-tight"
          >
            {headline}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-cyan-700 text-white rounded-full font-heading"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 border rounded-full font-heading dark:text-white"
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
