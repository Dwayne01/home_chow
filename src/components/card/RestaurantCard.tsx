import React from "react";
import { RestaurantsCardProps } from "@/types/dashboard";
import Image from "next/image";
import Star from "../../../public/assets/svg/Star";
import image from "../../../public/assets/images/food.jpg";

const RestaurantCard = ({
	imageUrl,
	name,
	address,
	deliveryTime,
	deliveryFee,
	rating,
	width,
}: RestaurantsCardProps) => (
	<div
		className={`flex p-6 gap-4 border border-border-neutral rounded-lg bg-white hover:shadow cursor-pointer overflow-hidden w-${width}`}
	>
		<div className="flex gap-6 border-r-2 w-1/2 p-4 items-center">
			<Image
				src={imageUrl || image}
				width={120}
				height={120}
				className="rounded-lg"
				alt="restaurant"
			/>
			<h3>{name}</h3>
		</div>
		<div className="p-4 items-center w-1/2">
			<p className="p-2">{address}</p>
			<p className="p-2">
				{deliveryTime} mins | Delivery{" "}
				<span className="text-primary-color font-semibold">${deliveryFee}</span>
			</p>
			<p className="text-primary-color p-2 flex items-center gap-2">
				<Star />
				{rating}
			</p>
		</div>
	</div>
);

export default RestaurantCard;
