import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useResume } from "../context/ResumeContext";
import { ArrowRight, Download } from "lucide-react";
import { assets } from "@/assets/assets";

const Hero = () => {
  const { personalInfo } = useResume();
  const { name, jobTitle, headline } = personalInfo || {};

  const { scrollY } = useScroll({
    layoutEffect: false,
  });

  // Smooth Parallax Transformation Maps
  const xLeftText = useTransform(scrollY, [0, 500], [0, -150]);
  const xRightText = useTransform(scrollY, [0, 500], [0, 150]);
  const bgFade = useTransform(scrollY, [0, 400], [0.6, 0.2]);
  const textFade = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300 font-sans select-none"
    >
      {/* 1. Ambient Background Layer */}
      {/* <motion.div style={{ opacity: bgFade }} className="absolute inset-0 z-0">
        <Image
          src={assets.portfolio_background_left}
          alt="Hero Canvas Background"
          fill
          className="object-cover dark:brightness-[0.4] transition-all duration-300"
          priority
        />
      </motion.div> */}

      {/* Dynamic Linear Mask Overlay */}
      <div className="absolute inset-0 bg-linear-to-r bg-white dark:bg-black z-10" />

      {/* 2. Colossal Kinetic Parallax Backdrop Typography */}
      <motion.div
        style={{ opacity: textFade }}
        className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-10 font-heading font-black tracking-tighter opacity-[0.06] dark:opacity-[0.04] text-[14vw] uppercase leading-[0.85] text-cyan-900/10 dark:text-white/10"
      >
        <motion.span
          style={{ x: xLeftText }}
          className="will-change-transform block w-full text-left pl-10"
        >
          {name?.firstName || "Create"}
        </motion.span>
        <motion.span
          style={{ x: xRightText }}
          className="will-change-transform block w-full text-right pr-10"
        >
          {name?.lastName || "Impact"}
        </motion.span>
      </motion.div>

      {/* 3. Primary Content Panel Grid */}
      <div className="relative max-w-7xl w-full mx-auto px-6 lg:px-12 xl:px-[8%] pt-20 pb-12 z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Descriptive Metadata Info Column */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Welcome Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Core Introduction H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15]"
          >
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-cyan-600 to-indigo-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              {name?.firstName || "John"} {name?.lastName || "Doe"}
            </span>
          </motion.h1>

          {/* Job Title Accent Indicator */}
          {jobTitle && jobTitle[0] && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-gray-700 dark:text-gray-300 mt-3 tracking-wide uppercase"
            >
              {jobTitle[0]}
            </motion.h2>
          )}

          {/* Narrative Overview Headline Banner */}
          {headline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 font-normal leading-relaxed max-w-2xl text-justify sm:text-left"
            >
              {headline}
            </motion.p>
          )}

          {/* Call-to-action Dynamic Action Group */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Hire Me Secondary Trigger Anchor */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold text-sm shadow-md hover:bg-cyan-600 dark:hover:bg-cyan-400 dark:hover:text-gray-900 active:scale-[0.98] transition-all duration-200"
            >
              Hire Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Document CV Action Anchor Link */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 text-gray-800 dark:text-white rounded-full font-semibold text-sm hover:bg-gray-200 dark:hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
