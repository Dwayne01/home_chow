import ComingSoonHeader from "@/components/header/ComingSoonHeader";
import Footer from "@/components/footer/Footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import foodPotImage from "../../../public/assets/images/food_pot.svg";
import foodBowlImage from "../../../public/assets/images/food_bowl.svg";
import drinkJarImage from "../../../public/assets/images/drink_jar.svg";
// eslint-disable-next-line import/no-unresolved
import member1Image from "../../../public/assets/images/member1.png";

const AboutUs = () => {
	const { t } = useTranslation(["about", "common", "footer"]);

	return (
		<div className="min-w-min">
			<div className="mt-2">
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
							src={drinkJarImage}
							alt="refreshing fresh juice"
							className="rounded-tr-large mt-10"
						/>
					</div>
				</div>
				<div className="m-auto mt-20 w-[80%] mb-20">
					<div className="text-center md:text-left">
						<h1 className="mb-6 text-4xl">{t("ourteam")}</h1>
						<h2 className="mb-6 text-2xl">
							{t("meet our team")}
							<br />
							<span className="text-red">{t("management, developing")} </span>
							{t("and")}
							<span className="text-red"> {t("designing")}</span>
						</h2>
					</div>
					<div className="grid gap-6 md:gap-16 md:grid-cols-3 m-auto max-w-xs md:max-w-[100%]">
						<div className="relative">
							<Image src={member1Image} alt="member 1" />
							<div className="text-center absolute bottom-5 w-[100%] text-white">
								<h4 className="text-2xl">Minte Temple</h4>
								<h4>{t("founder / CEO")}</h4>
							</div>
						</div>
						<div className="relative">
							<Image src={member1Image} alt="member 2" />
							<div className="text-center absolute bottom-5 w-[100%] text-white">
								<h4 className="text-2xl">Minte Temple</h4>
								<h4>{t("founder / CEO")}</h4>
							</div>
						</div>
						<div className="relative">
							<Image src={member1Image} alt="member 3" />
							<div className="text-center absolute bottom-5 w-[100%] text-white">
								<h4 className="text-2xl">Minte Temple</h4>
								<h4>{t("founder / CEO")}</h4>
							</div>
						</div>
						<div className="relative">
							<Image src={member1Image} alt="member 4" />
							<div className="text-center absolute bottom-5 w-[100%] text-white">
								<h4 className="text-2xl">Minte Temple</h4>
								<h4>{t("founder / CEO")}</h4>
							</div>
						</div>
						<div className="relative">
							<Image src={member1Image} alt="member 5" />
							<div className="text-center absolute bottom-5 w-[100%] text-white">
								<h4 className="text-2xl">Minte Temple</h4>
								<h4>{t("founder / CEO")}</h4>
							</div>
						</div>
						<div className="relative">
							<Image src={member1Image} alt="member 6" />
							<div className="text-center absolute bottom-5 w-[100%] text-white">
								<h4 className="text-2xl">Minte Temple</h4>
								<h4>{t("founder / CEO")}</h4>
							</div>
						</div>
						<div className="relative">
							<Image src={member1Image} alt="member 7" />
							<div className="text-center absolute bottom-5 w-[100%] text-white">
								<h4 className="text-2xl">Minte Temple</h4>
								<h4>{t("founder / CEO")}</h4>
							</div>
						</div>
						<div className="relative">
							<Image src={member1Image} alt="member 8" />
							<div className="text-center absolute bottom-5 w-[100%] text-white">
								<h4 className="text-2xl">Minte Temple</h4>
								<h4>{t("founder / CEO")}</h4>
							</div>
						</div>
						<div className="relative">
							<Image src={member1Image} alt="member 9" />
							<div className="text-center absolute bottom-5 w-[100%] text-white">
								<h4 className="text-2xl">Minte Temple</h4>
								<h4>{t("founder / CEO")}</h4>
							</div>
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
