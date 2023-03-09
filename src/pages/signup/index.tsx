import AuthenicationLayout from "@/components/layout/AuthenicationLayout";
import Onboarding from "@/components/onboarding";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SignUpForm from "@/components/userManagement/SignUpForm";

const SignUpPage = () => (
	<AuthenicationLayout
		LeftComponent={<Onboarding />}
		RightComponent={<SignUpForm />}
		width="md:min-w-1/2"
	/>
);

export default SignUpPage;

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
