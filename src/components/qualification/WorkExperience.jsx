import React from "react";
import { resumeData } from "../../utils/resume.js";
import { getTimeline } from "../../utils/utils";

const WorkExperience = () => {
  return (
    <>
      {resumeData.workExperience.map((exp, index) => (
        <article className="qualification__data" key={`${exp.companyName}-${index}`}>
          <div>
            <div className="qualification__calender">
              {`${getTimeline(exp.startDate, exp.endDate)}`}
            </div>
          </div>
          <div className="qualification__timeline">
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
          <div>
            <h3 className="qualification__title">{exp.jobTitle}</h3>
            <span className="qualification__subtitle">{exp.companyName}</span>
          </div>
        </article>
      ))}
    </>
  );
};

export default WorkExperience;
