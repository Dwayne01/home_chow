import React from "react";
import Image from "next/image";
import {
	Checkbox,
	PasswordField,
	TextField,
} from "@/components/form/InputField";
import Link from "next/link";
import classNames from "classnames";
import Button from "@/components/common/buttons";
import { FcGoogle } from "react-icons/fc";
import { useTranslation } from "next-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { LoginPayload } from "@/types/auth";
import WideIconButton from "../common/buttons/WideIconButton";
import Logo from "../../../public/assets/images/logo/HomeChow_Logo.png";

const LoginForm = () => {
	const { t } = useTranslation("authentication");

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
	});

	const { handleSubmit, register } = form;

	const handleSubmitForm = (params: LoginPayload) => {
		// eslint-disable-next-line no-console
		console.log(params);
	};

	return (
		<div className="flex-1 my-16 flex flex-col">
			<div className="mx-auto w-[360px]">
				<div className="max-w-sm">
					<div className="logo ">
						<Image src={Logo} className="w-48 md:w-60" alt="Logo" />
					</div>
					<div className="flex flex-col mb-10">
						<h2 className="font-semibold text-3xl mt-4">{t("Log in")}</h2>
						<p className="mt-3">
							{t("Welcome back! Please enter your details.")}
						</p>
					</div>
				</div>
				<FormProvider {...form}>
					<form onSubmit={handleSubmit(handleSubmitForm)}>
						<div className="flex flex-col gap-5">
							<TextField
								data-testid="email"
								rootClass="mb-2"
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
								autoComplete="username"
							/>

							<PasswordField
								data-testid="password"
								name="password"
								label={t("Password")}
								ref={register({ required: true })}
								required
								placeholder="∗∗∗∗∗∗∗∗"
								autoComplete="current-password"
							/>
						</div>
						<div className="flex justify-between items-center mt-6">
							<Checkbox
								name="rememberMe"
								label={t("Remember me")}
								ref={register({ required: false })}
							/>
							<Link href="/forgot-password"> {t("Forgot Password?")}</Link>
						</div>
						<div className=" mt-6">
							<Button
								label={t("Sign In")}
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
				<div className="flex flex-col w-full gap-3 mt-8 text-black">
					<WideIconButton
						label="Sign in with Google"
						icon={FcGoogle}
						rootClass=" justify-start"
					/>
					{/* <WideIconButton
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
					/> */}
				</div>
				<div className="mt-8">
					<p className="flex gap-1 justify-center">
						<span>{t("Don't have an account?")}</span>
						<Link href="/signup" className="text-primary-color font-semibold">
							{t("Sign Up")}
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
