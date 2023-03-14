export {};

/*
  Given: I am on the coming soon page
  When: I click on the "Notify me when you launch" button
  Then: SubscribeForm component should be rendered
  Then: I fill in the form and click on the "Notify Me" button
  Then: I should see a success message
*/

describe("comingsoon page", () => {
	it("Should render subscribe form and show success message", () => {
		// Visit the coming soon page
		cy.visit("http://localhost:3003/comingsoon");

		// Click on the "Notify me when you launch" button
		cy.get(".subscribe-btn").click();

		// SubscribeForm component should be rendered
		cy.get(".subscribe-form").should("be.visible");

		// Choose option "I am a customer"
		cy.get('[type="checkbox"]').check("customer");

		// Fill in the form and click on the "Notify Me" button
		cy.get("#firstName").type("Jane");
		cy.get("#lastName").type("Doe");
		cy.get("#email").type("test@email.com");

		cy.get("#notifyMe-btn").click();

		// Success message should be displayed
		cy.get(".success-message").should("be.visible");
	});
});
