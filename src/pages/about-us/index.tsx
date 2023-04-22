import ComingSoonHeader from "@/components/header/ComingSoonHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import foodPotImage from "../../../public/assets/images/food_pot.png";
import foodBowlImage from "../../../public/assets/images/food_bowl.png";
import glassJarImage from "../../../public/assets/images/jar.png";
import yellowBgImage from "../../../public/assets/images/yellowBg.png";

const AboutUs = () => {
	const { t } = useTranslation(["comingsoon", "common"]);

	return (
		<div className="min-w-min">
			<div className="mt-2">
				<ComingSoonHeader />
				<div className="md:flex md:flex-row md:flex-1 justify-between gap-16 m-auto mt-7 w-[95%]">
					<div className="basis-1/2">
						<h1 className="mb-2">{t("About us")}</h1>
						<h2 className="mb-2 w-[70%]">
							{t("Bringing homecooked meals to your")}
							<strong className="text-primary-color"> {t("doorstep")}</strong>
						</h2>
						<p className="mb-4">{t("modern consumers,limited restaurants")}</p>
						<p className="mb-4">{t("opportunity in the market")}</p>
						<Image
							src={foodPotImage}
							alt="homemade pot stew"
							className="rounded-br-large mt-10 mb-10"
						/>
						<p className="mt-4 mb-4">{t("platform easy to use")}</p>
					</div>
					<div className="basis-1/2">
						<Image
							src={foodBowlImage}
							alt="fresh salad bowl"
							className="rounded-tl-xlarge mb-10"
						/>
						<p>
							<strong>HomeChow</strong>{" "}
							{t("delivery service that offers freshly made meals")}
						</p>
						<Image
							src={glassJarImage}
							alt="refreshing fresh juice"
							className="absolute z-50"
						/>
						<Image
							src={yellowBgImage}
							alt="refreshing fresh juice"
							className="relative"
						/>
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
