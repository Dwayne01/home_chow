import { applyTheme } from "@/theme/utils";
import Accordion from "./index";
import foodImage from "../../../public/assets/images/food.jpg";
import "../../styles/globals.css";

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

applyTheme();
describe("<Accordion />", () => {
	beforeEach(() => {
		// Load a local image and intercept requests for Next.js image components
		cy.readFile("public/assets/images/food.jpg", null).then((img) => {
			cy.intercept("_next/image*", {
				statusCode: 200,
				headers: { "Content-Type": "image/png" },
				body: img.buffer,
			});
			cy.mount(<Accordion items={items} />);
		});
	});

	it("renders with the correct props", () => {
		// Check proper props are rendered
		cy.get(".accordion-title").should("have.text", items[0].title);
		cy.get(".accordion-price").should("have.text", `$${items[0].price}`);

		// Click to expand accordion
		cy.get(".accordion-arrow").click();

		// Check proper props are rendered
		cy.get(".accordion-content").should("have.text", items[0].content);
		cy.get(".accordion-cardList").should(
			"have.text",
			items[0].cardList.join("")
		);
	});

	it("tests the user flow for placing an order", () => {
		// Click to expand accordion
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
