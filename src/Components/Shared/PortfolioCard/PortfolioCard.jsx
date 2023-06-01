import React from "react";
import "./portfolioCard.css"

const PortfolioCard = ({title, image, githubLink, demoLink}) => {
  return (
    <article className="portfolio_item">
      <div className="portfolio_item-image">
        <img src={image} alt="portfolio image" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio_item-cta">
      <a href={githubLink} target="_blank" className="btn">
        Github
      </a>
      {demoLink && <a href={demoLink} target="_blank">Demo</a>}
      </div>
    </article>
  );
};

export default PortfolioCard;
