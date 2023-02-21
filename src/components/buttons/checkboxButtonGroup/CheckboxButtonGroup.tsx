import React, { useState, ChangeEvent } from "react";
import CheckboxButton from "../checkboxButton/CheckboxButton";

interface CheckboxButtonGroupProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxButtonGroup = (props: CheckboxButtonGroupProps) => {
	const [value, setValue] = useState<string[]>([]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const makeUniqueArray = (arr: string[]) =>
			arr.filter((item, index) => arr.indexOf(item) === index);
		if (e.target.checked) {
			setValue(makeUniqueArray([...value, e.target.value]));
		} else {
			setValue(value.filter((item) => item !== e.target.value));
		}
		props.onChange(e);
	};

	return (
		<div className="flex flex-col sm:flex-row sm:gap-5 justify-center mt-5">
			<CheckboxButton onChange={handleChange} />
			<CheckboxButton onChange={handleChange} />
			<CheckboxButton onChange={handleChange} />
		</div>
	);
};

export default CheckboxButtonGroup;
