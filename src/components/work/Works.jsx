import React, { useEffect, useState } from "react";
import { projectsNav } from "../../utils/constants.js";
import WorkItems from "./WorkItems.jsx";
import { resumeData } from "../../utils/resume.js";

const Works = () => {
  const [active, setActive] = useState(0);
  const [filterValue, setFilterValue] = useState("all");
  const [projects, setProjects] = useState(resumeData.projects);

  useEffect(() => {
    if (filterValue === "all") {
      setProjects(resumeData.projects);
    } else {
      setProjects(
        resumeData.projects.filter((project) =>
          project.techStack.includes(filterValue)
        )
      );
    }
  }, [filterValue]);

  const handleClick = (value, index) => {
    setFilterValue(value);
    setActive(index);
  };

  return (
    <>
      {/* Filters */}
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span
            key={navItem.value}
            className={`work__item ${active === index ? "active-work" : ""}`}
            onClick={() => handleClick(navItem.value, index)}
          >
            {navItem.label}
          </span>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="work__container container grid">
        {projects.length > 0 ? (
          projects.map((project) => (
            <WorkItems item={project} key={project.title} />
          ))
        ) : (
          <div className="no-projects">No projects to show</div>
        )}
      </div>
    </>
  );
};

export default Works;
