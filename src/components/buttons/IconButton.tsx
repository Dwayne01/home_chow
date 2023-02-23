import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

const IconButton = ({
	icon,
	href,
	color,
	bgColor,
}: {
	icon: IconType;
	href: string;
	color: string;
	bgColor: string;
}) => (
	<Link
		href={href}
		className={`bg-[${bgColor}] rounded-[10px] w-[60px] h-[60px] focus:outline-none focus:ring-2 focus:ring-[${color}] focus:ring-opacity-80 flex justify-center text-2xl items-center`}
	>
		{React.createElement(icon, { color })}
	</Link>
);

export default IconButton;
