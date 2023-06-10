import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const ChefRatingCard = ({
	items,
}: {
	items: {
		id: number;
		userName: string;
		userImage: any;
		chefName: string;
		ratingDate: string;
		chefRating: number;
		comment: string;
	}[];
}) => (
	<div>
		{items.map((item) => (
			<div
				key={item.id}
				className="relative w-[343px] h-[101px] shadow-lg rounded-lg mt-5 pt-1"
			>
				<div className="absolute left-3.5 top-1 rounded-full">
					<Image
						width={54}
						height={53}
						src={item.userImage}
						alt={item.chefName}
						className="object-contain rounded-full"
					/>
					<div className="flex items-center gap-1 mt-3 ml-1">
						<AiFillStar className="text-xl text-amber-400" />
						<div className="text-xs font-semibold">{item.chefRating}</div>
					</div>
				</div>
				<div className="ml-20">
					<div className="flex justify-between items-center">
						<h3 className="text-base font-semibold">{item.userName}</h3>
						<p className="text-sm mr-2">{item.ratingDate}</p>
					</div>
					<p className="my-1 text-sm">{item.comment}</p>
				</div>
			</div>
		))}
	</div>
);

export default ChefRatingCard;
