import React from "react";
import { IconType } from "react-icons";

type IconPosition = "left" | "right";

const IconButtonWithLabel = ({
	icon,
	color,
	bgColor,
	borderColor,
	label,
	onClick,
	iconPosition,
}: {
	icon: IconType;
	color: string;
	bgColor: string;
	borderColor: string;
	label: string;
	onClick: () => void;
	iconPosition: IconPosition;
}) => (
	<button
		type="button"
		onClick={onClick}
		className="rounded-[10px] w-[166px] h-[56px] flex justify-center text-2xl items-center"
		style={{
			backgroundColor: `${bgColor}`,
			color: `${color}`,
			border: `1px solid ${borderColor}`,
		}}
	>
		{iconPosition === "left" && (
			<>
				{React.createElement(icon, { color })}
				<span className={`text-lg font-medium text-[${color}] mx-2`}>
					{label}
				</span>
			</>
		)}
		{iconPosition === "right" && (
			<>
				<span className={`text-lg font-medium text-[${color}] mx-2`}>
					{label}
				</span>
				{React.createElement(icon, { color })}
			</>
		)}
	</button>
);

export default IconButtonWithLabel;
