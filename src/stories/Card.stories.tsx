import RestaurantCardList from "@/components/card/RestaurantCardList";

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

export default {
	title: "Stories/Card",
	component: RestaurantCardList,
};

export const Default = {
	args: {
		title: "",
		restaurants: [
			{
				imageUrl: "",
				name: "Homechow",
				address: "3, Olatunji street, Ojota, Lagos.",
				deliveryTime: "15 - 20",
				deliveryFee: 3.0,
				rating: 4.5,
				width: "2/3",
			},
		],
		itemsPerPage: 1,
	},
};

export const Small = {
	args: {
		title: "",
		restaurants: [
			{
				imageUrl: "",
				name: "Homechow",
				address: "3, Olatunji street, Ojota, Lagos.",
				deliveryTime: "15 - 20",
				deliveryFee: 3.0,
				rating: 4.5,
				width: "min",
			},
		],
		itemsPerPage: 1,
	},
};

export const Big = {
	args: {
		title: "",
		restaurants: [
			{
				imageUrl: "",
				name: "Homechow",
				address: "3, Olatunji street, Ojota, Lagos.",
				deliveryTime: "15 - 20",
				deliveryFee: 3.0,
				rating: 4.5,
				width: "full",
			},
		],
		itemsPerPage: 1,
	},
};

export const List = {
	args: {
		title: "Restaurants Near you",
		restaurants,
		itemsPerPage: 2,
	},
};
