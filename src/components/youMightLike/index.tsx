import Image from "next/image";
import Star from "public/assets/svg/Star";

export interface YouMightLikeCardItem {
	id: number;
	image: string;
	name: string;
	address: string;
	minTime: number;
	maxTime: number;
	serviceType: string;
	price: number;
	review?: number;
}

type Props = {
	items: YouMightLikeCardItem[];
};

const YouMightLike = ({ items }: Props) => (
		<>
			{items.map((item) => (
				<button className="min-w-[250px] max-w-[400px] shadow-lg rounded-b-[36px]">
					<div className="flex flex-col items-start">
						<Image
							width={400}
							height={350}
							src={item.image}
							alt="vendor image"
						/>
						<div className="flex flex-col items-start ml-6 mr-6 gap-4 pt-6 pb-6 text-left">
							<h3>{item.name}</h3>
							<p className="text-gray-50">{item.address}</p>
							<p className="flex gap-1 text-gray-50">
								{item.minTime} - {item.maxTime} | {item.serviceType}
								<b className="text-grey-dark">${item.price}</b>
							</p>
							<div className="flex gap-1 items-center">
								<Star />
								<small>
									<b>{item.review}</b>
								</small>
							</div>
						</div>
					</div>
				</button>
			))}
		</>
	);

export default YouMightLike;
