import classNames from "classnames";

const CheckboxButton = ({
	label,
	name,
	isChecked,
	handleClick,
	value,
	className,
	...otherProps
}: {
	label: string;
	name: string;
	value: string;
	isChecked: boolean;
	className?: string;
	handleClick: (data: string) => void;
}) => (
	<label
		htmlFor={name}
		className={classNames(
			isChecked ? "bg-primary-color-light" : "bg-white",
			isChecked ? "text-primary-color" : "text-font-light",
			isChecked ? "border-primary-color" : "border-grey-light",
			"py-3 border border-solid bg-white rounded-full shadow-[0px_4px_50px_0px_rgba(0,0,0,0.1)]",
			"text-md font-normal cursor-pointer",
			"hover:bg-primary-color-light transition duration-300 ease-in-out whitespace-nowrap",
			className
		)}
	>
		<div className="w-2/3 md:w-full flex justify-between px-5">
			{label}
			<input
				className="accent-primary-color"
				id={name}
				name={name}
				value={value}
				type="checkbox"
				checked={isChecked}
				onChange={(e) => handleClick(e.target.name)}
				{...otherProps}
			/>
		</div>
	</label>
);

export default CheckboxButton;
