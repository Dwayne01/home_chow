import Footer from "@/components/footer/Footer";
import MainHeader from "@/components/header/MainHeader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import config from "config";
import { useEffect, useState } from "react";
import Image from "next/image";
import Profile from "@/components/home/Profile";
import Schedule from "@/components/home/Schedule";
import HomePageImage from "../../public/assets/images/Home/Home_Page_Content.svg";

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"home",
				"footer",
			])),
		},
	};
}

export default function Home() {
	const { pathname, replace } = useRouter();
	const [scheduleBtnEnbled, setScheduleBtnEnable] = useState<boolean>(false);
	const { t } = useTranslation(["home"]);

	useEffect(() => {
		if (pathname !== "/demo" && config.env !== "development") {
			replace("/comingsoon");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<div>
			<MainHeader />
			<main>
				<div className="m-3 mt-20  md:mt-3 sm:w-2/3 sm:mx-auto">
					<div className="flex flex-col   md:flex-row justify-center items-center w-full ">
						<div className="w-full md:w-1/2 mt-3 md:mt-0 order-2 md:order-1">
							<h1>{t("Start_Business")}</h1>
							<h1>{t("Set_Rules")}</h1>
							<p className="whitespace-wrap text-xs md:text-base">
								{t("Home_Content")}
							</p>
						</div>
						<aside className="order-1 md:order-2">
							<Image src={HomePageImage} alt="Home Page Image" />
						</aside>
					</div>
					<div className="w-full md:w-3/4 mx-auto mt-5">
						<div className="flex justify-center items-center gap-5">
							<div>
								<button
									className={`px-4 py-2 mb-3 rounded-lg mr-4 ${
										!scheduleBtnEnbled
											? "bg-blue-500 text-white"
											: "bg-gray-300 text-gray-500 cursor-default"
									}`}
									disabled={scheduleBtnEnbled}
								>
									{t("Step_1")}
								</button>
								<h2
									className={`${
										!scheduleBtnEnbled
											? "text-white-500"
											: "text-gray-300 cursor-default"
									}`}
								>
									{t("Profile")}
								</h2>
							</div>
							<div>
								<button
									className={`px-4 py-2 mb-3 rounded-lg ${
										scheduleBtnEnbled
											? "bg-blue-500 text-white"
											: "bg-gray-300 text-gray-500 cursor-default"
									}`}
									disabled={!scheduleBtnEnbled}
									tabIndex={scheduleBtnEnbled ? 0 : -1}
								>
									{t("Step_2")}
								</button>
								<h2
									className={`${
										scheduleBtnEnbled
											? "text-white-500"
											: "text-gray-300 cursor-default"
									}`}
								>
									{t("Schedule")}
								</h2>
							</div>
						</div>

						{scheduleBtnEnbled ? (
							<Schedule />
						) : (
							<Profile setScheduleBtnEnable={setScheduleBtnEnable} />
						)}
					</div>
				</div>
			</main>
			<Footer footerColor="light" />
		</div>
	);
}
