import React from "react";
import { StatisticsListProps } from "@/types/dashboard";
import StatisticsCard from "./StatisticsCard";

const StatisticsList = ({ statistics }: StatisticsListProps) => (
	<div className="flex justify-between items-center flex-wrap gap-[38px]">
		{statistics.map((statistic, ind) => (
			<StatisticsCard key={ind} {...statistic} />
		))}
	</div>
);

export default StatisticsList;
