import { FC, useState } from "react";
import Image from "next/image";
import LandingImage from "../../../public/assets/images/comingsoon/landing-mobile.svg";
import Onboard from "./Onboard";
import Success from "./Success";
import LandingForm from "./LandingForm";
import Error from "./Error";

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

const ComingSoon = () => {
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
		{
			id: 4,
			title: "error",
			Component: Error,
			current: false,
		},
	];

	const [tabs, setTabs] = useState<Tabs>(landingNaigation);
	const [statusInfo, setShowStatusInfo] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const handleNavigation = (id: number) => {
		if (id > 3) {
			setShowStatusInfo(true);
		}

		if (id < 3) {
			setShowStatusInfo(false);
		}
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
			{!statusInfo && (
				<aside className="flex-1">
					<Image
						src={LandingImage}
						className="w-[80%] m-auto"
						alt="Coming Soon"
					/>
				</aside>
			)}
			<div>
				{tabs.map(
					(tab: any) =>
						tab.current && (
							<div key={tab.id}>
								<tab.Component
									handleNavigation={handleNavigation}
									setIsSuccess={setIsSuccess}
									isSuccess={isSuccess}
								/>
							</div>
						)
				)}
			</div>
		</div>
	);
};

export default ComingSoon;
