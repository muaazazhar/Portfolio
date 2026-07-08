import React, { useEffect, useState } from "react";
import "./about.css";
import ME from "../../assets/heroImage.png";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";
import { about_text } from "./constants";
import { getExperience } from "./getExperience";

const About = () => {
  const [exp, setExp] = useState();

  useEffect(() => {
    const { years, months, days } = getExperience();
    setExp(`${years} years and ${months} months and ${days} days`);
  }, []);
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt="Profile" className="about_me-image" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card surface-card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>{exp}</small>
            </article>

            <article className="about_card surface-card">
              <GiGraduateCap className="about_icon" />
              <h5>Degree</h5>
              <small>BSCS(GCU Lahore)</small>
            </article>
            <article className="about_card surface-card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>Inventory, social, and data analysis platforms</small>
            </article>
          </div>
          <p>{about_text}</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
