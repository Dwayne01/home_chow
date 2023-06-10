import Footer from "@/components/footer/Footer";
import MainHeader from "@/components/header/MainHeader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ApplyToBeVendor from "@/components/apply-to-be-vendor";

export default function ApplyToBeVendorPage() {
	return (
		<>
			<MainHeader />
			<ApplyToBeVendor />
			<Footer footerColor="light" />
		</>
	);
}

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"home",
				"footer",
			])),
		},
	};
}
