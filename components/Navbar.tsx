"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	const isActive = (path: string) => pathname === path;

	return (
		<div className="flex flex-col mt-10 font-bold text-sm">
			<a
				href="/"
				className={`group flex items-center py-2 ${
					isActive("/") ? "active" : ""
				}`}
			>
				<span
					className={`nav-indicator mr-3 h-px transition-all ${
						isActive("/")
							? "w-16 bg-slate-200"
							: "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-600"
					}`}
				></span>
				About
			</a>
			<a
				href="/projects"
				className={`group flex items-center py-2 mt-1 ${
					isActive("/projects") ? "active" : ""
				}`}
			>
				<span
					className={`nav-indicator mr-3 h-px transition-all ${
						isActive("/projects")
							? "w-16 bg-slate-200"
							: "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-600"
					}`}
				></span>
				Projects
			</a>
			<a
				href="/resume"
				className={`group flex items-center py-2 mt-1 ${
					isActive("/resume") ? "active" : ""
				}`}
			>
				<span
					className={`nav-indicator mr-3 h-px transition-all ${
						isActive("/resume")
							? "w-16 bg-slate-200"
							: "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-600"
					}`}
				></span>
				Resume
			</a>
		</div>
	);
};

export default Navbar;
