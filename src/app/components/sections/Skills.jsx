import { resumeData } from "../..//data/resumeData";

export default function Skills() {
  const grouped = resumeData.skills.reduce((acc, skill) => {
    acc[skill.skillCategory] ||= [];
    acc[skill.skillCategory].push(skill);
    return acc;
  }, {});

  return (
    <section className="section">
      <h2 className="section-title">Skills</h2>

      {Object.entries(grouped).map(([category, skills]) => (
        <div key={category} className="mt-8">
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map(skill => (
              <div key={skill.skillName} className="card">
                <img src={skill.skillLogo} alt="" className="h-10 mx-auto" />
                <p className="mt-2 text-center">{skill.skillName}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
