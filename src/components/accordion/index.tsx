import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TextAreaField } from "../form/InputField";
import WideIconButton from "../common/buttons/WideIconButton";
import CounterInput from "../counterInput";

const CardList = ({ items }: { items: string[] }) => (
	<ul className="flex flex-col gap-4 my-5">
		{items.map((item, index) => (
			<li
				key={index}
				className="px-8 py-6 border border-gray-border opacity-60 rounded-lg shadow-md"
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
	image,
}: {
	title: string;
	content: string;
	cardList: string[];
	image: any;
}) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const form = useForm({
		defaultValues: {},
	});

	const handleClick = () => {
		setIsExpanded(!isExpanded);
	};

	const { handleSubmit, register } = form;

	const handleSubmitForm = () => {};

	return (
		<div className="border-b border-gray-modern">
			<button
				className="w-full flex justify-between items-center py-2 px-4 focus:outline-none"
				onClick={handleClick}
			>
				<div className="flex items-center gap-4">
					<Image
						width={66}
						height={74}
						src={image}
						alt="image"
						className="rounded-2xl"
					/>
					<div className="font-bold">{title}</div>
				</div>
				<div
					className={`w-4 h-4 transition-transform transform ${
						isExpanded ? "rotate-180" : ""
					}`}
				>
					<MdKeyboardArrowDown size={25} />
				</div>
			</button>
			{isExpanded && (
				<div className="my-4">
					<div className="px-4 pb-2 mx-2 overflow-y-auto max-h-96">
						<div className="mb-4">{content}</div>
						<div>{cardList && <CardList items={cardList} />}</div>
						<div>
							<FormProvider {...form}>
								<form onSubmit={handleSubmit(handleSubmitForm)}>
									<TextAreaField
										ref={register()}
										className="px-4 py-4 rounded-[8px] h-[200px] bg-gray-textArea"
										name="instructionToRestaurant"
										placeholder="Add special instructions to restaurants..."
										autoComplete="username"
									/>
								</form>
							</FormProvider>
						</div>
						<div className="flex justify-center my-8">
							<CounterInput startValue={0} />
						</div>
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
		image: any;
	}[];
}) => (
	<div className="w-full border rounded-md overflow-hidden">
		{items.map((item, index) => (
			<AccordionItem
				key={index}
				title={item.title}
				content={item.content}
				cardList={item.cardList}
				image={item.image}
			/>
		))}
	</div>
);

export default Accordion;
