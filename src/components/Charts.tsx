import React, { useEffect, useRef } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";
import { useTranslation } from "next-i18next";
import { ChartsProps } from "../types/dashboard";

const Charts: React.FC<ChartsProps> = ({
	type = "doughnut",
	chartData,
	size = 200,
}) => {
	const { t } = useTranslation("dashboard");

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const chartRef = useRef<Chart>();

	useEffect(() => {
		if (canvasRef.current) {
			const count = chartData.map((item: { count: any }) => item.count);
			const color = chartData.map((item: { color: any }) => item.color);
			const config: ChartConfiguration = {
				type,
				data: {
					datasets: [
						{
							data: count,
							backgroundColor: color,
						},
					],
				},
			};
			const chart = new Chart(canvasRef.current, config);
			chartRef.current = chart;
		}

		return () => {
			if (chartRef.current) {
				chartRef.current.destroy();
			}
		};
	}, [chartData, type]);

	return (
		<div>
			<div className={`w-[${size}px] m-auto`}>
				<canvas id="myChart" ref={canvasRef} width={size} height={size} />
			</div>
			<div className="flex justify-center items-center gap-x-9 flex-wrap mt-8">
				{chartData.map(
					(item: { color: string | undefined; label: any }, index) => (
						<div
							key={index}
							className="flex  justify-between items-center gap-2"
						>
							<span>
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="6" cy="6" r="6" fill={item.color} />
								</svg>
							</span>
							<span>{t(item.label)}</span>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Charts;
