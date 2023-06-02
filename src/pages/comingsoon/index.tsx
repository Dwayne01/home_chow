import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import ComingSoonLayout from "@/components/layout/ComingSoonLayout";
import ComingSoon from "@/components/comingsoon";
import { useSubscribe } from "@/hooks/useSubscribe";
import { SubscribeParams } from "@/types/comingsoon";
import { ResponseStatus } from "@/constants";

const ComingSoonPage = () => {
	const { mutateAsync, isLoading } = useSubscribe();

	const handleSubmit = async (params: SubscribeParams) => {
		const res = await mutateAsync(params);

		if (res && res.status === ResponseStatus.SUCCESS) {
			return res.message;
		}

		return null;
	};

	return (
		<ComingSoonLayout>
			<ComingSoon handleSubmit={handleSubmit} isLoading={isLoading} />
		</ComingSoonLayout>
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
