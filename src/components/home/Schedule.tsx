import { useState } from "react";
import { useTranslation } from "next-i18next";
import { FormProvider, useForm } from "react-hook-form";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import Button from "../common/buttons";

// SV: I wanted to lazy load the TimePicker component, but it was making the whole time pickeer referesh which
// was not good user experience. So I have commented out the lazy loading code.
const Schedule = () => {
	const { t } = useTranslation(["home"]);
	type Day =
		| "Sunday"
		| "Monday"
		| "Tuesday"
		| "Wednesday"
		| "Thursday"
		| "Friday"
		| "Saturday";

	type TimeSlot = {
		startTime: string;
		endTime: string;
		isVisible: boolean;
	};

	type SelectedDay = Record<Day, TimeSlot>;

	const [selectedDay, setSelectedDay] = useState<SelectedDay>({
		Sunday: {
			startTime: "9:00",
			endTime: "12:00",
			isVisible: false,
		},
		Monday: {
			startTime: "9:00",
			endTime: "12:00",
			isVisible: false,
		},
		Tuesday: {
			startTime: "9:00",
			endTime: "12:00",
			isVisible: false,
		},
		Wednesday: {
			startTime: "9:00",
			endTime: "12:00",
			isVisible: false,
		},
		Thursday: {
			startTime: "9:00",
			endTime: "12:00",
			isVisible: false,
		},
		Friday: {
			startTime: "9:00",
			endTime: "12:00",
			isVisible: false,
		},
		Saturday: {
			startTime: "9:00",
			endTime: "12:00",
			isVisible: false,
		},
	});

	const [, setUserSelectedDay] = useState<SelectedDay>({} as SelectedDay);

	const form = useForm({
		defaultValues: {},
	});

	const { handleSubmit } = form;

	const handleCheckboxChange = (day: string) => {
		setSelectedDay((prevSelectedDay) => ({
			...prevSelectedDay,
			[day]: {
				...prevSelectedDay[day],
				isVisible: !prevSelectedDay[day].isVisible,
			},
		}));
	};
	const handleTimeChange = (day: string, value: string, time: string) => {
		setSelectedDay((prevSelectedDay) => {
			const updatedDay = {
				...prevSelectedDay[day],
				[time]: value,
			};
			const updatedSelectedDay = {
				...prevSelectedDay,
				[day]: updatedDay,
			};
			updateUserSelectedDay(updatedSelectedDay);
			return updatedSelectedDay;
		});
	};

	const updateUserSelectedDay = (updatedDay: SelectedDay) => {
		const updatedUserSelectedDay = Object.entries(updatedDay)
			.filter(([, day]) => day.isVisible)
			.reduce((acc, [day, dayValue]) => {
				acc[day as Day] = {
					...dayValue,
					startTime: dayValue.startTime,
					endTime: dayValue.endTime,
				};
				return acc;
			}, {} as SelectedDay);
		setUserSelectedDay(updatedUserSelectedDay);
	};

	const handleScheduleForm = () => {
		// Navigate to the next page
		// Save it to the db.
	};

	return (
		<div>
			<h1>{t("Schedule")}</h1>
			<p>{t("Schedule_Desc")}</p>
			<FormProvider {...form}>
				<form
					className="subscribe-form"
					onSubmit={handleSubmit(handleScheduleForm)}
				>
					<div>
						{Object.keys(selectedDay).map((day, idx) => (
							<div
								key={idx}
								className="flex flex-row gap-2 items-center content-center mt-5 md:my-8 max-h-full flex-wrap"
							>
								<label
									className="h-8 w-32 mt-2"
									id={`labelfor_${day}`}
									htmlFor={day}
								>
									{day}
								</label>
								<input
									type="checkbox"
									id={`checkboxfor_${day}`}
									checked={selectedDay[day].isVisible}
									onChange={() => handleCheckboxChange(day)}
								/>
								{selectedDay[day].isVisible && (
									<div className="md:w-1/2 flex flex-row gap-2 max-w-max items-center h-8 mx-auto">
										<TimePicker
											name="startTime"
											onChange={(time: string) =>
												handleTimeChange(day, time, "startTime")
											}
											value={selectedDay[day].startTime}
											disableClock
											id={`startTime_${day}`}
											clearIcon={null}
											format="HH:mm"
											className="border rounded-md text-sm leading-4 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 .react-time-picker__wrapper:bg-red"
										/>
										<p className="mx-2 md:mx-5">{t("To")}</p>
										<TimePicker
											name="endTime"
											onChange={(time: string) =>
												handleTimeChange(day, time, "endTime")
											}
											value={selectedDay[day].endTime}
											disableClock
											id={`endTime_${day}`}
											clearIcon={null}
											format="HH:mm"
											className=" border rounded-md text-sm leading-4 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 .react-time-picker__wrapper:bg-red"
										/>
									</div>
								)}
							</div>
						))}

						<div className="w-full flex justify-end">
							<Button
								label={t("Save") as string}
								rootClass="rounded-lg font-bold text-white gap-4 col-auto mt-8 "
								iconPosition="right"
								id="ScheduleSave-btn"
								onClick={() => {
									// getting you object here to save in the database
									// Show the Toast notification that it is saved.
								}}
							/>
						</div>
					</div>
					<Button
						label={t("Submit") as string}
						type="submit"
						rootClass="rounded-lg font-bold text-white gap-4 col-auto mt-8 w-full"
						iconPosition="right"
						id="scheduleSubmit-btn"
					/>
				</form>
			</FormProvider>
		</div>
	);
};

export default Schedule;
