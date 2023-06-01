import React from 'react'
import "./projects.css"
import ProjectCard from '../Shared/ProjectCard/ProjectCard'
import { project1, project2, project3 } from './constants'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>What I Have Done</h5>
      <h2>Projects</h2>
      <div className="container projects_container">
        <ProjectCard name={project1.name} details={project1.details} />
        <ProjectCard name={project2.name} details={project2.details} />
        <ProjectCard name={project3.name} details={project3.details} />
      </div>
    </section>
  )
}

export default Projects