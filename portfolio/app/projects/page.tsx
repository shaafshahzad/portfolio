import React from "react";
import Project from "../components/Project";

const projects = [
  {
    name: "Linus",
    description: "A self-learning copilot for aspiring software engineers.",
    previewImage: "/linus.png",
    tools: ["TypeScript", "Next.js", "TailwindCSS", "Firebase", "Python"],
    linkTo: "",
  },
  {
    name: "Project Inosculation",
    description:
      "A web-based platform that allows users to build, collaborate on, and merge family trees.",
    previewImage: "/projectinosculation.png",
    tools: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "MongoDB",
      "Express",
      "Node.js",
      "Neo4j",
    ],
    linkTo: "",
  },
  {
    name: "Project 4.0",
    description:
      "A web-based platform providing tools to help you achieve that 4.0 GPA",
    previewImage: "/portfolio.png",
    tools: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Firebase",
      "Python",
      "ClerkAuth",
    ],
    linkTo: "",
  },
  {
    name: "Streek - A Habit Tracking App",
    description: "A simple habit tracking app built in React Native with Expo",
    previewImage: "/streeks.png",
    tools: ["React Native", "JavaScript", "Expo"],
    linkTo: "https://github.com/shaafshahzad/habit-tracking-app",
  },
];

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
