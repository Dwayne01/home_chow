import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import Countdown from "@/components/countdown";
import CheckboxButton from "@/components/common/buttons/CheckboxButton";
import ComingSoonHeader from "@/components/header/ComingSoonHeader";
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
import WideIconButton from "@/components/common/buttons/WideIconButton";
import Button from "../components/common/buttons";

const ComponentPage = () => {
	const [selectedValue, setSelectedValue] = useState<string>("");
	const { t } = useTranslation("accounts");
	const [code, setCode] = useState("");
	const form = useForm({
		defaultValues: {},
	});

	const { handleSubmit, register } = form;

	const handleSubmitForm = () => {};

	return (
		<div>
			<ComingSoonHeader />

			<Countdown />
			<div className="flex justify-center gap-5">
				<IconButton icon={FaFacebookF} color="text-primary-color" href="" />
				<IconButton icon={FaTwitter} color="text-primary-color" href="" />
				<IconButton icon={FaLinkedinIn} color="text-primary-color" href="" />
			</div>
			<div className="flex flex-col items-center gap-5">
				<Button
					icon={AiOutlineSend}
					textColor="text-white"
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
			</div>

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
		</div>
	);
};

export default ComponentPage;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["common"])),
		},
	};
}
