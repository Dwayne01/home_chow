import { useTranslation } from "next-i18next";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Content = () => {
	const { t } = useTranslation(["about"]);
	return (
		<div className="flex flex-col px-5 my-10">
			<h1>{t("About_Us")}</h1>
			<h2 className="mt-10">{t("Bringing_Home_Cooked")}</h2>
			<h2>
				{t("To_your")}{" "}
				<span className="text-primary-color animate-pulse">
					{t("doorstep")}
				</span>
			</h2>
			<div className="grid grid-cols-2 gap-5 md:gap-20">
				<LeftSection />
				<RightSection />
			</div>
		</div>
	);
};

export default Content;
