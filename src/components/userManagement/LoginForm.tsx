import React from "react";
import InputField from "@/components/InputField";
import Image from "next/image";
import { Checkbox } from "@/components/form/InputField";
import Link from "next/link";
import classNames from "classnames";
import Button from "@/components/common/buttons";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import Logo from "../../../public/assets/images/logo/HomeChow_Logo.png";

const LoginPage = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [rememberMe, setRememberMe] = React.useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<div className="flex-1 my-16 flex flex-col">
			<div className="mx-auto min-w-md">
				<div className="max-w-sm">
					<div className="logo ">
						<Image src={Logo} className="w-48 md:w-60" alt="Logo" />
					</div>
					<div className="flex flex-col mt-12">
						<h2 className="font-semibold text-3xl ">Log in</h2>
						<p className="mt-3">Welcome back! Please enter your details.</p>
					</div>
				</div>
				<form className="max-w-sm mt-8" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-5">
						<InputField
							label="Email"
							placeholder="Enter your email"
							name="email"
							className="h-12"
							handleChange={(text) => setEmail(text)}
							required
						/>
						<InputField
							label="Password"
							placeholder="Enter your password"
							type="password"
							name="password"
							className="h-12"
							handleChange={(text) => setPassword(text)}
							required
						/>
					</div>
					<div className="flex justify-between items-center mt-6">
						<Checkbox
							label="Remember me"
							onChange={() => setRememberMe(!rememberMe)}
						/>
						<Link href="/forgot-password"> Forgot Password?</Link>
					</div>
					<div className=" mt-6">
						<Button
							textColor="text-white"
							label="Sign In"
							type="submit"
							rootClass={classNames(
								"rounded-lg whitespace-nowrap w-full px-3  font-bold text-sm ",
								email === "" || password === ""
									? "bg-primary-color opacity-50"
									: "bg-primary-color"
							)}
							iconPosition="right"
							disabled={email === "" || password === ""}
						/>
					</div>
					<div className="flex items-center gap-2 max-w-[80%] m-auto mt-8">
						<hr className="flex-1 border" />
						<span className="">Or</span>
						<hr className="flex-1 border" />
					</div>
					<div className="flex flex-col w-full gap-3 mt-8">
						<Button
							icon={FaGoogle}
							textColor="text-black text-left"
							label="Sign In with Google"
							onClick={() => {}}
							rootClass="rounded-lg border whitespace-nowrap w-full px-10  font-bold text-sm bg-white text-black justify-between"
							iconPosition="left"
						/>
						<Button
							icon={FaFacebookF}
							label="Sign In with Facebook"
							onClick={() => {}}
							textColor="text-black text-left"
							rootClass="rounded-lg border whitespace-nowrap w-full px-10  font-bold text-sm bg-white text-black justify-between"
							iconPosition="left"
						/>
						<Button
							icon={FaTwitter}
							textColor="text-black text-left"
							label="Sign In with Twitter"
							onClick={() => {}}
							rootClass="rounded-lg border whitespace-nowrap w-full px-10  font-bold text-sm bg-white text-black justify-between"
							iconPosition="left"
						/>
					</div>
					<div className="mt-8">
						<p className="text-center">
							Don&apos;t have an account?{" "}
							<Link href="/register" className="text-primary-color">
								Sign Up
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
