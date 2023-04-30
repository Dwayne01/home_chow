import { ReactNode, FC } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import HamBurger from "../../../public/assets/images/comingsoon/Hamburger.svg";
import Button from "../common/buttons/Button";

interface SuccessProps {
	LandingImage?: ReactNode;
	handleNavigation: (id: number) => void;
}

const Success: FC<SuccessProps> = ({ handleNavigation, LandingImage }) => {
	const { t } = useTranslation(["comingsoon"]);

	return (
		<div className="flex flex-col px-[60px] flex-1 md:px-0 gap-5">
			<div className="flex flex-col">
				<Image
					src={LandingImage || HamBurger}
					className="m-auto"
					alt="Burger"
				/>
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
					className="bg-green-dark border border-green-dark text-white hover:bg-white hover:text-green-dark"
					onClick={() => {
						handleNavigation(1);
					}}
				>
					{t("Done") || ""}
				</Button>
			</div>
		</div>
	);
};

export default Success;
