import React from "react";
import { sectionTitles } from "../constants/sectionTitles";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import Image from "next/image";
import { getTimeline } from "../utils/utils";
import { Briefcase } from "lucide-react";
import { useResume } from "../context/ResumeContext";

const Experience = () => {
  const { workExperience } = useResume();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full px-[10%] md:px-[12%] py-20 scroll-mt-20"
    >
      <SectionTitle
        title={sectionTitles.experienceSection.title}
        subTitle={sectionTitles.experienceSection.subTitle}
        description={sectionTitles.experienceSection.description}
      />

      <div className="relative mt-16 max-w-4xl mx-auto">
        {/* Vertical Timeline Line (Visible on Desktop) */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 hidden sm:block" />

        <div className="space-y-12">
          {workExperience?.map((exp, index) => (
            <motion.div
              key={`${exp.companyName}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-0 md:pl-20"
            >
              {/* Timeline Dot/Icon */}
              <div className="absolute -left-2.25 md:left-5.25 top-0 w-5 h-5 rounded-full bg-cyan-700 border-4 border-white dark:border-darkTheme z-10 hidden sm:block" />

              <motion.div
                whileHover={{ y: -5 }}
                className="group border border-gray-300 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:border-cyan-500 transition-all duration-300 bg-white dark:bg-darkHover/20 shadow-sm hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div className="flex items-center gap-4">
                    {exp.companyLogo ? (
                      <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Image
                          src={exp.companyLogo}
                          alt={exp.companyName}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    ) : (
                      <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                        <Briefcase className="text-cyan-700 dark:text-cyan-400" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold dark:text-white">
                        {exp.jobTitle}
                      </h3>
                      <p className="text-cyan-700 dark:text-cyan-400 font-medium">
                        {exp.companyName} • {exp.employmentType}
                      </p>
                    </div>
                  </div>

                  <span className="px-4 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-xs font-semibold text-gray-500 dark:text-gray-400 h-fit">
                    {getTimeline(exp.startDate, exp.endDate)}
                  </span>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
                  {exp.companyLocation}
                </p>

                {exp.responsibilities.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {exp.responsibilities.map((res, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="text-cyan-700 mt-1.5">•</span>
                        {res}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-white/5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
