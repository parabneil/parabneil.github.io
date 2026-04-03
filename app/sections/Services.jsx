"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // consistent import with previous files
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { resumeData } from "../constants/resumeData";

const Services = ({ isDarkMode }) => {
  const serviceData = resumeData.services;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[10%] md:px-[12%] py-20 scroll-mt-20"
    >
      <SectionTitle
        title={sectionTitles.servicesSection.title}
        subTitle={sectionTitles.servicesSection.subTitle}
        description={sectionTitles.servicesSection.description}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16"
      >
        {serviceData.map(
          ({ id, icon, title, description, services }, index) => (
            <motion.div
              key={id || index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 rounded-3xl border border-gray-300 dark:border-white/10 bg-white dark:bg-darkHover/20 hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-xl cursor-default"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 mb-6 group-hover:bg-cyan-700 group-hover:text-white transition-colors duration-300">
                {/* Check if icon is a component or a string path */}
                {icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                {title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {description}
              </p>

              {/* Sub-services / Capabilities */}
              {services && (
                <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 mb-3">
                    Capabilities
                  </p>
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-5">
                    {Array.isArray(services) ? services.join(" • ") : services}
                  </p>
                </div>
              )}
            </motion.div>
          ),
        )}
      </motion.div>
    </motion.section>
  );
};

export default Services;
