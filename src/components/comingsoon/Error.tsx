import { ReactNode, FC } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import HamBurger from "../../../public/assets/images/comingsoon/HamburgerErorr.svg";
import Button from "../common/buttons/Button";

interface ErrorProps {
	LandingImage?: ReactNode;
	handleNavigation: (id: number) => void;
}

const Error: FC<ErrorProps> = ({ handleNavigation, LandingImage }) => {
	const { t } = useTranslation(["comingsoon"]);

	return (
		<div className="flex flex-col px-[60px] md:px-0 gap-5">
			<div className="flex flex-col">
				<Image
					src={LandingImage || HamBurger}
					className="m-auto"
					alt="Burger"
				/>
			</div>
			<div className="flex flex-col gap-5">
				<h1 className="text-center md:text-6xl md:max-w-[580px] m-auto text-error">
					{t("uh_oh")}
				</h1>
				<p className="font-normal text-grey-light-100 text-center">
					{t("Something went wrong Kindly try again")}
				</p>
			</div>
			<div className="flex justify-center">
				<Button
					className="bg-error border border-error text-white hover:bg-white hover:text-error"
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

export default Error;
