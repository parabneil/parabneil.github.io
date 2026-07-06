import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { useResume } from "../context/ResumeContext";

const Footer = ({ isDarkMode }) => {
  const { personalInfo, contactInfo } = useResume();
  const currentYear = new Date().getFullYear();
  const socialLinks = contactInfo?.socialMediaLinks;

  return (
    <footer className="mt-24 border-t border-gray-100 dark:border-white/5 bg-gray-50/40 dark:bg-darkHover/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-[8%] py-12">
        {/* Top Section: Logo & Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 mb-12">
          <div className="flex flex-col items-center sm:items-start gap-4">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt="Portfolio Logo"
              className="w-40 sm:w-48 h-auto object-contain transition-transform duration-300 hover:opacity-90"
              priority
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs text-center sm:text-left">
              Building intentional, clean, and performant web experiences.
            </p>
          </div>

          {/* Contact Details Panel */}
          <div className="flex flex-col items-center sm:items-start gap-3 text-gray-600 dark:text-gray-300">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
              Get in touch
            </p>

            {contactInfo?.emailId && (
              <a
                href={`mailto:${contactInfo.emailId}`}
                aria-label={`Send email to ${personalInfo?.name?.firstName}`}
                className="flex items-center gap-2.5 text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
              >
                <Mail
                  size={16}
                  className="text-cyan-600 dark:text-cyan-500 group-hover:scale-105 transition-transform"
                />
                <span>{contactInfo.emailId}</span>
              </a>
            )}

            {contactInfo?.mobileNo && (
              <a
                href={`tel:${contactInfo.mobileNo}`}
                className="flex items-center gap-2.5 text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
              >
                <Phone
                  size={16}
                  className="text-cyan-600 dark:text-cyan-500 group-hover:scale-105 transition-transform"
                />
                <span>{contactInfo.mobileNo}</span>
              </a>
            )}

            {contactInfo?.location && (
              <div className="flex items-center gap-2.5 text-sm">
                <MapPin
                  size={16}
                  className="text-cyan-600 dark:text-cyan-500"
                />
                <span>{contactInfo.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="pt-8 border-t border-gray-200/60 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500 dark:text-gray-400">
          <p className="text-center sm:text-left order-2 sm:order-1 leading-relaxed">
            © {currentYear}{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {personalInfo?.name?.firstName} {personalInfo?.name?.lastName}
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 order-1 sm:order-2 w-full sm:w-auto justify-between sm:justify-end">
            {/* Social Icons Loop */}
            <ul className="flex flex-wrap items-center gap-5 justify-center">
              {socialLinks?.map((link) => (
                <li key={link.name}>
                  <a
                    target="_blank"
                    href={link.link}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
                    title={link.name}
                  >
                    <span className="w-5 h-5 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <img
                        src={link.icon}
                        alt={link.name}
                        className="w-full h-full object-contain dark:invert-[0.1]"
                      />
                    </span>
                    <span className="hidden xl:inline text-xs font-medium">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Subtle Divider between socials and top trigger */}
            {socialLinks?.length > 0 && (
              <span className="hidden sm:inline h-4 w-px bg-gray-300 dark:bg-white/10" />
            )}

            {/* Anchor Back to Top */}
            <a
              href="#top"
              className="flex items-center gap-1.5 font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group py-1"
            >
              Back to top
              <ArrowUp
                size={14}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
