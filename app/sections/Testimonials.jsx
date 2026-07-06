import React from "react";
import { motion } from "framer-motion"; // Note: Updated import path to standard 'framer-motion' if 'motion/react' was an alias
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { useResume } from "../context/ResumeContext";

// Animation configuration for staggering cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

const Testimonials = () => {
  const { testimonials } = useResume();

  if (!testimonials?.length) return null;

  // Helper to extract a 2-letter fallback initials bubble
  const getInitials = (name = "") => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <section id="testimonials" className="w-full scroll-mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-[8%] py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionTitle
            title={sectionTitles.testimonialSection.title}
            subTitle={sectionTitles.testimonialSection.subTitle}
            description={sectionTitles.testimonialSection.description}
          />
        </motion.div>

        {/* Responsive Staggered Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials?.map((t) => (
            <motion.article
              key={t.id || t.name}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 30px -10px rgba(0,0,0,0.08)",
              }}
              role="article"
              aria-label={`Testimonial by ${t.name}`}
              className="relative flex flex-col justify-between bg-white dark:bg-darkHover/30 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-white/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-colors duration-300 overflow-hidden group"
            >
              {/* Giant Stylized Decorative Quote Mark background indicator */}
              <span className="absolute top-2 right-4 text-7xl font-serif text-gray-100 dark:text-white/5 select-none pointer-events-none group-hover:text-cyan-500/10 dark:group-hover:text-cyan-400/10 transition-colors duration-300">
                “
              </span>

              {/* Main Feedback Content */}
              <div className="relative z-10 mb-6">
                <blockquote className="text-sm font-normal text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  “{t.description}”
                </blockquote>
              </div>

              {/* Identity Footer Section */}
              <div className="relative z-10 flex items-center gap-3.5 pt-4 border-t border-gray-50 dark:border-white/5">
                {/* Initials Avatar fallback circle */}
                <div className="w-10 h-10 rounded-full bg-cyan-50 dark:bg-cyan-950/40 flex items-center justify-center border border-cyan-100/50 dark:border-cyan-900/30 text-cyan-700 dark:text-cyan-400 font-bold text-xs shrink-0 tracking-wider">
                  {getInitials(t.name)}
                </div>

                {/* Identity Metadata text */}
                <div className="flex flex-col min-w-0">
                  <cite className="font-semibold text-sm text-gray-900 dark:text-gray-100 not-italic truncate">
                    {t.name}
                  </cite>
                  <p className="text-xs text-gray-400 dark:text-gray-500 truncate mt-0.5 font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
