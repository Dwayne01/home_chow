// import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "next-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../../public/assets/images/logo/HomeChow_Logo.png";
// import LanguageSwitcher from "../langugeswitcher";
import Button from "../common/buttons/index";

const ComingSoonHeader = ({ logoUrl }: { logoUrl?: string }) => {
	const [showMobileView, setShowMobileView] = useState<boolean>(false);
	// const [showMenu, setShowMenu] = useState<boolean>(false);
	const handleToggle = () => setShowMobileView((prevValue) => !prevValue);

	// const handleNav = () => {
	// 	setShowMobileView((prevValue) => !prevValue)
	// }

	const { t } = useTranslation(["common"]);

	const defaultUserOptions = [
		{
			label: t("Login"),
			href: "/login",
			textColor: "text-white",
			rootClass: "rounded-lg whitespace-nowrap w-auto ",
		},
		{
			label: t("Sign Up"),
			href: "/register",
			textColor: "text-white",
			rootClass: "rounded-lg whitespace-nowrap w-auto ",
		},
	];

	return (
		// <nav className="min-h-[60px] h-[81px] bg-white flex items-center z-12">
		// 	<div className="flex w-[95%] m-auto items-center justify-between flex-wrap z-auto py-25 gap-3">
		// 		<div className="flex flex-row gap">
		// 			<Link href="/" className="flex items-center ">
		// 				<Image src={logoUrl || Logo} className="w-48 md:w-60" alt="Logo" />
		// 			</Link>
		// 		</div>
		// 		<div>
		// 			{defaultUserOptions &&
		// 				defaultUserOptions.map((option) => (
		// 					<Link
		// 						key={option.href}
		// 						href={option.href}
		// 						className="p-6 hidden md:block"
		// 					>
		// 						<h3>{option.label}</h3>
		// 					</Link>
		// 				))}
		// 		</div>
		// 		<div className="flex items-center md:order-2">
		// 			<div className="px-3">
		// 				<LanguageSwitcher />
		// 			</div>
		// 			<button
		// 				onClick={handleToggle}
		// 				data-testid="hamburger-menu"
		// 				className={classNames(
		// 					showMenu ? "rotate-180" : "-rotate-180",
		// 					"sm:ml-6 md:hidden duration-100 ease-in-out"
		// 				)}
		// 			>
		// 				{!showMenu ? (
		// 					<RxHamburgerMenu className="text-2xl text-gray-600" />
		// 				) : (
		// 					<IoMdClose className="text-2xl" />
		// 				)}
		// 			</button>
		// 		</div>
		// 	</div>
		// </nav>
		<div className="sticky w-full z-10 ease-in duration-300">
			<div className="max-w-[95%] m-auto flex justify-between items-center p-4 ">
				<div>
					<div className="header-logo">
						<Link href="/">
							<Image
								src={logoUrl || Logo}
								className="w-40 md:w-55"
								alt="logo"
							/>
						</Link>
					</div>
				</div>
				<ul className="hidden sm:flex">
					{defaultUserOptions?.map((option) => (
						<li className="px-3 py-4">
							<Link href={option.href}>
								{" "}
								<Button
									textColor={option.textColor}
									label={option.label}
									// onClick={() => setIsSubscribeUser(!isSubscribeUser)}
									rootClass={option.rootClass}
								/>
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile Button */}
				<div className="block sm:hidden z-10">
					{showMobileView ? (
						<IoMdClose
							size={20}
							onClick={handleToggle}
							style={{ color: `black` }}
						/>
					) : (
						<RxHamburgerMenu size={20} onClick={handleToggle} />
					)}
				</div>
				{/* Mobile Menu */}
				<div
					className={
						showMobileView
							? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white opacity-90 text-center ease-in duration-300"
							: "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
					}
				>
					<ul>
						{defaultUserOptions?.map((option) => (
							<li className="p-4 text-4xl">
								<Link href={option.href}>{option.label}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ComingSoonHeader;
