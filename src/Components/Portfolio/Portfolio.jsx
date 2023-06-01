import React from "react";
import "./portfolio.css";
import PortfolioCard from "../Shared/PortfolioCard/PortfolioCard";
import { portfolio } from "./constants";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {portfolio.map(({title, githubLink, demoLink, image}, i)=>(
          <PortfolioCard key={i} title={title} githubLink={githubLink} demoLink={demoLink} image={image}/>
        )) }
      </div>
    </section>
  );
};

export default Portfolio;
