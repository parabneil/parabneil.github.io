import React from "react";
import "./languages.css";
import { resumeData } from "../../utils/resume";

const Languages = () => {
  const languages = resumeData.languages;

  return (
    <section className="languages section" id="languages">
      <h2 className="section__title">Languages</h2>
      <span className="section__subtitle">Speaking & Understanding</span>

      <div className="languages__container container grid">
        {languages.map((item, index) => (
          <div className="language__card" key={index}>
            <i className="uil uil-translate language__icon"></i>
            <h3 className="language__name">{item.language}</h3>
            <p className="language__level">{item.proficiency}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
