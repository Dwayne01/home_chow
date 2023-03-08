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
	bgColor,
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
	bgColor?: string;
}) => (
	<button
		type={type}
		disabled={disabled}
		onClick={onClick}
		id={id}
		className={classNames(
			"rounded-[10px] flex justify-center items-center ",
			"text-2xl p-2",
			`hover:bg-yellow-500`,
			disabled ? "bg-gray-400" : bgColor ? `${bgColor}` : "bg-primary-color",
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
					"text-lg mx-2",
					"hover:text-white",
					textColor || "text-primary-color"
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
