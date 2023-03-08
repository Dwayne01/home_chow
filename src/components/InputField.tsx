import classNames from "classnames";
import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";

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
}) => {
	const [showPassword, setShowPassword] = React.useState(false);

	return (
		<div className="relative flex gap-2 flex-col">
			{label && (
				<label
					htmlFor={placeholder}
					className={classNames("text-grey-7 font-semibold", labelClassName)}
				>
					{label} {required && <span className="text-red-500">*</span>}
				</label>
			)}
			<div className="flex flex-col relative">
				<input
					id={id}
					type={showPassword ? "text" : type || "text"}
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
				{type === "password" && (
					<div className="absolute right-4 top-[50%] -translate-y-1/2 text-xl cursor-pointer rounded-full bg-slate-200 p-1 ">
						{showPassword ? (
							<MdOutlineVisibility
								className=""
								onClick={() => setShowPassword(!showPassword)}
							/>
						) : (
							<AiOutlineEyeInvisible
								className=""
								onClick={() => setShowPassword(!showPassword)}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default InputField;
