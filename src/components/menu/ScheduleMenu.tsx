import React, { useState } from "react";
import Switch from "react-switch";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "../common/buttons";

const ScheduleMenu: React.FC = () => {
	const daysOfWeek = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
		"Holiday",
	];

	const [selectedDays, setSelectedDays] = useState<string[]>([]);
	const [selectedTime, setSelectedTime] = useState(null);

	const handleDaySelect = (day: string) => {
		if (selectedDays.includes(day)) {
			setSelectedDays(
				selectedDays.filter((selectedDay) => selectedDay !== day)
			);
		} else {
			setSelectedDays([...selectedDays, day]);
		}
	};

	return (
		<div>
			<h1>Schedule Page</h1>
			<div className="flex flex-wrap">
				<h2>Days</h2>
				<div className="w-full flex flex-col gap-y-6 mb-6 items-start">
					{daysOfWeek.map((day) => (
						<div className="flex items-center flex-row gap-x-4">
							<div className="w-28">{day}</div>
							<Switch
								onChange={() => handleDaySelect(day)}
								offColor="#D3D3D3"
								offHandleColor="#808080"
								onHandleColor="#006400"
								onColor="#92D293"
								checked={selectedDays.includes(day)}
							/>

							{selectedDays.includes(day) && (
								<div className="ml-6">
									<div className="flex flex-row items-center gap-x-4">
										<div>
											<LocalizationProvider dateAdapter={AdapterDayjs}>
												<TimePicker
													label="Start Time"
													value={selectedTime}
													onChange={setSelectedTime}
												/>
											</LocalizationProvider>
										</div>
										TO
										<div>
											<LocalizationProvider dateAdapter={AdapterDayjs}>
												<TimePicker
													label="End Time"
													value={selectedTime}
													onChange={setSelectedTime}
												/>
											</LocalizationProvider>
										</div>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
			<div className="justify-end items-end flex mt-4">
				<Button
					label="Save"
					rootClass="w-[200px] h-[50px] bg-brown-500 text-white hover:text-white"
				/>
			</div>
		</div>
	);
};

export default ScheduleMenu;
