'use client'
import { useEffect, useState } from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import ProfileStats from "./components/ProfileStats";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = ''
    }
  }, [isDarkMode])


  return (
    <main>
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* 1. Introduction */}
      <Hero isDarkMode={isDarkMode} />

      {/* 2. The Context */}
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />

      {/* 3. Professional Proof */}
      <Experience isDarkMode={isDarkMode} />

      {/* 4. Concrete Examples (Projects) */}
      <Portfolio isDarkMode={isDarkMode} />

      {/* 5. Offering & Background */}
      <Services isDarkMode={isDarkMode} />
      <Education isDarkMode={isDarkMode} />
      <Certifications isDarkMode={isDarkMode} />
      <Achievements isDarkMode={isDarkMode} />

      {/* 6. Closing & Conversion */}
      <Testimonials isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />

      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}
