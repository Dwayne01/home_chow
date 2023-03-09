import Footer from "@/components/footer/Footer";
import MainHeader from "@/components/header/MainHeader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["comman", "footer"])),
		},
	};
}

export default function Home() {
	return (
		<div>
			<MainHeader />
			<Footer />
		</div>
	);
}
