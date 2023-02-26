import React from "react";
import { IconType } from "react-icons";
import classNames from "classnames";

type IconPosition = "left" | "right";

const Button = ({
	icon,
	textColor,
	label,
	onClick,
	iconPosition,
	rootClass,
	type = "button",
	disabled,
}: {
	icon?: IconType;
	textColor?: string;
	type?: "button" | "submit" | "reset";
	label: string;
	onClick: () => void;
	iconPosition?: IconPosition;
	rootClass?: string;
	disabled?: boolean;
}) => (
	<button
		type={type}
		disabled={disabled}
		onClick={onClick}
		className={classNames(
			"rounded-[10px] flex justify-center items-center hover:bg-yellow-500",
			"h-[56px] w-[166px] text-2xl text-white",
			disabled ? "bg-gray-400" : "bg-primary-color",
			rootClass || ""
		)}
	>
		{iconPosition === "left" &&
			icon &&
			icon(
				<>
					{React.createElement(icon, { color: textColor })}
					<span
						className={classNames(
							"text-lg font-medium mx-2",
							textColor || "text-primary-color"
						)}
					>
						{label}
					</span>
				</>
			)}
		{iconPosition === "right" && icon && (
			<>
				<span
					className={classNames(
						"text-lg font-medium mx-2",
						textColor || "text-primary-color"
					)}
				>
					{label}
				</span>
				{React.createElement(icon, { color: textColor })}
			</>
		)}
	</button>
);

export default Button;
