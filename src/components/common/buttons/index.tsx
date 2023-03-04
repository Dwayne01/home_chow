import React from "react";
import { IconType } from "react-icons";
import classNames from "classnames";

type IconPosition = "left" | "right";

const Button = ({
	textColor,
	label,
	onClick,
	iconPosition,
	rootClass,
	type = "button",
	disabled,
	id,
	LeftIconComponent,
	RightIconComponent,
}: {
	LeftIconComponent?: IconType;
	RightIconComponent?: IconType;
	textColor?: string;
	type?: "button" | "submit" | "reset";
	label: string;
	onClick?: () => void;
	iconPosition?: IconPosition;
	rootClass?: string;
	disabled?: boolean;
	id?: string;
}) => (
	<button
		type={type}
		disabled={disabled}
		onClick={onClick}
		id={id}
		className={classNames(
			"rounded-[10px] flex justify-center items-center hover:bg-yellow-500",
			"text-2xl text-white p-3",
			disabled ? "bg-gray-400" : "bg-primary-color",
			rootClass
		)}
	>
		{LeftIconComponent && (
			<LeftIconComponent
				className={classNames(
					"mr-2",
					iconPosition === "right" && "mr-0",
					iconPosition === "left" && "ml-0"
				)}
			/>
		)}
		<span
			className={classNames(
				"text-lg font-bold mx-2",
				textColor || "text-primary-color"
			)}
		>
			{label}
		</span>
		{RightIconComponent && (
			<RightIconComponent
				className={classNames(
					"ml-2",
					iconPosition === "right" && "mr-0",
					iconPosition === "left" && "ml-0"
				)}
			/>
		)}
	</button>
);

export default Button;
