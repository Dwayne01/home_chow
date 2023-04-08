import { mount } from "@cypress/react";
import Cart from "@/components/cart";

describe("Cart Component", () => {
	const items = [
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
	];
	let onAddToCart: any;
	let onRemoveFromCart: any;

	beforeEach(() => {
		onAddToCart = cy.stub().as("onAddToCart");
		onRemoveFromCart = cy.stub().as("onRemoveFromCart");
		mount(
			<Cart
				items={items}
				onAddToCart={onAddToCart}
				onRemoveFromCart={onRemoveFromCart}
			/>
		);
	});

	it("displays the correct items and subtotal", () => {
		cy.contains("Fries");
		cy.contains("Burger");
		cy.contains("$29.97");
	});

	// it("calls onAddToCart when the add to cart button is clicked", () => {
	// 	cy.contains("Add to cart").click();
	// 	cy.wrap(onAddToCart).should("have.been.calledOnce");
	// });

	// it("calls onRemoveFromCart when the remove button is clicked", () => {
	// 	cy.contains("Burger").parent().contains("Cross").click();
	// 	cy.wrap(onRemoveFromCart).should("have.been.calledOnceWithExactly", 2);
	// });

	it("disables the add to cart button when there are no items in the cart", () => {
		mount(
			<Cart
				items={[]}
				onAddToCart={onAddToCart}
				onRemoveFromCart={onRemoveFromCart}
			/>
		);
		cy.contains("Add to cart").should("be.disabled");
	});
});
