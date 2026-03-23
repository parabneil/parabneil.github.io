import React from 'react'
import Home from "../components/home/Home";
import About from "../components/about/About";
import Qualification from "../components/qualification/Qualification";
import Certifications from "../components/Certifications/Certifications";
import Skills from "../components/skills/Skills";
import Services from "../components/services/Services";
import Work from "../components/work/Work";
import Achievements from "../components/Achievements/Achievements";
import Testimonials from "../components/testimonials/Testimonials";
import Languages from "../components/Languages/Languages";
import Interests from "../components/Interests/Interests";
import Contact from "../components/contact/Contact";
import { resumeData } from './resume';

export const headerMenus = [
  { id: "#home", label: "Home", icon: "uil-estate", component: <Home /> },
  { id: "#about", label: "About", icon: "uil-user", component: <><About /><Languages /><Interests /></> },
  {
    id: "#qualification",
    label: "Qualification",
    icon: "uil-graduation-cap",
    component: <><Qualification /><Certifications /></>,
  },
  {
    id: "#skills",
    label: "Skills",
    icon: "uil-file-alt",
    component: <Skills />,
  },
  {
    id: "#portfolio",
    label: "Portfolio",
    icon: "uil-scenery",
    component: <><Services /><Work /><Achievements />{resumeData.testimonials.length > 0 && <Testimonials />}</>,
  },
  {
    id: "#contact",
    label: "Contact",
    icon: "uil-message",
    component: <Contact />,
  },
];
