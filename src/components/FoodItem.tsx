import Image from "next/image";
import React from "react";
import classNames from "classnames";
import ReviewStars from "./common/renderers/ReviewStars";
import image from "../../public/assets/images/food.jpg";
import { numberToCurrency } from "../utils";

const FoodItem = ({
	item,
	className,
}: {
	item: {
		id: number;
		image: string;
		title: string;
		price: string;
		rating: number;
	};
	className?: string;
}) => (
	<div
		className={classNames(
			"max-w-[250px] flex justify-start items-center gap-5 hover:shadow-lg p-1 rounded-lg cursor-pointer ",
			className
		)}
	>
		<Image
			width={96}
			height={96}
			src={item.image || image}
			alt="image"
			className="rounded-2xl rounded-md"
		/>
		<div>
			<span>{item.title}</span>
			<span className="flex  items-center">
				<ReviewStars {...{ rating: item.rating }} />
			</span>
			<span>{numberToCurrency(item.price)}</span>
		</div>
	</div>
);

export default FoodItem;
