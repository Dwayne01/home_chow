import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "next-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../../public/assets/images/logo/HomeChow_Logo.png";
import LanguageSwitcher from "../langugeswitcher";

const ComingSoonHeader = ({ logoUrl }: { logoUrl?: string }) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const handleToggle = () => setShowMenu((prevValue) => !prevValue);

	const { t } = useTranslation(["common"]);

	const defaultUserOptions = [
		{
			label: t("Home"),
			href: "/",
		},
		{
			label: t("aboutUs"),
			href: "/about-us",
		},
	];

	return (
		<nav className="min-h-[60px] h-[81px] bg-white flex items-center z-12">
			<div className="flex w-[95%] m-auto items-center justify-between flex-wrap z-auto py-25 gap-3">
				<div className="flex flex-row gap">
					<Link href="/comingsoon" className="flex items-center">
						<Image src={logoUrl || Logo} className="w-48 md:w-60" alt="Logo" />
					</Link>
				</div>
				<div className="flex md:gap-10">
					<div className="flex justify-between items-center">
						{defaultUserOptions &&
							defaultUserOptions.map((option) => (
								<Link
									key={option.href}
									href={option.href}
									className="p-5 hidden md:block"
								>
									<h3 className="mt-3 text-xl">{option.label}</h3>
								</Link>
							))}
					</div>
					<div className="flex items-center mt-4 md:order-2">
						<LanguageSwitcher />
						<button
							onClick={handleToggle}
							data-testid="hamburger-menu"
							className={classNames(
								showMenu ? "rotate-180" : "-rotate-180",
								"ml-6 mr-3 z-10 md:hidden duration-100 ease-in-out"
							)}
						>
							{!showMenu ? (
								<RxHamburgerMenu className="text-2xl text-gray-600" />
							) : (
								<IoMdClose className="text-2xl" />
							)}
						</button>
						{/* Mobile Menu */}
						<div
							className={
								showMenu
									? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white opacity-90 text-center ease-in duration-300"
									: "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
							}
						>
							<ul>
								{defaultUserOptions.map((option, idx) => (
									<li className="p-4 text-4xl" key={idx}>
										<Link href={option.href}>{option.label}</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default ComingSoonHeader;
