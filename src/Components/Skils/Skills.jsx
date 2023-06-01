import React from "react";
import "./skills.css";
import SkillCard from "../Shared/SkillsCard/SkillCard";
import { backend_Skills, frontend_Skills, languages, tools } from "./constants";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I have?</h5>
      <h2>My Skills</h2>
      <div className="container skill_container">
        <div className="skill_frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            {frontend_Skills.map((name, i) => (
              <SkillCard name={name}key={i} />
            ))}
          </div>
        </div>
        <div className="skill_backend">
          <h3>Backend Development</h3>
          <div className="skill_content">
            {backend_Skills.map((name, i) => (
              <SkillCard name={name} key={i} />
            ))}
          </div>
        </div>
        <div className="languages">
          <h3>Languages</h3>
          <div className="skill_content">
            {languages.map((name, i) => (
              <SkillCard name={name} key={i} />
            ))}
          </div>
        </div>
        <div className="tools">
          <h3>Tools I Learned</h3>
          <div className="skill_content">
            {tools.map((name, i) => (
              <SkillCard name={name} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
