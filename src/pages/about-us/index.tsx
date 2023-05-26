import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ComingSoonHeader from "@/components/header/ComingSoonHeader";
import Footer from "@/components/footer/Footer";
import Member from "@/components/about-us/Member";
import foodPotImage from "../../../public/assets/images/food-pot.svg";
import foodBowlImage from "../../../public/assets/images/food-bowl.svg";
import glassJugImage from "../../../public/assets/images/glass-jug.svg";
import member1Image from "../../../public/assets/images/member1.png";

const AboutUs = () => {
	const { t } = useTranslation(["about", "common", "footer"]);

	const memberData = [
		{
			imageSrc: member1Image,
			name: "Minte Temple",
			position: t("founder / CEO"),
		},
		{
			imageSrc: member1Image,
			name: "Minte Temple",
			position: t("founder / CEO"),
		},
		{
			imageSrc: member1Image,
			name: "Minte Temple",
			position: t("founder / CEO"),
		},
		{
			imageSrc: member1Image,
			name: "Minte Temple",
			position: t("founder / CEO"),
		},
		{
			imageSrc: member1Image,
			name: "Minte Temple",
			position: t("founder / CEO"),
		},
		{
			imageSrc: member1Image,
			name: "Minte Temple",
			position: t("founder / CEO"),
		},
	];

	return (
		<div className="min-w-min">
			<div className="mt-2">
				<ComingSoonHeader />
				<div>
					<div className="sm:mx-auto mt-14 md:w-3/4 xl:w-1/2 ">
						<h1 className="mb-2 ml-4 md:ml-0">{t("abouts")}</h1>
						<h2 className="mb-2 ml-4 md:ml-0">
							{t("bringing homecooked meals")}
							<strong className="text-primary-color"> {t("doorstep")}</strong>
						</h2>
					</div>
					<div className="flex flex-1 md:w-3/4 xl:w-1/2  gap-8 mx-auto justify-center">
						<div className="basis-1/2 ml-4 md:ml-0">
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
				<div className="m-auto mt-20 md:w-3/4 xl:w-1/2  mb-20">
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
						{memberData.map((member, index) => (
							<Member
								key={index}
								imageSrc={member.imageSrc}
								name={member.name}
								position={member.position}
							/>
						))}
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
				"about",
				"common",
				"footer",
			])),
		},
	};
}
