import { resumeData } from "../../data/resumeData";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>

      <p>Email: {resumeData.emailId}</p>
      <p>Mobile: {resumeData.mobileNo}</p>

      <div className="flex gap-4 mt-4">
        {resumeData.socialMediaLinks.map(link => (
          <a key={link.name} href={link.link} target="_blank">
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
}
