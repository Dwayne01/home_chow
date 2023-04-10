import React from "react";
import { TextField, Select, DatePicker } from "@/components/form/InputField";
import classNames from "classnames";
import Button from "@/components/common/buttons";
import { useTranslation } from "next-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { APPLYVENDORPayload } from "@/types/auth";
import DaysSection from "@/components/DaysSection";

const ApplyVendor = ({
	handleVendor,
	isLoading,
}: {
	isLoading: boolean;
	handleVendor: (params: APPLYVENDORPayload) => Promise<boolean>;
}) => {
	const { t } = useTranslation("ApplyVendor");

	const form = useForm({
		defaultValues: {
			legalBusinessName: "",
			businessTradingName: "",
			status: "Limited Liability",
			city: "",
			area: "",
			street: "",
			building: "",
			floor: "",
			phoneNumber: "",
			alternatePhoneNumber: "",
			email: "",
			facebookUrl: "",
			instagramUrl: "",
			startDate: "",
			endDate: "",
			startTime: "",
			endTime: "",
		},
	});

	const { handleSubmit, register } = form;

	const handleSubmitForm = async (params: APPLYVENDORPayload) => {
		await handleVendor(params);
	};

	return (
		<div>
			<FormProvider {...form}>
				<form onSubmit={handleSubmit(handleSubmitForm)}>
					<TextField
						data-testid="legalBusinessName"
						rootClass="mb-2"
						name="legalBusinessName"
						label={t("Legal Business Name")}
						placeholder="Enter your Name"
						required
						ref={register({
							required: true,
						})}
					/>
					<div className="w-[100%] flex justify-between">
						<TextField
							data-testid="businessTradingName"
							rootClass="mb-2 w-[48%]"
							name="businessTradingName"
							label={t("Business Trading Name")}
							placeholder="Enter Business Name"
							required
							ref={register({
								required: true,
							})}
						/>

						<Select
							options={[
								{ value: "Limited Liability", name: "Limited Liability" },
								{ value: "Sole Proprietorship", name: "Sole Proprietorship" },
							]}
							data-testid="status"
							rootClass="mb-2 w-[48%]"
							name="status"
							label={t("Status")}
							ref={register({})}
						/>
					</div>
					<TextField
						data-testid="city"
						rootClass="mb-2"
						name="city"
						label={t("City")}
						placeholder="City"
						required
						ref={register({
							required: true,
						})}
						autoComplete="username"
					/>
					<div className="flex w-[100%] flex-wrap justify-between ">
						<TextField
							data-testid="area"
							rootClass="mb-2 w-[48%]"
							name="area"
							label={t("Area")}
							placeholder="Area"
							ref={register({})}
						/>
						<TextField
							data-testid="street"
							rootClass="mb-2 w-[48%]"
							name="street"
							label={t("Street")}
							placeholder="Street"
							ref={register({})}
						/>
						<TextField
							data-testid="building"
							rootClass="mb-2 w-[48%]"
							name="building"
							label={t("Building")}
							placeholder="Building"
							ref={register({})}
						/>
						<TextField
							data-testid="floor"
							rootClass="mb-2 w-[48%]"
							name="floor"
							label={t("Floor")}
							placeholder="Floor"
							ref={register({})}
						/>
					</div>
					<div className="w-[100%] flex justify-between">
						<TextField
							data-testid="phoneNumber"
							rootClass="mb-2 w-[48%]"
							name="phoneNumber"
							label={t("Phone Number")}
							placeholder="Phone Number"
							required
							ref={register({
								required: true,
							})}
						/>
						<TextField
							data-testid="alternatePhoneNumber"
							rootClass="mb-2 w-[48%]"
							name="alternatePhoneNumber"
							label={t("Alternate Phone Number")}
							placeholder="Alternate Phone Number"
							ref={register({})}
						/>
					</div>
					<TextField
						data-testid="email"
						rootClass="mb-2"
						name="email"
						label={t("Email")}
						placeholder="example@example.com"
						required
						ref={register({
							required: true,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: t("common:invalidEmail"),
							},
						})}
					/>
					<div className="w-[100%] flex justify-between">
						<TextField
							data-testid="facebookUrl"
							rootClass="mb-2 w-[48%]"
							name="facebookUrl"
							label={t("Facebook Url")}
							placeholder="Facebook Url"
							ref={register({})}
						/>
						<TextField
							data-testid="instagramUrl"
							rootClass="mb-2 w-[48%]"
							name="instagramUrl"
							label={t("Instagram Url")}
							placeholder="Instagram Url"
							ref={register({})}
						/>
					</div>
					<DaysSection />
					<div className="flex w-[100%] flex-wrap justify-between">
						<DatePicker
							data-testid="startDate"
							rootClass="mb-2 w-[48%]"
							name="startDate"
							label={t("Start Date")}
							placeholder="Start Date"
							ref={register({})}
							required={false}
						/>
						<DatePicker
							data-testid="endDate"
							rootClass="mb-2 w-[48%]"
							name="endDate"
							label={t("End Date")}
							placeholder="End Date"
							ref={register({})}
							required={false}
						/>
						<DatePicker
							data-testid="startTime"
							rootClass="mb-2 w-[48%]"
							name="startTime"
							label={t("Start Time")}
							placeholder="Start Time"
							ref={register({})}
							required={false}
						/>
						<DatePicker
							data-testid="endTime "
							rootClass="mb-2 w-[48%]"
							name="endTime"
							label={t("End Time")}
							placeholder="End Time"
							ref={register({})}
							required={false}
						/>
					</div>

					<div className=" mt-6">
						<Button
							label={t("Submit") || ""}
							type="submit"
							loading={isLoading}
							rootClass={classNames(
								"rounded-lg whitespace-nowrap w-full px-3 font-bold text-sm text-white"
							)}
							iconPosition="right"
						/>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default ApplyVendor;
