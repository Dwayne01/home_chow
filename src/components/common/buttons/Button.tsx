import classNames from "classnames";

type ButtonProps = {
	type?: "button" | "submit" | "reset" | undefined;
	size?: string;
	LeftIconComponent?: any;
	RightIconComponent?: any;
	onClick: () => void;
	children?: any;
	disabled?: boolean;

	className: string;
};

const Button = ({
	type = "button",
	size = "md",
	LeftIconComponent = null,
	RightIconComponent = null,
	className = "",
	onClick = () => {},
	children = "N/A",
	disabled = false,
}: ButtonProps) => {
	// define all the siezes of the button
	const sizeMap = new Map([
		["sm", "px-2 py-2 text-sm"],
		["md", "px-4 py-2 text-base"],
		["lg", "px-6 py-3 text-lg"],
	]);

	// once designers have defined all the color combinations, we can add them here

	if (sizeMap.has(size)) {
		return (
			<button
				type={type}
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
					className
				)}
				onClick={onClick}
				disabled={disabled}
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
