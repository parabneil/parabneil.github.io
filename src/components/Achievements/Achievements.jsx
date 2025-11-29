import React from "react";
import "./achievements.css";
import { resumeData } from "../../utils/resume";

const Achievements = () => {
  const achievements = resumeData.achievements;

  return (
    <section className="achievements section" id="achievements">
      <h2 className="section__title">Achievements</h2>
      <span className="section__subtitle">Milestones & Awards</span>

      <div className="achievements__container container grid">
        {achievements.length > 0 ? (
          achievements.map((item, index) => (
            <div className="achievement__card" key={index}>
              <i className="uil uil-trophy achievement__icon"></i>

              <div className="achievement__content">
                <h3 className="achievement__title">{item.title}</h3>
                <p className="achievement__description">{item.description}</p>
                <span className="achievement__year">{item.year}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="achievement__empty">No achievements added yet.</p>
        )}
      </div>
    </section>
  );
};

export default Achievements;
