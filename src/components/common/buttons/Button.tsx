import classNames from "classnames";

type ButtonProps = {
	type?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "primary-outline"
		| "secondary-outline"
		| "tertiary-outline";
	size?: string;
	LeftIconComponent?: any;
	RightIconComponent?: any;
	onClick?: () => void;
	children?: any;
	disabled?: boolean;
	buttonType?: "button" | "submit" | "reset" | undefined;
	className?: string;
};

const Button = ({
	type = "secondary",
	size = "md",
	LeftIconComponent = null,
	RightIconComponent = null,
	className = "",
	onClick = () => {},
	children = "N/A",
	buttonType = "button",
	disabled = false,
}: ButtonProps) => {
	// define all the siezes of the button
	const sizeMap = new Map([
		["sm", "px-2 py-2 text-sm"],
		["md", "px-4 py-2 text-base"],
		["lg", "px-6 py-3 text-lg"],
	]);

	// once designers have defined all the color combinations, we can add them here

	// types of buttons

	// primary
	// secondary
	// tertiary

	const buttonVariants = new Map([
		[
			"primary",
			"text-white bg-primary-color hover:bg-white hover:text-primary-color border-primary-color focus:ring-primary-color focus:ring-offset-primary-color",
		],
		[
			"secondary",
			"text-white bg-green-dark hover:bg-white hover:text-green-dark border-green-dark focus:ring-green-dark focus:ring-offset-green-dark",
		],
		// leave this a todo for now when we have the tertiary color
		[
			"tertiary",
			"text-white bg-tertiary-color hover:bg-white hover:text-tertiary-color border-tertiary-color focus:ring-tertiary-color focus:ring-offset-tertiary-color",
		],
		[
			"primary-outline",
			"text-primary-color bg-white hover:bg-primary-color hover:text-white border-2 border-primary-color focus:ring-primary-color focus:ring-offset-primary-color",
		],
		[
			"secondary-outline",
			"text-green-dark bg-white hover:bg-green-dark hover:text-white border-green-dark border-2 focus:ring-green-dark focus:ring-offset-green-dark",
		],
		// leave this a todo for now when we have the tertiary color
		[
			"tertiary-outline",
			"text-tertiary-color bg-white hover:bg-tertiary-color hover:text-white border-tertiary-color border-2 focus:ring-tertiary-color focus:ring-offset-tertiary-color",
		],
	]);

	if (sizeMap.has(size)) {
		return (
			<button
				className={classNames(
					"h-fit",
					"inline-flex",
					"items-center",
					"rounded",
					"border",
					"font-bold",
					"focus:outline-none",
					"focus:ring-0",
					"transition-all",
					"disabled:opacity-[32%]",
					"disabled:cursor-default",
					sizeMap.get(size),
					buttonVariants.get(type),
					className
				)}
				onClick={onClick}
				disabled={disabled}
				type={buttonType}
				aria-label={typeof children === "string" ? children : ""}
			>
				{LeftIconComponent ? (
					<LeftIconComponent
						className={classNames("-ml-0.5 mr-2 h-4 w-4")}
						aria-hidden="true"
					/>
				) : null}
				{children}
				{RightIconComponent ? (
					<RightIconComponent
						className={classNames("ml-2 -mr-0.5 h-4 w-4")}
						aria-hidden="true"
					/>
				) : null}
			</button>
		);
	}
	return null;
};

export default Button;
