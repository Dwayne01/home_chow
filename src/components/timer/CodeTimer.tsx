import { useEffect, useState } from "react";

const CodeTimer = ({ duration }: { duration: number }) => {
	const [remainingTime, setRemainingTime] = useState<number>(duration);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		if (remainingTime === 0) {
			// Handle timer completion here
			// eslint-disable-next-line no-console
			console.log("request new code");
		}
	}, [remainingTime]);

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;

		const formattedMinutes = String(minutes).padStart(2, "0");
		const formattedSeconds = String(seconds).padStart(2, "0");

		return `${formattedMinutes}:${formattedSeconds}`;
	};

	return <div>{formatTime(remainingTime)}</div>;
};

export default CodeTimer;
