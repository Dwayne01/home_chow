import React, { useState } from "react";
import classNames from "classnames";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { BiSearch } from "react-icons/bi";
import { AddressField } from "../form/InputField";

const SearchBar = ({
	placeholder,
	itemList,
	onSearch,
	width,
	iconBgColor,
	rootClass,
}: {
	placeholder: string;
	itemList: Array<string>;
	onSearch: (query: string) => void;
	width?: string;
	iconBgColor?: string;
	rootClass?: string;
}) => {
	const [query, setQuery] = useState<string>("");
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [addresses, setAddresses] = useState<string[]>([]);
	const [selectedAddress, setSelectedAddress] = useState<string>("");

	const { t } = useTranslation("common");

	const form = useForm({
		defaultValues: {
			address: "",
		},
	});

	const { handleSubmit, register } = form;

	// eslint-disable-next-line
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newQuery = e.target.value;
		setQuery(newQuery);

		setAddresses(
			itemList.filter((address) =>
				address.toLowerCase().startsWith(newQuery.toLowerCase())
			)
		);
	};

	const handleClickEvent = (address: React.SetStateAction<string>) => {
		setSelectedAddress(address);
		setIsModalOpen(false);
	};

	const handleSubmitForm = (data: { address: string }) => {
		onSearch(data.address);
	};

	return (
		<div>
			<FormProvider {...form}>
				<form
					onSubmit={handleSubmit(handleSubmitForm)}
					className={classNames(
						"flex justify-center items-center border rounded-full shadow-sm px-6 py-3",
						width || "w-[329px] md:w-[567px]",
						rootClass || ""
					)}
				>
					<div className="w-11/12 ml-2">
						<div>
							<h6>{t("Where")}</h6>
						</div>
						<input
							type="text"
							placeholder={placeholder}
							value={selectedAddress}
							onFocus={() => setIsModalOpen(true)}
							className="w-full text-gray-700 bg-transparent border-none focus:outline-none mt-1"
						/>
					</div>

					{/* {divider} */}
					<div className="mt-2 mr-4 max-h-9 w-0.5 self-stretch bg-grey-light" />
					<div className="mt-2 mr-2 max-h-9 w-0.5 self-stretch bg-grey-light" />

					<button
						type="submit"
						className={classNames(
							"ml-2 p-2 rounded-full w-[48px] h-[48px]",
							iconBgColor || "bg-primary-color"
						)}
					>
						<BiSearch className="w-[24px] h-[24px] text-white m-auto" />
					</button>
					<AddressField
						data-testid="address"
						className="mb-2"
						label="Address"
						name="address"
						required
						getLocationData={() => {
							// setValue("address", data.formatted_address);
							// setLngLat({
							// 	locationLattitude: data.geometry.location.lat().toString(),
							// 	locationLongitude: data.geometry.location.lng().toString(),
							// });
						}}
						ref={register({ required: true })}
					/>
				</form>
			</FormProvider>
			{isModalOpen && (
				<div
					className={classNames(
						"shadow-md rounded-lg px-6",
						width || "w-[329px] md:w-[567px]",
						rootClass || ""
					)}
				>
					{/* <input
						type="text"
						placeholder="Search location"
						className="border rounded-lg px-3 py-2 w-full mt-5 mb-2 focus:outline-primary-color"
						onChange={handleInputChange}
					/> */}
					<div>
						{query && addresses.length > 0 && (
							<div className="max-h-48 overflow-y-auto rounded-lg">
								{addresses.map((address) => (
									<button
										key={address}
										className="w-full px-3 py-2 mb-1 text-left hover:bg-list-color"
										onClick={() => handleClickEvent(address)}
									>
										{address}
									</button>
								))}
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
