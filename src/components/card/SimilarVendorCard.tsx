import Image from "next/image";

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
}) => (
	<div className="w-fit">
		{items.map((item) => (
			<div key={item.id} className="shadow-lg rounded-lg overflow-hidden">
				<Image
					width={376}
					src={item.image}
					alt={item.title}
					className="object-cover"
				/>
				<div className="p-3">
					<h3 className="text-xl font-medium">{item.title}</h3>
					<p className="my-3.5 text-xl font-semibold text-primary-color">{`$${item.price}`}</p>
					<button className="w-full bg-primary-color text-white text-lg font-semibold py-5 px-8 rounded-lg">
						View Store
					</button>
				</div>
			</div>
		))}
	</div>
);

export default SimilarVendorCard;
