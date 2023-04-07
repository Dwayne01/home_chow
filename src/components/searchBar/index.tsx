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
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className={classNames(
					"flex justify-center items-center border rounded-full shadow-sm px-6 py-3",
					width || "w-[329px] md:w-[567px]",
					rootClass || ""
				)}
			>
				<div className="w-11/12">
					<div>
						<h6>Where</h6>
					</div>
					<input
						type="text"
						placeholder={placeholder}
						value={query}
						onChange={handleInputChange}
						onFocus={() => setIsModalOpen(true)}
						className="w-full text-gray-700 bg-transparent border-none focus:outline-none mt-1"
					/>
				</div>

				<button
					type="submit"
					className={classNames(
						"ml-3 p-2 rounded-full w-[48px] h-[48px]",
						iconBgColor || "bg-primary-color"
					)}
				>
					<BiSearch className="w-[24px] h-[24px] text-white m-auto" />
				</button>
			</form>
			{isModalOpen && (
				<div
					className={classNames(
						"shadow-md rounded-lg px-6",
						width || "w-[329px] md:w-[567px]",
						rootClass || ""
					)}
				>
					<input
						type="text"
						placeholder="Search location..."
						className="border rounded-lg px-3 py-2 w-full my-5 ring-green-500"
					/>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
