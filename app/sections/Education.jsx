import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { getTimeline } from "../utils/utils";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { useResume } from "../context/ResumeContext";

// Staggered layout orchestration variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 16 },
  },
};

const Education = () => {
  const { education } = useResume();

  return (
    <section id="education" className="w-full scroll-mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-[8%] py-24">
        {/* Section Header */}
        <SectionTitle
          title={sectionTitles.educationSection.title}
          subTitle={sectionTitles.educationSection.subTitle}
          description={sectionTitles.educationSection.description}
        />

        {/* Structured Academic Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16"
        >
          {education?.map((edu, index) => (
            <motion.article
              key={`${edu.institution.toLowerCase()}-${edu.degree.toLowerCase()}-${index}`}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between p-8 rounded-3xl border border-gray-100 dark:border-white/5 bg-white dark:bg-darkHover/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/30 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] overflow-hidden cursor-default"
            >
              <div>
                {/* Header Context Segment: Title & Cap Icon Accent */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight leading-snug">
                    {edu.degree}
                  </h3>

                  {/* Integrated Micro Icon Frame */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 shrink-0 border border-cyan-100/30 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                    <GraduationCap className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                {/* Meta Attributes Wrapper */}
                <div className="space-y-3 mb-6">
                  {/* Timeline Badge */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>{getTimeline(edu.startDate, edu.endDate)}</span>
                  </div>

                  {/* Institution Description Text */}
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                    {edu.institution}
                  </p>

                  {/* Geographic Context Tag */}
                  {edu.location && (
                    <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Performance Indicator / Score Badge Footer */}
              {edu.score && (
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-transparent rounded-lg">
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-gray-400 dark:text-gray-500">
                      Performance
                    </span>
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                      {edu.score}
                    </span>
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
