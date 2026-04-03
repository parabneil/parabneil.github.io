"use client";
import React from "react";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { motion } from "framer-motion";
import { resumeData } from "../constants/resumeData";
import { getTimeline } from "../utils/utils";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  const eduData = resumeData.education;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="education"
      className="w-full px-[10%] md:px-[12%] py-20 scroll-mt-20"
    >
      <SectionTitle
        title={sectionTitles.educationSection.title}
        subTitle={sectionTitles.educationSection.subTitle}
        description={sectionTitles.educationSection.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
        {eduData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="relative p-8 rounded-3xl border border-gray-300 dark:border-white/10 bg-white dark:bg-darkHover/20 hover:border-cyan-500 transition-all duration-300 shadow-sm flex flex-col group"
          >
            {/* Top Icon Decoration */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-700 rounded-2xl flex items-center justify-center text-white shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-300">
              <GraduationCap size={24} />
            </div>

            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white leading-tight">
              {edu.degree}
            </h3>

            <div className="space-y-3 mb-6 grow">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar size={14} className="text-cyan-700" />
                <span>{getTimeline(edu.startDate, edu.endDate)}</span>
              </div>

              <p className="font-semibold text-gray-700 dark:text-gray-300">
                {edu.institution}
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <MapPin size={14} />
                <span>{edu.location}</span>
              </div>
            </div>

            {/* Score / GPA Badge */}
            {edu.score && (
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                <span className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold rounded-lg">
                  Score: {edu.score}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
