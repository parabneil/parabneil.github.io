import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { Trophy } from "lucide-react";
import { useResume } from "../context/ResumeContext";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 75, damping: 15 },
  },
};

const Achievements = () => {
  const { achievements } = useResume();

  return (
    <section id="achievements" className="w-full scroll-mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-[8%] py-24">
        {/* Section Header */}
        <SectionTitle
          title={sectionTitles.achievementSection.title}
          subTitle={sectionTitles.achievementSection.subTitle}
          description={sectionTitles.achievementSection.description}
        />

        {/* Structured Grid Component Context */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16"
        >
          {achievements?.map((ach, index) => (
            <motion.article
              key={`${ach.title.toLowerCase()}-${ach.year.toLowerCase()}-${index}`}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-white/5 bg-white dark:bg-darkHover/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/30 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] cursor-default"
            >
              {/* Dynamic Header Block Context */}
              <div className="flex items-center justify-between gap-4 mb-6">
                {/* Accent Ribbon Icon Holder */}
                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center border border-amber-200/20 dark:border-amber-400/10 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Trophy className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Calendar Year Metric Badge */}
                <span className="inline-flex px-3 py-1 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-transparent text-xs font-bold text-cyan-600 dark:text-cyan-400 tracking-wide">
                  {ach.year}
                </span>
              </div>

              {/* Text Description Segment Container */}
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-gray-900 dark:text-white tracking-tight leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                  {ach.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                  {ach.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
