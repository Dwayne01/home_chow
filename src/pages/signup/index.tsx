import AuthenticationLayout from "@/components/layout/AuthenticationLayout";
import Onboarding from "@/components/onboarding";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SignUpForm from "@/components/userManagement/SignUpForm";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRegister } from "@/hooks/useAuth";
import { RegisterPayload } from "@/types/auth";
import { auth } from "firebase";

const SignUpPage = () => {
	// Google Authentication
	const handleGoogleSignUp = () => {
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

	const { mutateAsync } = useRegister();

	const handleSignup = async (params: RegisterPayload) => {
		const res = await mutateAsync(params);

		if (res.status === "Success") return true;

		return false;
	};

	return (
		<AuthenticationLayout
			LeftComponent={<Onboarding />}
			RightComponent={
				<SignUpForm
					handleSignup={handleSignup}
					handleGoogleSignUp={handleGoogleSignUp}
				/>
			}
			width="md:min-w-1/2"
			leftComponentClassName="hidden md:flex"
		/>
	);
};

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
