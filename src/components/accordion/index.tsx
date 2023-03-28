import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const AccordionItem = ({
	title,
	content,
}: {
	title: string;
	content: string;
}) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const handleClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className="border-b border-gray-modern">
			<button
				className="w-full flex justify-between items-center py-2 px-4 focus:outline-none"
				onClick={handleClick}
			>
				<span>{title}</span>
				<div
					className={`w-4 h-4 transition-transform transform ${
						isExpanded ? "rotate-180" : ""
					}`}
				>
					<MdKeyboardArrowDown size={25} />
				</div>
			</button>
			{isExpanded && <div className="px-4 pb-2">{content}</div>}
		</div>
	);
};

const Accordion = ({
	items,
}: {
	items: {
		title: string;
		content: string;
	}[];
}) => (
	<div className="w-1/2 border rounded-md overflow-hidden">
		{items.map((item, index) => (
			<AccordionItem key={index} title={item.title} content={item.content} />
		))}
	</div>
);

export default Accordion;
