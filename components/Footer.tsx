import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="flex w-1/2 justify-start items-end">
			<div className="flex flex-row gap-8 mt-10">
				<Link
					href="https://github.com/shaafshahzad"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="/github.png"
						className="filter-e2e8f0"
						alt="GitHub"
						width={24}
						height={24}
					/>
				</Link>
				<Link
					href="https://www.linkedin.com/in/shaafshahzad"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="/linkedin.png"
						className="w-6 filter-e2e8f0"
						alt="LinkedIn"
						width={24}
						height={24}
					/>
				</Link>
				<Link
					href="https://www.instagram.com/shaafshahzad"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src="/instagram.png"
						className="w-6 filter-e2e8f0"
						alt="Instagram"
						width={24}
						height={24}
					/>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
