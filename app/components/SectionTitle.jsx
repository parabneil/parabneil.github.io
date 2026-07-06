import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subTitle, description, align = "left" }) => {
  const isCentered = align === "center";

  return (
    <div
      className={`flex flex-col px-4 max-w-4xl ${
        isCentered
          ? "items-center text-center mx-auto"
          : "items-start text-left"
      }`}
    >
      {/* 1. Subtitle / Overhead Tag (Renders first in logical reading order) */}
      {subTitle && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-xs sm:text-sm font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase mb-2 font-heading"
        >
          {subTitle}
        </motion.span>
      )}

      {/* 2. Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-gray-900 dark:text-white leading-tight"
      >
        {/* Optional: Add gradient wrapping styles to specific keywords, or apply globally to title string */}
        <span className="bg-linear-to-r from-cyan-500 via-teal-500 to-indigo-500 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      {/* 3. Sleek Accent Rule Underline */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
        className={`h-0.75 bg-linear-to-r from-cyan-500 to-teal-400 my-4 rounded-full origin-left ${
          isCentered ? "w-24 origin-center" : "w-16"
        }`}
      />

      {/* 4. Narrative Paragraph Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-normal leading-relaxed max-w-2xl mt-1"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
