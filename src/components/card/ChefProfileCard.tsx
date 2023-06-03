import Image from "next/image";
import { useTranslation } from "next-i18next";

const ChefProfileCard = ({
	id,
	vendorName,
	chefName,
	chefRating,
	address,
	deliveryTime,
	deliveryFee,
	image,
}: {
	id: string;
	vendorName: string;
	chefName: string;
	chefRating: number;
	address: string;
	deliveryTime: string;
	deliveryFee: number;
	image: HTMLImageElement;
}) => {
	const { t } = useTranslation("common");

	return (
		<div className="w-fit">
			<div
				key={id}
				className="relative shadow-lg rounded-lg overflow-hidden mt-5"
			>
				<Image
					width={376}
					src={image}
					alt={chefName}
					className="object-cover"
				/>
				<div className="p-3">
					<h3 className="text-xl font-medium">{vendorName}</h3>
					<p className="my-4 text-xl font-semibold text-primary-color">{`$${deliveryFee}`}</p>
					<p className="my-4 text-xl font-semibold text-primary-color">
						{chefRating}
					</p>
					<p className="my-4 text-xl font-semibold text-primary-color">
						{address}
					</p>
					<p className="my-4 text-xl font-semibold text-primary-color">
						{deliveryTime}
					</p>
					<button className="w-full bg-primary-color text-white text-lg font-semibold py-4 px-8 rounded-lg">
						{t("Schedule")}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChefProfileCard;
