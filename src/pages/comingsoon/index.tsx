import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import ComingSoonLayout from "@/components/layout/ComingSoonLayout";
import Header from "@/components/header/ComingSoonHeader";
import Footer from "@/components/footer/Footer";
import Landing from "@/components/comingsoon/Landing";

const ComingSoonPage = () => (
	<div>
		<ComingSoonLayout
			Header={<Header />}
			Footer={<Footer footerColor="light" />}
			Landing={<Landing />}
		/>
	</div>
);

export default ComingSoonPage;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"comingsoon",
				"constants",
			])),
		},
	};
}
