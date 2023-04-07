import React, { useState } from "react";
import classNames from "classnames";
import { BiSearch } from "react-icons/bi";

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
	const [query, setQuery] = useState<string>("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={classNames(
				"flex items-center border rounded-full px-3 py-2",
				width || "w-[329px] md:w-[567px]",
				rootClass || ""
			)}
		>
			<input
				type="text"
				placeholder={placeholder}
				value={query}
				onChange={handleInputChange}
				className="w-full text-gray-700 bg-transparent border-none focus:outline-none"
			/>
			<button
				type="submit"
				className={classNames(
					"ml-3 p-2 rounded-full",
					iconBgColor || "bg-primary-color"
				)}
			>
				<BiSearch className="w-5 h-5 text-white" />
			</button>
		</form>
	);
};

export default SearchBar;
