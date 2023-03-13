import React from "react";
import { formateLargeNumber } from "@/utils";
import { StatisticsCardProps } from "@/types/dashboard";

const StatisticsCard = ({ Icon, count, label }: StatisticsCardProps) => (
	<div className="flex p-4 gap-4 border border-border-neutral rounded-lg w-[200px] hover:bg-white hover:shadow cursor-default">
		<div>{Icon}</div>
		<div className="flex flex-col">
			<span className="font-semibold text-2xl">
				{formateLargeNumber(count)}
			</span>
			<span>{label}</span>
		</div>
	</div>
);

export default StatisticsCard;
