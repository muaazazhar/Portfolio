import React from "react";
import "./skillCard.css";
import { BsPatchCheckFill } from "react-icons/bs";

const SkillCard = ({ name}) => {
  return (
    <article className="skill_details">
      <BsPatchCheckFill className="skill_details-icon"/>
      <div>
        <h4>{name}</h4>
      </div>
    </article>
  );
};

export default SkillCard;
