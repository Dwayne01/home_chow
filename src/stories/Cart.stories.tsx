import Cart from "@/components/cart";

export default {
	title: "Components/Cart",
	component: Cart,
};

export const EmptyCart = () => (
	<Cart items={[]} onAddToCart={() => {}} onRemoveFromCart={() => {}} />
);

EmptyCart.args = {
	items: [],
	onAddToCart: () => {},
	onRemoveFromCart: () => {},
};

export const FilledCart = () => (
	<Cart
		items={[
			{
				id: 1,
				name: "Burger",
				price: 12.99,
				quantity: 2,
			},
			{
				id: 2,
				name: "Fries",
				price: 3.99,
				quantity: 1,
			},
		]}
		onAddToCart={() => {}}
		onRemoveFromCart={() => {}}
	/>
);

FilledCart.args = {
	items: [
		{
			id: 1,
			name: "Burger",
			price: 12.99,
			quantity: 2,
		},
		{
			id: 2,
			name: "Fries",
			price: 3.99,
			quantity: 1,
		},
	],
	onAddToCart: () => {},
	onRemoveFromCart: () => {},
};
