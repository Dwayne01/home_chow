import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Button from "@/components/buttons";
import CheckboxButton from "@/components/buttons/CheckboxButton";
import { AiOutlineSend } from "react-icons/ai";
import IconButton from "@/components/buttons/IconButton";
import Countdown from "@/components/countdown";
import InputField from "@/components/InputField";

const LeftView = () => {
	const [selectedValue, setSelectedValue] = useState<string>("");

	return (
		<div className="w-full h-full flex flex-col justify-start items-start px-20 pt-20">
			<h1 className="text-7xl font-bold text-[#041549] ">
				Good things come to those who you{" "}
				<span className="text-[#EAAA08]"> Wait!</span>
			</h1>
			<p className="pt-8 text-[#718096] font-normal text-xl">
				We&apos;re putting the finishing touches on our website and getting
				ready to launch. Sign up for updates and be the first to know when we go
				live.
			</p>
			<p className="pt-8 text-[#718096] font-normal text-xl">
				Choose options that applies to you?
			</p>
			<div className="w-full flex justify-center items-center pt-7 gap-5">
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
			<div className="w-full flex items-center pt-12 gap-4 sm:w-3/4">
				<div className="flex-1 w-full">
					<InputField
						placeholder="Enter your email address"
						className="h-14 rounded-lg"
					/>
				</div>
				<Button
					icon={AiOutlineSend}
					textColor="text-white"
					label="Notify me"
					onClick={() => {}}
					iconPosition="right"
				/>
			</div>
			<p className="pt-4 sm:w-3/4 text-[#718096]">
				Sign up for updates to be the first to know when we launch. No spam,
				just important information and exclusive offers..
			</p>
			<div className=" w-full flex justify-center pt-20">
				<Countdown />
			</div>
			<div className="w-full flex justify-center gap-6 pt-36 items-center ">
				<IconButton icon={FaFacebookF} color="text-primary-color" href="" />
				<IconButton icon={FaTwitter} color="text-primary-color" href="" />
				<IconButton icon={FaLinkedinIn} color="text-primary-color" href="" />
			</div>
		</div>
	);
};

export default LeftView;
