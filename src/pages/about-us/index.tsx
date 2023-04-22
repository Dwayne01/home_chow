import ComingSoonHeader from "@/components/header/ComingSoonHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import foodPotImage from "../../../public/assets/images/food_pot.png";
import foodBowlImage from "../../../public/assets/images/food_bowl.png";
// import glassJarImage from "../../../public/assets/images/jar.png";
import yellowBgImage from "../../../public/assets/images/yellowBg.png";

const AboutUs = () => {
	const { t } = useTranslation(["comingsoon", "common"]);

	return (
		<div className="min-w-min">
			<div className="mt-2">
				<ComingSoonHeader />
				<div className="m-auto mt-7 w-[95%]">
					<div className="pl-1">
						<h1 className="mb-2">{t("About us")}</h1>
						<h2 className="mb-2 w-[70%] font-medium">
							{t("Bringing homecooked meals to your")}
							<strong className="text-primary-color font-medium">
								{" "}
								{t("doorstep")}
							</strong>
						</h2>
					</div>
					<div className="grid grid-cols-2 grid-rows-4 gap-4 p-1">
						<div className="mt-6 pl-1 pr-6 py-3">
							<p className="text-gray-paragraph leading-7">
								{t("With the increasing demand")}
							</p>
						</div>
						<div className="mt-4">
							<Image src={foodBowlImage} alt="fresh salad bowl" className="" />
						</div>
						<div>
							<Image src={foodPotImage} alt="homemade pot stew" className="" />
						</div>
						<div className="pl-1 pr-2 py-3">
							<p className="text-gray-paragraph leading-7">
								{t("To cater to the diverse residents of Vancouver")}
							</p>
						</div>
						<div className="pl-1 pr-2 py-3">
							<p className="text-gray-paragraph leading-7">
								<strong className="text-black">{t("HomeChow")}</strong>{" "}
								{t("is a food delivery service that offers")}
							</p>
						</div>
						<div>
							{/* <Image
								src={glassJarImage}
								alt="refreshing fresh juice"
								className="absolute z-50"
							/> */}
							<Image
								src={yellowBgImage}
								alt="refreshing fresh juice background"
								className="relative"
							/>
						</div>
						<div className="col-span-2 pl-1 pr-2 py-3">
							<p className="text-gray-paragraph leading-7">
								{t("from classic comfort food to international cuisine")}
							</p>
						</div>
					</div>
				</div>
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
