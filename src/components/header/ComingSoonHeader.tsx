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
	const { t } = useTranslation(["common"]);
	const handleToggle = () => setShowMenu(!showMenu);

	const [showMenu, setShowMenu] = useState<boolean>(false);

	const defaultUserOptions = [
		{
			label: t("aboutUs"),
			href: "/about-us",
		},
	];

	return (
		<nav className="min-h-[60px] h-[81px] bg-white flex items-center z-12">
			<div className="flex w-[95%] m-auto items-center justify-between flex-wrap z-auto py-25 gap-3">
				<div className="flex flex-row gap">
					<Link href="/" className="flex items-center ">
						<Image src={logoUrl || Logo} className="w-48 md:w-60" alt="Logo" />
					</Link>
				</div>
				<div>
					{defaultUserOptions &&
						defaultUserOptions.map((option) => (
							<Link
								key={option.href}
								href={option.href}
								className="p-6 hidden md:block"
							>
								<h3>{option.label}</h3>
							</Link>
						))}
				</div>
				<div className="flex items-center md:order-2">
					<div className="px-3">
						<LanguageSwitcher />
					</div>
					<button
						onClick={handleToggle}
						data-testid="hamburger-menu"
						className={classNames(
							showMenu ? "rotate-180" : "-rotate-180",
							"sm:ml-6 md:hidden duration-100 ease-in-out"
						)}
					>
						{!showMenu ? (
							<RxHamburgerMenu className="text-2xl text-gray-600" />
						) : (
							<IoMdClose className="text-2xl" />
						)}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default ComingSoonHeader;
