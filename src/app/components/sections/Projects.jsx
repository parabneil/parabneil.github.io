import { resumeData } from "../../data/resumeData";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {resumeData.projects.map((project, i) => (
          <div key={i} className="card">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-400">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="badge">{tech}</span>
              ))}
            </div>

            <a
              href={project.demoLink}
              target="_blank"
              className="inline-block mt-4 text-indigo-400"
            >
              Live Demo →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
