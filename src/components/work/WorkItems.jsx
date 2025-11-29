import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card">
      <img src={item.previewUrls[0]} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      <a href={item.demoLink} className="work__button" target="_blank" rel="noreferrer">
        VIew <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
