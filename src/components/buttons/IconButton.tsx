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
		className="rounded-[10px] w-[60px] h-[60px] flex justify-center text-2xl items-center"
		style={{ backgroundColor: `${bgColor}` }}
	>
		{React.createElement(icon, { color })}
	</Link>
);

export default IconButton;
