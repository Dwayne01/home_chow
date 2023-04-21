import { ReactNode, FC } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import HamBurger from "../../../public/assets/images/comingsoon/Hamburger.svg";
import Button from "../common/buttons";

interface SuccessProps {
	LandingImage?: ReactNode;
}

const Success: FC<SuccessProps> = () => {
	const { t } = useTranslation(["comingsoon"]);

	return (
		<div className="flex flex-col px-[60px] flex-1 md:px-0 gap-5">
			<div className="flex flex-col">
				<Image src={HamBurger} className="w-[50%] m-auto" alt="Burger" />
			</div>
			<div className="flex flex-col gap-5">
				<h1 className="text-center md:text-6xl md:max-w-[580px] m-auto">
					{t("Great_All_Set")}
				</h1>
				<p className="font-normal text-grey-light-100 text-center">
					{t("Now_Stay_Tuned")}
				</p>
			</div>
			<div className="flex justify-center">
				<Button
					label={t("Done") || ""}
					rootClass="bg-[#27AE60] hover:border-[#27AE60] hover:text-[#27AE60] w-[120] h-[40px]  text-white"
					onClick={() => {}}
				/>
			</div>
		</div>
	);
};

export default Success;
