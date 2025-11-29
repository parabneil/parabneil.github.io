import React from "react";
import "./footer.css";
import { resumeData } from "../../utils/resume.js";
import { headerMenus } from "../../utils/headerMenus.js";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <a href="#home">
          <h1 className="footer__title">
            <span>{`${
              resumeData.name.firstName + resumeData.name.lastName
            }`}</span>
            .dev
          </h1>
        </a>
        <ul className="footer__list">
          {headerMenus.map((menu) => (
            <li key={menu.id}>
              <a href={menu.id} className="footer__link">
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer__social">
          <a
            href={
              resumeData.socialMediaLinks.find(
                (media) => media.name === "Instagram"
              ).link
            }
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            title="Instagram Profile"
          >
            <i className="bx bxl-instagram" aria-hidden="true"></i>
          </a>
          <a
            href={
              resumeData.socialMediaLinks.find(
                (media) => media.name === "LinkedIn"
              ).link
            }
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
          >
            <i className="bx bxl-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href={
              resumeData.socialMediaLinks.find(
                (media) => media.name === "Github"
              ).link
            }
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
          >
            <i className="bx bxl-github" aria-hidden="true"></i>
          </a>
        </div>

        <div className="footer__copy">
          {`${resumeData.name.firstName} ${resumeData.name.lastName}`} &#169;{" "}
          {currentYear}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
