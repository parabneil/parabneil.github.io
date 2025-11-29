import React, { useState } from "react";
import "./qualification.css";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const tabs = [
  {
    id: 1,
    label: "Education",
    icon: "uil-graduation-cap",
    component: <Education />,
  },
  {
    id: 2,
    label: "Experience",
    icon: "uil-briefcase-alt",
    component: <WorkExperience />,
  },
];

const Qualification = () => {
  const [activeTab, setActiveTab] = useState(2);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {tabs.map((tab) => (
            <button
              type="button"
              className={
                activeTab === tab.id
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(tab.id)}
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.label.toLowerCase()}-panel`}
            >
              <i
                className={`uil ${tab.icon} qualification__icon`}
                aria-hidden="true"
              ></i>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="qualification__sections">
          {tabs.map((tab) => (
            <div
              className={
                activeTab === tab.id
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
              key={tab.id}
            >
              {tab.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
