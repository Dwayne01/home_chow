import React from "react";

function DaysSection() {
	const days = [
		{ id: 1, name: "Monday" },
		{ id: 2, name: "Tuesday" },
		{ id: 3, name: "Wednesday" },
		{ id: 4, name: "Thursday" },
		{ id: 5, name: "Friday" },
		{ id: 6, name: "Saturday" },
		{ id: 7, name: "Sunday" },
	];

	return (
		<div className="mt-5 mb-5">
			<ul className="flex w-full justify-between">
				{days.map((day) => (
					<li key={day.id}>
						<input
							type="checkbox"
							id={day.name}
							value={day.name}
							className="hidden peer"
						/>
						<label
							htmlFor={day.name}
							className="inline-flex items-center justify-between px-3 py-2 text-gray-500 bg-white border-2 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-primary-color hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							<p className="flex text-[10px] text-primary-color">{day.name}</p>
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}

export default DaysSection;
