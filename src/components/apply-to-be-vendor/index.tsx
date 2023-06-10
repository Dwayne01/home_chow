import { useTranslation } from "next-i18next";
import { useState } from "react";
import Image from "next/image";
import Profile from "@/components/home/Profile";
// import Schedule from "@/components/home/Schedule";
import HomePageImage from "../../../public/assets/images/Home/Home_Page_Content.svg";

export default function ApplyToBeVendor() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [scheduleBtnEnbled, setScheduleBtnEnable] = useState<boolean>(false);
	const { t } = useTranslation(["home"]);

	return (
		<div className="m-10 md:m-0 md:my-10">
			<div className="flex flex-col   md:flex-row justify-center items-center w-full ">
				<div className="w-full md:w-2/5 mt-3 md:mt-0 order-2 md:order-1">
					<h1 className="text-primary-color-theme-light text-5xl">
						{t("Start_Business")}
					</h1>
					<h1 className="text-primary-color-theme text-5xl">
						{t("Set_Rules")}
					</h1>
					<p className="whitespace-wrap mt-5 text-xs md:text-base">
						{t("Home_Content")}
					</p>
				</div>
				<aside className="order-1 md:order-2">
					<Image src={HomePageImage} alt="Home Page Image" />
				</aside>
			</div>
			<div className="w-full sm:w-full md:w-3/5 lg:w-2/5 mx-auto mt-5">
				<Profile setScheduleBtnEnable={setScheduleBtnEnable} />
			</div>
		</div>
	);
}
