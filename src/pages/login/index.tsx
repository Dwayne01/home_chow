import AuthenticationLayout from "@/components/layout/AuthenticationLayout";
import Onboarding from "@/components/onboarding";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoginForm from "@/components/userManagement/LoginForm";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";

const LoginPage = () => {
	// Google Authentication
	const handleGoogleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				// eslint-disable-next-line no-console
				console.log(credential);
			})
			.catch((error) => {
				// eslint-disable-next-line no-console
				console.log(error.message);
			});
	};

	return (
		<AuthenticationLayout
			LeftComponent={<Onboarding />}
			RightComponent={<LoginForm handleGoogleSignIn={handleGoogleSignIn} />}
			width="md:min-w-1/2"
		/>
	);
};

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
