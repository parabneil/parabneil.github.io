import React, { useMemo } from "react";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { motion } from "motion/react";
import Image from "next/image";
import { transformSkillsData } from "../utils/utils";
import { Sparkles } from "lucide-react";
import { useResume } from "../context/ResumeContext";
import { SKILL_LEVELS } from "../constants/constants";

const Skills = () => {
  const {skills} = useResume()
  const transformedSkillsData = transformSkillsData(skills);

  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="skills"
      className="w-full px-[5%] md:px-[12%] py-20 scroll-mt-20"
    >
      <SectionTitle
        title={sectionTitles.skillsSection.title}
        subTitle={sectionTitles.skillsSection.subTitle}
        description={sectionTitles.skillsSection.description}
      />

      <div className="space-y-16 mt-12 grid grid-cols-1">
        {Object.entries(transformedSkillsData.skills).map(
          ([category, items]) => (
            <div key={category} className="flex flex-col items-start">
              {/* Category Header */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 text-xl font-bold font-heading text-gray-800 dark:text-white border-b-2 border-cyan-500 pb-2 px-4"
              >
                {category}
              </motion.p>

              {/* Skills Grid */}
              <motion.ul
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 w-full justify-center"
              >
                {items.map((skill) => (
                  <motion.li
                    key={`${category}-${skill.skillName}`}
                    variants={listItem}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-darkHover/20 border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
                    >
                      {skill.skillLogo ? (
                        <Image
                          src={skill.skillLogo}
                          alt={skill.skillName}
                          width={40}
                          height={40}
                          className="w-8 sm:w-10 h-auto"
                          loading="lazy"
                        />
                      ) : (
                        <Sparkles className="w-8 text-cyan-700" />
                      )}
                    </motion.div>

                    <div className="text-center">
                      <p className="text-sm font-semibold dark:text-white">
                        {skill.skillName}
                      </p>
                      <p className="text-[10px] uppercase tracking-tighter text-slate-500 dark:text-slate-400">
                        {SKILL_LEVELS[skill.skillLevel]}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ),
        )}
      </div>
    </motion.section>
  );
};

export default Skills;
