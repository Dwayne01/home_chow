import classNames from "classnames";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { BiSearch } from "react-icons/bi";
import { AddressField } from "../form/InputField";

const SearchBar = ({
	placeholder,
	onSearch,
	width,
	iconBgColor,
	rootClass,
}: {
	placeholder: string;
	onSearch: (query: string) => void;
	width?: string;
	iconBgColor?: string;
	rootClass?: string;
}) => {
	const { t } = useTranslation("common");

	const form = useForm({
		defaultValues: {
			address: "",
		},
	});

	const { handleSubmit, register } = form;

	const handleSubmitForm = (data: { address: string }) => {
		onSearch(data.address);
	};

	return (
		<div>
			<FormProvider {...form}>
				<form
					onSubmit={handleSubmit(handleSubmitForm)}
					className={classNames(
						"flex justify-center items-center border rounded-full shadow-sm px-6 py-2",
						width || "w-[400px] md:w-[600px]",
						rootClass || ""
					)}
				>
					<div className="w-11/12 ml-2">
						<div className="px-1">
							<h6>{t("Where")}</h6>
						</div>
						<AddressField
							data-testid="address"
							className="w-full text-gray-700 px-2 bg-transparent border-none focus:outline-none"
							name="address"
							placeholder={placeholder}
							getLocationData={() => {
								// setValue("address", data.formatted_address);
								// setLngLat({
								// 	locationLattitude: data.geometry.location.lat().toString(),
								// 	locationLongitude: data.geometry.location.lng().toString(),
								// });
							}}
							ref={register({ required: true })}
						/>
					</div>

					{/* {divider} */}
					<div className="mt-2 mr-4 max-h-11 w-0.5 self-stretch bg-grey-light" />
					<div className="mt-2 mr-2 max-h-11 w-0.5 self-stretch bg-grey-light" />

					<button
						type="submit"
						className={classNames(
							"ml-2 p-2 rounded-full w-[48px] h-[48px]",
							iconBgColor || "bg-primary-color"
						)}
					>
						<BiSearch className="w-[24px] h-[24px] text-white m-auto" />
					</button>
				</form>
			</FormProvider>
		</div>
	);
};

export default SearchBar;
