import React, { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { transformSkillsData } from "../utils/utils";
import { Sparkles } from "lucide-react";
import { useResume } from "../context/ResumeContext";
import { SKILL_LEVELS } from "../constants/constants";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const Skills = () => {
  const { skills } = useResume();

  // Performance Fix: Memoize transformed dataset
  const processedSkills = useMemo(() => {
    if (!skills) return { skills: {} };
    return transformSkillsData(skills);
  }, [skills]);

  const categories = useMemo(() => {
    return Object.keys(processedSkills?.skills || {});
  }, [processedSkills]);

  // Handle active tab state (defaults to first category available)
  const [activeTab, setActiveTab] = useState(categories[0] || null);

  // Sync active tab if categories load asynchronously
  React.useEffect(() => {
    if (categories.length > 0 && !activeTab) {
      setActiveTab(categories[0]);
    }
  }, [categories, activeTab]);

  if (categories.length === 0 || !activeTab) return null;

  const currentSkills = processedSkills.skills[activeTab] || [];

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id="skills"
      className="w-full scroll-mt-20 font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-[8%] py-24">
        {/* Section Header */}
        <SectionTitle
          title={sectionTitles.skillsSection.title}
          subTitle={sectionTitles.skillsSection.subTitle}
          description={sectionTitles.skillsSection.description}
        />

        {/* Tab Navigation Controls */}
        <div className="mt-12 flex flex-wrap items-center justify-start sm:justify-center gap-2 border-b border-gray-200 dark:border-white/10 pb-px">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-4 py-3 text-sm font-semibold tracking-tight transition-colors duration-300 rounded-t-xl focus:outline-none whitespace-nowrap ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400"
                    : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {category}
                {/* Underline or background pill indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Skills View Panel */}
        <div className="mt-10 min-h-75">
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeTab}
              variants={listContainer}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
            >
              {currentSkills.map((skill) => (
                <motion.li
                  key={`${activeTab}-${skill.name}`}
                  variants={listItem}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.15)",
                  }}
                  className="flex items-center gap-4 bg-white dark:bg-darkHover/20 border border-gray-100 dark:border-white/5 rounded-2xl p-3.5 pr-5 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)] transition-colors duration-300 min-w-[160px] sm:min-w-[180px] flex-1 sm:flex-initial group cursor-pointer"
                >
                  {/* Brand/Asset Badge Visuals */}
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-50 dark:bg-darkTheme/50 border border-gray-100 dark:border-white/5 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-105">
                    {skill.logo ? (
                      <Image
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        width={32}
                        height={32}
                        className="w-7 h-7 object-contain grayscale-20 group-hover:grayscale-0 transition-all"
                        loading="lazy"
                      />
                    ) : (
                      <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400 animate-pulse" />
                    )}
                  </div>

                  {/* Meta/Text descriptions details */}
                  <div className="flex flex-col min-w-0">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </p>
                    {skill.level !== undefined && (
                      <span className="text-xs text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-3 py-0.5 rounded-full mt-1 w-max">
                        {SKILL_LEVELS[skill.level] || "Familiar"}
                      </span>
                    )}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
