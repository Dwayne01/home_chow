import { FC } from "react";
import { useTranslation } from "next-i18next";
import Button from "../common/buttons/Button";

interface OnboardProps {
	CountBtnClick: () => void;
}

const Onboard: FC<OnboardProps> = ({ CountBtnClick }) => {
	const { t } = useTranslation(["comingsoon"]);

	return (
		<div className="flex flex-col px-[60px] flex-1 md:px-0 gap-5">
			<h1 className="text-center md:text-6xl md:max-w-[580px] m-auto">
				{t("Good things come to those who")}
				<span className="text-primary-color animate-pulse">{t("Wait")}!</span>
			</h1>
			<p className="font-normal text-grey-light-100 text-center">
				{t("hugaryAlready")}
			</p>
			<div className="flex justify-center">
				<Button
					className="bg-green-dark border border-green-dark text-white hover:bg-white hover:text-green-dark"
					onClick={CountBtnClick}
				>
					{t("CountMeIn")}
				</Button>
			</div>
		</div>
	);
};

export default Onboard;
