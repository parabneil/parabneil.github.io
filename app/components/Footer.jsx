import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useResume } from "../context/ResumeContext";

const Footer = ({ isDarkMode }) => {
  const {personalInfo, contactInfo} = useResume()
  const currentYear = new Date().getFullYear();

  // Social Link Helper for better maintainability
  const socialLinks = contactInfo?.socialMediaLinks;

  return (
    <footer className="mt-20 py-12 bg-gray-50/50 dark:bg-darkHover/10">
      <div className="max-w-7xl mx-auto px-[10%]">
        {/* Top Section: Logo & Info */}
        <div className="text-center flex items-center justify-between">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-72 hover:scale-105 transition-transform duration-300"
          />

          <div className="flex flex-col items-start gap-1 text-gray-600 dark:text-white">
            <p className="text-sm font-black">Get in touch</p>
            <a
              href={`mailto:${contactInfo?.emailId}`}
              aria-label={`Send email to ${personalInfo?.name?.firstName}`}
              className="flex items-center justify-center gap-3 hover:text-cyan-700 transition-colors"
            >
              <Mail size={15} className="text-cyan-700" />
              <p className="text-xs">{contactInfo?.emailId}</p>
            </a>

            <a
              href={`tel:${contactInfo?.mobileNo}`}
              className="flex items-center justify-center gap-3 hover:text-cyan-700 transition-colors"
            >
              <Phone size={15} className="text-cyan-700" />
              <p className="text-xs">{contactInfo?.mobileNo}</p>
            </a>

            <div className="flex items-center justify-center gap-3">
              <MapPin size={15} className="text-cyan-700" />
              <p className="text-xs">{contactInfo?.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="pt-4 border-t border-gray-300 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 dark:text-gray-300">
          <p className="text-center md:text-left">
            © {currentYear}{" "}
            <span className="font-bold text-gray-800 dark:text-white">
              {personalInfo?.name?.firstName} {personalInfo?.name?.lastName}
            </span>
            .
            <br className="md:hidden" /> All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-4 justify-center">
            <li>
              <a href="#top">↑ Back to top</a>
            </li>
            {socialLinks?.map((link) => (
              <li key={link.name}>
                <a
                  target="_blank"
                  href={link.link}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-700 dark:hover:text-cyan-400 transition-all duration-300 group"
                  title={link.name}
                >
                  <span className="hidden lg:inline" aria-label={link.name}>
                    {link.name}
                  </span>
                  <span className="group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
