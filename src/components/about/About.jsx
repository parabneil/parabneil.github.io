import React from "react";
import "./about.css";
import AboutImg from "../../assets/professional_profile.webp";
import CV from "../../assets/Narayan Parab - Full Stack Developer - Resume.pdf";
import Info from "./Info";
import { resumeData } from "../../utils/resume.js";
import DownloadIcon from "./DownloadIcon.jsx";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img
          loading="lazy"
          src={AboutImg}
          alt={`${resumeData.name.firstName} ${resumeData.name.lastName} - profile`}
          className="about__img"
        />
        <div className="about__data">
          <Info />

          <p className="about__description">{resumeData.professionalSummary}</p>
          <a
            download="Narayan_Parab_Full_Stack_Developer_Resume.pdf"
            href={CV}
            className="button button--flex"
            aria-label="Download Narayan Parab Resume"
          >
            Download Resume
            <DownloadIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
