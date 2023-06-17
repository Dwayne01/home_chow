import Image from "next/image";
import { useTranslation } from "next-i18next";
import { AiFillStar } from "react-icons/ai";
import { CiForkAndKnife } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";

const VendorCard = ({
	items,
}: {
	items: {
		id: number;
		title: string;
		isNew: boolean;
		bgImage: any;
		chefImage: any;
		chefRating: number;
		deliveryTime: string;
		deliveryFee: number;
		specialty: string;
	}[];
}) => {
	const { t } = useTranslation("common");

	return (
		<div>
			{items.map((item) => (
				<div
					key={item.id}
					className="relative w-[360px] h-[260px] shadow-lg rounded-lg overflow-hidden mt-5"
				>
					<Image
						width={360}
						height={160}
						src={item.bgImage}
						alt={item.title}
						className="object-contain"
					/>
					<div className="absolute top-[33%] right-2 p-2 rounded-full">
						<Image
							width={96}
							height={96}
							src={item.chefImage}
							alt={item.title}
							className="object-contain"
						/>
					</div>
					{item.isNew ? (
						<div className="absolute bg-red-500 top-3 right-3 w-8 h-8 text-center px-0.5 py-2 rounded">
							<p className="text-white text-[50%]">{t("NEW")}</p>
						</div>
					) : null}
					<div className="p-3">
						<div className="flex items-center gap-2">
							<h3 className="text-base font-semibold">{item.title}</h3>
							<AiFillStar className="text-xl text-amber-400" />
							<div className="text-sm font-semibold">{item.chefRating}</div>
						</div>
						<div className="flex items-center gap-2 pl-1 mt-3">
							<CiForkAndKnife className="text-sm font-semibold stroke-1" />
							<p className="text-xs">{item.specialty}</p>
						</div>
						<div className="flex items-center gap-2 pl-1 mt-3">
							<TbTruckDelivery className="text-sm" />
							<p className="text-xs">
								{item.deliveryTime} {t("mins")} | {t("Deliver Price")}: $
								{item.deliveryFee}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default VendorCard;
