import React from "react";
import { motion } from "motion/react";

const SectionTitle = ({ title, subTitle, description }) => {
  return (
    <div className="flex flex-col items-center px-4">
      {/* Subtitle */}
      {subTitle && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-heading text-cyan-700 dark:text-cyan-400 font-medium"
        >
          {subTitle}
        </motion.span>
      )}

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-lg md:text-5xl font-heading uppercase font-extrabold tracking-widest"
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-2xl mx-auto mt-5 mb-12 font-heading text-center text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
