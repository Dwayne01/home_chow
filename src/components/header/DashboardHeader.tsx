import React from "react";
import { BiMicrophone, BiBell } from "react-icons/bi";
import { SlHandbag } from "react-icons/sl";
import { useTranslation } from "next-i18next";
import Lable from "../common/Lable";
import SearchField from "../common/SearchField";
import AccountButton from "../common/AccountButton";

const DashboardHeader = () => {
	const { t } = useTranslation("dashboard");

	const [showBalance, setShowBalance] = React.useState(true);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [search, setSearch] = React.useState<string>("");

	return (
		<div className="flex justify-between items-center h-[90px] pl-9 pr-24 ">
			<div className="flex items-center justify-between gap-x-8">
				<SearchField placeholder="Search" onChange={setSearch} />
				<button className="focus:bg-grey-light hover:bg-grey-light rounded-full cursor-pointer p-1">
					<BiMicrophone className="m-0 h-5 w-5" />
				</button>
			</div>
			<div className="flex items-center justify-between gap-2">
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
			<div>
				<div className="flex items-center justify-between gap-8">
					<div className="flex items-center justify-between gap-4">
						<button className="focus:bg-grey-light hover:bg-grey-light rounded-full flex items-center justify-center w-10 h-10 border border-border-color text-grey-lighter">
							<SlHandbag />
						</button>
						<button className="focus:bg-grey-light hover:bg-grey-light rounded-full flex items-center justify-center w-10 h-10 border border-border-color text-grey-lighter">
							<BiBell />
						</button>
					</div>
					<div className="">
						<AccountButton profileCompletion={80} notificationCount={5} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardHeader;