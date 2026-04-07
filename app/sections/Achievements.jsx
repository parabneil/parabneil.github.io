import React from "react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { resumeData } from "../constants/resumeData";
import { Trophy, Star } from "lucide-react";

const Achievements = () => {
  const achievementData = resumeData.achievements;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="achievements"
      className="w-full px-[10%] md:px-[12%] py-20 scroll-mt-20"
    >
      <SectionTitle
        title={sectionTitles.achievementSection.title}
        subTitle={sectionTitles.achievementSection.subTitle}
        description={sectionTitles.achievementSection.description}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-16">
        {achievementData.map((ach, index) => (
          <motion.div
            key={`${ach.title.toLowerCase()}-${ach.year.toLowerCase()}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl border border-gray-300 dark:border-white/10 bg-white dark:bg-darkHover/20 hover:border-cyan-500 transition-all duration-300 shadow-sm flex flex-col"
          >
            {/* Achievement Icon */}
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <Trophy size={24} />
            </div>

            <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-2">
              {ach.year}
            </span>

            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 leading-snug">
              {ach.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {ach.description}
            </p>

            {/* Subtle Star Decoration */}
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 group-hover:text-amber-500 transition-opacity duration-500">
              <Star size={16} fill="currentColor" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Achievements;
