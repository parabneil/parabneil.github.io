import { resumeData } from "../../data/resumeData";

export default function Hero() {
  const { name, jobTitle, headline } = resumeData;

  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold">
          {name.firstName}{" "}
          <span className="text-indigo-400">{name.lastName}</span>
        </h1>

        <p className="mt-4 text-xl text-gray-400">
          {jobTitle[0]}
        </p>

        <p className="mt-6 max-w-2xl text-gray-300">
          {headline}
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
