import { useTranslation } from "next-i18next";
import Image from "next/image";
import GreenBowl from "../../../public/assets/images/aboutus/Green_Bowl.svg";

const LeftSection = () => {
	const { t } = useTranslation(["about"]);
	return (
		<div className="left-section">
			<p className="text-light-color-text my-2 md:my-5 text-xs md:text-base">
				{t("increasing_demand_para")}
			</p>
			<p className="text-light-color-text my-5 md:my-10 text-xs md:text-base">
				{t("diverse_residents_para")}
			</p>

			<Image
				src={GreenBowl}
				className="w-[100%] m-auto"
				alt="Green Bowl Image"
			/>

			<p className="text-light-color-text my-5 md:my-10 text-xs md:text-base">
				{t("platform_designed_para")}
			</p>
		</div>
	);
};

export default LeftSection;
