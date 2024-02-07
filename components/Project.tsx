import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

// TODO: add project images for each project

interface ProjectProps {
	name: string;
	description: string;
	previewImage: string;
	tools: string[];
	linkTo: string;
}

const Project = ({
	name,
	description,
	previewImage,
	tools,
	linkTo,
}: ProjectProps) => {
	return (
		<Link
			href={linkTo}
			target="_blank"
			rel="noopener noreferrer"
			className="no-underline"
		>
			<div className="w-full mx-auto bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg my-4 flex flex-row group cursor-pointer hover:shadow-2xl transition duration-200">
				<div className="w-full p-4 flex justify-between space-x-10">
					<div className="w-2/3">
						<h2 className="text-sm font-bold flex items-center group-hover:text-[#f8c8dc] transition duration-200">
							{name}
							<ArrowTopRightIcon className="ml-2 w-5 h-5 group-hover:text-[#f8c8dc] group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-200" />
						</h2>
						<p className="text-xs mb-2">{description}</p>
					</div>
					<div className="flex flex-wrap w-1/3">
						{tools.map((tool) => (
							<span
								key={tool}
								className="bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-200 mr-2 mb-2 h-fit"
							>
								{tool}
							</span>
						))}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Project;
