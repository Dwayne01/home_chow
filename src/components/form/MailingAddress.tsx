import React from "react";
import { useTranslation } from "next-i18next";
import { UseFormMethods } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types/form";
import { testCanadianPostalCode } from "../../utils";
import { AddressField, TextField } from "./InputField";

const MailingAddress = ({
	form,
	description,
	title,
	type = "mailing",
}: {
	title: string;
	type: "mailing" | "billing";
	description: string;
	form: UseFormMethods<FieldValues>;
}) => {
	const { register, setValue } = form;

	const { t } = useTranslation("accounts");

	return (
		<div className="border border-sand rounded p-5">
			<h3 className="font-bold text-granite">{title}</h3>
			<p className="py-3">{description}</p>
			<div className="grid grid-flow-row-dense grid-rows-6 xl:grid-rows-3 grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-4 bg-white">
				<AddressField
					rootClass="xl:col-start-1 xl:col-end-2 xl:col-span-1 xl:row-start-1 xl:row-end-1"
					name={`${type}streetAddress`}
					label={t("streetAddress")}
					getLocationData={(data: any) => {
						const postcode = data.formatted_address.split(",")[2].trim();
						testCanadianPostalCode(postcode.slice(3));

						const streetAddress = data.formatted_address.split(",")[0].trim();
						const cityData = data.formatted_address.split(",")[1].trim();
						const province = data.formatted_address
							.split(",")[2]
							.trim()
							.split(" ")[0];
						const countryData = data.formatted_address.split(",")[3].trim();

						if (setValue) {
							setValue("city", cityData);
							setValue("region", province);
							setValue("country", countryData);
							setValue("postalCode", postcode.slice(3));
							setValue("streetAddress", streetAddress);
						}
					}}
					ref={register({ required: true })}
					required
					placeholder={t("enterAddress")}
				/>
				<TextField
					rootClass="xl:col-start-2 xl:col-end-4 xl:col-span-1 xl:row-start-1 xl:row-end-1"
					name={`${type}aptUnitSuite`}
					label={t("aptUnitSuite")}
					ref={register()}
					placeholder={t("enterAptUnitSuite")}
				/>

				<TextField
					rootClass="xl:col-start-1 xl:col-end-2 xl:col-span-1 xl:row-start-2 xl:row-end-2"
					name={`${type}city`}
					label={t("city")}
					ref={register({ required: true })}
					required
					placeholder={t("enterCity")}
				/>
				<TextField
					rootClass="xl:col-start-2 xl:col-end-4 xl:col-span-1 xl:row-start-2 xl:row-end-2"
					name={`${type}region`}
					label={t("province")}
					ref={register({ required: true })}
					required
					placeholder={t("enterProvince")}
				/>

				<TextField
					rootClass="xl:col-start-1 xl:col-end-2 xl:col-span-1 xl:row-start-3 xl:row-end-3"
					name={`${type}country`}
					label={t("country")}
					ref={register({ required: true })}
					required
					placeholder={t("enterCountry")}
				/>
				<TextField
					rootClass="xl:col-start-2 xl:col-end-4 xl:col-span-1 xl:row-start-3 xl:row-end-3"
					name={`${type}postalCode`}
					label={t("postalCode")}
					ref={register({ required: true })}
					required
					placeholder={t("enterPostalCode")}
				/>
			</div>
		</div>
	);
};

export default MailingAddress;
