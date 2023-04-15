import Accordion from "./index";
import foodImage from "../../../public/assets/images/food.jpg";

describe("Accordion", () => {
	const items = [
		{
			title: "White Stew",
			price: 10.95222,
			content:
				"Wings tossed in your choice of sauce, served with carrots, celery sticks, and dipping sauce. Choose at least one.",
			cardList: ["Mild Sauce", "Hot Sauce", "Medium Sauce"],
			image: foodImage,
		},
	];

	it("renders with the correct props", () => {
		// render accordion
		cy.mount(<Accordion items={items} />);

		// check proper props are rendered
		cy.get(".accordion-title").should("have.text", items[0].title);
		cy.get(".accordion-price").should("have.text", `$${items[0].price}`);

		// click to expand accordion
		cy.get(".accordion-arrow").click();

		// check proper props are rendered
		cy.get(".accordion-content").should("have.text", items[0].content);
		cy.get(".accordion-cardList").should(
			"have.text",
			items[0].cardList.join("")
		);
	});

	it("tests the user flow for placing an order", () => {
		// render accordion
		cy.mount(<Accordion items={items} />);

		// click to expand accordion
		cy.get(".accordion-arrow").click();

		// Select the option from the cardList
		cy.get(".accordion-cardList .checkButton").first().click();

		// Enter message about your preferences in the TextAreaField
		cy.get(".accordion-textArea").type("I do not eat cucumbers");

		// Select the quantity
		cy.get(".counter-plus").click();

		// Click the "Add to Cart" button to submit the order
		cy.get(".accordion-submit").click();
	});
});
