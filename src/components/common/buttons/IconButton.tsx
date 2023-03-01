import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import classNames from "classnames";

const IconButton = ({
	icon,
	href,
	color,
	bgColor,
	className,
}: {
	icon: IconType;
	href: string;
	color: string;
	bgColor?: string;
	className?: string;
}) => (
	<Link
		href={href}
		className={classNames(
			"rounded-[10px] w-[60px] h-[60px] text-primary-color flex justify-center text-2xl items-center",
			bgColor || "bg-white",
			className
		)}
	>
		{React.createElement(icon, { color })}
	</Link>
);

export default IconButton;
