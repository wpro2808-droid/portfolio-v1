import { useApp } from "../context/AppContext";
import "./Skills.scss";
import { skillsData, techBadges } from "../data/skills.js";

export default function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.skills.title}</h2>
          <div className="section-line" />
        </div>

        <p className="skills-subtitle">{t.skills.subtitle}</p>

        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-top">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ "--w": `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="tech-badges">
          {techBadges.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
