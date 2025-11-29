import React from "react";
import { resumeData } from "../../utils/resume.js";
import { START_YEAR } from "../../utils/constants.js";

const Info = () => {
  const experienceYears = new Date().getFullYear() - START_YEAR;

  const stats = [
    {
      count: "Full-Stack",
      title: "Certified Developer",
      subtitle: "",
    },
    {
      count: `${experienceYears}+ Yrs`,
      title: "Working Experience",
      subtitle: "",
    },
    {
      count: `${resumeData.projects.length}+`,
      title: "Projects Completed",
      subtitle: "",
    },
    {
      count: `${resumeData.certifications.length}+`,
      title: "Certifications Completed",
      subtitle: "",
    },
  ];

  return (
    <div className="about__info grid">
      {stats.map((item) => (
        <div className="about__box" key={item.title}>
          <h3 className="about__icon">{item.count}</h3>
          <p className="about__title">{item.title}</p>
          <span className="about__subtitle">{item.subtitle}</span>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Info);
