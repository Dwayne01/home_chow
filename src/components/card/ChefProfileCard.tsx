import Image from "next/image";
import { useTranslation } from "next-i18next";
import { BsStar } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineCalendar } from "react-icons/hi";
import { SlMagnifier } from "react-icons/sl";

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
		<div key={id} className="w-max">
			<div className="flex items-center gap-4">
				<div>
					<Image
						width={170}
						src={image}
						alt={chefName}
						className="object-cover"
					/>
				</div>
				<div className="p-3">
					<div>
						<div className="flex gap-2 items-center">
							<p className="text-2xl  font-bold">{vendorName}</p>
							<BsStar className="text-2xl" />
							<p className="text-lg font-semibold">{chefRating}</p>
						</div>
						<p className="text-sm font-normal">
							{t("By")} {chefName}
						</p>
					</div>
					<div className="my-4">
						<div className="flex items-center gap-3 my-2">
							<GoLocation className="text-sm" />
							<p className="text-sm font-normal">{address}</p>
						</div>
						<div className="flex items-center gap-2 my-2">
							<TbTruckDelivery className="text-base" />
							<p className="text-sm font-normal">
								{deliveryTime} {t("mins")} | {t("Deliver Price")}:{" "}
								{`$${deliveryFee}`}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex gap-4 my-8">
				<button className="flex gap-2 items-center text-brown-400 border border-brown-400 text-lg font-semibold p-3 rounded-[5px]">
					<HiOutlineCalendar className="text-2xl" />
					<p className="font-base font-semibold">{t("Schedule")}</p>
				</button>
				<div className="relative">
					<input
						type="text"
						className="border border-brown-400 text-lg font-semibold p-3 rounded-[5px] w-[332px] pl-12"
						value=""
						onChange={() => {}}
					/>
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center">
						<SlMagnifier className="text-3xl text-brown-400" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefProfileCard;
