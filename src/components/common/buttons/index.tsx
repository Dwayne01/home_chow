import React from "react";
import { IconType } from "react-icons";
import classNames from "classnames";
import Loader from "../../../../public/assets/svg/Loader";

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
	id,
	loading,
}: {
	icon?: IconType;
	textColor?: string;
	type?: "button" | "submit" | "reset";
	label: string;
	onClick?: () => void;
	iconPosition?: IconPosition;
	rootClass?: string;
	disabled?: boolean;
	loading?: boolean;
	id?: string;
}) => (
	<button
		type={type}
		disabled={disabled}
		onClick={onClick}
		id={id}
		className={classNames(
			"rounded-[10px]",
			"flex items-center justify-center",
			"hover:bg-yellow-500",
			"text-xl md:text-2xl text-white p-3",
			disabled ? "bg-gray-400" : "bg-primary-color",
			rootClass || ""
		)}
	>
		{loading && <Loader size="40px" />}

		{iconPosition === "left" && icon && (
			<>{React.createElement(icon, { color: textColor })}</>
		)}
		{!loading && (
			<span
				className={classNames(
					"text-[11pt] md:text-lg mx-2",
					textColor ? `text-${textColor}` : "text-primary-color"
				)}
			>
				{label}
			</span>
		)}
		{iconPosition === "right" && icon && (
			<>{React.createElement(icon, { color: textColor })}</>
		)}
	</button>
);

export default Button;
