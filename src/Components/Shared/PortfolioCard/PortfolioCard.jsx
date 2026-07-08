import React from "react";
import "./portfolioCard.css";

const PortfolioCard = ({ title, image, githubLink, demoLink }) => {
  return (
    <article className="portfolio_item surface-card">
      <div className="portfolio_item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio_item-cta">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" className="btn">
            Github
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default PortfolioCard;
