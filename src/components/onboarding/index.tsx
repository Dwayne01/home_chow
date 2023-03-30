import { useTranslation } from "next-i18next";
import OnboardingChef from "../../../public/assets/svg/Onboarding_chef";
import LanguageSwitcher from "../langugeswitcher";
import Slider from "../slider";

const Onboarding = () => {
	const images = [<OnboardingChef />, <OnboardingChef />, <OnboardingChef />];

	const { t } = useTranslation("authentication");

	const description = (
		<div className="w-2/3 flex flex-col justify-center items-center">
			<p className="text-xl font-bold text-center text-primary-color mt-10">
				{t("easy_ordering")}
			</p>
			<p className="text-gray-500 text-lg text-center my-5 ">
				{t("sign_in_to_explore")}
				{t("good morning")}
			</p>
		</div>
	);
	return (
		<div className="flex-1 flex  flex-col bg-onboarding-color w-full">
			<div className="w-32 p-5">
				<LanguageSwitcher />
			</div>
			<div className="flex flex-col justify-center items-center  h-full">
				<Slider description={description} slides={images} />
			</div>
		</div>
	);
};

export default Onboarding;
