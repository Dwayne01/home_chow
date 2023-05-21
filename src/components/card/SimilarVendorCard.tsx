import Image from "next/image";
import { useTranslation } from "next-i18next";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import yellowStarIcon from "../../../public/assets/icons/yellowStar.svg";

const SimilarVendorCard = ({
	items,
}: {
	items: {
		id: number;
		title: string;
		price: string;
		discount: string;
		isInStock: boolean;
		image: HTMLImageElement;
	}[];
}) => {
	const { t } = useTranslation("common");

	return (
		<div className="w-fit">
			{items.map((item) => (
				<div
					key={item.id}
					className="relative shadow-lg rounded-lg overflow-hidden my-6"
				>
					<Image
						width={376}
						src={item.image}
						alt={item.title}
						className="object-cover"
					/>
					<button className="bg-white absolute top-3 right-4 p-2 rounded-full">
						<Image src={yellowStarIcon} alt="yellow star icon" />
					</button>
					<div className="bg-red-label absolute top-3 left-0 px-4 py-2 text-white font-medium ml-[1px]">
						{`-${item.discount}`}
					</div>
					{item.isInStock ? (
						<div className="flex items-center bg-white absolute top-[49%] left-3 px-2.5 py-1.5 font-medium rounded-[4px]">
							<BsCheckCircle className="text-green-label text-sm" />
							<div className="ml-1 text-green-label text-sm">
								{t("In stock")}
							</div>
						</div>
					) : (
						<div className="flex items-center bg-white absolute top-[49%] left-3 px-2.5 py-1.5 font-medium rounded-[4px]">
							<BsXCircle className="text-red-label text-sm" />
							<div className="ml-1 text-red-label text-sm">
								{t("Out of stock")}
							</div>
						</div>
					)}
					<div className="p-3">
						<h3 className="text-xl font-medium">{item.title}</h3>
						<p className="my-4 text-xl font-semibold text-primary-color">{`$${item.price}`}</p>
						<button className="w-full bg-primary-color text-white text-lg font-semibold py-4 px-8 rounded-lg">
							{t("View Store")}
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default SimilarVendorCard;
