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
}) => {
	const colorVariants = {
		button: `bg-[${bgColor}] rounded-[10px] w-[60px] h-[60px] focus:outline-none focus:ring-2 focus:ring-[${color}] focus:ring-opacity-80`,
		text: `flex justify-center text-2xl text-[${color}]`,
	};
	return (
		<Link href={href}>
			<button className={`${colorVariants.button}`}>
				<div className={`${colorVariants.text}`}>
					{React.createElement(icon)}
				</div>
			</button>
		</Link>
	);
};

export default IconButton;
