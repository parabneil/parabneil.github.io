import { assets } from "@/assets/assets";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "My Work", href: "#portfolio" },
  { label: "Contact Me", href: "#contact" },
];

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all ${isScroll ? "bg-white/50 backdrop-blur-md shadow-lg dark:bg-darkTheme/50" : ""}`}
      >
        {/* Portfolio logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Portfolio logo"
            className="w-32 cursor-pointer mr-14"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-colors ${isScroll ? "py-2" : "py-4 bg-white shadow-lg bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-heading dark:text-white hover:text-cyan-700 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle Dark Mode"
            className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition"
          >
            {isDarkMode ? (
              <Sun color="white" className="w-6" />
            ) : (
              <Moon color="black" className="w-6" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-heading dark:text-white dark:border-white/50 hover:bg-gray-50 dark:hover:bg-white/5 transition"
          >
            Contact{" "}
            <ArrowUpRight
              color={isDarkMode ? "white" : "black"}
              className="w-5"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden ml-3"
            aria-label="menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6" />
          </button>
        </div>

        {/* Mobile Menu Sidebar */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-cyan-100 transition-all duration-500 dark:bg-darkHover dark:text-white ${isMenuOpen ? "right-0" : "-right-64"}`}
        >
          <li>
            <button
              className="absolute right-6 top-6"
              aria-label="close"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-5" />
            </button>
          </li>

          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-heading font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default React.memo(NavBar);
