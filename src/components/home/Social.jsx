import React from "react";
import { resumeData } from "../../utils/resume.js";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href={
          resumeData.socialMediaLinks.find(
            (media) => media.name === "Instagram"
          ).link
        }
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href={
          resumeData.socialMediaLinks.find((media) => media.name === "LinkedIn")
            .link
        }
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href={
          resumeData.socialMediaLinks.find((media) => media.name === "Github")
            .link
        }
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
