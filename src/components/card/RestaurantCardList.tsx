import { RestaurantsCardListProps } from "@/types/dashboard";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import RestaurantCard from "./RestaurantCard";
import Previous from "../../../public/assets/icons/Previous.png";
import Next from "../../../public/assets/icons/Next.png";

const RestaurantCardList = ({
	title,
	restaurants,
	itemsPerPage,
}: RestaurantsCardListProps) => {
	const [itemOffset, setItemOffset] = useState(0);

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = restaurants.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(restaurants.length / itemsPerPage);

	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * itemsPerPage) % restaurants.length;
		setItemOffset(newOffset);
	};

	return (
		<div className="flex flex-col gap-6">
			<h1>{title}</h1>
			<div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-6">
				{currentItems &&
					currentItems.map((restaurant, index) => (
						<RestaurantCard key={index} {...restaurant} />
					))}
			</div>
			<ReactPaginate
				nextLabel={<Image src={Next} alt="next page" width={7} />}
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				marginPagesDisplayed={1}
				pageCount={pageCount}
				previousLabel={<Image src={Previous} alt="previous page" />}
				pageClassName="w-7 h-7 text-center align-middle"
				pageLinkClassName="text-center align-middle"
				previousClassName="mr-4"
				nextClassName="ml-4"
				breakLabel="..."
				breakClassName="text-center"
				containerClassName="flex gap-4 text-primary-color items-center justify-center m-4"
				activeClassName="bg-primary-color text-white rounded-full w-7 h-7 text-center"
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export default RestaurantCardList;
