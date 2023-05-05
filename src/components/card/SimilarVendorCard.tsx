import Image from "next/image";

const SimilarVendorCard = ({
	items,
}: {
	items: {
		id: number;
		image: any;
		title: string;
		price: number;
	}[];
}) => (
	<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{items.map((item) => (
			<div
				key={item.id}
				className="bg-white shadow-lg rounded-lg overflow-hidden"
			>
				<Image
					width={376}
					height={246}
					src={item.image}
					alt={item.title}
					className="object-cover"
				/>
				<div className="py-4 px-6">
					<h3 className="text-gray-700 text-xl font-semibold">{item.title}</h3>
					<p className="text-gray-500 mt-2">{`$${item.price}`}</p>
					<button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
						Add to Cart
					</button>
				</div>
			</div>
		))}
	</div>
);

export default SimilarVendorCard;
