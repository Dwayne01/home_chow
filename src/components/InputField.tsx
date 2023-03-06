import classNames from "classnames";
import React from "react";

const InputField = ({
	id,
	width,
	className,
	placeholder,
	label,
	handleChange,
	labelClassName,
	name,
	type,
	required,
	...props
}: {
	id?: string;
	width?: string;
	className?: string;
	placeholder?: string;
	type?: string;
	label?: string;
	name?: string;
	required?: boolean;
	handleChange?: (e: string) => void | undefined;
	labelClassName?: string;
}) => (
	<div className="relative flex gap-2 flex-col">
		{label && (
			<label
				htmlFor={placeholder}
				className={classNames("text-grey-7 font-semibold", labelClassName)}
			>
				{label} {required && <span className="text-red-500">*</span>}
			</label>
		)}
		<input
			id={id}
			type={type || "text"}
			name={name || "email"}
			className={classNames(
				"block",
				"p-2",
				"max-w-full",
				"rounded-lg",
				"border-2",
				"sm:text-sm",
				"border-grey-light",
				"bg-grey-1",
				"focus:border-zinc-400",
				"focus:outline-none",
				"focus:ring-gray-700",
				"focus-visible:outline-grey-7",
				"focus-visible:outline-offset-0",
				"placeholder-font-light",
				"placeholder:font-medium",
				"placeholder:text-xl",
				"font-bold",
				width,
				className
			)}
			placeholder={placeholder}
			aria-describedby={placeholder}
			onChange={(e) => handleChange && handleChange(e.target.value)}
			required={required}
			{...props}
		/>
	</div>
);

export default InputField;
