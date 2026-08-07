import React from 'react'
import "./projects.css"
import ProjectCard from '../Shared/ProjectCard/ProjectCard'
import { projects } from './constants'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>What I Have Done</h5>
      <h2>Projects</h2>
      <div className="container projects_container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
