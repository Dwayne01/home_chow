import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import LayoutComponent from "../../components/layout/ComingSoonLayout";
import LeftView from "../../components/layout/LeftView";
import RightView from "../../components/layout/RightView";

type ComingSoonPageProps = {
	LeftComponent?: React.FC;
	RightComponent?: React.FC;
};

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"coming_soon",
			])),
		},
	};
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = () => (
	<LayoutComponent LeftComponent={LeftView} RightComponent={RightView} />
);

export default ComingSoonPage;
