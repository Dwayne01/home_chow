import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

interface ButtonProps {
	icon: IconType;
	href: string;
}

const IconButton: React.FC<ButtonProps> = ({ icon, href }) => (
	<Link href={href}>
		<button className="px-5 mx-5 bg-[#FCFCFD] rounded-[10px] w-[60px] h-[60px] focus:outline-none focus:ring-2 focus:ring-[#EAAA08] focus:ring-opacity-80">
			<div className="flex justify-center text-2xl text-[#EAAA08]">
				{React.createElement(icon)}
			</div>
		</button>
	</Link>
);

export default IconButton;
