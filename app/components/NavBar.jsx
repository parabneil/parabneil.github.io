import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useResume } from "../context/ResumeContext";
import { assets } from "@/assets/assets";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "My Work", href: "#portfolio" },
  { label: "Contact Me", href: "#contact" },
];

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  const { personalInfo, contactInfo } = useResume();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar Wrapper */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full px-6 lg:px-12 xl:px-[8%] z-50 transition-all duration-300 flex items-center justify-between ${
          isScroll
            ? "py-3 bg-white/70 dark:bg-darkTheme/70 backdrop-blur-md shadow-sm border-b border-gray-200/20 dark:border-white/10"
            : "py-5 bg-transparent"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#top"
          className="flex items-center active:scale-95 transition-transform"
        >
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Portfolio logo"
            className="w-28 sm:w-32 h-auto cursor-pointer"
            priority
          />
        </a>

        {/* Desktop Navigation Center Menu */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/80 dark:bg-darkHover/40 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-full px-6 py-2 shadow-sm">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium tracking-wide text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 block rounded-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle Dark Mode"
            className="p-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition active:scale-90"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>

          {/* Contact CTA Button (Desktop) */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-white/30 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 active:scale-95 shadow-sm"
          >
            Contact
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Trigger Button */}
          <button
            className="block md:hidden p-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition"
            aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Drawer Panel */}
        <div
          className={`fixed top-0 bottom-0 right-0 w-72 max-w-[80vw] h-screen bg-white/90 dark:bg-darkTheme/95 backdrop-blur-lg border-l border-gray-200/30 dark:border-white/10 shadow-2xl z-50 p-6 flex flex-col transition-all duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Panel Button */}
          <div className="flex justify-end mb-8">
            <button
              aria-label="Close navigation menu"
              className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-lg font-medium text-gray-800 dark:text-gray-100 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default React.memo(NavBar);
