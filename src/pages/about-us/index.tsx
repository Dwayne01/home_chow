import ComingSoonHeader from "@/components/header/ComingSoonHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import foodPotImage from "../../../public/assets/images/food_pot.svg";
import foodBowlImage from "../../../public/assets/images/food_bowl.svg";
import drinkJarImage from "../../../public/assets/images/drink_jar.svg";

const AboutUs = () => {
	const { t } = useTranslation(["comingsoon", "common"]);

	return (
		<div className="min-w-min">
			<div className="mt-2">
				<ComingSoonHeader />
				<div className="m-auto mt-7 w-[95%] mb-[-20%] md:px-40 md:mt-24">
					<div className="pl-3">
						<h1 className="mb-2 text-3xl md:text-6xl">{t("About us")}</h1>
						<h2 className="mb-2 w-[70%] font-medium text-xl md:text-3xl md:w-[40%] md:mt-14">
							{t("Bringing homecooked meals to your")}
							<strong className="text-primary-color font-medium">
								{" "}
								{t("doorstep")}
							</strong>
						</h2>
					</div>
					<div className="grid grid-cols-2 grid-rows-4 gap-4 p-1">
						<div className="flex pt-3 pl-2 pr-6">
							<div className="flex justify-center text-gray-paragraph leading-5 md:leading-7 text-xs md:text-xl md:pr-16">
								{t("With the increasing demand")}
							</div>
						</div>
						<div className="flex justify-center">
							<Image
								src={foodBowlImage}
								width={169}
								height={140}
								alt="fresh salad bowl"
							/>
						</div>
						<div className="flex justify-center">
							<Image
								src={foodPotImage}
								width={167}
								height={167}
								alt="homemade pot stew"
							/>
						</div>
						<div className="pt-2 pl-2 pr-4">
							<p className="text-gray-paragraph leading-5 md:leading-7 text-xs md:text-xl">
								{t("To cater to the diverse residents of Vancouver")}
							</p>
						</div>
						<div className="pl-2 pt-4">
							<p className="text-gray-paragraph leading-5 md:leading-7 text-xs md:text-xl">
								<strong>{t("HomeChow")}</strong>{" "}
								{t("is a food delivery service that offers")}
							</p>
						</div>
						<div className="flex justify-center pb-6">
							<Image
								src={drinkJarImage}
								width={169}
								height={140}
								alt="refreshing fresh juice background"
								className="relative"
							/>
						</div>
						<div className="col-span-2 pl-2 pr-2 mt-[-12%]">
							<p className="text-gray-paragraph leading-5 md:leading-7 text-xs md:text-xl">
								{t("from classic comfort food to international cuisine")}
							</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default AboutUs;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"comingsoon",
				"common",
			])),
		},
	};
}
