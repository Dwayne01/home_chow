import React from "react";
import { IconType } from "react-icons";
import classNames from "classnames";
import Loader from "../../../../public/assets/svg/Loader";

type IconPosition = "left" | "right";

const Button = ({
	icon,
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
	type?: "button" | "submit" | "reset";
	label: string;
	onClick?: () => void;
	iconPosition?: IconPosition;
	rootClass?: string;
	disabled?: boolean;
	loading?: boolean;
	id?: string;
}) => {
	const Icon = icon;
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			id={id}
			className={classNames(
				disabled ? "bg-gray-400" : "bg-primary-color",
				"text-xl p-3 rounded-[10px] flex justify-center items-center bg-primary-color hover:bg-primary-color-light hover:text-primary-color hover:border hover:border-primary-color hover:outline-primary-color-light focus:outline-none  focus:ring-4 focus:ring-primary-color-light",
				rootClass || ""
			)}
		>
			{loading && <Loader size="40px" />}
			{iconPosition === "left" && Icon && <Icon />}
			{!loading && <span>{label}</span>}
			{iconPosition === "right" && Icon && <Icon />}
		</button>
	);
};

export default Button;
