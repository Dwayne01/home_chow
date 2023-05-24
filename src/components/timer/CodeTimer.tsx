import { useEffect, useState } from "react";

const CodeTimer = ({
	duration,
	handleShowTimer,
}: {
	duration: number;
	handleShowTimer: () => void;
}) => {
	const [remainingTime, setRemainingTime] = useState<number>(duration);
	const [intervalId, setIntervalId] = useState<any>(null);

	useEffect(() => {
		const id = setInterval(() => {
			setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);

			if (remainingTime === 0) {
				handleShowTimer();
				clearInterval(intervalId);
			}
		}, 1000);
		setIntervalId(id);
		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		if (remainingTime === 0) {
			handleShowTimer();
			clearInterval(intervalId);
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
