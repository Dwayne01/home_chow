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
	...others
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
				rootClass || "",
				"text-xl p-3 rounded-[10px] flex justify-center items-center hover:bg-primary-color-light hover:text-primary-color hover:border hover:border-primary-color hover:outline-primary-color-light focus:outline-none  focus:ring-4 focus:ring-primary-color-light",
				disabled ? "bg-gray-400" : "bg-primary-color"
			)}
			{...others}
		>
			{loading && <Loader data-testid="loading-indicator" size="40px" />}
			{iconPosition === "left" && Icon && !loading && (
				<Icon data-testid={`btn-icon-${iconPosition}`} />
			)}
			{!loading && <span>{label}</span>}
			{iconPosition === "right" && Icon && !loading && (
				<Icon data-testid={`btn-icon-${iconPosition}`} />
			)}
		</button>
	);
};

export default Button;
