import React from "react";
import Project from "../../components/Project";
import { completedProjects } from "@/lib/completedProjects";
import { ongoingProjects } from "@/lib/ongoingProjects";

export default function Projects() {
	return (
		<div className="w-3/4 flex flex-col gap-8">
			<div>
				<h1>Completed Projects</h1>
				{completedProjects.map((project, index) => (
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
			<div>
				<h1>Ongoing Projects</h1>
				{ongoingProjects.map((project, index) => (
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
		</div>
	);
}
