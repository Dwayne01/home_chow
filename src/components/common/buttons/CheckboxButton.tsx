import classNames from "classnames";

const CheckboxButton = ({
	label,
	name,
	isChecked,
	handleClick,
	value,
	className,
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
			"px-5 py-4 border border-solid bg-white rounded-full shadow-[0px_4px_50px_0px_rgba(0,0,0,0.1)]",
			"text-xl font-normal",
			"hover:bg-primary-color-light transition duration-300 ease-in-out whitespace-nowrap",
			className
		)}
	>
		{label}
		<input
			className="ml-5 accent-primary-color "
			id={name}
			name={name}
			value={value}
			type="checkbox"
			checked={isChecked}
			onChange={(e) => handleClick(e.target.name)}
		/>
	</label>
);

export default CheckboxButton;
