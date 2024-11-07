import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          <ProjectItem 
            key={project.id}              // Unique key for each project item
            name={project.name}            // Pass project name as a prop
            description={project.description}  // Pass project description as a prop
            technologies={project.technologies} // Pass project technologies as a prop
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
