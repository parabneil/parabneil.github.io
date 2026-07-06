"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { useResume } from "../context/ResumeContext";
import { assets } from "@/assets/assets";
import { START_YEAR } from "../constants/constants";
import {
  Award,
  GraduationCap,
  Heart,
  Languages,
  Mail,
  MapPin,
  Briefcase,
  Star,
  Trophy,
  Cpu,
} from "lucide-react";

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};

const About = () => {
  const {
    personalInfo,
    achievements,
    certifications,
    contactInfo,
    education,
    skills,
    services,
    projects,
  } = useResume();

  // Fix Next.js Hydration Mismatch by evaluating timeline math cleanly
  const yearsOfExperience = useMemo(() => {
    const fallbackYear = 2026; // Grounded timeline constant
    const parsedYear =
      typeof window !== "undefined" ? new Date().getFullYear() : fallbackYear;
    return Math.max(0, parsedYear - START_YEAR);
  }, []);

  return (
    <section id="about" className="w-full scroll-mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-[8%] py-24">
        {/* Section Header */}
        <SectionTitle
          title={sectionTitles.aboutSection.title}
          subTitle={sectionTitles.aboutSection.subTitle}
          description={sectionTitles.aboutSection.description}
        />

        {/* Master Bento Layout Engine */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[140px]"
        >
          {/* 1. Profile Portrait (Tall Focus Block) */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group border border-gray-100 dark:border-white/5 shadow-sm bg-neutral-100 dark:bg-neutral-900"
          >
            <Image
              src={
                assets.user_image ||
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
              }
              alt="Profile Portrait"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-950/70 via-gray-950/20 to-transparent transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-bold tracking-tight mt-1">
                {`${personalInfo?.name?.firstName} ${personalInfo?.name?.lastName}` ||
                  "Professional Portfolio"}
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                {personalInfo?.jobTitle?.[0] || "Software Engineer"}
              </p>
            </div>
          </motion.div>

          {/* 2. Years of Experience Metric */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-white dark:bg-darkHover/10 border border-gray-100 dark:border-white/5 flex flex-col justify-between group shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {yearsOfExperience}+
              </p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 mt-1">
                Years Experience
              </p>
            </div>
          </motion.div>

          {/* 3. Completed Projects Metric */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-white dark:bg-darkHover/10 border border-gray-100 dark:border-white/5 flex flex-col justify-between group shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {projects?.length || 0}
              </p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 mt-1">
                Production Builds
              </p>
            </div>
          </motion.div>

          {/* 4. Mini Narrative Professional Summary (Wide Block) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 p-6 rounded-3xl bg-white dark:bg-darkHover/10 border border-gray-100 dark:border-white/5 flex flex-col justify-center shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)]"
          >
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
              Background Summary
            </h4>
            <p className="text-xs text-gray-600 dark:text-neutral-400 leading-relaxed line-clamp-3 font-normal">
              {personalInfo?.professionalSummary ||
                "Forward-thinking engineer specialized in creating high-performance modular structures and modern scalable user interfaces."}
            </p>
          </motion.div>

          {/* 5. Interactive Compact Technology Footprint Grid */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 p-6 rounded-3xl bg-white dark:bg-darkHover/10 border border-gray-100 dark:border-white/5 flex flex-col justify-between shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)]"
          >
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-cyan-500" />
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Core Stack Highlights
              </p>
            </div>
            <div className="flex flex-wrap gap-2 overflow-hidden h-17">
              {skills
                ?.filter((s) => s.logo)
                .slice(0, 8)
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-transparent rounded-xl hover:scale-105 transition-transform cursor-default"
                    title={skill.name}
                  >
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                    <span className="text-[10px] font-semibold text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* 6. Education Context Frame */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-3xl bg-white dark:bg-darkHover/10 border border-gray-100 dark:border-white/5 flex flex-col justify-between shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)]"
          >
            <div className="w-9 h-9 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500">
                Education
              </span>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white truncate mt-0.5">
                {education?.[0]?.degree || "Academic Degree"}
              </h4>
            </div>
          </motion.div>

          {/* 7. Global Certifications Counter Panel */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-3xl bg-white dark:bg-darkHover/10 border border-gray-100 dark:border-white/5 flex flex-col justify-between group shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)]"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {certifications?.length || 0}
              </p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 mt-0.5">
                Certifications
              </p>
            </div>
          </motion.div>

          {/* 8. Modern Communication/Contact Matrix */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 p-6 rounded-3xl bg-white dark:bg-darkHover/10 border border-gray-100 dark:border-white/5 flex flex-col justify-center gap-3 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)]"
          >
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Communication Node
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-gray-600 dark:text-neutral-400">
              {contactInfo?.emailId && (
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span className="truncate">{contactInfo.emailId}</span>
                </div>
              )}
              {contactInfo?.location && (
                <div className="flex items-center gap-2 min-w-0">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span className="truncate">{contactInfo.location}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* 9. Key Professional Honors Node */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-3xl bg-white dark:bg-darkHover/10 border border-gray-100 dark:border-white/5 flex flex-col justify-between shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)]"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-amber-500 shrink-0">
              <Trophy className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">
                Top Honors
              </p>
              <p className="text-xs font-bold text-gray-900 dark:text-white truncate">
                {achievements?.[0]?.title || "Awaiting Listing"}
              </p>
            </div>
          </motion.div>

          {/* 10. Core Dynamic Interests Frame */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-3xl bg-white dark:bg-darkHover/10 border border-gray-100 dark:border-white/5 flex flex-col justify-between shadow-[0_2px_12px_-3px_rgba(0,0,0,0.02)]"
          >
            <div className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center text-rose-500/80 shrink-0">
              <Heart className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">
                Interests
              </p>
              <p className="text-xs font-semibold text-gray-700 dark:text-neutral-300 truncate">
                {personalInfo?.interests?.[0] || "Engineering Systems"}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
