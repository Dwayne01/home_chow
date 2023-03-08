import React from "react";
import InputField from "@/components/InputField";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Button from "@/components/common/buttons";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import Logo from "../../../public/assets/images/logo/HomeChow_Logo.png";

const SignUpForm = () => {
	const { t } = useTranslation("authentication");

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [name, setName] = React.useState("");

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<div className="flex-1 my-16 flex flex-col">
			<div className="mx-auto w-[360px]">
				<div className="max-w-sm">
					<div className="logo ">
						<Image src={Logo} className="w-48 md:w-60" alt="Logo" />
					</div>
					<div className="flex flex-col mt-12">
						<h2 className="font-semibold text-3xl ">{t("Sign Up")}</h2>
						<p className="mt-3">
							{t("To sign up, fill in your personal details below")}
						</p>
					</div>
				</div>
				<form className="max-w-sm mt-8" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-5">
						<InputField
							label={t("Name") || ""}
							placeholder={t("Enter your name") || ""}
							name="email"
							className="h-12"
							handleChange={(text) => setName(text)}
							required
						/>
						<InputField
							label={t("Email") || ""}
							placeholder={t("Enter your email") || ""}
							name="email"
							className="h-12"
							handleChange={(text) => setEmail(text)}
							required
						/>
						<div className="flex flex-col gap-2">
							<InputField
								label={t("Password") || ""}
								placeholder={t("Enter your password") || ""}
								type="password"
								name="password"
								className="h-12"
								handleChange={(text) => setPassword(text)}
								required
							/>
							<p>{t("Password must be at least 8 characters long")}</p>
						</div>
					</div>
					<div className=" mt-6">
						<Button
							textColor="text-white"
							label={t("Sign In")}
							type="submit"
							rootClass={classNames(
								"rounded-lg whitespace-nowrap w-full px-3  font-bold text-sm ",
								email === "" || password === "" || name === ""
									? "bg-primary-color opacity-50"
									: "bg-primary-color"
							)}
							iconPosition="right"
							disabled={email === "" || password === "" || name === ""}
						/>
					</div>
					<div className="flex items-center gap-2 max-w-[80%] m-auto mt-8">
						<hr className="flex-1 border" />
						<span className="">{t("Or")}</span>
						<hr className="flex-1 border" />
					</div>
					<div className="flex flex-col w-full gap-3 mt-8 text-black">
						<Button
							icon={FaGoogle}
							textColor="black"
							label={t("Sign In with Google")}
							onClick={() => {}}
							rootClass="rounded-lg border whitespace-nowrap w-full pl-10  font-bold text-sm text-black bg-white justify-start"
							iconPosition="left"
						/>
						<Button
							icon={FaFacebookF}
							label={t("Sign In with Facebook")}
							onClick={() => {}}
							textColor="black"
							rootClass="rounded-lg border whitespace-nowrap w-full pl-10  font-bold text-sm bg-white justify-start"
							iconPosition="left"
						/>
						<Button
							icon={FaTwitter}
							textColor="black"
							label={t("Sign In with Twitter")}
							onClick={() => {}}
							rootClass="rounded-lg border whitespace-nowrap w-full pl-10  font-bold text-sm bg-white justify-start"
							iconPosition="left"
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
				</form>
			</div>
		</div>
	);
};

export default SignUpForm;
