import { ReactNode, FC, useState } from "react";
import Image from "next/image";
import LandingImage from "../../../public/assets/images/comingsoon/landing-mobile.svg";
import Onboard from "./Onboard";
import Success from "./Success";
import LandingForm from "./LandingForm";

interface LandingProps {
	LandingImage?: ReactNode;
}

type Tabs = {
	id: number;
	title: string;
	Component: FC;
	current: boolean;
}[];

type LandingNavigationItem = {
	id: number;
	title: string;
	Component: FC<any>;
	current: boolean;
};

const Landing: FC<LandingProps> = () => {
	const landingNaigation: LandingNavigationItem[] = [
		{
			id: 1,
			title: "onBoard",
			Component: Onboard,
			current: true,
		},
		{
			id: 2,
			title: "form",
			Component: LandingForm,
			current: false,
		},
		{
			id: 3,
			title: "success",
			Component: Success,
			current: false,
		},
	];

	const [tabs, setTabs] = useState<Tabs>(landingNaigation);

	const handleNavigation = (id: number) => {
		const newTabs = tabs.map((tab: any) => {
			if (tab.id === id) {
				return {
					...tab,
					current: true,
				};
			}
			return {
				...tab,
				current: false,
			};
		});
		setTabs(newTabs);
	};

	return (
		<div className="mt-20 flex flex-col justify-center gap-9 md:flex-row-reverse md:items-center md:mx-10 lg:mx-40 min-h-[500px]">
			<aside className="flex-1">
				<Image
					src={LandingImage}
					className="w-[80%] m-auto"
					alt="Coming Soon"
				/>
			</aside>
			<div className="flex-1">
				{tabs.map(
					(tab: any) =>
						tab.current && (
							<div key={tab.id}>
								<tab.Component handleNavigation={handleNavigation} />
							</div>
						)
				)}
			</div>
		</div>
	);
};

export default Landing;
