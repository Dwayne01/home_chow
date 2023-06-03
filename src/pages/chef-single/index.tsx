import { useState } from "react";
import ChefSingleLayout from "@/components/layout/ChefSingleLayout";
import { Product } from "@/types/store";
import SearchBar from "@/components/searchBar";
import Tabs, { TabProps } from "@/components/common/tab";
import Cart, { CartItem } from "@/components/cart";
import Accordion from "@/components/accordion";
import SimilarVendorCard from "@/components/card/SimilarVendorCard";
import MainImage from "../../../public/assets/svg/ChefSingleMain.svg";
import foodImage from "../../../public/assets/images/food.jpg";
import foodImage2 from "../../../public/assets/svg/foods/souvlaki.svg";
import foodImage3 from "../../../public/assets/svg/foods/blackSalad.svg";

const StorePage = () => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const handleSearch = () => {};

	const items = [
		{
			id: 1,
			title: "White Stew",
			price: 10.99,
			content:
				"Wings tossed in your choice of sauce, served with carrots, celery sticks, and dipping sauce. Choose at least one.",
			cardList: ["Mild Sauce", "Hot Sauce", "Medium Sauce"],
			image: foodImage,
		},
		{
			id: 2,
			title: "Green Stew",
			price: 10.99,
			content:
				"Wings tossed in your choice of sauce, served with carrots, celery sticks, and dipping sauce. Choose at least one.",
			cardList: ["Mild Sauce", "Hot Sauce", "Medium Sauce"],
			image: foodImage,
		},
		{
			id: 3,
			title: "Black Stew",
			price: 10.99,
			content:
				"Wings tossed in your choice of sauce, served with carrots, celery sticks, and dipping sauce. Choose at least one.",
			cardList: ["Mild Sauce", "Hot Sauce", "Medium Sauce"],
			image: foodImage,
		},
		{
			id: 4,
			title: "Yellow Stew",
			price: 10.99,
			content:
				"Wings tossed in your choice of sauce, served with carrots, celery sticks, and dipping sauce. Choose at least one.",
			cardList: ["Mild Sauce", "Hot Sauce", "Medium Sauce"],
			image: foodImage,
		},
	];

	const [products] = useState<Product[]>([
		{ id: 1, name: "Burger", price: 12.99 },
		{ id: 2, name: "Fries", price: 3.99 },
		{ id: 3, name: "Coke", price: 2.99 },
	]);

	const similarVendorItems = [
		{
			id: 1,
			title: "Karisha Hambugers",
			price: "45.00",
			discount: "30%",
			isInStock: true,
			image: foodImage2,
		},
		{
			id: 2,
			title: "The Place Salad",
			price: "15.00",
			discount: "50%",
			isInStock: false,
			image: foodImage3,
		},
	];

	const tabs: TabProps[] = [
		{
			label: "Place Settings",
			children: <div>Content for tab 1</div>,
			onClick: () => {},
		},
		{
			label: "Appetizer",
			children: <div>Content for tab 2</div>,
			onClick: () => {},
		},
		{
			label: "Stew",
			children: <div>Content for tab 3</div>,
			onClick: () => {},
		},
		{
			label: "Rice",
			children: <div>Content for tab 3</div>,
			onClick: () => {},
		},
		{
			label: "Beer",
			children: <div>Content for tab 3</div>,
			onClick: () => {},
		},
		{
			label: "Cake",
			children: <div>Content for tab 3</div>,
			onClick: () => {},
		},
		{
			label: "Cheese",
			children: <div>Content for tab 3</div>,
			onClick: () => {},
		},
	];

	const handleAddToCart = (product: Product) => {
		const existingItem = cartItems.find((item) => item.id === product.id);
		if (existingItem) {
			setCartItems((prevCartItems) =>
				prevCartItems.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			setCartItems((prevCartItems) => [
				...prevCartItems,
				{
					id: product.id,
					name: product.name,
					price: product.price,
					quantity: 1,
				},
			]);
		}
	};

	const handleRemoveFromCart = (itemId: number) => {
		setCartItems((prevCartItems) =>
			prevCartItems.filter((item) => item.id !== itemId)
		);
	};

	return (
		<div>
			<ChefSingleLayout
				TopComponent={
					<SearchBar
						placeholder="Search..."
						onSearch={handleSearch}
						rootClass="h-14"
					/>
				}
				TabComponent={<Tabs tabs={tabs} />}
				LeftComponent={<Accordion items={items} />}
				RightComponent={
					<>
						<Cart
							items={cartItems}
							onAddToCart={() => handleAddToCart(products[0])}
							onRemoveFromCart={handleRemoveFromCart}
						/>
						<SimilarVendorCard items={similarVendorItems} />
					</>
				}
				MainImage={MainImage}
			/>
		</div>
	);
};

export default StorePage;
