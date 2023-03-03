import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Logo from "public/assets/images/logo/HomeChow_Logo.png";
import Button from "../common/buttons";
import InputField from "../InputField";
import IconButton from "../common/buttons/IconButton";

const Footer = ({ logoUrl }: { logoUrl?: string }) => {
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

	return (
		<div className="footer mx-10 my-20 flex flex-wrap justify-between md:mx-24 md:gap-y-14">
			<div>
				<div className="logo ">
					<Image src={logoUrl || Logo} className="w-48 md:w-60" alt="Logo" />
				</div>
				<p className="mt-1 max-w-sm">
					Mixer events is an all in one platform that provides services to party
					lovers, get hosts to create events and vendor to merchandize products
					quickly
				</p>
			</div>
			<div className="md:flex justify-between md:gap-x-7">
				<div className="flex justify-between items-start mt-14 md:mt-0 md:gap-x-7">
					<div className="about ">
						<h4 className="font-bold text-base mb-4">About</h4>
						<ul className="flex flex-col gap-4">
							{aboutMenu.map((item) => (
								<li key={item.href}>
									<Link href={item.href}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="support ">
						<h4 className="font-bold text-base mb-4">Support</h4>
						<ul className="flex flex-col gap-4">
							{supportMenu.map((item) => (
								<li key={item.href}>
									<Link href={item.href}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="contact mt-8 md:mt-0">
					<h4 className="font-bold text-base mb-4">Contact</h4>

					<p>Address</p>
					<div className="flex flex-wrap gap-1 gap-x-3">
						<span>{contactInfo.Street}</span>
						<span>{contactInfo.City}</span>
						<span>{contactInfo.State}</span>
						<span>{contactInfo.Zip}</span>
					</div>
					<div className="mt-6  flex flex-col gap-2">
						<h4 className="font-bold text-base"> Phone Number:</h4>
						<span>{contactInfo.Phone}</span>
					</div>
				</div>
			</div>
			<div className="mt-20 md:mt-0 md:flex justify-between md:w-full items-end">
				<div className="">
					<h3 className="font-bold text-2xl"> Get update</h3>
					<p className="mt-2">We are growing fast. Get daily update</p>
					<div className="mt-7 flex flex-col gap-4 md:flex-row md:w-full">
						<InputField
							placeholder="Enter your email address"
							className="h-14 rounded-lg"
							width="md:w-[340px]"
						/>
						<Button
							textColor="text-white"
							label="Get Started"
							onClick={() => {}}
							rootClass="rounded-lg whitespace-nowrap w-full px-3 sm:w-[166px] font-bold text-sm"
							iconPosition="right"
						/>
					</div>
				</div>
				<div className="mt-14 md:mt-0">
					<p className="mb-7 font-semibold">Follow us on social media</p>
					<div className="w-full flex justify-start gap-6 flex-1 items-end md:pt-0 order-7 md:order-none ">
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
				<p className="mt-20 md:mt-0 text-center text-[#333333]">
					© 2022 MixerEvents. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;