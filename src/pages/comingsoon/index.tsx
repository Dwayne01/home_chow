/* eslint-disable arrow-body-style */
// import { ResponseStatus } from "@/constants";
// import { useSubscribe } from "@/hooks/useSubscribe";
// import { SubscribeParams } from "@/types/comingsoon";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import ComingSoonLayout from "@/components/layout/ComingSoonLayout";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/ComingSoonHeader";
import Landing from "@/components/comingsoon/Landing";

interface ComingSoonPageProps {
	LeftComponent?: React.FC;
	RightComponent?: React.FC;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = () => {
	// const { mutateAsync, isLoading } = useSubscribe();

	// const handleSubmit = async (params: SubscribeParams) => {
	// 	const res = await mutateAsync(params);

	// 	if (res.status === ResponseStatus.SUCCESS) {
	// 		return res.message;
	// 	}

	// 	return null;
	// };

	return (
		<div>
			<ComingSoonLayout
				Header={<Header />}
				Footer={<Footer footerColor="light" />}
				Landing={<Landing />}
			/>
		</div>
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
				"footer",
			])),
		},
	};
}
