import LeftView from "@/components/layout/LeftView";
import RightView from "@/components/layout/RightView";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import LayoutComponent from "../../components/layout/ComingSoonLayout";

interface ComingSoonPageProps {
	LeftComponent?: React.FC;
	RightComponent?: React.FC;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = () => (
	<LayoutComponent LeftComponent={LeftView} RightComponent={RightView} />
);

export default ComingSoonPage;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"comingsoon",
			])),
		},
	};
}
