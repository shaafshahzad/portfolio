import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Sidebar = () => {
	return (
		<div className="h-full w-2/5 flex flex-col justify-start items-start">
			<div className="space-y-2">
				<p className="text-5xl font-thin -ml-1">Shaaf Shahzad</p>
				<p className="font-thin text-xs text-left subheader">
					aspiring developer // computer engineering student
				</p>
			</div>
			<Navbar />
			<Footer />
		</div>
	);
};

export default Sidebar;
