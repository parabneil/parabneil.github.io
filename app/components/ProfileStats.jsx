import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { resumeData } from "../constants/resumeData";
import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  Languages,
  Mail,
  MapPin,
  PanelsTopLeft,
  Phone,
  Share,
  Star,
  Trophy,
} from "lucide-react";
import { START_YEAR } from "../constants/constants";

const ProfileStats = () => {
  const statsData = resumeData;
  const currentYear = new Date().getFullYear();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-cyan-700 sm:bg-amber-300 md:bg-red-500 lg:bg-purple-600 xl:bg-lime-400 2xl:bg-pink-500 rounded-lg grid grid-cols-6 grid-rows-12 md:grid-cols-12 md:grid-rows-6 gap-2 mx-auto dark:text-white p-2 h-500 md:h-150">
      {/* Profile Photo */}
      <motion.a
        variants={item}
        href="#hero"
        className={`col-span-3 row-span-3 md:col-span-2 md:row-span-3 overflow-hidden rounded-lg hover:-translate-y-1 hover:shadow-black border-[0.5px] border-slate-700 cursor-pointer transition-all duration-500 dark:hover:shadow-white/10 dark:bg-darkTheme`}
      >
        <Image
          src={assets.user_image}
          alt="Profile"
          className="w-full h-full object-cover"
          priority
        />
      </motion.a>

      {/* Education */}
      <motion.a
        variants={item}
        href="#education"
        className={`col-span-3 row-span-2 overflow-hidden md:col-span-2 md:row-span-2 bg-slate-50 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black p-4 rounded-lg border-[0.5px] border-slate-700 cursor-pointer transition-all duration-500 border-none flex flex-col justify-center dark:bg-darkTheme dark:hover:bg-darkHover/50 dark:hover:shadow-white/10`}
      >
        <GraduationCap className="mb-2" />
        <span className="text-xs uppercase font-bold opacity-80">
          Education
        </span>
        <p className="text-md font-bold leading-tight">
          {statsData.education[0].degree}
        </p>
      </motion.a>

      {/* Years of Experience */}
      <motion.a
        variants={item}
        href="#experience"
        className={`col-span-3 row-span-1 overflow-hidden md:col-span-2 md:row-span-1 bg-slate-50 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black p-2 rounded-lg border-[0.5px] border-slate-700 cursor-pointer transition-all duration-500 border-none flex items-center justify-between gap-2 dark:bg-darkTheme dark:hover:bg-darkHover/50 dark:hover:shadow-white/10`}
      >
        {/* <BriefcaseBusiness size={32} /> */}
        <p className="text-3xl font-black">{currentYear - START_YEAR}</p>
        <p className="text-xs uppercase font-bold text-left">
          Years of Experience
        </p>
      </motion.a>

      {/* Technical Stack */}
      <motion.a
        variants={item}
        href="#skills"
        className={`col-span-6 row-span-4 overflow-hidden md:col-span-4 md:row-span-3 bg-slate-50 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black p-4 rounded-lg border-[0.5px] border-slate-700 cursor-pointer transition-all duration-500 dark:bg-darkTheme dark:hover:bg-darkHover/50 dark:hover:shadow-white/10`}
      >
        <p className="text-sm font-bold mb-2 uppercase">Tech Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {statsData.skills
            .filter((skill) => skill.skillLogo)
            .map((skill) => (
              <div key={skill.skillName} className="group relative">
                <Image
                  src={skill.skillLogo}
                  alt={skill.skillName}
                  width={32}
                  height={32}
                />
              </div>
            ))}
        </div>
      </motion.a>

      {/* Services (2x2)*/}
      <motion.a
        variants={item}
        href="#services"
        className="col-span-3 row-span-3 overflow-hidden text-md md:col-span-2 md:row-span-2 bg-slate-50 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black p-4 rounded-lg border-[0.5px] border-slate-700 cursor-pointer duration-500 dark:bg-darkTheme dark:hover:bg-darkHover/50 dark:hover:shadow-white/10"
      >
        <p className="text-sm flex items-center font-bold mb-1">
          <Languages className="w-3 mr-1.5" /> Services
        </p>
        <div className="text-[11px] leading-normal">
          {statsData.services.map((service) => (
            <p key={service.title}>{service.title}</p>
          ))}
        </div>
      </motion.a>

      {/* Projects Counter */}
      <motion.a
        variants={item}
        href="#portfolio"
        className={`col-span-3 row-span-2 overflow-hidden md:col-span-2 md:row-span-2 bg-slate-50 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black p-2 rounded-lg border-[0.5px] border-slate-700 cursor-pointer transition-all duration-500 flex flex-col items-center justify-evenly dark:bg-darkTheme dark:hover:bg-darkHover/50 dark:hover:shadow-white/10`}
      >
        <p className="text-7xl font-bold">{statsData.projects.length}</p>
        <p className="text-md leading-tight font-bold uppercase text-center">
          Projects Completed
        </p>
        {/* <PanelsTopLeft className="text-indigo-400" /> */}
      </motion.a>

      {/* Certifications (2x1) */}
      <motion.a
        variants={item}
        className="col-span-3 row-span-1 overflow-hidden md:col-span-2 md:row-span-1 bg-slate-50 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black p-4 rounded-lg flex items-center justify-center gap-3 border-[0.5px] border-slate-700 cursor-pointer duration-500 dark:bg-darkTheme dark:hover:bg-darkHover/50 dark:hover:shadow-white/10"
        href="#certifications"
      >
        <Award />
        <span className="text-3xl font-black italic">
          {statsData.certifications.length}
        </span>
        <span className="text-[10px] font-bold leading-tight uppercase">
          Certifications <br /> Completed
        </span>
      </motion.a>

      {/* Achievements */}
      <motion.a
        variants={item}
        href="#achievements"
        className="col-span-6 row-span-1 overflow-hidden md:col-span-2 md:row-span-1 bg-slate-50 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black text-xs rounded-lg p-4 flex flex-col justify-center gap-1 border-[0.5px] border-slate-700 cursor-pointer duration-500 dark:bg-darkTheme dark:hover:bg-darkHover/50 dark:hover:shadow-white/10"
      >
        <p className="flex items-center font-bold">
          <Trophy className="w-3 mr-1.5" /> Achievements
        </p>
        {statsData.achievements.map((ach) => (
          <p key={ach.title} className="text-[9px]">
            {ach.title}{" "}
          </p>
        ))}
      </motion.a>

      {/* Professional Summary */}
      <motion.a
        variants={item}
        href="#about"
        className={`col-span-6 row-span-52 overflow-hidden md:col-span-6 md:row-span-3 flex flex-col justify-center bg-slate-50 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black p-4 rounded-lg border-[0.5px] border-slate-700 cursor-pointer transition-all duration-500 dark:bg-darkTheme dark:hover:bg-darkHover/50 dark:hover:shadow-white/10`}
      >
        <p className="text-xl font-bold mb-2 text-black dark:text-cyan-400 uppercase">
          Professional Summary
        </p>
        <p className="leading-snug text-xs">{statsData.professionalSummary}</p>
      </motion.a>

      {/* Contact Quick Info */}
      <motion.a
        variants={item}
        href="#contact"
        className={`col-span-6 row-span-18 overflow-hidden md:col-span-3 md:row-span-2 bg-slate-50 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black p-4 rounded-lg border-[0.5px] border-slate-700 cursor-pointer transition-all duration-500 flex flex-col gap-1 dark:bg-darkTheme dark:hover:bg-darkHover/50 dark:hover:shadow-white/10`}
      >
        <p className="text-sm font-bold pb-2">Connect</p>
        <div className="space-y-3 text-[11px] leading-snug ">
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-cyan-400" />
            <span className="truncate">{statsData.emailId}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={12} className="text-cyan-400" />
            <span>{statsData.mobileNo}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-cyan-400" />
            <span>{statsData.location}</span>
          </div>
        </div>
      </motion.a>

      {/* Languages (2x2) */}
      <motion.div
        variants={item}
        className="col-span-3 row-span-24 overflow-hidden text-md md:col-span-3 md:row-span-2 bg-slate-50 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black p-4 rounded-lg border-[0.5px] border-slate-700 cursor-pointer duration-500 dark:hover:shadow-white dark:bg-darkTheme dark:hover:bg-darkHover/50 dark:hover:shadow-white/10"
      >
        <p className="text-sm flex items-center font-bold mb-2">
          <Languages className="w-4 mr-1.5" /> Languages
        </p>
        <div className="text-[10px] leading-loose ">
          {statsData.languages.map((lan) => (
            <p key={lan.language}>
              {lan.language}{" "}
              <span className="text-cyan-700 dark:text-cyan-400">
                ({lan.proficiency})
              </span>
            </p>
          ))}
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div
        variants={item}
        className="col-span-3 row-span-12 overflow-hidden text-xs md:col-span-2 md:row-span-1 bg-slate-50 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black p-4 rounded-lg flex flex-col justify-center gap-1 border-[0.5px] border-slate-700 cursor-pointer duration-500 dark:bg-darkTheme dark:hover:bg-darkHover/50 dark:hover:shadow-white/10"
      >
        <p className="text-xs flex items-center font-bold">
          <Star className="w-3 mr-1.5" /> Social Media
        </p>
        <div className="flex items-center justify-evenly text-xs ">
          {statsData.socialMediaLinks.map((media) => (
            <p key={media.name}>{media.name.charAt(0)} </p>
          ))}
        </div>
      </motion.div>

      {/* Interests (2x1) */}
      <motion.div
        variants={item}
        className="col-span-3 row-span-12 md:col-span-4 md:row-span-1 overflow-hidden bg-slate-50 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black text-xs rounded-lg p-4 flex flex-col justify-center gap-1 border-[0.5px] border-slate-700 cursor-pointer duration-500 dark:bg-darkTheme dark:hover:bg-darkHover/50 dark:hover:shadow-white/10"
      >
        <p className="flex items-center font-bold">
          <Heart className="w-3 mr-1.5" /> Interests
        </p>
        <p>{statsData.interests.join(", ")}</p>
      </motion.div>
    </div>
  );
};

export default ProfileStats;
