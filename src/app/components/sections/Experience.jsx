import { resumeData } from "../../data/resumeData";

export default function Experience() {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>

      <div className="space-y-8">
        {resumeData.workExperience.map((job, index) => (
          <div key={index} className="card">
            <h3 className="text-lg font-bold">{job.jobTitle}</h3>
            <p className="text-gray-400">
              {job.companyName} • {job.companyLocation}
            </p>

            <ul className="mt-3 list-disc ml-5 text-gray-300">
              {job.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
