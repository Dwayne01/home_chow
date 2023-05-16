import ComingSoonHeader from "@/components/header/ComingSoonHeader";
import Footer from "@/components/footer/Footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import foodPotImage from "../../../public/assets/images/food-pot.svg";
import foodBowlImage from "../../../public/assets/images/food-bowl.svg";
import glassJugImage from "../../../public/assets/images/glass-jug.svg";

const AboutUs = () => {
	const { t } = useTranslation(["about", "common", "footer"]);

	return (
		<div className="min-w-min">
			<div className="mt-2">
				<ComingSoonHeader />
				<div>
					<div className="mx-4 sm:mx-auto mt-14 md:w-3/4 xl:w-1/2 ">
						<h1 className="mb-2  sm:ml-4">{t("abouts")}</h1>
						<h2 className="mb-2  sm:ml-4">
							{t("bringing homecooked meals")}
							<strong className="text-primary-color"> {t("doorstep")}</strong>
						</h2>
					</div>
					<div className="flex flex-1 md:w-3/4 xl:w-1/2  gap-8 mx-auto justify-center">
						<div className="basis-1/2 ml-4">
							<p className="mb-4  text-xs md:text-base">
								{t("modern consumers,limited restaurants")}
							</p>
							<p className="mb-4  text-xs md:text-base">
								{t("opportunity in the market")}
							</p>
							<aside>
								<Image
									src={foodPotImage}
									alt="homemade pot stew"
									className=" mt-10 mb-10 w-full"
								/>
							</aside>
							<p className="mt-4 mb-4  text-xs md:text-base">
								{t("platform easy to use")}
							</p>
						</div>
						<div className="basis-1/2 mr-4">
							<aside>
								<Image
									src={foodBowlImage}
									alt="fresh salad bowl"
									className=" mb-10 w-full h-full"
								/>
							</aside>
							<p className=" text-xs md:text-base">
								<strong>HomeChow</strong>{" "}
								{t("delivery service that offers freshly made meals")}
							</p>
							<aside>
								<Image
									src={glassJugImage}
									alt="refreshing fresh juice"
									className=" mt-10 w-full"
								/>
							</aside>
						</div>
					</div>
				</div>
				<Footer footerColor="dark" />
			</div>
		</div>
	);
};

export default AboutUs;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"about",
				"common",
				"footer",
			])),
		},
	};
}
