import LeftView from "@/components/comingsoon/LeftView";
import RightView from "@/components/comingsoon/RightView";
import { ResponseStatus } from "@/constants";
import { useSubscribe } from "@/hooks/useSubscribe";
import { SubscribeParams } from "@/types/comingsoon";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import AuthenticationLayout from "../../components/layout/AuthenticationLayout";

interface ComingSoonPageProps {
	LeftComponent?: React.FC;
	RightComponent?: React.FC;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = () => {
	const { mutateAsync, isLoading } = useSubscribe();

	const handleSubmit = async (params: SubscribeParams) => {
		const res = await mutateAsync(params);

		if (res.status === ResponseStatus.SUCCESS) {
			return res.message;
		}

		return null;
	};

	return (
		<AuthenticationLayout
			LeftComponent={
				<LeftView isLoading={isLoading} handleSubmit={handleSubmit} />
			}
			RightComponent={<RightView />}
			rightComponentClassName="hidden md:flex"
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
				"constants",
			])),
		},
	};
}
