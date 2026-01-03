import { resumeData } from "../../data/resumeData";

export default function About() {
  return (
    <section className="section">
      <h2 className="section-title">About Me</h2>
      <p className="max-w-4xl text-gray-300">
        {resumeData.professionalSummary}
      </p>
    </section>
  );
}
