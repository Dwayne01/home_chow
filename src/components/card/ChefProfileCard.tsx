import Image from "next/image";
import { useTranslation } from "next-i18next";
import LocationIcon from "../../../public/assets/icons/icon_location.svg";
import DeliveryIcon from "../../../public/assets/icons/icon_delivery.svg";
import StarIcon from "../../../public/assets/icons/icon_star.svg";
import CalendarIcon from "../../../public/assets/icons/icon_calendar.svg";
import MagnifierIcon from "../../../public/assets/icons/icon_magnifier.svg";

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
							<Image src={StarIcon} alt="star-icon" />
							<p className="text-lg font-semibold">{chefRating}</p>
						</div>
						<p className="text-sm font-normal">
							{t("By")} {chefName}
						</p>
					</div>
					<div className="my-4">
						<div className="flex gap-3 my-2">
							<Image src={LocationIcon} alt="location-icon" />
							<p className="text-sm font-normal">{address}</p>
						</div>
						<div className="flex gap-2 my-2">
							<Image src={DeliveryIcon} alt="delivery-icon" />
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
					<Image src={CalendarIcon} alt="calendar-icon" />
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
						<Image src={MagnifierIcon} alt="magnifier-icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefProfileCard;
