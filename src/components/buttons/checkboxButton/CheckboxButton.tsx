import React, { useState } from "react";

const CheckboxButton = () => {
	const [value, setValue] = useState<string[]>([]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const makeUniqueArray = (arr: string[]) =>
			arr.filter((item, index) => arr.indexOf(item) === index);
		if (e.target.checked) {
			setValue(makeUniqueArray([...value, e.target.value]));
		} else {
			setValue(value.filter((item) => item !== e.target.value));
		}
	};

	return (
		<div className="flex flex-col sm:flex-row sm:gap-5 justify-center mt-5">
			<button className="container flex justify-center min-w-fit p-5 m-3 border-2 rounded-full shadow text-xl text-stone-500 hover:bg-yellow-50 hover:border-yellow-500 hover:text-yellow-500">
				<label htmlFor="checkbox-1" className="">
					I am a Driver
					<input
						className="checkbox ml-4 mt-2 accent-yellow-500"
						id="checkbox-1"
						type="checkbox"
						value="driver"
						onChange={handleChange}
					/>
				</label>
			</button>
		</div>
	);
};

export default CheckboxButton;
