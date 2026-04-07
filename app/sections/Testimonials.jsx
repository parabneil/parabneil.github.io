import React from "react";
import { resumeData } from "../constants/resumeData";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";

const Testimonials = () => {
  const testimonials = resumeData.testimonials;

  if (!testimonials?.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="testimonials"
      className="w-full px-[10%] md:px-[12%] py-20 scroll-mt-20 font-sans"
    >
      <div className="text-center mb-12">
        <SectionTitle
          title={sectionTitles.testimonialSection.title}
          subTitle={sectionTitles.testimonialSection.subTitle}
          description={sectionTitles.testimonialSection.description}
        />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <article
            key={t.id}
            role="article"
            aria-label={`Testimonial by ${t.name}`}
            className="bg-white dark:bg-darkTheme rounded-lg p-6 shadow-sm border border-gray-300 hover:shadow-lg transform transition hover:-translate-y-1"
          >
            <blockquote className="text-sm font-bold text-black dark:text-gray-200 mb-4.5 leading-tight">
              “ {t.description} ”
            </blockquote>
            <cite className="text-xs text-black dark:text-gray-300 not-italic">
              - {t.name}
            </cite>
            <p className="font-medium text-sm text-black dark:text-white mb-6">
              {t.role}
            </p>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
