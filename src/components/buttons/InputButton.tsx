import { ChangeEvent, MouseEvent, FocusEvent } from "react";

const CheckboxButton = ({
	setSelectedValue,
	selectedValue,
	text,
	value,
	textColor,
	btnColor,
	btnColorHover,
	accentColor,
}: {
	setSelectedValue: (_value: string) => void;
	selectedValue: string;
	text: string;
	value: string;
	textColor: string;
	btnColor: string;
	btnColorHover: string;
	accentColor: string;
}) => {
	const handleButtonChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(e.target.value);
	};

	function mouseOver(e: MouseEvent<HTMLLabelElement>) {
		const target = e.target as HTMLLabelElement;
		target.style.background = `${btnColorHover}`;
		target.style.border = `2px solid ${accentColor}`;
		target.style.color = `${accentColor}`;
	}

	function handleFocus(e: FocusEvent<HTMLLabelElement>) {
		const target = e.target as HTMLLabelElement;
		target.style.background = `${btnColorHover}`;
	}

	function mouseOut(e: MouseEvent<HTMLLabelElement>) {
		const target = e.target as HTMLLabelElement;
		target.style.background = `${btnColor}`;
		target.style.border = `2px solid ${btnColor}`;
		target.style.color = `${textColor}`;
	}

	function handleBlur(e: FocusEvent<HTMLLabelElement>) {
		const target = e.target as HTMLLabelElement;
		target.style.background = `${btnColor}`;
	}

	return (
		<label
			htmlFor={`${value}`}
			className="container flex justify-center items-center py-4 px-5 rounded-lg sm:rounded-full shadow-[0px_4px_50px_0px_rgba(0,0,0,0.1)] text-xl gap-5"
			style={{ backgroundColor: `${btnColor}`, color: `${textColor}` }}
			onMouseOver={mouseOver}
			onFocus={handleFocus}
			onMouseOut={mouseOut}
			onBlur={handleBlur}
		>
			{text}
			<input
				className="mx-4 my-auto"
				id={`${value}`}
				type="radio"
				checked={selectedValue === value}
				value={value}
				onChange={handleButtonChange}
				style={{ accentColor: `${accentColor}` }}
			/>
		</label>
	);
};

export default CheckboxButton;
