import AuthenicationLayout from "@/components/layout/AuthenicationLayout";
import Onboarding from "@/components/onboarding";

const LoginPage = () => (
	<AuthenicationLayout
		LeftComponent={<Onboarding />}
		RightComponent={<div />}
		width="md:min-w-1/2"
	/>
);

export default LoginPage;
