import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { ArrowUpRight } from "lucide-react";
import { useResume } from "../context/ResumeContext";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

const Portfolio = () => {
  const { projects } = useResume();
  const [activeTab, setActiveTab] = useState("All");

  // 1. Extract and clean up unique technology tags for the filtering controls
  const techTabs = useMemo(() => {
    if (!projects) return ["All"];
    const tags = new Set();
    projects.forEach((project) => {
      project.techStack?.forEach((tech) => {
        if (tech) tags.add(tech.trim());
      });
    });
    return ["All", ...Array.from(tags).sort()];
  }, [projects]);

  // 2. Filter projects down instantly to match selection criteria
  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (activeTab === "All") return projects;
    return projects.filter((project) =>
      project.techStack?.some((tech) => tech.trim() === activeTab),
    );
  }, [projects, activeTab]);

  return (
    <section id="portfolio" className="w-full scroll-mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-[8%] py-24">
        {/* Section Header */}
        <SectionTitle
          title={sectionTitles.workSection.title}
          subTitle={sectionTitles.workSection.subTitle}
          description={sectionTitles.workSection.description}
        />

        {/* Dynamic Tech Stack Filters */}
        <div className="mt-12 flex flex-wrap items-center justify-start sm:justify-center gap-2 border-b border-gray-200 dark:border-white/10 pb-px overflow-x-auto no-scrollbar">
          {techTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors duration-300 rounded-t-xl focus:outline-none whitespace-nowrap ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400"
                    : "text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                }`}
              >
                {tab}
                {isActive && (
                  <motion.div
                    layoutId="activePortfolioTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Filtered Projects Display Grid */}
        <div className="mt-16 min-h-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id || `${activeTab}-project-${index}`}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col bg-white dark:bg-darkHover/10 border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* Image Frame Wrapper */}
                  <div className="relative aspect-16/10 overflow-hidden bg-gray-100 dark:bg-neutral-900">
                    <Image
                      src={
                        project.previewUrls?.[0] ||
                        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60"
                      }
                      alt={`${project.title} Preview`}
                      width={600}
                      height={375}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Information Panel */}
                  <div className="flex flex-col flex-1 p-6 sm:p-7">
                    {/* Header Row: Logo & Title */}
                    <div className="flex items-center gap-3 mb-3">
                      {project.logo && (
                        <div className="w-6 h-6 rounded-md overflow-hidden bg-gray-50 shrink-0 border border-gray-100 dark:border-white/10">
                          <Image
                            src={project.logo}
                            alt=""
                            width={24}
                            height={24}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight truncate">
                        {project.title}
                      </h3>
                    </div>

                    {/* Narrative Details */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack Horizontal Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                      {project.techStack?.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className={`text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-lg border transition-colors ${
                            tech.trim() === activeTab
                              ? "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-900/30"
                              : "bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-transparent text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Operational Links Footer row */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500">
                          Role Focus
                        </span>
                        <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                          {project.role || "Developer"}
                        </span>
                      </div>

                      {/* Call to action active anchor */}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-cyan-600 dark:hover:bg-cyan-400 dark:hover:text-gray-900 transition-colors duration-200"
                          aria-label={`Open project live preview for ${project.title}`}
                        >
                          View Live
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Secondary Global GitHub Target Anchor CTA */}
        <div className="mt-16 text-center">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/parabneil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 rounded-full py-3.5 px-8 hover:bg-gray-50 dark:hover:bg-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-200 shadow-sm"
          >
            Explore More on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
