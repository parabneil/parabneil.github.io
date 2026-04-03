"use client";
import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import ProfileStats from "../components/ProfileStats";
import { resumeData } from "../constants/resumeData";
import { Download, MoveRight } from "lucide-react";

const About = ({ isDarkMode }) => {
  const { name, jobTitle, headline } = resumeData;

  const cardContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    id="about"
      className="w-full px-[10%] py-20 scroll-mt-20"
    >
      <SectionTitle
        title={sectionTitles.aboutSection.title}
        subTitle={sectionTitles.aboutSection.subTitle}
        description={sectionTitles.aboutSection.description}
      />
      <div className="flex justify-center items-center gap-4 flex-col lg:flex-row">
        <div className="flex flex-col items-center text-center justify-between gap-5 w-full">
          {/* Greeting */}
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 text-xl md:text-2xl font-heading"
          >
            Hi! I am {name.firstName} {name.lastName}
          </motion.h3>

          {/* Main Headline */}
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl lg:text-2xl font-heading font-bold leading-tight"
          >
            {jobTitle[0]}
            <br />
            based in Maharashtra.
          </motion.h1>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-sm mx-auto text-md leading-tight font-heading text-gray-700 dark:text-gray-300"
          >
            {headline}
          </motion.p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              href="#contact"
              className="px-6 py-2 border border-transparent rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Contact <MoveRight className="w-4" />
            </motion.a>

            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href="/sample-resume.pdf"
              download
              className="px-6 py-2 border rounded-full border-gray-500 flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors dark:bg-transparent dark:text-white dark:hover:bg-white/10"
            >
              Resume
              <Download className="w-4" />
            </motion.a>
          </div>
        </div>
        <ProfileStats />
      </div>
    </motion.section>
  );
};

export default About;
