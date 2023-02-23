import React, { useState } from "react";
import InputButton from "./InputButton";

const InputButtonGroup = () => {
	const [selectedValue, setSelectedValue] = useState<string>("");

	return (
		<div className="flex flex-col sm:flex-row justify-center gap-5">
			<InputButton
				setSelectedValue={setSelectedValue}
				selectedValue={selectedValue}
				text="I'm a Customer"
				value="customer"
			/>
			<InputButton
				setSelectedValue={setSelectedValue}
				selectedValue={selectedValue}
				text="I'm a Driver"
				value="driver"
			/>
			<InputButton
				setSelectedValue={setSelectedValue}
				selectedValue={selectedValue}
				text="I'm a Vendor"
				value="vendor"
			/>
		</div>
	);
};

export default InputButtonGroup;
