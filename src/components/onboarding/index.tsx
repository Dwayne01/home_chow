import OnboardingChef from "../../../public/assets/svg/Onboarding_chef";
import Slider from "../slider";

const Onboarding = () => {
	const images = [<OnboardingChef />, <OnboardingChef />, <OnboardingChef />];

	const description = (
		<div className="w-2/3 flex flex-col justify-center items-center">
			<p className="text-xl font-bold text-center text-primary-color mt-10">
				Easily order you favorite meals from the comfort of your home
			</p>
			<p className="text-gray-500 text-lg text-center my-5 ">
				Sign in to explore changes we’ve made.
			</p>
		</div>
	);
	return (
		<div className="bg-onboarding-color flex justify-center items-center">
			<Slider description={description} slides={images} />
		</div>
	);
};

export default Onboarding;
