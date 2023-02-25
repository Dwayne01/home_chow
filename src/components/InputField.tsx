import classNames from "classnames";
import React from "react";

const InputField = ({
	width,
	className,
	placeholder,
	label,
	handleChange,
	labelClassName,
	...props
}: {
	width?: string;
	className?: string;
	placeholder?: string;
	label?: string;
	handleChange?: (e: string) => void | undefined;
	labelClassName?: string;
}) => (
	<div className="relative flex gap-2 flex-col">
		{label && (
			<label
				htmlFor={placeholder}
				className={classNames("text-grey-7", labelClassName)}
			>
				{label}
			</label>
		)}
		<input
			type="text"
			name="email"
			className={classNames(
				"block",
				"p-2",
				"max-w-full",
				"rounded-sm",
				"border",
				"sm:text-sm",
				"border-#718096",
				"bg-grey-1",
				"focus:border-zinc-400",
				"focus:outline-none",
				"focus:ring-gray-700",
				"focus-visible:outline-grey-7",
				"focus-visible:outline-offset-0",
				"placeholder-#718096",
				"placeholder:font-normal",
				"font-bold",
				width,
				className
			)}
			placeholder={placeholder}
			aria-describedby={placeholder}
			onChange={(e) => handleChange && handleChange(e.target.value)}
			{...props}
		/>
	</div>
);

export default InputField;
