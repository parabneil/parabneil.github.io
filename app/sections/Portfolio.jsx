import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { MoveRight, Send } from "lucide-react";
import { useResume } from "../context/ResumeContext";

const Portfolio = () => {
  const {projects} = useResume();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="portfolio"
      className="w-full px-[10%] md:px-[12%] py-20 scroll-mt-20"
    >
      <SectionTitle
        title={sectionTitles.workSection.title}
        subTitle={sectionTitles.workSection.subTitle}
        description={sectionTitles.workSection.description}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
        {projects?.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-darkHover/20 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500`}
          >
            {/* Project Image Container */}
            <div className="aspect-16/10 overflow-hidden">
              <Image
                src={project.previewUrls[0] || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv70JPvxB0syXJHnTgffdlaURsmOu0XANoVQ&s"} // Fallback image
                alt={project.title}
                width={500}
                height={300}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-full object-cover group-hover:scale-110 duration-700 transition-transform"
              />
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                {/* Project Details */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                {project.logo && (
                  <Image
                    src={project.logo}
                    alt=""
                    width={24}
                    height={24}
                    className="rounded-md"
                  />
                )}
                <h3 className="text-md font-bold dark:text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-100 dark:bg-white/5 rounded-md text-gray-500 dark:text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-white/5">
                <span className="text-xs font-medium text-cyan-700 dark:text-cyan-400">
                  {project.role}
                </span>
                <div className="w-9 h-9 rounded-full border border-cyan-600 flex items-center justify-center bg-cyan-700 group-hover:border-cyan-500 group-hover:rotate-45 transition-all duration-700">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live preview of ${project.title}`}
                  >
                    <Send color="white" className="w-4" />
                  </a>
                </div>
              </div>
            </div>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-2 rounded-full font-medium transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 hover:bg-cyan-700 hover:text-white"
                  aria-label={`Live preview of ${project.title}`}
                >
                  View Live Demo
                </a>
              </div>
            </div>

            
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/parabneil" // Link to GitHub or full projects page
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 mx-auto mt-10 hover:bg-gray-50 duration-300 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show More on GitHub
        <MoveRight className="w-4" />
      </motion.a>
    </motion.section>
  );
};

export default Portfolio;
