import React from "react";
import StatisticsList from "@/components/common/Statistics/StatisticsList";
import { useTranslation } from "next-i18next";
import { BiPlus } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import Charts from "./Charts";
import People from "../../public/assets/svg/People";
import Bag from "../../public/assets/svg/Bag";
import Carbon from "../../public/assets/svg/Carbon";
import Activity from "../../public/assets/svg/Activity";
import Button from "./common/buttons";
import FoodItem from "./FoodItem";
import { getRandomHexCode } from "../utils";

const statistics = [
	{
		Icon: <People />,
		label: "Total Visitors",
		count: 4230,
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
		count: 2342,
		label: "Cancelled",
	},
];

const bestSellingItems = [
	{
		id: 1,
		image: "",
		title: "Pizza",
		price: "N 2000",
		rating: 4,
	},
	{
		id: 2,
		image: "",
		title: "Biryani",
		price: "N 2000",
		rating: 2,
	},
	{
		id: 3,
		image: "",
		title: "Burger",
		price: "N 2000",
		rating: 4,
	},
	{
		id: 4,
		image: "",
		title: "Pizza",
		price: "N 2000",
		rating: 3,
	},
];

const VendorDashboard = ({ vendorName = "Django" }) => {
	const { t } = useTranslation("dashboard");

	const daylight = new Date().getHours() < 12 ? "Morning" : "Afternoon";
	const daylightSticker = new Date().getHours() < 12 ? "🌤️" : "🌙";
	const greeting = `Good ${daylight}`;

	const chartData = statistics.map((stat) => ({
		label: stat.label,
		count: stat.count,
		color: getRandomHexCode(),
	}));

	return (
		<div className="max-w-5xl flex flex-col mx-[86px] xl:m-auto justify-center pt-[42px]">
			<div>
				<h4 className="text-center font-semibold text-xl">
					{t(greeting)}, {vendorName} {daylightSticker}
				</h4>
				<p className="text-gray-40 mt-3 text-center font-normal text-base">
					{t("Take a look at your store today")}
				</p>
			</div>
			<div className="mt-8">
				<h4 className="text-base text-gray-40 leading-6 uppercase">
					{t("Statistics")}
				</h4>
				<div className="mt-4">
					<StatisticsList {...{ statistics }} />
				</div>
			</div>
			<div className="flex justify-end items-center mt-11">
				<Button
					icon={BiPlus}
					textColor="primary-color hover:text-white"
					label="Add Product"
					onClick={() => {}}
					rootClass="rounded-lg bg-primary-color-50 hover:text-white text-primary-color whitespace-nowrap p-5 w-auto text-center"
					iconPosition="right"
				/>
			</div>
			<div>
				<div className="flex gap-[26px]">
					<div className="max-w-[614px] bg-white pl-7 pb-4 pr-5">
						<div className="flex justify-between items-center mt-11">
							<h4 className="text-base text-gray-40 leading-6  ">
								{t("Best Selling")}
							</h4>
							<button className="text-font-light focus:bg-grey-light hover:bg-grey-light rounded-full cursor-pointer p-1">
								<BsThreeDots className="m-0 h-5 w-5" />
							</button>
						</div>
						<div className="grid grid-cols-2 gap-11 mt-6">
							{bestSellingItems.map((item) => (
								<FoodItem
									key={item.id}
									{...{ item, className: "w-[250px] bg-white p-1 rounded-lg" }}
								/>
							))}
						</div>
					</div>
					<div className="pt-11 flex-1 px-7 bg-white p-9">
						<h4 className="text-base text-gray-40 leading-6  ">
							{t("Best Selling")}
						</h4>
						<div className="flex justify-center mt-3">
							<Charts {...{ chartData }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default VendorDashboard;
