import React, { useState } from "react";
import "./services.css";
import { resumeData } from "../../utils/resume";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">
        {resumeData.services.map((service) => (
          <div className="services__content" key={service.id}>
            <div>
              <i className={`uil ${service.icon} services__icon`}></i>
              <h3 className="services__title">
                {service.title.split(" ")[0]} <br />
                {service.title.split(" ")[1]}
              </h3>
            </div>

            <span
              className="services__button"
              onClick={() => openModal(service.id)}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            {/* Modal */}
            <div
              className={
                activeModal === service.id
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={closeModal}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">{service.title}</h3>
                <p className="services__modal-description">
                  {service.description}
                </p>

                <ul className="services__modal-services grid">
                  {service.services.map((item, index) => (
                    <li className="services__modal-service" key={index}>
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
