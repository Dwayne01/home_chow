import React, { useState, ChangeEvent } from "react";
import CheckboxButton from "./CheckboxButton";

interface CheckboxButtonGroupProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxButtonGroup = ({ onChange }: CheckboxButtonGroupProps) => {
	const [value, setValue] = useState<string[]>([]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const makeUniqueArray = (arr: string[]) =>
			arr.filter((item, index) => arr.indexOf(item) === index);
		if (e.target.checked) {
			setValue(makeUniqueArray([...value, e.target.value]));
		} else {
			setValue(value.filter((item) => item !== e.target.value));
		}
		onChange(e);
	};

	return (
		<div className="flex flex-col sm:flex-row sm:gap-5 justify-center mt-5">
			<CheckboxButton onChange={handleChange} text="I'm a Customer" />
			<CheckboxButton onChange={handleChange} text="I'm a Driver" />
			<CheckboxButton onChange={handleChange} text="I'm a Vendor" />
		</div>
	);
};

export default CheckboxButtonGroup;
