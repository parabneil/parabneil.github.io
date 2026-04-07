import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { resumeData } from "../constants/resumeData";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = ({ isDarkMode }) => {
  const footerData = resumeData;
  const currentYear = new Date().getFullYear();

  // Social Link Helper for better maintainability
  const socialLinks = resumeData.socialMediaLinks;

  return (
    <footer className="mt-20 py-12 bg-gray-50/50 dark:bg-darkHover/10">
      <div className="max-w-6xl mx-auto px-[10%]">
        {/* Top Section: Logo & Info */}
        <div className="text-center mb-12">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            width={128}
            className="w-32 mx-auto mb-8 hover:scale-105 transition-transform duration-300"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600 dark:text-white">
            <a
              href={`mailto:${footerData.emailId}`}
              aria-label={`Send email to ${resumeData.name.firstName}`}
              className="flex items-center justify-center gap-3 hover:text-cyan-700 transition-colors"
            >
              <Mail size={20} className="text-cyan-700" />
              <p className="text-sm font-medium">{footerData.emailId}</p>
            </a>

            <a
              href={`tel:${footerData.mobileNo}`}
              className="flex items-center justify-center gap-3 hover:text-cyan-700 transition-colors"
            >
              <Phone size={20} className="text-cyan-700" />
              <p className="text-sm font-medium">{footerData.mobileNo}</p>
            </a>

            <div className="flex items-center justify-center gap-3">
              <MapPin size={20} className="text-cyan-700" />
              <p className="text-sm font-medium">{footerData.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="pt-8 border-t border-gray-300 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 dark:text-gray-300">
          <p className="text-center md:text-left">
            © {currentYear}{" "}
            <span className="font-bold text-gray-800 dark:text-white">
              {footerData.name.firstName} {footerData.name.lastName}
            </span>
            .
            <br className="md:hidden" /> All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-6 justify-center">
            <li>
              <a href="#top">↑ Back to top</a>
            </li>
            {socialLinks.map((link) => (
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
