import React from "react";
import "./certifications.css";
import { resumeData } from "../../utils/resume";

const Certifications = () => {
  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <section className="certifications section" id="certifications">
      <h2 className="section__title">Certifications</h2>
      <span className="section__subtitle">My verified achievements</span>

      <div className="certifications__container container grid">
        {resumeData.certifications.map((cert, index) => (
          <div className="certification__card" key={index}>
            <i className="uil uil-award certification__icon"></i>
            <h3 className="certification__name">{cert.name}</h3>

            <span className="certification__org">{cert.organization}</span>

            <span className="certification__date">
              Issued: {formatDate(cert.issueDate)}
            </span>

            {cert.expiryDate && (
              <span className="certification__date">
                Expires: {formatDate(cert.expiryDate)}
              </span>
            )}

            {cert.credentialURL && (
              <a
                href={cert.credentialURL}
                target="_blank"
                rel="noopener noreferrer"
                className="certification__btn"
              >
                View Credential
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
