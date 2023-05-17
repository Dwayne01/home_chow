import { useFormContext } from "react-hook-form";
import _ from "lodash";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import classNames from "classnames";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

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
		{required && <span className="text-arbutus">{" *"}</span>}
		{infoText && <InfoTip text={infoText} />}
	</label>
);

const SelectFieldComponent = (props: any, ref: any) => {
	const {
		label,
		labelClassName,
		infoText,
		rootClass,
		required,
		inputClass,
		icon,
		alt,
		iconContainerClassName,
		iconClassNames,
		...inputProps
	} = props;
	const { errors } = useFormContext();
	const error = _.get(errors, inputProps.name);

	return (
		<div className={`flex flex-col ${rootClass}`}>
			<Label
				infoText={infoText}
				label={label}
				name={inputProps.name}
				bold
				className={labelClassName}
			/>
			<div className={`${icon ? "relative" : ""}`}>
				<select
					className={`block appearance-none w-full border border-gray-200 hovers:border-gray-300 px-4 py-2  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300 ${inputClass}`}
					{...inputProps}
					required={required}
					ref={ref}
				>
					{props.children}
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
					<svg
						className="fill-current h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path d="M10 12l-5-5 1.41-1.41L10 9.17l4.59-4.58L15 7l-5 5z" />
					</svg>
				</div>
				{error && <ErrorLabel error={error} />}
				{icon && (
					// right -0 have to provide icon container class
					// Icon class fill-current h-4 w-4
					<div
						className={`pointer-events-none absolute inset-y-0 x flex items-center px-2 text-gray-700 ${iconContainerClassName}`}
					>
						<Image src={icon} alt={alt} className={iconClassNames} />
					</div>
				)}
			</div>
			{error && <ErrorLabel error={error} />}
		</div>
	);
};

const ErrorLabel = (props: any) => {
	const { error, className, ...otherProps } = props;
	const { t } = useTranslation();

	return (
		<small className={`${className} text-red-500`} {...otherProps}>
			{error &&
				(error.type === "required" && !error.message
					? t("thisFieldIsRequired")
					: error.message)}
		</small>
	);
};

const SelectIconField = React.forwardRef(SelectFieldComponent);

export { SelectIconField };
