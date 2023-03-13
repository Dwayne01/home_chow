import React from "react";
import { useTranslation } from "next-i18next";
import { formateLargeNumber } from "@/utils";
import { StatisticsCardProps } from "@/types/dashboard";

const StatisticsCard = ({ Icon, count, label }: StatisticsCardProps) => {
	const { t } = useTranslation("dashboard");

	return (
		<div className="flex p-4 gap-4 border border-border-neutral rounded-lg w-[200px] bg-white hover:shadow cursor-default overflow-hidden">
			<div>{Icon}</div>
			<div className="flex flex-col">
				<span className="font-semibold text-2xl">
					{formateLargeNumber(count)}
				</span>
				<span className="whitespace-nowrap ">{t(label)}</span>
			</div>
		</div>
	);
};

export default StatisticsCard;
