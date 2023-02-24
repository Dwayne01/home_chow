import React, { useState } from "react";
import InputButton from "./InputButton";

const InputButtonGroup = () => {
	const [selectedValue, setSelectedValue] = useState<string>("");
	return (
		<div className="flex flex-col sm:flex-row justify-center sm:mx-10 mx-10 gap-5">
			<InputButton
				setSelectedValue={setSelectedValue}
				selectedValue={selectedValue}
				text="I am a Driver"
				value="driver"
				textColor="#718096"
				btnColor="#FFFFFF"
				btnColorHover="#FEFDF0"
				accentColor="#FFAF02"
			/>
			<InputButton
				setSelectedValue={setSelectedValue}
				selectedValue={selectedValue}
				text="I am a Lorem"
				value="lorem1"
				textColor="#718096"
				btnColor="#FFFFFF"
				btnColorHover="#FEFDF0"
				accentColor="#FFAF02"
			/>
			<InputButton
				setSelectedValue={setSelectedValue}
				selectedValue={selectedValue}
				text="I am a Lorem"
				value="lorem2"
				textColor="#718096"
				btnColor="#FFFFFF"
				btnColorHover="#FEFDF0"
				accentColor="#FFAF02"
			/>
		</div>
	);
};

export default InputButtonGroup;
