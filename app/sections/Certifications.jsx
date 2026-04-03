"use client";
import React from "react";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { motion } from "framer-motion";
import { resumeData } from "../constants/resumeData";
import { getTimeline } from "../utils/utils";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const Certifications = () => {
  const certData = resumeData.certifications;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="certifications"
      className="w-full px-[10%] md:px-[12%] py-20 scroll-mt-20"
    >
      <SectionTitle
        title={sectionTitles.certificationSection.title}
        subTitle={sectionTitles.certificationSection.subTitle}
        description={sectionTitles.certificationSection.description}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-16">
        {certData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col p-6 rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-darkHover/20 hover:border-cyan-500 transition-all duration-300 shadow-sm"
          >
            {/* Badge Icon */}
            <div className="mb-4 text-cyan-700 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
              {getTimeline(cert.issueDate, cert.expiryDate)}
            </span>

            <h3 className="text-md font-bold text-gray-800 dark:text-white mb-2 leading-snug min-h-10">
              {cert.name}
            </h3>

            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
              {cert.organization}
            </p>

            <div className="mt-auto space-y-3">
              {cert.credentialId && (
                <p className="text-[11px] font-mono text-gray-400 dark:text-gray-500 truncate">
                  ID: {cert.credentialId}
                </p>
              )}

              {cert.credentialURL && (
                <a
                  href={cert.credentialURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:underline"
                >
                  Verify Certificate <ExternalLink size={12} />
                </a>
              )}
            </div>

            {/* Decorative background accent */}
            <div className="absolute top-0 right-0 p-2 opacity-5">
              <Award size={60} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
