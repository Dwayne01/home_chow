import { ChangeEvent } from "react";

const btnColor: { text: string; accent: string; bg: string } = {
	text: "#718096",
	accent: "#FFAF02",
	bg: "#FEFDF0",
};

const CheckboxButton = ({
	setSelectedValue,
	selectedValue,
	text,
	value,
}: {
	setSelectedValue: (_value: string) => void;
	selectedValue: string;
	text: string;
	value: string;
}) => {
	const handleButtonChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(e.target.value);
	};

	return (
		<label
			htmlFor="checkbox"
			className={`container flex justify-center py-4 px-5 rounded-full shadow-[0px_4px_50px_0px_rgba(0,0,0,0.1)] text-xl text-[${btnColor.text}] hover:text-[${btnColor.accent}] hover:bg-[${btnColor.bg}]`}
		>
			{text}
			<input
				className={`checkbox ml-4 mt-2 accent-[${btnColor.accent}]`}
				type="radio"
				checked={selectedValue === value}
				value={value}
				onChange={handleButtonChange}
			/>
		</label>
	);
};

export default CheckboxButton;
