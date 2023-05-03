import React, { useRef, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import _, { isNaN } from "lodash";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import { BsCheckCircle, BsCalendar4 } from "react-icons/bs";
import { FiCircle } from "react-icons/fi";
import NumericFormat from "react-number-format";
import classNames from "classnames";
import ReactDatePicker from "react-datepicker";
import { AiOutlineInfoCircle, AiOutlineEyeInvisible } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import { useTranslation } from "next-i18next";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineVisibility } from "react-icons/md";
import {
	formatDateTime,
	dateToDateTime,
	numberToCurrency,
	currencyToNumber,
} from "../../utils";
import FlagCARound from "../../../public/assets/svg/FlagCARound";
import config from "../../../config";

const CardFieldComponent = (props: any, ref: any) => {
	const {
		label,
		error,
		rootClass,
		required,
		cardImage,
		infoText,
		disabled,
		...inputProps
	} = props;
	const [active, setActive] = useState<boolean>(false);
	const { control } = useFormContext();
	const { t } = useTranslation();
	const border = active ? "border-primary-color" : "border-sand";
	return (
		<div className={`flex flex-col ${rootClass}`}>
			<Label
				infoText={infoText}
				label={label}
				name={inputProps.name}
				required={required}
				bold
			/>
			<div
				className={classNames(
					"border-2 placeholder:text-stone px-4 py-3 rounded w-full bg-white items-center flex justify-between",
					disabled ? "border-gray-200" : border,
					error ? "border-arbutus" : border,
					border
				)}
			>
				<Controller
					control={control}
					name={inputProps.name}
					render={({ onChange }) => (
						<input
							id={inputProps.name}
							data-testid={inputProps.name}
							disabled={disabled}
							{...inputProps}
							ref={ref}
							onBlur={(e) => {
								inputProps.onBlur(e);
								setActive(false);
							}}
							onFocus={() => {
								setActive(true);
							}}
							onChange={(e) => {
								onChange(e.target.value);
								inputProps.onChange(e);
							}}
							className="w-full  bg-white border-0 p-0 focus:outline-none focus:ring-0 focus:shadow-input "
						/>
					)}
				/>
				{cardImage && <svg {...cardImage} />}
			</div>

			{error && <small className="text-red-500">{t(error)}</small>}
		</div>
	);
};
const Label = ({
	name,
	label,
	required,
	infoText,
	className,
	bold,
}: {
	name: string;
	infoText?: string;
	label: string;
	className?: string;
	required?: boolean;
	bold?: boolean;
}) => (
	<label
		htmlFor={name}
		className={classNames(
			className || "text-granite mb-2",
			bold ? "font-bold" : ""
		)}
	>
		{label}
		{required && <span className="text-red">{" *"}</span>}
		{infoText && <InfoTip text={infoText} />}
	</label>
);

const TextInputComponent = (props: any, ref: any) => {
	const { hasError, disabled, className, ...inputProps } = props;

	return (
		<input
			id={inputProps.name}
			data-testid={inputProps.name}
			className={`border-sand border-2 placeholder:text-stone block rounded w-full bg-white px-4 py-3  ${
				hasError ? "border-arbutus" : "border-sand"
			} text-gray-900  ${
				hasError ? "focus:border-arbutus" : "focus:border-primary-color"
			} focus:outline-none focus:ring-0 focus:shadow-input ${className}`}
			disabled={disabled}
			{...inputProps}
			ref={ref}
		/>
	);
};

const TextInput = React.forwardRef(TextInputComponent);

const TextAreaInputComponent = (props: any, ref: any) => {
	const { hasError, disabled, className, ...inputProps } = props;

	return (
		<textarea
			id={inputProps.name}
			data-testid={inputProps.name}
			className={`border-sand border-2 placeholder:text-stone block px-3 py-2 rounded w-full bg-white ${
				hasError ? "border-arbutus" : "border-sand"
			} text-gray-900 ${
				hasError ? "focus:border-arbutus" : "focus:border-primary-color"
			} focus:outline-none focus:ring-0 focus:shadow-input ${className}`}
			disabled={disabled}
			{...inputProps}
			ref={ref}
		/>
	);
};

const TextArea = React.forwardRef(TextAreaInputComponent);

const ErrorLabel = (props: any) => {
	const { error, className, ...otherProps } = props;
	const { t } = useTranslation();

	return (
		<small className={`${className} text-red`} {...otherProps}>
			{error &&
				(error.type === "required" && !error.message
					? t("thisFieldIsRequired")
					: error.message)}
		</small>
	);
};

const InfoTip = ({ text }: { text: string }) => {
	if (!text) return null;

	return (
		<span className="float-right pt-2 pr-2">
			<AiOutlineInfoCircle className="text-neutral-grey-2" data-tip={text} />{" "}
			<ReactTooltip
				className="w-1/2 lg:w-1/4"
				textColor="var(--colors-natural-dark)"
				backgroundColor="var(--colors-natural-grey-4)"
			/>
		</span>
	);
};

const TextFieldComponent = (props: any, ref: any) => {
	const { label, rootClass, required, infoText, inputClass, ...inputProps } =
		props;
	const { errors } = useFormContext();
	const error = _.get(errors, inputProps.name);

	return (
		<div className={`flex flex-col ${rootClass}`}>
			{label && (
				<Label
					infoText={infoText}
					label={label}
					name={inputProps.name}
					required={required}
					bold
				/>
			)}
			<TextInput
				{...inputProps}
				hasError={!!error}
				ref={ref}
				className={inputClass}
			/>
			{error && <ErrorLabel error={error} />}
		</div>
	);
};

const CurrencyFieldComponent = (props: any, ref: any) => {
	const { label, rootClass, required, name, infoText, ...inputProps } = props;
	const { errors, setValue } = useFormContext();
	const error = _.get(errors, inputProps.name);

	return (
		<div className={`flex flex-col ${rootClass}`}>
			<Label
				infoText={infoText}
				label={label}
				name={name}
				required={required}
			/>
			<TextInput
				onChange={(e: any) => {
					const currencyToNumbers = currencyToNumber(e.target.value);

					if (isNaN(currencyToNumbers)) {
						setValue(
							inputProps.name,
							e.target.value
								.split("")
								.splice(0, e.target.value.length - 1)
								.join("")
						);
						return;
					}

					setValue(
						inputProps.name,
						numberToCurrency(currencyToNumber(e.target.value))
					);
				}}
				{...inputProps}
				hasError={!!error}
				ref={ref}
			/>
			{error && <ErrorLabel error={error} />}
		</div>
	);
};

const TextAreaComponent = (props: any, ref: any) => {
	const { label, rootClass, required, infoText, name, ...inputProps } = props;
	const { errors } = useFormContext();
	const error = _.get(errors, inputProps.name);

	return (
		<div className={`flex flex-col ${rootClass}`}>
			<Label
				infoText={infoText}
				label={label}
				name={name}
				required={required}
			/>
			<TextArea {...inputProps} hasError={!!error} ref={ref} />
			{error && <ErrorLabel error={error} />}
		</div>
	);
};

const PasswordFieldComponent = (props: any, ref: any) => {
	const [show, setShow] = useState(false);
	const { errors } = useFormContext();
	const { label, rootClass, required, inputClass, ...inputProps } = props;
	const error = _.get(errors, inputProps.name);
	const toggleShow = () => setShow(!show);

	return (
		<div className={`flex flex-col ${rootClass}`}>
			<Label label={label} required={required} name={inputProps.name} bold />
			<div className="relative">
				<TextInput
					{...inputProps}
					hasError={!!error}
					type={show ? "text" : "password"}
					ref={ref}
					className={inputClass}
				/>
				<div
					onKeyDown={toggleShow}
					tabIndex={0}
					role="button"
					onClick={toggleShow}
					className="cursor-pointer absolute inset-y-0 right-0 pb-1 pr-3 flex items-center text-sm"
				>
					{show ? (
						<MdOutlineVisibility className="text-3xl rounded-full p-1 bg-slate-200" />
					) : (
						<AiOutlineEyeInvisible className="text-3xl rounded-full p-1 bg-slate-200" />
					)}
				</div>
			</div>
			{error && <ErrorLabel error={error} />}
		</div>
	);
};

const PhoneField = (props: any) => {
	const {
		label,
		rootClass,
		required,
		name,
		rules,
		hasCountryCode = true,
		inputClass,
		...inputProps
	} = props;
	const { errors, control } = useFormContext();

	const error = _.get(errors, name);

	let className =
		"block mb-2 px-4 py-3 pr-2 rounded-sm w-full bg-white text-gray-900 focus:border-primary-color focus:outline-none focus:ring-0 focus:shadow-input";
	className += error ? " border-arbutus" : " border-sand";
	className += hasCountryCode ? " pl-16" : "";
	className += inputClass
		? ` ${inputClass}`
		: "rounded-md border border-gray-200 text-gray-900 mb-2";

	return (
		<div className={`flex flex-col ${rootClass}`}>
			<Label label={label} name={name} required={required} bold />
			<div className="relative">
				{hasCountryCode && (
					<div className="absolute py-[13px] pl-3 flex items-center">
						<FlagCARound size={22} className="mr-2" /> +1
					</div>
				)}
				<Controller
					name={name}
					control={control}
					rules={rules}
					render={({ onChange, value }) => (
						<NumericFormat
							id={name}
							name={name}
							className={className}
							mask="_"
							onValueChange={(v: { value: any }) => onChange(v.value)}
							format="(###) ###-####"
							placeholder="(604) 000-0000"
							value={value}
							{...inputProps}
						/>
					)}
				/>
			</div>
			{error && <ErrorLabel error={error} />}
		</div>
	);
};
const libraries: "places"[] = ["places"];
const AutoAddressFieldComponent = (props: any, ref: any) => {
	const { label, rootClass, required, getLocationData, ...inputProps } = props;

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: config.googleClientId,
		libraries,
	});

	const { errors } = useFormContext();
	const error = _.get(errors, inputProps.name);

	let autocomplete: any;

	const onLoad = (data: any) => {
		autocomplete = data;
	};

	const onPlaceChanged = () => {
		if (autocomplete) {
			getLocationData(autocomplete.getPlace());
		} else {
			// eslint-disable-next-line no-console
			console.log("Autocomplete is not loaded yet!");
		}
	};

	return (
		<div className={`${rootClass} tw-relative flex flex-col`}>
			<Label label={label} name={inputProps.name} required={required} bold />
			<div className="relative">
				{isLoaded && (
					<Autocomplete
						options={{
							componentRestrictions: { country: "ca" },
							fields: ["formatted_address", "geometry.location", "adr_address"],
						}}
						onPlaceChanged={onPlaceChanged}
						onLoad={onLoad}
					>
						<TextInput {...inputProps} hasError={!!error} ref={ref} />
					</Autocomplete>
				)}
				{errors && <ErrorLabel error={error} />}
			</div>
		</div>
	);
};

const SelectComponent = (
	props: {
		[x: string]: any;
	},
	ref: React.LegacyRef<HTMLSelectElement> | undefined
) => {
	const {
		label,
		options,
		required,
		className,
		rootClass,
		infoText,
		disabled,
		placeholder,
		...inputProps
	} = props;
	const { errors, watch } = useFormContext();
	const selectValue = watch(inputProps.name);
	const error = _.get(errors, inputProps.name);

	return (
		<div className={`flex flex-col ${rootClass}`}>
			{label && (
				<Label
					infoText={infoText}
					label={label}
					name={inputProps.name}
					required={required}
					bold
				/>
			)}

			<select
				data-testid={inputProps.name}
				id={inputProps.name}
				disabled={disabled}
				multiple={false}
				defaultValue={selectValue || ""}
				className={`block px-3 py-3 rounded-sm w-full border-2 border-sand ${
					error ? "border-arbutus" : "border-sand"
				} ${
					error ? "focus:border-arbutus" : "focus:border-primary-color"
				} focus:outline-none focus:ring-0 focus:shadow-input ${className}`}
				{...inputProps}
				ref={ref}
			>
				{placeholder ? (
					<option className="text-stone" disabled key="default" value="">
						{placeholder}
					</option>
				) : null}

				{options.map(
					(
						option: {
							value: string | number;
							name: string | number;
						},
						i: React.Key | null | undefined
					) => (
						<option key={i} value={option.value}>
							{option.name}
						</option>
					)
				)}
			</select>
			{error && <ErrorLabel error={error} />}
		</div>
	);
};

const CheckboxComponent = (
	props: {
		[x: string]: any;
		label: string;
		name: string;
		rootClass: string;
		bold: boolean;
	},
	ref: React.LegacyRef<HTMLInputElement> | undefined
) => {
	const { label, name, rootClass, inputClass, bold, ...inputProps } = props;

	return (
		<div className={classNames("flex items-center", rootClass)}>
			<input
				id={name}
				className={`accent-primary-color focus:primary-color focus:ring-0 focus:outline-none focus:shadow-input align-top ${inputClass}`}
				type="checkbox"
				name={name}
				ref={ref}
				{...inputProps}
			/>

			<Label bold={bold} className="ml-5 mb-0" label={label} name={name} />
		</div>
	);
};

const RadioFieldComponent = (
	props: {
		[x: string]: any;
		name: any;
		options?: never[] | undefined;
		rootClass: any;
	},
	ref: React.LegacyRef<HTMLInputElement> | undefined
) => {
	const { name, options = [], rootClass, ...other } = props;

	return (
		<div className={`${rootClass} flex`}>
			{options.map(
				(o: {
					label: any;
					value: string | number | readonly string[] | undefined;
					defaultChecked: any;
				}) => (
					<div className="w-28" key={o.label}>
						<input
							id={`radio-${name}-${o.label}`}
							type="radio"
							name={name}
							value={o.value}
							className="focus:ring-0 focus:outline-none focus:shadow-input"
							defaultChecked={!!o.defaultChecked}
							ref={ref}
							{...other}
						/>
						<label key={o.label} htmlFor={`radio-${name}-${o.label}`}>
							<BsCheckCircle size="20" />
							<FiCircle size="20" color="#d3d7dc" />
							<span>{o.label}</span>
						</label>
					</div>
				)
			)}
		</div>
	);
};

const DatePickerComponent = (
	props: {
		label: string;
		name: string;
		rootClass?: string;
		className?: string;
		required: boolean;
		maxDate?: Date;
		minDate?: Date;
		valueFormat?: "yyyy-MM-dd" | undefined;
		inputFormat?: "dd/MM/yyyy" | undefined;
		placeholder: string;
		disabled?: boolean;
		defaultValue?: Date | undefined;
	},
	ref: React.LegacyRef<HTMLInputElement> | undefined
) => {
	const {
		label,
		name,
		rootClass,
		className,
		required,
		maxDate,
		valueFormat = "yyyy-MM-dd",
		inputFormat = "dd/MM/yyyy",
		placeholder,
		disabled,
		defaultValue,
		minDate,
	} = props;
	const { errors, setValue, watch } = useFormContext();
	const calendarRef: any = useRef();
	const currentValue = watch(name);
	const selectedDate = currentValue
		? dateToDateTime(currentValue)
		: defaultValue;
	const error = _.get(errors, name);

	const handleDateChange = (date: any) => {
		setValue(name, formatDateTime(date, valueFormat));
	};

	const onShowCalendar = () => {
		if (calendarRef.current) {
			calendarRef.current.setOpen(true);
		}
	};

	return (
		<div className={`${rootClass}`}>
			<Label label={label} name={name} required={required} />

			<div className="relative">
				<ReactDatePicker
					id="datepicker-input"
					ref={calendarRef}
					selected={selectedDate}
					dateFormat={inputFormat}
					showMonthDropdown
					showYearDropdown
					dropdownMode="select"
					maxDate={maxDate}
					minDate={minDate}
					onChange={handleDateChange}
					disabled={disabled}
					className={`${
						disabled ? "border-gray-200" : "border-sand"
					} block px-3 py-2 rounded-sm w-full bg-gray-100 border ${
						error ? "border-arbutus" : "border-sand"
					} text-gray-900 ${
						error ? "focus:border-arbutus" : "focus:border-primary-color"
					} focus:outline-none focus:ring-0 focus:shadow-input ${className}`}
					showPopperArrow={false}
					placeholderText={placeholder}
				/>
				<div
					onKeyDown={onShowCalendar}
					tabIndex={0}
					role="button"
					onClick={onShowCalendar}
					className="cursor-pointer absolute inset-y-0 right-0 pb-1 pr-3 flex items-center text-sm"
				>
					<BsCalendar4 />
				</div>
			</div>
			<input
				type="hidden"
				ref={ref}
				name={name}
				id={name}
				value={currentValue}
			/>

			{error && <ErrorLabel error={error} />}
		</div>
	);
};

const TextField = React.forwardRef(TextFieldComponent);
const CardField = React.forwardRef(CardFieldComponent);
const CurrencyField = React.forwardRef(CurrencyFieldComponent);
const PasswordField = React.forwardRef(PasswordFieldComponent);
const Select = React.forwardRef(SelectComponent);
const Checkbox = React.forwardRef(CheckboxComponent);
const RadioField = React.forwardRef(RadioFieldComponent);
const DatePicker = React.forwardRef(DatePickerComponent);
const AddressField = React.forwardRef(AutoAddressFieldComponent);
const TextAreaField = React.forwardRef(TextAreaComponent);

export {
	TextField,
	CardField,
	CurrencyField,
	PasswordField,
	AddressField,
	Select,
	Checkbox,
	RadioField,
	DatePicker,
	PhoneField,
	ErrorLabel,
	TextAreaField,
};
