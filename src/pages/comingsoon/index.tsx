import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import ComingSoonLayout from "@/components/layout/ComingSoonLayout";
import ComingSoon from "@/components/comingsoon";

const ComingSoonPage = () => (
	<ComingSoonLayout>
		<ComingSoon />
	</ComingSoonLayout>
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
