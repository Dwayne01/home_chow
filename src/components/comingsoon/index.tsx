import { ReactNode, FC, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import LandingImage from "../../../public/assets/images/comingsoon/landing-mobile.svg";
import Success from "./Success";
import Onboard from "./Onboard";

interface LandingProps {
	LandingImage?: ReactNode;
}

const ComingSoon: FC<LandingProps> = () => {
	const { t } = useTranslation(["comingsoon"]);

	const [registerSuccess, setRegisterSuccess] = useState(false);
	const CountBtnClick = () => {
		setRegisterSuccess(true);
		// SV: should have used translation here
		// eslint-disable-next-line no-alert
		alert(t("Count me in"));
	};
	return (
		<div>
			{registerSuccess ? (
				<Success />
			) : (
				<div className="mt-20 flex flex-col justify-center gap-9 md:flex-row-reverse md:items-center md:mx-10 lg:mx-40">
					<aside className="flex-1">
						<Image src={LandingImage} className="m-auto" alt="Coming Soon" />
					</aside>

					<Onboard CountBtnClick={CountBtnClick} />
				</div>
			)}
		</div>
	);
};

export default ComingSoon;
