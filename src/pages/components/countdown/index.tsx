import React from "react";
import { useState, useEffect } from "react";

const Countdown = () => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const countDownDate = new Date("April 1, 2023 00:00:00").getTime();
			const now = new Date().getTime();
			const difference = countDownDate - now;

			setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
			setHours(
				Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			);
			setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
			setSeconds(Math.floor((difference % (1000 * 60)) / 1000));

		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="container mx-auto text-center p-10 m-10 border-2">
			<div className="container mx-auto text-4xl font-bold text-yellow-500">
				<span className="time">{days} : </span>
				<span className="time">{hours} : </span>
				<span className="time">{minutes} : </span>
				<span className="time">{seconds}</span>
			</div>
			<div className="container mt-5 text-2xl text-stone-500">
				<span>{days} days left</span>
			</div>
		</div>
	);
};

export default Countdown;
