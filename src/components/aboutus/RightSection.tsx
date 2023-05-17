import { useTranslation } from "next-i18next";
import Image from "next/image";
import RedBowlImage from "../../../public/assets/images/aboutus/Red_Bowl.svg";
import YellowBowlImage from "../../../public/assets/images/aboutus/Yellow_Bowl.svg";

const RightSection = () => {
	const { t } = useTranslation(["about"]);
	return (
		<div className="flex flex-col">
			<aside className="flex-1">
				<Image
					src={RedBowlImage}
					className="w-[100%] m-auto"
					alt="Red Bowl Image"
				/>
			</aside>
			<p className="text-light-color-text my-5 md:my-10 text-xs md:text-base">
				<span className="font-bold">HomeChow</span>{" "}
				{t("food_delivery_service_para")}
			</p>
			<aside className="flex-1">
				<Image
					src={YellowBowlImage}
					className="w-[100%] m-auto"
					alt="Red Bowl Image"
				/>
			</aside>
		</div>
	);
};

export default RightSection;
