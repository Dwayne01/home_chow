import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Button from "@/components/common/buttons";
import CheckboxButton from "@/components/common/buttons/CheckboxButton";
import { AiOutlineSend } from "react-icons/ai";
import IconButton from "@/components/common/buttons/IconButton";
import Countdown from "@/components/countdown";
import InputField from "@/components/InputField";

const LeftView = () => {
	const [selectedValue, setSelectedValue] = useState<string>("");

	return (
		<div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-start items-start px-[5%] md:px-0  pt-16">
			<h1 className="text-4xl text-center md:text-left md:text-7xl font-bold leading-[120%] md:leading-[120%] order-1 md:order-none">
				Good things come to those who you
				<span className="text-primary-color animate-pulse"> Wait!</span>
			</h1>
			<p className="pt-8 text-font-light font-normal text-xl text-center md:text-left order-2 md:order-none">
				We&apos;re putting the finishing touches on our website and getting
				ready to launch. Sign up for updates and be the first to know when we go
				live.
			</p>
			<p className="pt-8 text-font-light font-normal text-xl text-center md:text-left order-4 md:order-none">
				Choose options that applies to you?
			</p>
			<div className="w-full flex flex-col md:flex-row justify-center items-center pt-7 gap-5 order-5 md:order-none">
				<CheckboxButton
					name="customer"
					label="I am a Customer"
					value={selectedValue}
					isChecked={selectedValue === "customer"}
					className="w-full sm:w-1/2 flex justify-center rounded-lg md:rounded-[50px] whitespace-nowrap"
					handleClick={(data) => {
						setSelectedValue(data);
					}}
				/>
				<CheckboxButton
					name="vendor"
					label="I am a Vendor"
					value={selectedValue}
					isChecked={selectedValue === "vendor"}
					className="w-full sm:w-1/2 flex justify-center rounded-lg md:rounded-[50px] whitespace-nowrap"
					handleClick={() => setSelectedValue("vendor")}
				/>
				<CheckboxButton
					name="driver"
					label="I am a Driver"
					value={selectedValue}
					isChecked={selectedValue === "driver"}
					className="w-full sm:w-1/2 flex justify-center rounded-lg md:rounded-[50px] whitespace-nowrap"
					handleClick={() => setSelectedValue("driver")}
				/>
			</div>
			<div className="w-full  flex flex-col sm:flex-row items-center pt-12 gap-4 sm:w-4/5 md:w-3/4 order-5 md:order-none">
				<div className="flex-1 w-full">
					<InputField
						placeholder="Enter your email address"
						className="h-14 rounded-lg placeholder:p-2"
						width=""
					/>
				</div>
				<Button
					icon={AiOutlineSend}
					textColor="text-white"
					label="Notify me"
					onClick={() => {}}
					rootClass="rounded-lg whitespace-nowrap w-full px-3 sm:w-[166px] font-bold"
					iconPosition="right"
				/>
			</div>
			<p className="pt-4 sm:w-3/4 text-font-light order-6 md:order-none">
				Sign up for updates to be the first to know when we launch. No spam,
				just important information and exclusive offers..
			</p>
			<div className=" w-full flex justify-center pt-20 order-3 md:order-none">
				<Countdown />
			</div>
			<div className="w-full flex justify-center gap-6 flex-1 items-end pb-10 pt-20 md:pt-0 order-7 md:order-none">
				<IconButton
					className="bg-gray-modern"
					icon={FaFacebookF}
					color="text-primary-color"
					href=""
				/>
				<IconButton
					className="bg-gray-modern"
					icon={FaTwitter}
					color="text-primary-color"
					href=""
				/>
				<IconButton
					className="bg-gray-modern"
					icon={FaLinkedinIn}
					color="text-primary-color"
					href=""
				/>
			</div>
		</div>
	);
};

export default LeftView;
