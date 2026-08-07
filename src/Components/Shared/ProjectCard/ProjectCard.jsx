import React, { useState } from "react";
import "./projectCard.css";
import { BiCheck } from "react-icons/bi";
import Lightbox from "../Lightbox/Lightbox";

const splitFeature = (feature) => {
  const [prefix, ...rest] = feature.split(" — ");
  return rest.length ? { prefix, rest: rest.join(" — ") } : { prefix: null, rest: feature };
};

const ProjectCard = ({ project }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const {
    name,
    tagline,
    stack,
    description,
    features,
    techStack,
    links,
    demoNote,
    demoAccounts,
    screenshots,
    liveNote,
  } = project;

  return (
    <article className="project_card surface-card">
      <div className="project_card-header">
        <div>
          <h3>{name}</h3>
          <p className="project_card-tagline">{tagline}</p>
        </div>
        <span className="project_card-stack">{stack}</span>
      </div>

      <div className="project_card-body">
        <div className="project_card-gallery">
          {screenshots.map((shot, i) => (
            <button
              key={shot.caption}
              type="button"
              className="project_card-thumb"
              onClick={() => setOpenIndex(i)}
            >
              <img src={shot.src} alt={shot.caption} loading="lazy" />
              <span>{shot.caption}</span>
            </button>
          ))}
        </div>

        <div className="project_card-details">
          {description.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-light">
              {paragraph}
            </p>
          ))}

          <h4>Key features</h4>
          <ul className="project_card-features">
            {features.map((feature) => {
              const { prefix, rest } = splitFeature(feature);
              return (
                <li key={feature}>
                  <BiCheck className="project_list-icon" size={20} />
                  <p>
                    {prefix && <strong>{prefix} — </strong>}
                    {rest}
                  </p>
                </li>
              );
            })}
          </ul>

          <h4>Technology</h4>
          <div className="project_card-tech">
            {techStack.map((row) => (
              <div key={row.label} className="project_card-tech-row">
                <span className="project_card-tech-label">{row.label}</span>
                <span className="text-light">{row.value}</span>
              </div>
            ))}
          </div>

          <h4>Links</h4>
          {liveNote && <p className="project_card-note text-light">{liveNote}</p>}
          <div className="project_card-links">
            {links.liveDemo && (
              <a href={links.liveDemo} target="_blank" rel="noreferrer" className="btn btn-primary">
                Live demo
              </a>
            )}
            {links.frontendRepo && (
              <a href={links.frontendRepo} target="_blank" rel="noreferrer" className="btn">
                Frontend repo
              </a>
            )}
            {links.backendRepo && (
              <a href={links.backendRepo} target="_blank" rel="noreferrer" className="btn">
                Backend repo
              </a>
            )}
          </div>

          <h4>Demo accounts</h4>
          {demoNote && <p className="project_card-note text-light">{demoNote}</p>}
          <div className="project_card-demo-table">
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Email / Username</th>
                  <th>Password</th>
                  <th>Access</th>
                </tr>
              </thead>
              <tbody>
                {demoAccounts.map((account) => (
                  <tr key={account.email}>
                    <td>{account.role}</td>
                    <td className="project_card-mono">{account.email}</td>
                    <td className="project_card-mono">{account.password}</td>
                    <td className="text-light">{account.access}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox images={screenshots} startIndex={openIndex} onClose={() => setOpenIndex(null)} />
      )}
    </article>
  );
};

export default ProjectCard;
