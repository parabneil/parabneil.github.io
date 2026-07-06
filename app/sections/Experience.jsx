import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { getTimeline } from "../utils/utils";
import { Briefcase, MapPin } from "lucide-react";
import { useResume } from "../context/ResumeContext";

const Experience = () => {
  const { workExperience } = useResume();

  return (
    <section id="experience" className="w-full scroll-mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-[8%] py-24">
        {/* Section Header */}
        <SectionTitle
          title={sectionTitles.experienceSection.title}
          subTitle={sectionTitles.experienceSection.subTitle}
          description={sectionTitles.experienceSection.description}
        />

        {/* Timeline Wrap Context */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-0 md:left-8 top-2 bottom-2 w-0.5 bg-gray-100 dark:bg-neutral-800 hidden sm:block" />

          <div className="space-y-10">
            {workExperience?.map((exp, index) => (
              <motion.div
                key={`${exp.companyName}-${index}`}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 sm:pl-8 md:pl-20"
              >
                {/* Timeline Dot Node Indicator */}
                <div className="absolute -left-2.25 md:left-5.75 top-7 w-5 h-5 rounded-full bg-white dark:bg-black border-4 border-cyan-500 dark:border-cyan-400 z-10 hidden sm:block shadow-sm">
                  {index === 0 && (
                    <span className="absolute -inset-1 rounded-full bg-cyan-400/30 animate-ping pointer-events-none" />
                  )}
                </div>

                {/* Main Card Container */}
                <motion.article
                  whileHover={{ y: -4 }}
                  className="group bg-white dark:bg-darkHover/10 border border-gray-100 dark:border-white/5 rounded-3xl p-6 md:p-8 hover:border-cyan-500/50 dark:hover:border-cyan-400/30 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
                >
                  {/* Top Row Grid Meta */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 mb-4 border-b border-gray-100 dark:border-white/5">
                    <div className="flex items-center gap-4">
                      {/* Logo Frame */}
                      {exp.companyLogo ? (
                        <div className="w-12 h-12 p-1.5 bg-gray-50 dark:bg-neutral-900 rounded-xl shrink-0 border border-gray-100 dark:border-white/10 flex items-center justify-center overflow-hidden">
                          <Image
                            src={exp.companyLogo}
                            alt={`${exp.companyName} Logo`}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 flex items-center justify-center bg-cyan-50 dark:bg-cyan-950/40 rounded-xl shrink-0 text-cyan-600 dark:text-cyan-400 border border-cyan-100/30">
                          <Briefcase className="w-5 h-5" />
                        </div>
                      )}

                      {/* Text Header Blocks */}
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                          {exp.jobTitle}
                        </h3>
                        <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                          {exp.companyName}{" "}
                          <span className="text-gray-300 dark:text-white/10 font-normal mx-1.5">
                            •
                          </span>{" "}
                          {exp.employmentType}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Data Badge */}
                    <div className="flex flex-col items-start lg:items-end gap-1.5 shrink-0">
                      <span className="inline-flex px-3.5 py-1 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-transparent text-xs font-bold text-gray-600 dark:text-gray-400">
                        {getTimeline(exp.startDate, exp.endDate)}
                      </span>
                      {exp.companyLocation && (
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 font-medium pl-1 lg:pl-0">
                          <MapPin className="w-3 h-3" />
                          {exp.companyLocation}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Core Responsibilities Bullet Segment */}
                  {exp.responsibilities?.length > 0 && (
                    <ul className="space-y-2.5 mb-6">
                      {exp.responsibilities.map((res, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/70 dark:bg-cyan-400/70 shrink-0 mt-2" />
                          <span className="flex-1">{res}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack Footer Badges */}
                  {exp.techStack?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-white/5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-transparent text-gray-600 dark:text-gray-400 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
