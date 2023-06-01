import React from "react";
import "./projectCard.css";
import { BiCheck } from "react-icons/bi";

const ProjectCard = ({ name, details }) => {
  return (
    <article className="project">
      <div className="project_head">
        <h3>{name}</h3>
      </div>
      <ul className="project_list">
        {details.map((detail, i) => (
          <li key={i}>
            <BiCheck className="project_list-icon" size={20} />
            <p>{detail}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectCard;
