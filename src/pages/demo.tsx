/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import Countdown from "@/components/countdown";
import CheckboxButton from "@/components/common/buttons/CheckboxButton";
import MainHeader from "@/components/header/MainHeader";

import {
	FaFacebookF,
	FaFacebook,
	FaTwitter,
	FaLinkedinIn,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import IconButton from "@/components/common/buttons/IconButton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MailingAddress from "@/components/form/MailingAddress";
import {
	Checkbox,
	PasswordField,
	Select,
	TextField,
} from "@/components/form/InputField";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import CodeInput from "@/components/form/CodeInput";
import Footer from "@/components/footer/Footer";
import Slider from "@/components/slider";
import WideIconButton from "@/components/common/buttons/WideIconButton";
import Table from "@/components/table";
import Button from "../components/common/buttons";
import SearchBar from "../components/searchBar";

const ComponentPage = () => {
	const [selectedValue, setSelectedValue] = useState<string>("");
	const { t } = useTranslation("accounts");
	const [code, setCode] = useState("");
	const form = useForm({
		defaultValues: {},
	});

	const images = [
		<img src="https://via.placeholder.com/150" alt="Image" />,
		<img src="https://via.placeholder.com/150" alt="Image" />,
		<img src="https://via.placeholder.com/150" alt="Image" />,
		<img src="https://via.placeholder.com/150" alt="Image" />,
	];

	const description = (
		<div className="w-2/3 flex flex-col justify-center items-center">
			<p className="text-xl font-bold text-center text-primary-color mt-10">
				{t("easy_ordering")}
			</p>
			<p className="text-gray-500 text-lg text-center my-5 ">
				{t("sign_in_to_explore")}
			</p>
		</div>
	);

	const { handleSubmit, register } = form;

	const handleSubmitForm = () => {};

	const tableData = [
		{ name: "John", age: 25, color: "red", weight: "90kg", height: "178cm" },
		{ name: "Jane", age: 30, color: "blue", weight: "80kg", height: "180cm" },
		{ name: "Robert", age: 11, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Bob", age: 15, color: "yellow", weight: "50kg", height: "178cm" },
		{ name: "Paul", age: 45, color: "gray", weight: "80kg", height: "178cm" },
		{ name: "Emma", age: 34, color: "white", weight: "76kg", height: "178cm" },
		{ name: "Mary", age: 25, color: "green", weight: "120kg", height: "195cm" },
		{ name: "Anna", age: 31, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Frank", age: 67, color: "blue", weight: "65kg", height: "158cm" },
		{
			name: "Charles",
			age: 45,
			color: "black",
			weight: "80kg",
			height: "178cm",
		},
		{ name: "Bob", age: 18, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Thomas", age: 19, color: "red", weight: "58kg", height: "158cm" },
		{ name: "William", age: 20, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Clara", age: 47, color: "red", weight: "99kg", height: "178cm" },
		{ name: "Alice", age: 50, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Emily", age: 22, color: "red", weight: "86kg", height: "178cm" },
		{ name: "Leo", age: 39, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Lisa", age: 41, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Thomas", age: 19, color: "red", weight: "80kg", height: "178cm" },
		{ name: "William", age: 20, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Clara", age: 47, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Alice", age: 50, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Emily", age: 22, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Leo", age: 39, color: "red", weight: "80kg", height: "178cm" },
		{ name: "Lisa", age: 41, color: "red", weight: "80kg", height: "178cm" },
	];

	const tableColumns = [
		{ Header: "Name", accessor: "name" },
		{ Header: "Age", accessor: "age" },
		{ Header: "Color", accessor: "color" },
		{ Header: "Weight", accessor: "weight" },
		{ Header: "Height", accessor: "height" },
	];

	const handleSearch = () => {};

	return (
		<div>
			<MainHeader />

			<Countdown />
			<div className="flex justify-center gap-5">
				<IconButton icon={FaFacebookF} color="text-primary-color" href="" />
				<IconButton icon={FaTwitter} color="text-primary-color" href="" />
				<IconButton icon={FaLinkedinIn} color="text-primary-color" href="" />
			</div>
			<div className="flex flex-col items-center gap-5">
				<Button
					icon={AiOutlineSend}
					rootClass="text-white gap-2"
					label="Notify me"
					onClick={() => {}}
					iconPosition="right"
				/>
				{/* Social Auth buttons */}
				<WideIconButton label="Sign in with Google" icon={FcGoogle} />
				<WideIconButton
					label="Sign in with Facebook"
					icon={FaFacebook}
					iconColor="#1877F2"
				/>
				<WideIconButton
					label="Sign in with Twitter"
					icon={FaTwitter}
					iconColor="#1DA1F2"
				/>
				{/* Sign-in button */}
				<WideIconButton
					label="Sign in"
					textColor="text-white"
					bgColor="bg-primary-color"
					disabled
				/>
				<WideIconButton
					label="Sign in"
					textColor="text-white"
					bgColor="bg-primary-color"
				/>
				<WideIconButton
					label="Get Started"
					textColor="text-white"
					bgColor="bg-primary-color"
				/>
			</div>

			{/* Search Bar */}
			<div className="flex flex-col items-center gap-5 my-40">
				<SearchBar placeholder="Anywhere" onSearch={handleSearch} />
			</div>

			{/* Checkbox Button Group */}
			<div className="flex flex-col sm:flex-row justify-center sm:mx-10 mx-10 gap-5 mt-10">
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
			<div className="h-96">
				<Slider description={description} slides={images} />
			</div>

			<FormProvider {...form}>
				<form onSubmit={handleSubmit(handleSubmitForm)}>
					<div className="p-10">
						<b>Code input</b>
						<CodeInput
							code={code}
							onUpdate={(data) => {
								setCode(data.trim());
							}}
							onSubmit={() => {}}
						/>

						<br />
						<br />

						<MailingAddress
							description={t("tellUsWhere")}
							title={t("mailingAddress")}
							form={form}
							type="mailing"
						/>

						<br />

						<Checkbox
							ref={register()}
							name="sameAsMailingAddress"
							className="my-5 text-primary-color"
							rootClass="w-full"
							label={t("sameAsCreditCard")}
						/>
						<TextField
							data-testid="signin-email"
							rootClass="mb-6"
							name="emailOrPhone"
							label={t("emailAddress")}
							placeholder="example@example.com"
							required
							ref={register({
								required: true,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: t("common:invalidEmail"),
								},
							})}
							autoComplete="username"
						/>

						<PasswordField
							data-testid="signin-password"
							rootClass="mb-2"
							name="password"
							label={t("password")}
							ref={register({ required: true })}
							required
							placeholder="∗∗∗∗∗∗∗∗"
							autoComplete="current-password"
						/>
						<Select
							rootClass="md:col-start-2 md:col-end-4 md:col-span-1 md:row-start-1 md:row-end-1"
							name="vehicleModel"
							label="Vehicle Model"
							placeholder="Select Vehicle Model"
							required
							ref={register({ required: true })}
							options={[]}
						/>
						<div>
							<h1>Heading font - Jost</h1>
							<p>Normal Text font - Monsterrat</p>
							<div className="flex flex-col">
								<div className="bg-primary-color">Primary color</div>
								<div className="bg-primary-color-deactivated">
									Primary color deactivated
								</div>
								<div className="bg-primary-color-light">
									Primary color light
								</div>
								<div className="text-font-light">Light color for text</div>
								<div className="border border-border-color">Border color</div>
								<div className="bg-gray-modern">Gray modern bg color</div>
							</div>
						</div>
					</div>
				</form>
			</FormProvider>
			<h1>Table Component</h1>
			<Table tableTitle="Table Title" data={tableData} columns={tableColumns} />
			<h1>Footer</h1>
			<Footer footerColor="dark" />
		</div>
	);
};

export default ComponentPage;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
		},
	};
}
