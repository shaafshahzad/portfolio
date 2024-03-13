import React from "react";

export default function Resume() {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center text-center">
			<div style={{ width: "100%", height: "90vh", overflow: "hidden" }}>
				<iframe
					title="Resume"
					width="100%"
					height="100%"
					style={{ border: "none", overflow: "hidden" }}
				></iframe>
			</div>
			<a className="mt-4 transition duration-200 ease-in-out hover:text-[#f8c8dc] hover:-translate-y-1">
				Download Resume
			</a>
		</div>
	);
}
