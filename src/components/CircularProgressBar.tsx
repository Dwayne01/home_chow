import classNames from "classnames";
import React, { useRef, useEffect } from "react";
import { CircularProgressBarProps } from "@/types/dashboard";

const CircularProgressBar = ({
	children,
	progressStart = 0,
	progressEnd = 80,
	speed = 15,
	barColor = "#3B82F6",
	className,
}: CircularProgressBarProps) => {
	const progressBarRef = useRef<HTMLDivElement>(null);
	const progressVar = useRef(progressStart);

	useEffect(() => {
		if (!progressBarRef?.current) return;
		const progressBar = progressBarRef?.current;

		const progress = setInterval(() => {
			progressVar.current += 1;
			const progressDegrees = progressVar.current * 3.6;
			progressBar.style.backgroundImage = `conic-gradient(${barColor} ${progressDegrees}deg, #ededed 0deg)`;

			if (progressVar.current === progressEnd) {
				clearInterval(progress);
			}
		}, speed);

		// eslint-disable-next-line consistent-return
		return () => clearInterval(progress);
	}, [barColor, progressEnd, progressStart, speed]);

	return (
		<div
			ref={progressBarRef}
			className={classNames("rounded-full p-[2px] cursor-pointer", className)}
		>
			{children}
		</div>
	);
};

export default CircularProgressBar;
