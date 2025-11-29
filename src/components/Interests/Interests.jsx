import React from "react";
import "./interests.css";
import { resumeData } from "../../utils/resume";

const Interests = () => {
  const interests = resumeData.interests;

  return (
    <section className="interests section" id="interests">
      <h2 className="section__title">Interests</h2>
      <span className="section__subtitle">Hobbies & Passions</span>

      <div className="interests__container container grid">
        {interests.length > 0 ? (
          interests.map((item, index) => (
            <div className="interest__card" key={index}>
              <i className="uil uil-heart interest__icon"></i>
              <p className="interest__name">{item}</p>
            </div>
          ))
        ) : (
          <p className="interest__empty">No interests added yet.</p>
        )}
      </div>
    </section>
  );
};

export default Interests;
