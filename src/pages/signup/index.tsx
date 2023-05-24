import { useContext, useState } from "react";
import AuthenticationLayout from "@/components/layout/AuthenticationLayout";
import Onboarding from "@/components/onboarding";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SignUpForm from "@/components/userManagement/SignUpForm";
import VerificationForm from "@/components/userManagement/VerificationForm";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
	useAuthValidation,
	useCodeVerification,
	useRegister,
	useResendVerificationCode,
} from "@/hooks/useAuth";
import {
	CodeVerificationPayload,
	RegisterPayload,
	RegisterResponse,
	ResendCodePayload,
	Response,
} from "@/types/auth";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { auth } from "../../../firebase";

const SignUpPage = () => {
	const { mutateAsync: authMutateAsync } = useAuthValidation();
	const { mutateAsync: codeMutateAsync, isLoading: isLoadingCodeVerification } =
		useCodeVerification();
	const { mutateAsync: resendCodeMutateAsync } = useResendVerificationCode();

	const { login } = useContext(AuthContext);
	const [isVerification, setIsVerification] = useState<boolean>(false); // eslint-disable-line @typescript-eslint/no-unused-vars
	const [firebaseUid, setFirebaseUid] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	const { mutateAsync, isLoading } = useRegister();

	const router = useRouter();

	const handleGoogleSignUp = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then(async (result) => {
				GoogleAuthProvider.credentialFromResult(result);
				const idToken = await result.user.getIdToken();
				const token = await authMutateAsync({
					id_token: idToken,
				});
				if (token.status_code === 200) {
					await login(token);
					router.push("/dashboard");
				}
			})
			.catch((error) => {
				// eslint-disable-next-line no-console
				console.log(error.message);
			});
	};

	const handleSignup = async (
		params: RegisterPayload
	): Promise<RegisterResponse> => {
		setEmail(params.email);
		const response = await mutateAsync(params);

		setFirebaseUid(response.firebase_uid);

		return response;
	};

	const handleCodeVerification = async (
		params: CodeVerificationPayload
	): Promise<Response> => {
		const response = await codeMutateAsync(params);

		return response;
	};

	const handleResendCode = async (
		params: ResendCodePayload
	): Promise<Response> => {
		const response = await resendCodeMutateAsync(params);

		return response;
	};

	return (
		<AuthenticationLayout
			LeftComponent={<Onboarding />}
			RightComponent={
				!isVerification ? (
					<SignUpForm
						setIsVerification={setIsVerification}
						isLoading={isLoading}
						handleSignup={handleSignup}
						handleGoogleSignUp={handleGoogleSignUp}
					/>
				) : (
					<VerificationForm
						isLoading={isLoadingCodeVerification}
						handleCodeVerification={handleCodeVerification}
						email={email}
						firebaseUid={firebaseUid}
						handleResendCode={handleResendCode}
					/>
				)
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
				"codeVerification",
			])),
		},
	};
}
