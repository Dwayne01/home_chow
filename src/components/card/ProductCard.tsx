import React from "react";
import Image from "next/image";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import yellowStarIcon from "../../../public/assets/icons/yellowStar.svg";

type Item = {
	id: number;
	title: string;
	price: string;
	discount: string;
	isInStock: boolean;
	image: any;
};

type Variation = "popular" | "instock" | "outofstock" | "allitems";

interface ProductCardProps {
	item: Item;
	variation: Variation;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, variation }) => {
	const { t } = useTranslation("common");

	const renderStockStatus = () => {
		if (variation === "instock") {
			return (
				<div className="flex items-center bg-white absolute top-[49%] left-3 px-2.5 py-1.5 font-medium rounded-[4px]">
					<BsCheckCircle className="text-green-label text-sm" />
					<div className="ml-1 text-green-label text-sm">{t("In stock")}</div>
				</div>
			);
		}
		if (variation === "outofstock") {
			return (
				<div className="flex items-center bg-white absolute top-[49%] left-3 px-2.5 py-1.5 font-medium rounded-[4px]">
					<BsXCircle className="text-red-label text-sm" />
					<div className="ml-1 text-red-label text-sm">{t("Out of stock")}</div>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 relative shadow-lg rounded-lg overflow-hidden mt-5">
			<Image
				width={376}
				src={item.image}
				alt={item.title}
				className="object-cover w-full"
			/>
			<button className="bg-white absolute top-3 right-4 p-2 rounded-full">
				<Image src={yellowStarIcon} alt="yellow star icon" />
			</button>
			<div className="bg-red-label absolute top-3 left-0 px-4 py-2 text-white font-medium ml-[1px]">{`-${item.discount}`}</div>
			{renderStockStatus()}
			<div className="p-3">
				<h3 className="text-xl font-medium">{item.title}</h3>
				<p className="my-4 text-xl font-semibold text-primary-color">{`$${item.price}`}</p>
				<button className="w-full bg-primary-color text-white text-lg font-semibold py-4 px-8 rounded-lg">
					{t("View Store")}
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
