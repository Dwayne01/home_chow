import AuthenticationLayout from "@/components/layout/AuthenticationLayout";
import Onboarding from "@/components/onboarding";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoginForm from "@/components/userManagement/LoginForm";
import { useLogin } from "@/hooks/useAuth";

const LoginPage = () => {
	const { mutateAsync, isLoading } = useLogin();

	const handleLogin = async (params: any) => {
		const res = await mutateAsync(params);

		if (res.status === "Success") return true;

		return false;
	};

	return (
		<AuthenticationLayout
			LeftComponent={<Onboarding />}
			RightComponent={
				<LoginForm isLoading={isLoading} handleLogin={handleLogin} />
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
