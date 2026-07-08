import React from "react";
import "./skills.css";
import SkillCard from "../Shared/SkillsCard/SkillCard";
import {
  backend_Skills,
  databases_Skills,
  frontend_Skills,
  mobile_Skills,
  tools,
} from "./constants";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I have?</h5>
      <h2>My Skills</h2>
      <div className="container skill_container">
        <div className="skill_frontend surface-card">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            {frontend_Skills.map((name, i) => (
              <SkillCard name={name} key={i} />
            ))}
          </div>
        </div>
        <div className="skill_backend surface-card">
          <h3>Mobile Development</h3>
          <div className="skill_content">
            {mobile_Skills.map((name, i) => (
              <SkillCard name={name} key={i} />
            ))}
          </div>
        </div>
        <div className="skill_backend surface-card">
          <h3>Backend Development</h3>
          <div className="skill_content">
            {backend_Skills.map((name, i) => (
              <SkillCard name={name} key={i} />
            ))}
          </div>
        </div>
        <div className="languages surface-card">
          <h3>Databases & APIs</h3>
          <div className="skill_content">
            {databases_Skills.map((name, i) => (
              <SkillCard name={name} key={i} />
            ))}
          </div>
        </div>
        <div className="tools surface-card">
          <h3>Collaboration & Workflow</h3>
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
