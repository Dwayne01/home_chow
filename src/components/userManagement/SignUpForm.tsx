import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Button from "@/components/common/buttons";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { RegisterPayload } from "@/types/auth";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import PasswordStrengthBar from "react-password-strength-bar";
import WideIconButton from "../common/buttons/WideIconButton";
import Logo from "../../../public/assets/images/logo/HomeChow_Logo.png";
import { PasswordField, TextField } from "../form/InputField";

const SignUpForm = ({
	handleSignup,
	handleGoogleSignUp,
}: {
	handleGoogleSignUp: () => void;
	handleSignup: (params: RegisterPayload) => Promise<boolean>;
}) => {
	const [password, setPassword] = useState("");
	const { t } = useTranslation("authentication");
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
	});

	const router = useRouter();

	const { handleSubmit, register } = form;

	const handleSubmitForm = async (params: RegisterPayload) => {
		await handleSignup(params);
		router.push("/verification");
	};

	return (
		<div className="flex-1 my-8 flex flex-col">
			<div className="mx-auto w-[360px]">
				<div className="max-w-sm">
					<div className="logo ">
						<Image src={Logo} className="w-48 md:w-60" alt="Logo" />
					</div>
					<div className="flex flex-col mt-10">
						<h2 className="font-semibold text-3xl ">{t("Sign Up")}</h2>
						<p className="my-3">
							{t("To sign up, fill in your personal details below")}
						</p>
					</div>
				</div>
				<FormProvider {...form}>
					<form onSubmit={handleSubmit(handleSubmitForm)} id="sign-up-form">
						<div className="grid grid-cols-2 gap-5">
							<TextField
								data-testid="email"
								rootClass="mb-1 col-start-1"
								label={t("firstName", { ns: "common" })}
								placeholder={t("enterFirstName")}
								name="first_name"
								required
								ref={register({
									required: true,
								})}
								autoComplete="first_name"
							/>

							<TextField
								data-testid="email"
								rootClass="mb-1"
								label={t("lastName", { ns: "common" })}
								placeholder={t("enterLastName")}
								name="last_name"
								required
								ref={register({
									required: true,
								})}
								autoComplete="last_name"
							/>

							<TextField
								data-testid="email"
								rootClass="mb-1 col-start-1 col-end-3"
								name="email"
								label={t("Email")}
								placeholder="example@example.com"
								required
								ref={register({
									required: true,
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: t("common:invalidEmail"),
									},
								})}
								autoComplete="email"
							/>
							<div className="flex flex-col gap-2 col-start-1 col-end-3 relative">
								<PasswordField
									data-testid="password"
									name="password"
									label={t("Password")}
									ref={register({ required: true })}
									required
									placeholder="∗∗∗∗∗∗∗∗"
									autoComplete="current-password"
									onChange={(e: {
										target: { value: React.SetStateAction<string> };
									}) => setPassword(e.target.value)}
								/>
								<div className="absolute mt-[60px] w-full">
									{password.length > 0 && (
										<PasswordStrengthBar password={password} />
									)}
								</div>
							</div>
						</div>
						<div className=" mt-10">
							<Button
								id="signUp-btn"
								label={t("Sign In") || ""}
								type="submit"
								rootClass={classNames(
									"rounded-lg whitespace-nowrap w-full px-3  font-bold text-sm text-white"
								)}
								iconPosition="right"
							/>
						</div>
					</form>
				</FormProvider>

				<div className="flex items-center gap-2 max-w-[80%] m-auto mt-8">
					<hr className="flex-1 border" />
					<span className="">{t("Or")}</span>
					<hr className="flex-1 border" />
				</div>
				<div className="flex flex-col w-full gap-3 mt-8 text-black ">
					<WideIconButton
						label="Sign in with Google"
						icon={FcGoogle}
						rootClass=" justify-start"
						onClick={handleGoogleSignUp}
					/>
					<WideIconButton
						label="Sign in with Facebook"
						icon={FaFacebook}
						iconColor="#1877F2"
						rootClass=" justify-start"
					/>
					<WideIconButton
						label="Sign in with Twitter"
						icon={FaTwitter}
						iconColor="#1DA1F2"
						rootClass=" justify-start"
					/>
				</div>
				<div className="mt-8">
					<p className="flex gap-1 justify-center">
						<span>{t("Already have an account?")}</span>
						<Link href="/login" className="text-primary-color font-semibold">
							{t("Sign In")}
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
