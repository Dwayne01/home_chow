import YouMightLike, { YouMightLikeCardItem } from "@/components/youMightLike";
import { mount } from "@cypress/react";
import "../../styles/globals.css";

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
		address: "456 Main St, Vancouver, BC V1A 1A1",
		minTime: 60,
		maxTime: 90,
		serviceType: "Pick up",
		price: 75.28,
		review: 4.0,
	},
];

describe("YouMightLike", () => {
	it("renders the component with the given props", () => {
		mount(<YouMightLike items={vendorYouMightLikeItems} />);

		cy.get("button").should("have.length", 2);
		cy.get("h3").first().should("have.text", "Vendor Name 1");
		cy.get("p").eq(0).should("have.text", "123 Main St, Vancouver, BC V1A 1A1");
		cy.get("p").eq(1).should("have.text", "30 - 60 | Delivery$50");
		cy.get("small b").first().should("have.text", "4.5");
	});
});
