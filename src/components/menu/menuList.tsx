import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import Tabs, { TabProps } from "../common/tab";
// import foodImage from "../../public/assets/images/food.jpg";
// import foodImage from "../../../public/assets/images/food.jpg"
import foodImage2 from "../../../public/assets/svg/foods/souvlaki.svg";
import foodImage3 from "../../../public/assets/svg/foods/blackSalad.svg";
import Previous from "../../../public/assets/icons/Previous.png";
import Next from "../../../public/assets/icons/Next.png";
import ProductCard from "../card/ProductCard";

const similarVendorItems = [
	{
		id: 1,
		title: "Karisha Hambugers",
		price: "45.00",
		discount: "30%",
		isInStock: true,
		image: foodImage2,
	},
	{
		id: 2,
		title: "The Place Salad",
		price: "15.00",
		discount: "50%",
		isInStock: false,
		image: foodImage3,
	},
	{
		id: 1,
		title: "Karisha Hambugers",
		price: "45.00",
		discount: "30%",
		isInStock: true,
		image: foodImage2,
	},
	{
		id: 2,
		title: "The Place Salad",
		price: "15.00",
		discount: "50%",
		isInStock: false,
		image: foodImage3,
	},
	{
		id: 1,
		title: "Karisha Hambugers",
		price: "45.00",
		discount: "30%",
		isInStock: true,
		image: foodImage2,
	},
	{
		id: 2,
		title: "The Place Salad",
		price: "15.00",
		discount: "50%",
		isInStock: false,
		image: foodImage3,
	},
];

const instockItems = [
	{
		id: 1,
		title: "Karisha Hambugers",
		price: "45.00",
		discount: "30%",
		isInStock: true,
		image: foodImage2,
	},
	{
		id: 2,
		title: "The Place Salad",
		price: "15.00",
		discount: "50%",
		isInStock: false,
		image: foodImage3,
	},
	{
		id: 1,
		title: "Karisha Hambugers",
		price: "45.00",
		discount: "30%",
		isInStock: true,
		image: foodImage2,
	},
	{
		id: 2,
		title: "The Place Salad",
		price: "15.00",
		discount: "50%",
		isInStock: false,
		image: foodImage3,
	},
	{
		id: 1,
		title: "Karisha Hambugers",
		price: "45.00",
		discount: "30%",
		isInStock: true,
		image: foodImage2,
	},
	{
		id: 2,
		title: "The Place Salad",
		price: "15.00",
		discount: "50%",
		isInStock: false,
		image: foodImage3,
	},
];

const outofstockItems = [
	{
		id: 1,
		title: "Karisha Hambugers",
		price: "45.00",
		discount: "30%",
		isInStock: true,
		image: foodImage2,
	},
	{
		id: 2,
		title: "The Place Salad",
		price: "15.00",
		discount: "50%",
		isInStock: false,
		image: foodImage3,
	},
	{
		id: 1,
		title: "Karisha Hambugers",
		price: "45.00",
		discount: "30%",
		isInStock: true,
		image: foodImage2,
	},
	{
		id: 2,
		title: "The Place Salad",
		price: "15.00",
		discount: "50%",
		isInStock: false,
		image: foodImage3,
	},
	{
		id: 1,
		title: "Karisha Hambugers",
		price: "45.00",
		discount: "30%",
		isInStock: true,
		image: foodImage2,
	},
	{
		id: 2,
		title: "The Place Salad",
		price: "15.00",
		discount: "50%",
		isInStock: false,
		image: foodImage3,
	},
];

const allItems = [
	{
		id: 1,
		title: "Karisha Hambugers",
		price: "45.00",
		discount: "30%",
		isInStock: true,
		image: foodImage2,
	},
	{
		id: 2,
		title: "The Place Salad",
		price: "15.00",
		discount: "50%",
		isInStock: false,
		image: foodImage3,
	},
	{
		id: 1,
		title: "Karisha Hambugers",
		price: "45.00",
		discount: "30%",
		isInStock: true,
		image: foodImage2,
	},
	{
		id: 2,
		title: "The Place Salad",
		price: "15.00",
		discount: "50%",
		isInStock: false,
		image: foodImage3,
	},
	{
		id: 1,
		title: "Karisha Hambugers",
		price: "45.00",
		discount: "30%",
		isInStock: true,
		image: foodImage2,
	},
	{
		id: 2,
		title: "The Place Salad",
		price: "15.00",
		discount: "50%",
		isInStock: false,
		image: foodImage3,
	},
];

const MenuList = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [itemOffset, setItemOffset] = useState(0);

	// const endOffset = itemOffset + 2;
	// const currentItems = new Array(14).slice(itemOffset, endOffset);
	const pageCount = Math.ceil(14 / 2);

	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * 2) % 14;
		setItemOffset(newOffset);
	};

	const tabs: TabProps[] = [
		{
			label: "Popular this week",
			children: (
				<div className="flex w-full flex-wrap">
					{similarVendorItems.map((item) => (
						<ProductCard item={item} variation="popular" key={item.id} />
					))}
				</div>
			),
		},
		{
			label: "In stock",
			children: (
				<div className="flex w-full flex-wrap">
					{instockItems.map((item) => (
						<ProductCard item={item} variation="instock" key={item.id} />
					))}
				</div>
			),
		},
		{
			label: "Out of Stock",
			children: (
				<div className="flex w-full flex-wrap">
					{outofstockItems.map((item) => (
						<ProductCard item={item} variation="outofstock" key={item.id} />
					))}
				</div>
			),
		},
		{
			label: "All Items",
			children: (
				<div className="flex w-full flex-wrap">
					{allItems.map((item) => (
						<ProductCard item={item} variation="allitems" key={item.id} />
					))}
				</div>
			),
		},
	];
	return (
		<div>
			<h3 className="text-black font-bold text-xl">Menu</h3>
			<div className="mt-1.5">
				<Tabs tabs={tabs} />
			</div>
			<div className="mt-4">
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
					containerClassName="flex gap-4 text-primary-color items-center justify-start mx-4"
					activeClassName="bg-primary-color text-white rounded-full w-7 h-7 text-center"
					renderOnZeroPageCount={null}
				/>
			</div>
		</div>
	);
};

export default MenuList;
