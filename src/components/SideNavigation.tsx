import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { SideNavigationProps } from "@/types/dashboard";
import { useTranslation } from "next-i18next";
import Logo from "../../public/assets/images/logo/HomeChow_Logo.png";

const SideNavigation = ({ logoUrl, navigation }: SideNavigationProps) => {
	const { t } = useTranslation("dashboard");
	return (
		<div className="border-r flex-1">
			<div className="px-8 py-6">
				<Link href="/">
					<Image src={logoUrl || Logo} className="w-40 md:w-55" alt="logo" />
				</Link>
			</div>
			<ul className="mt-4">
				{navigation.map((option, ind) => (
					<Link href={option.href} key={ind}>
						<li
							key={ind}
							className={classNames(
								"flex items-center h-12 gap-6 pl-6 hover:bg-grey-light cursor-pointer",
								option.current
									? "border-r-4 border-primary-color bg-primary-color-50 "
									: ""
							)}
						>
							<span
								className={classNames(
									option.current ? "text-primary-color" : ""
								)}
							>
								<option.icon />
							</span>
							<span
								className={classNames(
									"font-medium",
									option.current ? "text-primary-color" : ""
								)}
							>
								{t(option.label)}
							</span>
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};
export default SideNavigation;
