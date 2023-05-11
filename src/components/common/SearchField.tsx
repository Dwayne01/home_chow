import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { RiSearchLine } from "react-icons/ri";
import classNames from "classnames";
import { SearchFieldProps } from "../../types/dashboard";

const SearchField = ({
	className = "",
	width = "w-full",
	placeholder = "Search for a product",
	onChange,
}: SearchFieldProps) => {
	const handleChange = debounce(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			onChange && onChange(event.target.value);
		},
		300
	);

	const methods = useForm();

	return (
		<FormProvider {...methods}>
			<div className="flex items-center relative">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<RiSearchLine className="h-4 w-4" aria-hidden="true" />
				</div>
				<input
					type="text"
					name={placeholder}
					className={classNames(
						"block",
						"p-2",
						"pl-10",
						"max-w-full",
						"rounded-lg",
						"border",
						"sm:text-sm",
						"border-grey-light",
						"bg-grey-1",
						"focus:border-grey-dark",
						"focus:outline-none",
						"focus:ring-grey-dark",
						"focus-visible:ring-grey-dark",
						"focus-visible:outline-offset-0",
						"placeholder:font-body-medium",
						"font-normal",
						width,
						className
					)}
					placeholder={placeholder}
					aria-describedby={placeholder}
					onChange={handleChange}
				/>
			</div>
		</FormProvider>
	);
};

export default SearchField;

function debounce<T extends (...args: any[]) => void>(
	fn: T,
	delay: number
): (...args: Parameters<T>) => void {
	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	return (...args: Parameters<T>) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			fn(...args);
			timeoutId = null;
		}, delay);
	};
}
