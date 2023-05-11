import Footer from "@/components/footer/Footer";
import MainHeader from "@/components/header/MainHeader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import config from "config";
import { useEffect } from "react";

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["comman", "footer"])),
		},
	};
}

export default function Home() {
	const { pathname, replace } = useRouter();

	useEffect(() => {
		if (pathname !== "/demo" && config.env !== "development") {
			replace("/comingsoon");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<div>
			<MainHeader />
			<Footer footerColor="light" />
		</div>
	);
}
