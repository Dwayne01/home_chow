import React from "react";
import { IconType } from "react-icons";
import classNames from "classnames";

const WideIconButton = ({
	label,
	icon,
	iconColor,
	textColor,
	bgColor,
	borderColor,
	onClick,
	rootClass,
	disabled,
	id,
	type = "button",
}: {
	label: string;
	icon?: IconType;
	iconColor?: string;
	textColor?: string;
	bgColor?: string;
	borderColor?: string;
	onClick?: () => void;
	rootClass?: string;
	disabled?: boolean;
	id?: string;
	type?: "button" | "submit";
}) => (
	<button
		type={type}
		disabled={disabled}
		onClick={onClick}
		id={id}
		className={classNames(
			"w-[360px] h-[44px] px-[10px] py-[16px] gap-[12px] flex justify-center items-center text-base leading-6 border rounded-[8px]",
			textColor || "text-grey-dark",
			bgColor || "bg-white",
			borderColor || "border-border-color",
			rootClass || "",
			icon
				? "drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
				: "drop-shadow-[0_8px_27px_rgba(47,46,65,0.35)]",
			disabled ? "opacity-50" : ""
		)}
	>
		{icon ? (
			<div className="text-2xl">
				{React.createElement(icon, { color: iconColor })}
			</div>
		) : null}
		{label}
	</button>
);

export default WideIconButton;
