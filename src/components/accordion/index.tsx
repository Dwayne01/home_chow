import { useState } from "react";
import { useTranslation } from "next-i18next";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TextAreaField } from "../form/InputField";
import WideIconButton from "../common/buttons/WideIconButton";
import CounterInput from "../counterInput";
import CheckboxButton from "../common/buttons/CheckboxButton";

const CardList = ({ items }: { items: string[] }) => {
	const [selectedUserChoice, setSelectedUserChoice] = useState<string>("");

	// eslint-disable-next-line no-console
	console.log(selectedUserChoice);

	return (
		<ul className="flex flex-col gap-4 my-5">
			{items.map((item, index) => (
				<li key={index}>
					<CheckboxButton
						label={item}
						name={item}
						value={item}
						isChecked={selectedUserChoice === item}
						handleClick={() => setSelectedUserChoice(item)}
						className="flex justify-between items-center px-8 py-6 border border-gray-border rounded-lg shadow-md"
					/>
				</li>
			))}
		</ul>
	);
};

const AccordionItem = ({
	title,
	price,
	content,
	cardList,
	image,
}: {
	title: string;
	price: number;
	content: string;
	cardList: string[];
	image: HTMLImageElement;
}) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [updatedTotalPrice, setUpdatedTotalPrice] = useState<number>();

	const { t } = useTranslation("common");

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
				<div className="flex items-center gap-4 m-2">
					<Image
						width={66}
						height={74}
						src={image}
						alt="image"
						style={{ borderRadius: "10px" }}
					/>
					<div className="flex flex-col gap-1 text-left">
						<div className="font-bold">{title}</div>
						<div className="text-primary-color">${price}</div>
					</div>
				</div>
				<div
					className={`w-4 h-4 m-4 transition-transform transform ${
						isExpanded ? "rotate-180" : ""
					}`}
				>
					<MdKeyboardArrowDown size={25} />
				</div>
			</button>
			{isExpanded && (
				<div className="my-4">
					<div className="px-4 pb-2 mx-2 overflow-y-auto max-h-96">
						<div className="mb-8">{content}</div>
						<div>{cardList && <CardList items={cardList} />}</div>
						<div className="mb-10">
							<FormProvider {...form}>
								<form onSubmit={handleSubmit(handleSubmitForm)}>
									<TextAreaField
										ref={register()}
										className="px-4 py-4 rounded-[8px] h-[200px] bg-gray-textArea"
										name="instructionToRestaurant"
										placeholder={t("Add special instructions to restaurants")}
										autoComplete="username"
									/>
								</form>
							</FormProvider>
						</div>
						<div className="flex justify-center mt-10">
							<CounterInput
								startValue={1}
								price={price}
								setUpdatedTotalPrice={setUpdatedTotalPrice}
							/>
						</div>
					</div>
					<div className="flex justify-center my-10">
						<WideIconButton
							label={`${t("Add to cart")} - $${updatedTotalPrice}`}
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
		price: number;
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
				price={item.price}
				content={item.content}
				cardList={item.cardList}
				image={item.image}
			/>
		))}
	</div>
);

export default Accordion;
