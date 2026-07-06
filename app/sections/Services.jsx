import React from "react";
import { motion } from "framer-motion"; // Adjusted to match generic framer-motion library reference
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { useResume } from "../context/ResumeContext";

// Animation Variants
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 16 },
  },
};

const Services = () => {
  const { services } = useResume();

  if (!services?.length) return null;

  return (
    <section id="services" className="w-full scroll-mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-[8%] py-24">
        {/* Section Title */}
        <SectionTitle
          title={sectionTitles.servicesSection.title}
          subTitle={sectionTitles.servicesSection.subTitle}
          description={sectionTitles.servicesSection.description}
        />

        {/* Dynamic Cards Grid */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        >
          {services.map(
            (
              { id, icon, title, description, services: capabilities },
              index,
            ) => (
              <motion.div
                key={id || `service-${index}`}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px -15px rgba(6, 182, 212, 0.12)",
                }}
                className="group flex flex-col justify-between p-8 rounded-3xl border border-gray-100 dark:border-white/5 bg-white dark:bg-darkHover/20 hover:border-cyan-500/50 dark:hover:border-cyan-400/40 transition-colors duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] cursor-default overflow-hidden"
              >
                <div>
                  {/* Header Row: Top-aligned icon and title blocks */}
                  <div className="flex items-start gap-5">
                    {/* Icon Frame */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300 border border-cyan-100/30 dark:border-cyan-900/20">
                      <span className="w-6 h-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        {icon}
                      </span>
                    </div>

                    {/* Text Container */}
                    <div className="space-y-2 min-w-0">
                      <h3 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dynamic Sub-capabilities Area */}
                {capabilities && capabilities.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-black/10 -mx-8 -mb-8 p-8 rounded-b-3xl">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 mb-4">
                      Capabilities
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                      {capabilities.map((item, idx) => (
                        <li
                          key={`${item}-${idx}`}
                          className="flex items-center gap-2.5 text-xs font-medium text-gray-600 dark:text-gray-300"
                        >
                          {/* Premium Minimalist Custom Check Indicator */}
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shrink-0 opacity-70" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
