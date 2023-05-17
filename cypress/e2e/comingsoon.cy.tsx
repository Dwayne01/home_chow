export {};

/*
  Given: I am on the coming soon page
  When: I click on the "Notify me when you launch" button
  Then: SubscribeForm component should be rendered
  Then: I fill in the form and click on the "Notify Me" button
  Then: I should see a success message
*/

describe("comingsoon page", () => {
	beforeEach(() => {
		cy.visit("/comingsoon");
	});

	it("Should render the coming soon page", () => {
		cy.get("#notifyMe-btn").should("be.visible");
		cy.get("#notifyMe-btn").contains(/Notify me when you launch/i);
		cy.get("[data-testid='coming-soon-msg']").contains(
			/We're putting the finishing touches on our website and getting ready to launch. Sign up for updates and be the first to know when we go live./i
		);
	});

	it("Should show subscribe form when notify me botton is clocked", () => {
		cy.get("#notifyMe-btn").click();

		cy.get(".subscribe-form").contains(/Choose options that applies to you?/i);
		cy.get(".subscribe-form").contains(/First Name/i);
		cy.get(".subscribe-form").contains(/Last Name/i);
		cy.get(".subscribe-form").contains(/Email Address/i);
	});

	it("Should show subscribe required error when forn is not properly field", () => {
		cy.get("#notifyMe-btn").click();

		cy.get("#notifyMe-btn").click();

		cy.get(".subscribe-form").contains(/This field is required/i);
	});

	it("Should show subscribe required error when form is not properly filled", () => {
		cy.get("#notifyMe-btn").click();

		cy.intercept("POST", "https://homechow-staging.herokuapp.com/subscribe", {
			fixture: "comingsoon.json",
		}).as("subscribe");

		// Choose option "I am a customer"
		cy.get('[type="checkbox"]').check("customer");

		// Fill in the form and click on the "Notify Me" button
		cy.get("#firstName").type("Jane");
		cy.get("#lastName").type("Doe");
		cy.get("#email").type("test@email.com");

		cy.get("#notifyMe-btn").click();

		cy.wait("@subscribe").then(() => {
			// Success message should be displayed
			cy.get(".success-message").should("be.visible");
		});
	});
});
