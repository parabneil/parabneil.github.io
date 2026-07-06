import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { getTimeline } from "../utils/utils";
import { Award, ExternalLink } from "lucide-react";
import { useResume } from "../context/ResumeContext";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

const Certifications = () => {
  const { certifications } = useResume();

  return (
    <section id="certifications" className="w-full scroll-mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-[8%] py-24">
        {/* Section Header */}
        <SectionTitle
          title={sectionTitles.certificationSection.title}
          subTitle={sectionTitles.certificationSection.subTitle}
          description={sectionTitles.certificationSection.description}
        />

        {/* Responsive Flex Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-16"
        >
          {certifications?.map((cert, index) => (
            <motion.article
              key={`${cert.name.toLowerCase()}-${cert.organization.toLowerCase()}-${index}`}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-darkHover/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/30 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] cursor-default overflow-hidden"
            >
              <div>
                {/* Main Identity Header Row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 shrink-0 border border-cyan-100/30 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                    <Award className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      {getTimeline(cert.issueDate, cert.expiryDate)}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug tracking-tight truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                      {cert.name}
                    </h3>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">
                      {cert.organization}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Footer Meta Block */}
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between gap-2 min-h-[32px]">
                {cert.credentialId ? (
                  <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-white/5 px-2 py-0.5 rounded truncate max-w-[50%]">
                    ID: {cert.credentialId}
                  </span>
                ) : (
                  <div />
                )}

                {cert.credentialURL && (
                  <a
                    href={cert.credentialURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors shrink-0 ml-auto"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
