import React from "react";
import "./contact.css";
import { resumeData } from "../../utils/resume.js";
import SendMessageIcon from "./SendMessageIcon.jsx";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>
      <div className="contact__container container">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i
                className="bx bx-mail-send contact__card-icon"
                aria-hidden="true"
              ></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">{resumeData.emailId}</span>
              <a
                href={`mailto:${resumeData.emailId}`}
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                Email me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i
                className="bx bxl-whatsapp contact__card-icon"
                aria-hidden="true"
              ></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">{resumeData.mobileNo}</span>
              <a
                href={`https://wa.me/${resumeData.mobileNo}`}
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                Message me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i
                className="bx bxl-linkedin contact__card-icon"
                aria-hidden="true"
              ></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <a
                href={
                  resumeData.socialMediaLinks.find(
                    (media) => media.name === "LinkedIn"
                  ).link
                }
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                Connect with me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me your projects</h3>
          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Write your project"
              ></textarea>
            </div>

            <button href="#contact" className="button button--flex">
              Send Message
              <SendMessageIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
