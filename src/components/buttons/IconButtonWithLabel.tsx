import React from "react";
import { IconType } from "react-icons";
import classNames from "classnames";

type IconPosition = "left" | "right";

const IconButtonWithLabel = ({
	icon,
	textColor,
	bgColor,
	borderColor,
	label,
	onClick,
	iconPosition,
	rootClass,
	height,
	width,
	textSize,
	disabled,
}: {
	icon: IconType;
	textColor: string;
	bgColor: string;
	borderColor: string;
	label: string;
	onClick: () => void;
	iconPosition: IconPosition;
	rootClass?: string;
	height?: string;
	width?: string;
	textSize?: string;
	disabled?: boolean;
}) => (
	<button
		type="button"
		disabled={disabled}
		onClick={onClick}
		className={classNames(
			"rounded-[10px] flex justify-center items-center",
			height || "h-[56px]",
			width || "w-[166px]",
			textSize || "text-2xl",
			rootClass || ""
		)}
		style={{
			backgroundColor: `${bgColor}`,
			color: `${textColor}`,
			border: `1px solid ${borderColor}`,
		}}
	>
		{iconPosition === "left" && (
			<>
				{React.createElement(icon, { color: textColor })}
				<span className={`text-lg font-medium text-[${textColor}] mx-2`}>
					{label}
				</span>
			</>
		)}
		{iconPosition === "right" && (
			<>
				<span className={`text-lg font-medium text-[${textColor}] mx-2`}>
					{label}
				</span>
				{React.createElement(icon, { color: textColor })}
			</>
		)}
	</button>
);

export default IconButtonWithLabel;
