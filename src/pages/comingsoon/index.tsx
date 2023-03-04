import LeftView from "@/components/layout/LeftView";
import RightView from "@/components/layout/RightView";
import { useSubscribe } from "@/hooks/useSubscribe";
import { SubscribeParams } from "@/types/comingsoon";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import LayoutComponent from "../../components/layout/ComingSoonLayout";

interface ComingSoonPageProps {
	LeftComponent?: React.FC;
	RightComponent?: React.FC;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = () => {
	const { mutate, isLoading } = useSubscribe();

	const handleSubmit = async (params: SubscribeParams) => {
		await mutate(params);
	};

	return (
		<LayoutComponent
			LeftComponent={
				<LeftView isLoading={isLoading} handleSubmit={handleSubmit} />
			}
			RightComponent={<RightView />}
		/>
	);
};

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
