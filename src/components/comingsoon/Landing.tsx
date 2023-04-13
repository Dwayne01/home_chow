import { ReactNode, FC } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import LandingImage from "../../../public/assets/images/comingsoon/landing-mobile.svg";
import Button from "../common/buttons";

interface LandingProps {
	LandingImage?: ReactNode;
}

const Landing: FC<LandingProps> = () => {
	const { t } = useTranslation(["comingsoon"]);

	return (
		<div className="mt-20 flex flex-col justify-center gap-9 md:flex-row-reverse md:items-center md:mx-10 lg:mx-40">
			<aside className="flex-1">
				<Image
					src={LandingImage}
					className="w-[80%] m-auto"
					alt="Coming Soon"
				/>
			</aside>
			<div className="flex flex-col px-[60px] flex-1 md:px-0 gap-5">
				<h1 className="text-center">
					{t("Good things come to those who")}{" "}
					<span className="text-primary-color animate-pulse">{t("Wait")}!</span>
				</h1>
				<p className="font-normal text-grey-light text-center">
					{t("hugaryAlready")}
				</p>
				<div className="flex justify-center">
					<Button
						label="Count me in"
						rootClass="bg-[#27AE60] hover:border-[#27AE60] hover:text-[#27AE60] w-[120] h-[40px]  text-white"
					/>
				</div>
			</div>
		</div>
	);
};

export default Landing;
