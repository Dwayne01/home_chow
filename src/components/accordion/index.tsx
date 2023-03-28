import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import WideIconButton from "../common/buttons/WideIconButton";

const CardList = ({ items }: { items: string[] }) => (
	<ul className="flex flex-col gap-2 my-5">
		{items.map((item, index) => (
			<li
				key={index}
				className="px-8 py-4 border border-gray-300 rounded-lg shadow-md"
			>
				{item}
			</li>
		))}
	</ul>
);

const AccordionItem = ({
	title,
	content,
	cardList,
}: {
	title: string;
	content: string;
	cardList: string[];
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
			{isExpanded && (
				<div>
					<div className="px-4 pb-2 overflow-y-auto max-h-64">
						{content}
						{cardList && <CardList items={cardList} />}
					</div>
					<div className="flex justify-center my-5">
						<WideIconButton
							label="Add to cart"
							bgColor="bg-primary-color"
							textColor="text-white"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

const Accordion = ({
	items,
}: {
	items: {
		title: string;
		content: string;
		cardList: string[];
	}[];
}) => (
	<div className="w-1/2 border rounded-md overflow-hidden">
		{items.map((item, index) => (
			<AccordionItem
				key={index}
				title={item.title}
				content={item.content}
				cardList={item.cardList}
			/>
		))}
	</div>
);

export default Accordion;
