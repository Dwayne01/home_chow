import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const WeeklyMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<div
				className={`flex w-full flex-row gap-x-3 ${isOpen ? "h-auto" : "h-10"}`}
			>
				<div className="w-[5%] border bg-slate-100 rounded-lg cursor-pointer">
					<div className="flex items-center h-full justify-center">
						<button
							className="accordion-toggle focus:outline-none"
							onClick={toggleAccordion}
						>
							{isOpen ? <FaChevronDown /> : <FaChevronRight />}
						</button>
					</div>
				</div>
				<div className="w-[90%] border rounded-lg flex flex-col">
					<div
						className={`flex flex-row h-full justify-between items-center px-9 ${
							isOpen ? "mt-4" : ""
						}`}
					>
						<p className="text-lg font-bold text-black">Monday</p>
						{isOpen && (
							<button className="font-bold text-base border-b text-black border-black">
								Edit{" "}
							</button>
						)}
					</div>

					{isOpen && (
						<div className="bg-white p-4">
							<div className="flex items-center justify-center">
								<div>
									<p>This is the content for accordion item 1.</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default WeeklyMenu;
