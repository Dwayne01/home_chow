import ComingSoonHeader from "@/components/header/ComingSoonHeader";
import Footer from "@/components/footer/Footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import foodPotImage from "../../../public/assets/images/food-pot.png";
import foodBowlImage from "../../../public/assets/images/food-bowl.png";
import glassJugImage from "../../../public/assets/images/glass-jug.png";

const AboutUs = () => {
	const { t } = useTranslation(["about", "common", "footer"]);

	return (
		<div className="min-w-min">
			<div className="mx-4">
				<ComingSoonHeader />
				<div className="md:flex md:flex-row md:flex-1 justify-between gap-16 m-auto mt-14 w-[95%]">
					<div className="basis-1/2">
						<h1 className="mb-6">{t("abouts")}</h1>
						<h2 className="mb-2">
							{t("bringing homecooked meals")}
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
							src={glassJugImage}
							alt="refreshing fresh juice"
							className="rounded-tr-large mt-10"
						/>
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
