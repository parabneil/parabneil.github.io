import React from "react";
import { motion } from "motion/react";

const SectionTitle = ({ title, subTitle, description }) => {
  return (
    <div className="flex flex-col items-start px-4">
      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-2xl sm:text-3xl md:text-5xl font-heading uppercase font-extrabold tracking-widest bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>

      <div className="w-64 h-0.5 bg-cyan-500 my-3 rounded-full" />

      {/* Subtitle */}
      {subTitle && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-lg font-heading font-medium"
        >
          {subTitle}
        </motion.span>
      )}

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-7xl mb-12 font-heading text-center text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
