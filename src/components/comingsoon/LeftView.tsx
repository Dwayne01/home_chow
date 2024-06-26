import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineSend } from "react-icons/ai";
import Button from "@/components/common/buttons";
import CheckboxButton from "@/components/common/buttons/CheckboxButton";
import IconButton from "@/components/common/buttons/IconButton";
import { FormProvider, useForm } from "react-hook-form";
import { TextField } from "@/components/form/InputField";
import { SubscribeParams } from "@/types/comingsoon";
import classNames from "classnames";

const SubscribeForm = ({
	handleSubmitForm,
	isLoading,
}: {
	isLoading: boolean;
	handleSubmitForm: (params: SubscribeParams) => void;
}) => {
	const [selectedUserType, setSelectedUserType] = useState<
		"vendor" | "customer" | "driver"
	>("customer");

	const { t } = useTranslation("comingsoon");

	const form = useForm({
		defaultValues: {},
	});

	const { handleSubmit, register } = form;

	const handleSubscribeNow = (data: SubscribeParams) => {
		handleSubmitForm({ ...data, userType: selectedUserType });
	};

	return (
		<FormProvider {...form}>
			<form
				className="subscribe-form"
				onSubmit={handleSubmit(handleSubscribeNow)}
			>
				<p className="pt-8 text-font-light font-normal text-md text-center md:text-left">
					{t("chooseOptions")}
				</p>
				<div className="w-full flex flex-col md:flex-row justify-center items-center pt-4 gap-5">
					<CheckboxButton
						name="customer"
						label={t("iamacustomer")}
						value={selectedUserType}
						isChecked={selectedUserType === "customer"}
						className="w-full sm:w-1/2 flex justify-center rounded-lg md:rounded-[50px] whitespace-nowrap"
						handleClick={() => {
							setSelectedUserType("customer");
						}}
					/>
					<CheckboxButton
						name="vendor"
						label={t("iamavendor")}
						value={selectedUserType}
						isChecked={selectedUserType === "vendor"}
						className="w-full sm:w-1/2 flex justify-center rounded-lg md:rounded-[50px] whitespace-nowrap"
						handleClick={() => setSelectedUserType("vendor")}
					/>

					<CheckboxButton
						name="driver"
						label={t("iamadriver")}
						value={selectedUserType}
						isChecked={selectedUserType === "driver"}
						className="w-full sm:w-1/2 flex justify-center rounded-lg md:rounded-[50px] whitespace-nowrap"
						handleClick={() => setSelectedUserType("driver")}
					/>
				</div>

				<div className="grid grid-cols-2 gap-8 grid-rows-1 mt-5">
					<TextField
						data-testid="signin-email"
						rootClass="col-auto"
						id="firstName"
						name="firstName"
						label={t("firstName", { ns: "common" })}
						placeholder="John"
						required
						ref={register({
							required: true,
						})}
						autoComplete="firstName"
					/>
					<TextField
						data-testid="signin-email"
						rootClass="col-auto"
						id="lastName"
						name="lastName"
						label={t("lastName", { ns: "common" })}
						placeholder="Doe"
						required
						ref={register({
							required: true,
						})}
						autoComplete="lastName"
					/>
				</div>

				<div className="grid grid-cols-2 gap-8 grid-rows-1 items-center pt-5 justify-end">
					<TextField
						data-testid="signin-email"
						rootClass="col-auto"
						id="email"
						name="email"
						label={t("emailAddress", { ns: "common" })}
						placeholder="example@example.com"
						required
						ref={register({
							required: true,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: t("invalidEmail", { ns: "common" }),
							},
						})}
						autoComplete="username"
					/>

					<Button
						icon={AiOutlineSend}
						loading={isLoading}
						label={t("subscribe") || ""}
						disabled={isLoading}
						type="submit"
						rootClass="rounded-lg font-bold text-white gap-4 col-auto mt-8 w-auto md:w-[210px]"
						iconPosition="right"
						id="notifyMe-btn"
					/>
				</div>

				<p className="pt-4 text-font-light">
					{t(
						"Sign up for updates to be the first to know when we launch. No spam, just important information and exclusive offers.. "
					)}
				</p>
			</form>
		</FormProvider>
	);
};

const LeftView = ({
	handleSubmit,
	isLoading,
}: {
	isLoading: boolean;
	handleSubmit: (params: SubscribeParams) => Promise<string | null>;
}) => {
	const [isSubscribeUser, setIsSubscribeUser] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");
	const { t } = useTranslation("comingsoon");

	const handleSubscribeNow = (data: SubscribeParams) => {
		handleSubmit(data).then((msg) => {
			if (msg) {
				handleCallBack(msg);
			}
		});
	};

	const handleCallBack = (msg: string) => {
		setMessage(msg);
		handleToggleSubsribe();
	};

	const handleToggleSubsribe = () => {
		setIsSubscribeUser(!isSubscribeUser);
	};
	const messageColor = message ? "text-green-500" : "text-red-500";

	return (
		<div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-start items-start px-[5%] md:px-0  pt-5">
			<h1 className="text-4xl text-center md:text-left md:text-7xl font-bold leading-[120%] md:leading-[120%]">
				{t("Good things come to those who")}
				<span className="text-primary-color"> {t("Wait")}!</span>
			</h1>
			<p
				className="pt-5  font-normal text-xl text-center md:text-left"
				data-testid="coming-soon-msg"
			>
				{t(
					"We're putting the finishing touches on our website and getting ready to launch. Sign up for updates and be the first to know when we go live."
				)}
			</p>

			{!isSubscribeUser ? (
				<div className="w-full flex justify-center md:justify-start">
					{message ? (
						<p
							className={classNames(
								"success-message mt-10 text-lg font-semibold",
								messageColor
							)}
						>
							{t(message, { ns: "constants" })}
						</p>
					) : (
						<Button
							id="notifyMe-btn"
							label="Notify me when you launch"
							onClick={() => setIsSubscribeUser(!isSubscribeUser)}
							rootClass="subscribe-btn rounded-lg whitespace-nowrap w-auto my-10 font-bold font-base text-white  gap-4"
							iconPosition="right"
						/>
					)}
				</div>
			) : (
				<SubscribeForm
					isLoading={isLoading}
					handleSubmitForm={handleSubscribeNow}
				/>
			)}
			<div className="w-full flex justify-center gap-6 flex-1 items-end my-5">
				{/* Restore when we have facebook & twitter pages */}
				{/* <IconButton
					className="bg-gray-modern"
					icon={FaFacebookF}
					color="text-primary-color"
					href="https://www.facebook.com"
				/>
				<IconButton
					className="bg-gray-modern"
					icon={FaTwitter}
					color="text-primary-color"
					href="https://www.twitter.com"
				/> */}
				<IconButton
					className="bg-gray-modern"
					icon={FaLinkedinIn}
					color="text-primary-color"
					href="https://ca.linkedin.com/company/homechow-ca"
				/>
				<IconButton
					className="bg-gray-modern"
					icon={RiInstagramFill}
					color="text-primary-color"
					href="https://www.instagram.com/homechow.ca/?igshid=YmMyMTA2M2Y%3D"
				/>
			</div>
		</div>
	);
};

export default LeftView;
