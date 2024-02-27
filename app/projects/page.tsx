import React from "react";
import Project from "../../components/Project";
import { completedProjects } from "@/lib/completedProjects";
import { ongoingProjects } from "@/lib/ongoingProjects";

export default function Projects() {
	return (
		<div className="h-full overflow-y-auto px-10">
			<h1>Completed Projects</h1>
			{completedProjects.map((project) => (
				<Project
					key={project.name}
					name={project.name}
					description={project.description}
					previewImage={project.previewImage}
					tools={project.tools}
					linkTo={project.linkTo}
				/>
			))}
			<h1 className="mt-10">Ongoing Projects</h1>
			{ongoingProjects.map((project) => (
				<Project
					key={project.name}
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
