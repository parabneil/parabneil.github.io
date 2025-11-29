import Home from "../components/Home/Home";
import About from "../components/About/About";
import Qualification from "../components/Qualification/Qualification";
import Certifications from "../components/Certifications/Certifications";
import Skills from "../components/Skills/Skills";
import Services from "../components/Services/Services";
import Work from "../components/Work/Work";
import Achievements from "../components/Achievements/Achievements";
import Testimonials from "../components/Testimonials/Testimonials";
import Languages from "../components/Languages/Languages";
import Interests from "../components/Interests/Interests";
import Contact from "../components/Contact/Contact";

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
    component: <><Services /><Work /><Achievements /><Testimonials /></>,
  },
  {
    id: "#contact",
    label: "Contact",
    icon: "uil-message",
    component: <Contact />,
  },
];
