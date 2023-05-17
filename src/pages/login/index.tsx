import AuthenticationLayout from "@/components/layout/AuthenticationLayout";
import Onboarding from "@/components/onboarding";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoginForm from "@/components/userManagement/LoginForm";
import { useRouter } from "next/router";
import { useAuthValidation, useLogin } from "@/hooks/useAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { auth } from "../../../firebase";

const LoginPage = () => {
	const { mutateAsync, isLoading } = useLogin();
	const { mutateAsync: authMutateAsync } = useAuthValidation();
	const { login } = useContext(AuthContext);

	const router = useRouter();

	const handleLogin = async (params: any) => {
		try {
			const response = await mutateAsync(params);
			return response;
		} catch (error) {
			return error;
		}
	};

	const handleGoogleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then(async (result) => {
				GoogleAuthProvider.credentialFromResult(result);
				// eslint-disable-next-line no-console
				console.log({ result });
				const idToken = await result.user.getIdToken();
				const token = await authMutateAsync({
					id_token: idToken,
				});
				if (token.status_code === 200) {
					login(token);
					router.push("/dashboard");
					return token;
				}
				return token;
			})
			.catch((error) => {
				// eslint-disable-next-line no-console
				console.log(error.message);
			});
	};

	return (
		<AuthenticationLayout
			LeftComponent={<Onboarding />}
			RightComponent={
				<LoginForm
					handleGoogleSignIn={handleGoogleSignIn}
					isLoading={isLoading}
					handleLogin={handleLogin}
				/>
			}
			width="md:min-w-1/2"
			leftComponentClassName="hidden md:flex"
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
