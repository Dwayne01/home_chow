import AuthenticationLayout from "@/components/layout/AuthenticationLayout";
import Onboarding from "@/components/onboarding";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SignUpForm from "@/components/userManagement/SignUpForm";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthValidation, useRegister } from "@/hooks/useAuth";
import { RegisterPayload } from "@/types/auth";
import { setSessionCookie } from "@/utils/cookies";
import { useRouter } from "next/router";
import { auth } from "../../../firebase";

const SignUpPage = () => {
	const { mutateAsync: authMutateAsync } = useAuthValidation();

	const router = useRouter();

	const handleGoogleSignUp = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then(async (result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				// eslint-disable-next-line no-console
				const token = await authMutateAsync({ idToken: credential?.idToken });
				setSessionCookie(token, 30);
				router.push("/dashboard");
			})
			.catch((error) => {
				// eslint-disable-next-line no-console
				console.log(error.message);
			});
	};

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { mutateAsync } = useRegister();

	const handleSignup = async (params: RegisterPayload) => {
		const res = await mutateAsync(params);

		if (res.status === "Success") return true;

		return false;
	};

	return (
		<div>
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
		</div>
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
