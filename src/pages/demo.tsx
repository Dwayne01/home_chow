import Countdown from "@/components/countdown";
import CheckboxButton from "@/components/buttons/CheckboxButton";
import { useState } from "react";

const ComponentPage = () => {
	const [selectedValue, setSelectedValue] = useState<string>("");

	return (
		<div>
			<h1 className="text-3xl text-red-600 font-bold underline">
				Components Page
			</h1>
			<Countdown />
			<div className="flex flex-col sm:flex-row justify-center sm:mx-10 mx-10 gap-5">
				<CheckboxButton
					name="customer"
					label="I am a Customer"
					value={selectedValue}
					isChecked={selectedValue === "customer"}
					handleClick={(data) => {
						setSelectedValue(data);
					}}
				/>
				<CheckboxButton
					name="vendor"
					label="I am a Vendor"
					value={selectedValue}
					isChecked={selectedValue === "vendor"}
					handleClick={() => setSelectedValue("vendor")}
				/>
				<CheckboxButton
					name="driver"
					label="I am a Driver"
					value={selectedValue}
					isChecked={selectedValue === "driver"}
					handleClick={() => setSelectedValue("driver")}
				/>
			</div>
		</div>
	);
};

export default ComponentPage;
