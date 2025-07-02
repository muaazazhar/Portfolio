import React, { useEffect, useState } from "react";
import "./about.css";
import ME from "../../assets/heroImage.png";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";
import { about_text } from "./constants";

const About = () => {
  const [exp, setExp] = useState();

  function getExperience() {
  const startDate = new Date('2022-11-01');
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  setExp(`${years} years and ${months} months`)
}

  useEffect(()=>{
    getExperience()
  },[])
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
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>{exp}</small>
            </article>

            <article className="about_card">
              <GiGraduateCap className="about_icon" />
              <h5>Degree</h5>
              <small>BSCS(GCU Lahore)</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>Worked on around 10 projects</small>
            </article>
          </div>
          <p>
            {about_text}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
