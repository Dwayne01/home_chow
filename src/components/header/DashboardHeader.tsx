import React from "react";
import { BiMicrophone, BiBell } from "react-icons/bi";
import { SlHandbag } from "react-icons/sl";
import { useTranslation } from "next-i18next";
import Lable from "../common/Lable";
import SearchField from "../common/SearchField";
import ProfileDropdown from "../profileDropdown";

const DashboardHeader = () => {
	const { t } = useTranslation("dashboard");

	const [showBalance, setShowBalance] = React.useState(true);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [search, setSearch] = React.useState<string>("");

	const profileData = [
		{
			profilePicture: "/assets/images/vendor-profile-picture.png",
			firstName: "Stella",
			userType: "Vendor",
			email: "stella@example.com",
			walletBalance: 12457,
		},
	];

	return (
		<div className="flex justify-between items-center  flex-col gap-5 p-3 w-full lg:h-[90px] md:flex-row md:flex-wrap md:pl-9 md:pr-24  ">
			<div className="flex items-center justify-between gap-x-8  w-full lg:w-auto">
				<SearchField placeholder="Search" onChange={setSearch} />
				<button className="focus:bg-grey-light hover:bg-grey-light rounded-full cursor-pointer p-1">
					<BiMicrophone className="m-0 h-5 w-5" />
				</button>
			</div>
			<div className="flex items-center justify-between gap-2 w-full md:w-auto">
				<span className="font-medium whitespace-nowrap">
					{t("Wallet Balance")}:
				</span>
				<Lable
					balance={12457}
					visible={showBalance}
					onClick={() => setShowBalance(!showBalance)}
					className="text-sm font-semibold px-7 py-3 w-[140px] rounded-lg bg-label-color"
				/>
			</div>

			<div className="flex items-center justify-between gap-8  w-full md:w-auto">
				<div className="flex items-center justify-between gap-4">
					<button className="focus:bg-grey-light hover:bg-grey-light rounded-full flex items-center justify-center w-10 h-10 border border-border-color text-grey-lighter">
						<SlHandbag />
					</button>
					<button className="focus:bg-grey-light hover:bg-grey-light rounded-full flex items-center justify-center w-10 h-10 border border-border-color text-grey-lighter">
						<BiBell />
					</button>
				</div>
				<ProfileDropdown items={profileData} />{" "}
			</div>
		</div>
	);
};

export default DashboardHeader;
