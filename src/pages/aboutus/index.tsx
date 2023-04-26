import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Content from "@/components/aboutus/content";
import Footer from "@/components/footer/Footer";
import ComingSoonHeader from "@/components/header/ComingSoonHeader";

const AboutUs = () => (
	<>
		{/* Over here there was a class name value h-[90vh] which was making a fixed height for the page which in turn if content was big leaking the layout. 
     I think we made it like this to make sure the footer be at the very bottom (guessing who so ever did) but there is another better way to do it. For now
     I am removing it. */}
		<div className=" md:mx-10 lg:mx-40">
			<header>
				<ComingSoonHeader />
			</header>
			<main className="md:mx-10 lg:mx-20 xl:mx-60">
				<Content />
			</main>
		</div>
		<footer>
			<Footer footerColor="light" />
		</footer>
	</>
);

export default AboutUs;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["common", "about"])),
		},
	};
}
