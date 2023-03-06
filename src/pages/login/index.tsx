import AuthenicationLayout from "@/components/layout/AuthenicationLayout";
import Onboarding from "@/components/onboarding";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoginForm from "@/components/userManagement/LoginForm";

const LoginPage = () => (
	<AuthenicationLayout
		LeftComponent={<Onboarding />}
		RightComponent={<LoginForm />}
		width="md:min-w-1/2"
	/>
);

export default LoginPage;

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", [
				"common",
				"authentication",
			])),
		},
	};
}
