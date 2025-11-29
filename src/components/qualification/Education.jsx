import React from "react";
import { resumeData } from "../../utils/resume.js";
import { getTimeline } from "../../utils/utils";

const Education = () => {
  return (
    <>
      {resumeData.education.map((edu, index) => (
        <article className="qualification__data" key={`${edu.degree}-${edu.startDate}`}>
          <div>
            <div className="qualification__calender">
              {`${getTimeline(edu.startDate, edu.endDate)}`}
            </div>
          </div>
          <div className="qualification__timeline">
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
          <div>
            <h3 className="qualification__title">{edu.degree}</h3>
            <span className="qualification__subtitle">{edu.institution}</span>
          </div>
        </article>
      ))}
    </>
  );
};

export default Education;
