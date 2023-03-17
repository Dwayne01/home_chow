import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Logo from "public/assets/images/logo/HomeChow_Logo.png";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import Button from "../common/buttons";
import IconButton from "../common/buttons/IconButton";
import { TextField } from "../form/InputField";

const Footer = ({
	logoUrl,
	footerColor = "light",
}: {
	logoUrl?: string;
	footerColor: "light" | "dark";
}) => {
	const { t } = useTranslation("footer");

	let backgroundColor;
	let textColor;
	let subTextColor;
	let textFieldBackground;

	if (footerColor === "dark") {
		backgroundColor = "bg-black";
		textColor = "text-white";
		subTextColor = "text-grey-light";
		textFieldBackground = "black";
	}

	const aboutMenu = [
		{ label: "Mixer Events", href: "/mixerEvents" },
		{
			label: "Affiliates",
			href: "/affiliates",
		},
		{
			label: "Privacy Policy",
			href: "/privacyPolicy",
		},
		{
			label: "Terms of Service",
			href: "/termsOfService",
		},
	];

	const supportMenu = [
		{ label: "Help Center", href: "/helpCenter" },
		{ label: "FAQ", href: "/faq" },
	];

	const contactInfo = {
		Street: " 1234 Main Street",
		City: "New York",
		State: "NY",
		Zip: "10001",
		Phone: "123-456-7890",
	};

	const form = useForm({
		defaultValues: {},
	});

	const { handleSubmit, register } = form;

	const handleSubmitForm = (params: any) => {
		// eslint-disable-next-line no-console
		console.log(params);
	};

	return (
		<div
			className={`footer mx-10 my-20 flex flex-wrap justify-between md:mx-24 md:gap-y-14 ${backgroundColor} ${textColor}`}
		>
			<div className="w-full md:w-auto">
				<div className="logo ">
					<Image src={logoUrl || Logo} className="w-48 md:w-60" alt="Logo" />
				</div>
				<p className="mt-1 max-w-sm">
					{t(
						"Mixer events is an all in one platform that provides services to party lovers, get hosts to create events and vendor to merchandize products quickly"
					)}
				</p>
			</div>
			<div className="md:flex justify-between md:gap-x-7 w-full md:w-auto">
				<div className="flex justify-between items-start mt-14 md:mt-0 md:gap-x-7">
					<div className="about ">
						<h4 className="font-bold text-base mb-4">{t("About Us")}</h4>
						<ul className={`flex flex-col gap-4 ${subTextColor}`}>
							{aboutMenu.map((item) => (
								<li key={item.href}>
									<Link href={item.href}>{t(item.label)}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="support ">
						<h4 className="font-bold text-base mb-4">{t("Support")}</h4>
						<ul className={`flex flex-col gap-4  ${subTextColor}`}>
							{supportMenu.map((item) => (
								<li key={item.href}>
									<Link href={item.href}>{t(item.label)}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="contact mt-8 md:mt-0">
					<h4 className="font-bold text-base mb-4">{t("Contact Us")}</h4>

					<p>{t("Address")}</p>
					<div className={`flex flex-wrap gap-1 gap-x-3 ${subTextColor}`}>
						<span>{contactInfo.Street}</span>
						<span>{contactInfo.City}</span>
						<span>{contactInfo.State}</span>
						<span>{contactInfo.Zip}</span>
					</div>
					<div className="mt-6  flex flex-col gap-2">
						<h4 className="font-bold text-base"> {t("Phone Number")}</h4>
						<span className={subTextColor}>{contactInfo.Phone}</span>
					</div>
				</div>
			</div>
			<div className="mt-20 md:mt-0 md:flex justify-between w-full items-end flex-wrap gap-y-7">
				<div className="">
					<h3 className="font-bold text-2xl">{t("Get Updates")}</h3>
					<p className="mt-2">{t("We are growing fast. Get daily update")}</p>
					<FormProvider {...form}>
						<form onSubmit={handleSubmit(handleSubmitForm)}>
							<div className="mt-7 flex flex-col gap-4 md:flex-row md:w-full">
								<TextField
									data-testid="email"
									rootClass="md:w-[340px]"
									name="email"
									placeholder="example@example.com"
									ref={register({
										required: true,
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: t("common:invalidEmail"),
										},
									})}
									autoComplete="username"
									style={{ backgroundColor: textFieldBackground }}
								/>

								<Button
									label={t("Get Started")}
									rootClass="rounded-lg whitespace-nowrap w-full p-3 sm:w-[166px] font-bold text-sm"
									iconPosition="right"
								/>
							</div>
						</form>
					</FormProvider>
				</div>
				<div className="mt-14 md:mt-0">
					<p className="mb-7 font-semibold">{t("Follow us on social media")}</p>
					<div className="w-full flex md:justify-start justify-center gap-6 flex-1 md:items-end md:pt-0 order-7 md:order-none items-center">
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
				<p className={`mt-5 md:mt-0 text-center ${subTextColor}`}>
					© 2022 MixerEvents. {t("All rights reserved")}
				</p>
			</div>
		</div>
	);
};

export default Footer;
