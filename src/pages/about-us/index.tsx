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
				<div className="m-auto mt-7 w-[95%] mb-[-20%] md:px-44 md:mt-24">
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
					<div className="grid grid-cols-2 grid-rows-4 gap-4 p-1 md:relative">
						<div className="flex pt-3 pl-2 pr-6">
							<div className="flex justify-center text-gray-paragraph leading-5 md:leading-7 text-xs md:text-xl md:pr-16 md:pt-3">
								{t("With the increasing demand")}
							</div>
						</div>
						<div className="flex justify-center">
							<Image
								src={foodBowlImage}
								alt="fresh salad bowl"
								className="w-[169px] h-[140px] md:w-[402px] md:h-[333px]"
							/>
						</div>
						<div className="flex justify-start">
							<Image
								src={foodPotImage}
								alt="homemade pot stew"
								className="w-[147px] h-[157px] md:w-[406px] md:h-[384px]"
							/>
						</div>
						<div className="pt-2 pl-2 pr-4">
							<p className="text-gray-paragraph leading-5 text-xs md:text-xl md:absolute md:w-1/2 md:top-44 md:left-0 md:pl-3 md:pr-16">
								{t("To cater to the diverse residents of Vancouver")}
							</p>
						</div>
						<div className="pl-2 pt-4">
							<p className="text-gray-paragraph leading-5 md:leading-7 text-xs md:text-xl md:absolute md:w-1/2 md:top-96 md:right-0 md:mt-6 md:pl-16">
								<strong>{t("HomeChow")}</strong>{" "}
								{t("is a food delivery service that offers")}
							</p>
						</div>
						<div className="flex justify-center pb-6">
							<Image
								src={drinkJarImage}
								alt="refreshing fresh juice background"
								className="w-[158px] h-[122px] md:w-[393px] md:h-[302px]"
							/>
						</div>
						<div className="col-span-2 pl-2 pr-2 mt-[-12%]">
							<p className="text-gray-paragraph leading-5 md:leading-7 text-xs md:text-xl md:absolute md:w-1/2 md:inset-1/2 md:left-0 md:pt-24 md:pl-3 md:pr-16">
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
