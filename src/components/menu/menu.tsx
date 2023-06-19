import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AddProductPayload } from "@/types/product";
// import LactoseIcon from "../../../public/assets/svg/lactose.svg";
import { AiOutlineSend } from "react-icons/ai";
import MenuIcon from "../../../public/assets/svg/menu.svg";
import ArrowLeft from "../../../public/assets/svg/ArrowLeft.svg";
import Button from "../common/buttons";
import Tabs, { TabProps } from "../common/tab";
import {
	TextField,
	TextAreaField,
	Select,
	ImageUploadField,
	Checkbox,
} from "../form/InputField";

const Menu = ({
	handleAddProduct,
}: {
	handleAddProduct: (params: any) => Promise<any>;
}) => {
	const { t } = useTranslation("dashboard");
	const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>(
		[]
	);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [selectedImages, setSelectedImages] = useState<Array<File | null>>([
		null,
	]);

	const onSubmit = async (data: AddProductPayload) => {
		// eslint-disable-next-line camelcase
		const { diet_info, prices, ...rest } = data;

		const pricesList = Object.keys(prices).map((key: any) => ({
			size: key,
			price: prices[key] || "",
		}));

		const transformedDietInfo = {
			dietary_restrictions: selectedRestrictions,
			// eslint-disable-next-line camelcase
			ingredients:
				// eslint-disable-next-line camelcase
				typeof diet_info.ingredients === "string"
					? // eslint-disable-next-line camelcase
					  [diet_info.ingredients]
					: [],
			nutritional_info:
				// eslint-disable-next-line camelcase
				typeof diet_info.nutritional_info === "string"
					? // eslint-disable-next-line camelcase
					  { info: diet_info.nutritional_info }
					: {},
		};

		const formData = {
			...rest,
			prices: pricesList,
			diet_info: transformedDietInfo,
		};
		handleAddProduct(formData);
	};

	const handleImageChange = (index: number, image: File | null): void => {
		setSelectedImages((prevImages) => {
			const updatedImages = [...prevImages];
			updatedImages[index] = image;
			return updatedImages;
		});
	};

	const form = useForm<AddProductPayload>({
		defaultValues: {
			image: "",
			product_name: "",
			listing_category: "",
			prices: [{ size: "", price: "" }],
			diet_info: {
				ingredients: [],
				nutritional_info: {},
				dietary_restrictions: [],
			},
			description: "",
			stock_availability: false,
		},
	});

	const { register, handleSubmit } = form;

	const handleRestrictionSelect = (restriction: string) => {
		setSelectedRestrictions((prevRestrictions) => {
			if (prevRestrictions.includes(restriction)) {
				return prevRestrictions.filter((r) => r !== restriction);
			}
			return [...prevRestrictions, restriction];
		});
	};

	const handleButtonClick = (restriction: string) => {
		handleRestrictionSelect(restriction);
	};

	const isRestrictionSelected = (restriction: string) =>
		selectedRestrictions.includes(restriction);

	const tabs: TabProps[] = [
		{
			label: "Ingredients",
			children: (
				<div className="w-full">
					<TextAreaField
						ref={register()}
						rootClass="items-start"
						className="mb-5 px-4 py-4 rounded-[8px] items-start w-[600px] h-[200px] bg-gray-textArea"
						name="diet_info.ingredients"
						required
						data-testid="description"
						label={t("Ingredients")}
						placeholder={t("Enter ingredients")}
						autoComplete="ingredients"
					/>
				</div>
			),
			onClick: () => {},
		},
		{
			label: "Nutritional Information",
			children: (
				<div>
					<TextAreaField
						ref={register()}
						rootClass="items-start"
						className="mb-5 px-4 py-4 rounded-[8px] items-start w-[600px] h-[200px] bg-gray-textArea"
						name="diet_info.nutritional_info"
						required
						data-testid="nutritional_info"
						label={t("Nutritional Information")}
						placeholder={t("Enter nutritional information")}
						autoComplete="nutritional_info"
					/>
				</div>
			),
			onClick: () => {},
		},
		{
			label: "Dietary restrictions ",
			children: (
				<div className="flex-wrap flex gap-4">
					<Button
						icon={AiOutlineSend}
						rootClass={`bg-white gap-2 border text-brown-400 border-brown-400 ${
							isRestrictionSelected("Vegetarian")
								? "bg-blue-500 text-white"
								: ""
						}`}
						label={t("Vegetarian") || ""}
						//   className={`px-4 py-2 rounded }
						onClick={() => handleButtonClick("Vegetarian")}
						iconPosition="left"
					/>
					<Button
						icon={AiOutlineSend}
						rootClass={`bg-white gap-2 border text-brown-400 border-brown-400 ${
							isRestrictionSelected("Halal") ? "bg-blue-500 text-white" : ""
						}`}
						label={t("Halal") || ""}
						onClick={() => handleButtonClick("Halal")}
						iconPosition="left"
					/>
					<Button
						icon={AiOutlineSend}
						rootClass={`bg-white gap-2 border text-brown-400 border-brown-400 ${
							isRestrictionSelected("Gluton-free")
								? "bg-blue-500 text-white"
								: ""
						}`}
						label={t("Gluton-free") || ""}
						onClick={() => handleButtonClick("Gluton-free")}
						iconPosition="left"
					/>
					<Button
						icon={AiOutlineSend}
						rootClass={`bg-white gap-2 border text-brown-400 border-brown-400 ${
							isRestrictionSelected("Vegan") ? "bg-blue-500 text-white" : ""
						}`}
						label={t("Vegan") || ""}
						onClick={() => handleButtonClick("Vegan")}
						iconPosition="left"
					/>
					<Button
						icon={AiOutlineSend}
						rootClass={`bg-white gap-2 border text-brown-400 border-brown-400 ${
							isRestrictionSelected("Allergy Friendly")
								? "bg-blue-500 text-white"
								: ""
						}`}
						label={t("Allergy Friendly") || ""}
						onClick={() => handleButtonClick("Allergy Friendly")}
						iconPosition="left"
					/>
					<Button
						icon={AiOutlineSend}
						rootClass={`bg-white gap-2 border text-brown-400 border-brown-400 ${
							isRestrictionSelected("Lactose Intolerant")
								? "bg-blue-500 text-white"
								: ""
						}`}
						label={t("Lactose Intolerant") || ""}
						onClick={() => handleButtonClick("Lactose Intolerant")}
						iconPosition="left"
					/>
					<Button
						icon={AiOutlineSend}
						rootClass={`bg-white gap-2 border text-brown-400 border-brown-400 ${
							isRestrictionSelected("Pescatarian")
								? "bg-blue-500 text-white"
								: ""
						}`}
						label={t("Pescatarian") || ""}
						onClick={() => handleButtonClick("Pescatarian")}
						iconPosition="left"
					/>

					{/* <TextAreaField
						ref={register()}
						rootClass="items-start"
						className="mb-5 px-4 py-4 rounded-[8px] items-start w-[600px] h-[200px] bg-gray-textArea"
						name="diet_info.dietary_restrictions"
						required
						data-testid="dietary_restrictions"
						label={t("Dietary Restrictions")}
						placeholder={t("Enter dietary restrictions")}
						autoComplete="dietary_restrictions"
					/> */}
				</div>
			),
			onClick: () => {},
		},
	];

	return (
		<div className="max-w-5xl flex flex-col lg:mx-[71px] xl:m-auto px-4 pt-[42px]">
			<FormProvider {...form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex justify-between flex-row items-center">
						<div className="flex-row items-center gap-x-2 flex">
							<Image
								width={24}
								src={ArrowLeft}
								alt="arrowleft"
								className="object-cover"
							/>
							<p className="text-base text-dark-gray-400 font-normal">Menu</p>
							<p className="h-6 text-dark-gray-400 w-1">|</p>
							<p className="text-base font-bold">Add Product</p>
						</div>
						<div className="md:hidden flex flex-row items-center gap-x-3">
							<Image
								src={MenuIcon}
								height={24}
								width={24}
								className="text-2xl text-dark-gray-400"
								alt="menu"
							/>
						</div>

						<div className="hidden md:flex flex-row items-center gap-x-3">
							<Button
								label={t("Save") || ""}
								type="submit"
								rootClass="rounded-lg whitespace-nowrap px-3 font-medium text-sm w-[152px] border-primary border bg-white text-primary-color text-sm"
							/>
						</div>
					</div>
					<div className="mt-[66px] flex flex-col justify-start">
						<div className="w-full lg:max-w-screen-sm">
							<ImageUploadField
								placeholderText="Add File"
								name="image"
								onImageChange={(image) => handleImageChange(0, image)}
								ref={register({
									required: true,
								})}
								data-testid="image"
							/>
							<div className="">
								<TextField
									data-testid="productName"
									id="product_name"
									rootClass="mb-5"
									label={t("Product Name", { ns: "common" })}
									placeholder={t("Butter Chicken")}
									name="product_name"
									required
									ref={register({
										required: true,
									})}
									autoComplete="product_name"
								/>
							</div>
							<div className="w-full">
								<Select
									options={[
										{ value: "Limited Liability", name: "Limited Liability" },
										{
											value: "Sole Proprietorship",
											name: "Sole Proprietorship",
										},
									]}
									data-testid="listing_category"
									required
									rootClass="mb-5"
									name="listing_category"
									label={t("Category")}
									ref={register({})}
								/>
							</div>
							<div>
								<TextAreaField
									ref={register()}
									className="mb-5 px-4 py-4 rounded-[8px] h-[200px] bg-gray-textArea"
									name="description"
									required
									data-testid="description"
									label={t("Description")}
									placeholder={t(
										"Diced chicken in a stewed tomato buttery curry sauce, served with rice"
									)}
									autoComplete="description"
								/>
							</div>
							<div className="w-full">
								<Select
									options={[
										{ value: "false", name: "False" },
										{ value: "true", name: "True" },
									]}
									data-testid="stock_availability"
									rootClass="mb-5"
									required
									name="stock_availability"
									label={t("Stock Availability")}
									ref={register({})}
								/>
							</div>
							<div className="gap-y-4 flex flex-col">
								<h2 className="text-sm text-[#000000] font-medium">
									Prices and Sizes <span className="text-red">{" *"}</span>
								</h2>
								<div className="flex flex-col gap-y-6">
									<div className="flex items-center">
										<Checkbox
											name="prices.small"
											rootClass="w-[100px]"
											label="Small"
											ref={register({ required: false })}
										/>
										<div className="ml-7">
											<input
												type="text"
												id="smallPrice"
												name="prices.small"
												placeholder="$35"
												ref={register({})}
												className="border-sand border-2 focus:outline-none focus:ring-0 focus:shadow-input placeholder:text-stone block h-11 rounded w-full bg-white px-4 py-3"
											/>
										</div>
									</div>
									<div className="flex items-center mb-5">
										<Checkbox
											rootClass="w-[100px]"
											name="prices.medium"
											label="Medium"
											ref={register({ required: false })}
										/>
										<div className="ml-7">
											<input
												type="text"
												id="smallPrice"
												name="prices.medium"
												placeholder="$35"
												ref={register({})}
												className="border-sand border-2 focus:outline-none focus:ring-0 focus:shadow-input placeholder:text-stone block h-11 rounded w-full bg-white px-4 py-3"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="my-5">
								<Button
									label={t("Add a Custom Size") || ""}
									rootClass={classNames(
										"rounded-lg whitespace-nowrap font-bold text-sm  w-[152px] h-[40px] bg-brown-400 text-white",
										"text-sm"
									)}
								/>
							</div>

							<div className="mt-4">
								<h2 className="font-bold mb-3 text-dark-gray-400 text-xl">
									Dietary Information
								</h2>
								<Tabs tabs={tabs} />
							</div>
						</div>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default Menu;
