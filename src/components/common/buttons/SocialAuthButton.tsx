import React from "react";
import { IconType } from "react-icons";
import classNames from "classnames";

const SocialAuthButton = ({
	icon,
	label,
	textColor,
	bgColor,
	borderColor,
	onClick,
	rootClass,
	disabled,
	id,
	type = "button",
}: {
	icon?: IconType;
	label: string;
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
			"w-[360px] h-[44px] flex justify-center items-center text-base leading-6 border rounded-[8px] ",
			textColor || "text-grey-dark",
			bgColor || "bg-white",
			borderColor || "border-border-color",
			rootClass || ""
		)}
	>
		{icon ? <>{React.createElement(icon, { color: textColor })}</> : null}
		{label}
	</button>
);

export default SocialAuthButton;
