import { ReactNode, FC } from "react";
import Image from "next/image";
import LandingImage from "../../../public/assets/images/comingsoon/landing-mobile.svg";

import LandingForm from "./LandingForm";

interface LandingProps {
	LandingImage?: ReactNode;
}

const Landing: FC<LandingProps> = () => (
	<div className="mt-20 flex flex-col justify-center gap-9 md:flex-row-reverse md:items-center md:mx-10 lg:mx-40">
		<aside className="flex-1">
			<Image src={LandingImage} className="w-[80%] m-auto" alt="Coming Soon" />
		</aside>
		{/* {registerSuccess ? (
				<Success />
			) : (
				<Onboard CountBtnClick={CountBtnClick} />
			)} */}
		<div className="flex-1">
			<LandingForm />
		</div>
	</div>
);

export default Landing;
