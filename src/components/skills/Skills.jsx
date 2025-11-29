import React, { useMemo } from "react";
import "./skills.css";
import { resumeData } from "../../utils/resume.js";
import { transformSkillsData } from "../../utils/utils.js";

const Skills = () => {
  const resumeTransformedData = useMemo(
    () => transformSkillsData(resumeData),
    []
  );

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container">
        {Object.entries(resumeTransformedData.skills).map(
          ([category, items]) => {
            return (
              <div className="skills__card" key={category}>
                {/* Header */}
                <div className="skills__header">
                  <h3 className="skills__title">{category}</h3>
                </div>

                {/* Content */}
                <div className="skills__content">
                  {items.map((skill) => (
                    <div className="skills__item" key={skill.skillName}>
                      {skill.skillLogo ? (
                        <img
                          src={skill.skillLogo}
                          alt={`${skill.skillName} logo`}
                          className="skills__icon"
                          onError={(e) => (e.target.style.display = "none")}
                        />
                      ) : (
                        <i className="bx bx-badge-check skills__icon-default"></i>
                      )}

                      <div className="skills__info">
                        <p className="skills__name">{skill.skillName}</p>
                        <span className="skills__level">
                          {skill.skillLevel}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Skills;
