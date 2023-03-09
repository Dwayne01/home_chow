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
			"text-2xl ",
			"text-lg mx-1",
			textColor || "text-primary-color",
			`hover:bg-yellow-500 hover:text-white`,

			disabled ? "bg-gray-400" : bgColor ? `${bgColor}` : "bg-primary-color",
			rootClass || ""
		)}
	>
		{loading && <Loader size="40px" />}

		{iconPosition === "left" && icon && (
			<>{React.createElement(icon, { color: textColor })}</>
		)}

		{iconPosition === "right" && icon && (
			<>{React.createElement(icon, { color: textColor })}</>
		)}

		{label}
	</button>
);

export default Button;
