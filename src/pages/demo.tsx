import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import Countdown from "@/components/countdown";
import CheckboxButton from "@/components/buttons/CheckboxButton";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import IconButton from "@/components/buttons/IconButton";
import Button from "../components/buttons";

const ComponentPage = () => {
	const [selectedValue, setSelectedValue] = useState<string>("");

	return (
		<div>
			<h1 className="text-3xl text-red-600 font-bold underline">
				Components Page
			</h1>
			<Countdown />
			<div className="flex justify-center gap-5">
				<IconButton icon={FaFacebookF} color="text-primary-color" href="" />
				<IconButton icon={FaTwitter} color="text-primary-color" href="" />
				<IconButton icon={FaLinkedinIn} color="text-primary-color" href="" />
			</div>
			<div className="flex justify-center mt-5">
				<Button
					icon={AiOutlineSend}
					textColor="text-white"
					label="Notify me"
					onClick={() => {}}
					iconPosition="right"
				/>
			</div>
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
