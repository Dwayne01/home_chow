import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

const IconButtonWithLabel = ({
	icon,
	href,
	color,
	bgColor,
	borderColor,
	label,
}: {
	icon: IconType;
	href: string;
	color: string;
	bgColor: string;
	borderColor: string;
	label: string;
}) => (
	<Link
		href={href}
		className="rounded-[10px] w-[166px] h-[56px] flex justify-center text-2xl items-center"
		style={{
			backgroundColor: `${bgColor}`,
			color: `${color}`,
			border: `1px solid ${borderColor}`,
		}}
	>
		<span className={`text-lg font-medium text-[${color}] mx-2`}>{label}</span>
		{React.createElement(icon, { color })}
	</Link>
);

export default IconButtonWithLabel;
