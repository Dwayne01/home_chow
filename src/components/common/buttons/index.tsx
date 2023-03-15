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
			"text-xl md:text-2xl text-white p-3",
			disabled ? "bg-gray-400" : "bg-primary-color",
			"rounded-[10px] flex justify-center items-center ",
			textColor || "text-primary-color",
			"hover:bg-yellow-500 hover:text-white",

			disabled ? "bg-gray-400" : bgColor ? `${bgColor}` : "bg-primary-color",
			rootClass && rootClass
		)}
	>
		{loading && <Loader size="40px" />}

		{iconPosition === "left" && icon && (
			<>
				{React.createElement(icon, {
					color: textColor,
					className: `text-${textColor}`,
				})}
			</>
		)}
		{!loading && label && (
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
