import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import classNames from "classnames";

const IconButton = ({
	icon,
	href,
	color,
	bgColor,
}: {
	icon: IconType;
	href: string;
	color?: string;
	bgColor?: string;
}) => (
	<Link
		href={href}
		className={classNames(
			"rounded-[10px] w-[60px] h-[60px] flex justify-center text-2xl items-center",
			color || "text-primary-color",
			bgColor || "bg-white"
		)}
	>
		{React.createElement(icon, { color })}
	</Link>
);

export default IconButton;
