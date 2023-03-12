import ComingSoonHeader from "@/components/header/ComingSoonHeader";
import Footer from "@/components/footer/Footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutUs = () => {
	const { t } = useTranslation(["common", "footer"]);

	return (
		<div className="min-w-min">
			<div className="mx-4">
				<ComingSoonHeader />
				<div className="md:flex md:flex-row md:flex-1 justify-between gap-16 m-auto mt-14 w-[93%]">
					<div className="basis-1/2">
						<h1 className="mb-6">{t("aboutUs")}</h1>
						<h2 className="mb-2">
							Bringing homecooked meals to your{" "}
							<strong className="text-primary-color">doorstep</strong>
						</h2>
						<p className="mb-4">
							With the increasing demand for convenience and the busy lifestyle
							of modern consumers, traditional restaurant delivery options can
							often be limited in terms of menu selection.
						</p>
						<p className="mb-4">
							To cater to the diverse residents of Vancouver, we saw an
							opportunity in the market to provide a marketplace for vendors to
							sell homemade meals that are affordable and not readily available
							in traditional restaurants.
						</p>
						<img
							src="/assets/images/food-pot.png"
							alt="homemade pot stew"
							className="rounded-br-large mt-10 mb-10"
						/>
						<p className="mt-4 mb-4">
							Our platform is designed to be easy to use, allowing customers to
							order with just a few clicks through our website or mobile app.
						</p>
					</div>
					<div className="basis-1/2">
						<img
							src="/assets/images/food-bowl.png"
							alt="fresh salad bowl"
							className="rounded-tl-xlarge mb-10"
						/>
						<p>
							<strong>HomeChow</strong> is a food delivery service that offers
							freshly made meals to customers. Our platform works with local
							home chefs to provide a diverse selection of dishes made with
							quality ingredients, ranging from classic comfort food to
							international cuisine. Our focus is on personalized customer
							service and a convenient ordering experience.
						</p>
						<img
							src="/assets/images/glass-jug.png"
							alt="refreshing fresh juice"
							className="rounded-tr-large mt-10"
						/>
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
			...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
		},
	};
}
