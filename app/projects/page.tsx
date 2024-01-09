import React from "react";
import Project from "../../components/Project";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          previewImage={project.previewImage}
          tools={project.tools}
          linkTo={project.linkTo}
        />
      ))}
    </div>
  );
}
