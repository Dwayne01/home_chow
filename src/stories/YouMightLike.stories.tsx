import React from "react";
import YouMightLike, { YouMightLikeCardItem } from "@/components/youMightLike";

export default {
	title: "Stories/YouMightLike",
	component: YouMightLike,
};

const vendorYouMightLikeItems: YouMightLikeCardItem[] = [
	{
		id: 1,
		image: "/assets/images/food.jpg",
		name: "Vendor Name 1",
		address: "123 Main St, Vancouver, BC V1A 1A1",
		minTime: 30,
		maxTime: 60,
		serviceType: "Delivery",
		price: 50.0,
		review: 4.5,
	},
	{
		id: 2,
		image: "/assets/images/food.jpg",
		name: "Vendor Name 2",
		address: "123 Main St, Vancouver, BC V1A 1A1",
		minTime: 60,
		maxTime: 90,
		serviceType: "Pick up",
		price: 75.28,
		review: 4.0,
	},
];

export const Default = () => <YouMightLike items={vendorYouMightLikeItems} />;
export const Empty = () => <YouMightLike items={[]} />;
export const OneItem = () => (
	<YouMightLike
		items={[
			{
				id: 1,
				image: "/assets/images/food.jpg",
				name: "Vendor Name 1",
				address: "123 Main St, Vancouver, BC V1A 1A1",
				minTime: 30,
				maxTime: 60,
				serviceType: "Delivery",
				price: 50.0,
				review: 4.5,
			},
		]}
	/>
);
