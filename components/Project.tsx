import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { tools as toolColors } from "../lib/tools";

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
        <div className="w-full p-4 flex flex-col md:flex-row justify-between space-y-2 md:space-x-10">
          <div className="md:w-2/3">
            <h2 className="text-sm font-bold flex items-center group-hover:text-[#f8c8dc] transition duration-200">
              {name}
              <ArrowTopRightIcon className="ml-2 w-5 h-5 group-hover:text-[#f8c8dc] group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-200" />
            </h2>
            <p className="text-xs mb-2 whitespace-pre-line">{description}</p>
          </div>
          <div className="flex flex-wrap md:w-[47%] items-start">
            {tools.map((tool) => {
              const toolStyle = toolColors[tool as keyof typeof toolColors];
              return (
                <span
                  key={tool}
                  className="rounded-full px-3 py-1 text-[10px] sm:text-xs font-semibold mr-2 mb-2 h-fit transition duration-300 transform hover:-translate-y-1"
                  style={{
                    backgroundColor: toolStyle?.backgroundColor,
                    color: toolStyle?.color,
                    boxShadow: `0 0 6px ${toolStyle?.backgroundColor}`,
                  }}
                >
                  {tool}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
