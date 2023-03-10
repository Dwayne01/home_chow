import AuthenicationLayout from "@/components/layout/AuthenicationLayout";
import Onboarding from "@/components/onboarding";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import VerificationForm from "@/components/userManagement/VerificationForm";

const LoginPage = () => (
	<AuthenicationLayout
		LeftComponent={<Onboarding />}
		RightComponent={<VerificationForm />}
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
