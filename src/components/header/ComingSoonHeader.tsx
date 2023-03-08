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
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const handleToggle = () => setShowMenu((prevValue) => !prevValue);

	const { t } = useTranslation(["common"]);

	const defaultUserOptions = [
		{
			label: t("Login"),
			href: "/login",
			textColor: "text-primary-color ",
			rootClass:
				"whitespace-nowrap w-auto border-[1px] border-primary-color hover:text-white ",
			bgColor: "bg-white ",
		},
		{
			label: t("Sign Up"),
			href: "/register",
			textColor: "text-white",
			rootClass: "whitespace-nowrap w-auto border-[1px] border-primary-color ",
			bgColor: "bg-primary-color",
		},
	];

	return (
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
						<li className="px-3 py-2">
							<Link href={option.href}>
								{" "}
								<Button
									textColor={option.textColor}
									label={option.label}
									// onClick={() => setIsSubscribeUser(!isSubscribeUser)}
									rootClass={option.rootClass}
									bgColor={option.bgColor}
								/>
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile Button */}
				<div className="block sm:hidden z-10">
					{showMenu ? (
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
						showMenu
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
