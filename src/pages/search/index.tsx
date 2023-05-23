import Footer from "@/components/footer/Footer";
import SearchHeader from "@/components/header/SearchHeader";
import RestaurantCardList from "@/components/card/RestaurantCardList";
import YouMightLike, { YouMightLikeCardItem } from "@/components/youMightLike";

const SearchPage = () => {
	const handleSearch = () => {};

	const restaurants = [
		{
			imageUrl: "",
			name: "Kris Hamburger",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 4.5,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Stella Vegas",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Carisha pancakes",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 4.5,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Boli Salads",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Maya’s Cake",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Stella veges",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 4.5,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Suika Japanese",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 4.5,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Jollibeee",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 4.5,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Sushi Mura",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Breka",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Burger Queen",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Indian Sula",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 4.5,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Subwayy",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
		{
			imageUrl: "",
			name: "Pizza Hut",
			address: "3, Olatunji street, Ojota, Lagos.",
			deliveryTime: "15 - 20",
			deliveryFee: 3.0,
			rating: 5.0,
			width: "2/3",
		},
	];

	const vendorYouMightLikeItems: YouMightLikeCardItem[] = [
		{
			id: 1,
			image: "/assets/images/food.jpg",
			name: "Vendor Name 1",
			address: "123 Main St, Vancouver, BC V1A 1A1",
			minTime: 30,
			maxTime: 60,
			serviceType: "Delivery",
			price: 50.0,
			review: 4.5,
		},
		{
			id: 2,
			image: "/assets/images/food.jpg",
			name: "Vendor Name 2",
			address: "123 Main St, Vancouver, BC V1A 1A1",
			minTime: 60,
			maxTime: 90,
			serviceType: "Pick up",
			price: 75.28,
			review: 4.0,
		},
		{
			id: 3,
			image: "/assets/images/food.jpg",
			name: "Vendor Name 3",
			address: "123 Main St, Vancouver, BC V1A 1A1",
			minTime: 40,
			maxTime: 60,
			serviceType: "Pick up",
			price: 60.0,
			review: 3.8,
		},
	];

	return (
		<div className="min-w-min">
			<div className="mt-2">
				<SearchHeader onSearch={handleSearch} />
				<div className="flex flex-col md:flex-row justify-between gap-16 md:gap-14 m-auto my-20 px-5 md:px-0 w-[95%]">
					<div className="md:w-4/5">
						<RestaurantCardList
							title="Restaurants Near you"
							restaurants={restaurants}
							itemsPerPage={6}
						/>
					</div>
					<div className="flex flex-col gap-6">
						<h1>Places you might like</h1>
						<div className="flex flex-col gap-6 items-center">
							<YouMightLike items={vendorYouMightLikeItems} />
						</div>
					</div>
				</div>
				<Footer footerColor="light" />
			</div>
		</div>
	);
};

export default SearchPage;
