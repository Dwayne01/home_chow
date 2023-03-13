import React from "react";
import StatisticsList from "@/components/common/Statistics/StatisticsList";
import People from "../../public/assets/svg/People";
import Bag from "../../public/assets/svg/Bag";
import Carbon from "../../public/assets/svg/Carbon";
import Activity from "../../public/assets/svg/Activity";

const statistics = [
	{
		Icon: <People />,
		count: 4230,
		label: "Total Visitors",
	},
	{
		Icon: <Activity />,
		count: 1000,
		label: "Total Orders",
	},
	{
		Icon: <Bag />,
		count: 900,
		label: "Sale",
	},
	{
		Icon: <Carbon />,
		count: 23423423,
		label: "Cancelled",
	},
];

const VendorDashboard = ({ vendorName = "Django" }) => {
	const daylight = new Date().getHours() < 12 ? "Morning" : "Afternoon";
	const daylightSticker = new Date().getHours() < 12 ? "🌤️" : "🌙";
	const greeting = `Good ${daylight}`;
	return (
		<div className="max-w-5xl flex flex-col mx-[86px] xl:m-auto justify-center pt-[42px]">
			<div>
				<h4 className="text-center font-semibold text-xl">
					{greeting}, {vendorName} {daylightSticker}
				</h4>
				<p className="text-gray-40 mt-3 text-center font-normal text-base">
					Take a look at your store today
				</p>
			</div>
			<div className="mt-8">
				<h4 className="text-base text-gray-40 leading-6 uppercase">
					Statistics
				</h4>
				<div className="mt-4">
					<StatisticsList {...{ statistics }} />
				</div>
			</div>
		</div>
	);
};
export default VendorDashboard;
