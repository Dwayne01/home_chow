export {};

/*
    Given: I am on the sign up page
    When: I fill in the form and click on the "Sign Up" button
    Then: I should see a success message
*/

describe("sign up page", () => {
	beforeEach(() => {
		cy.visit("/signup");
	});

	it("Should render the sign up page", () => {
		cy.get("#signUp-btn").should("be.visible");
		cy.get("#signUp-btn").contains(/Sign Up/i);
		cy.get("[data-testid='sign-up-msg']").contains(
			/To sign up, fill in your personal details below/i
		);
	});

	it("Should show sign up required error when forn is not properly field", () => {
		cy.get("#signUp-btn").click();
		cy.get(".sign-up-form").contains(/This field is required/i);
		cy.get(".sign-up-form").contains(/First Name/i);
		cy.get(".sign-up-form").contains(/Last Name/i);
		cy.get(".sign-up-form").contains(/Email Address/i);
		cy.get(".sign-up-form").contains(/Password/i);
	});

	it("Should SignUp the form", () => {
		cy.get("#signUp-btn").click();

		cy.get("#signUp-btn").click();

		cy.get(".sign-up-form").contains(/This field is required/i);
	});

	it("Should show sign up required error when form is not properly field", () => {
		cy.intercept("POST", "https://homechow.herokuapp.com/signup", {
			fixture: "signup.json",
		}).as("signup");

		// Fill in the form and click on the "Sign Up" button
		cy.get("#firstName").type("Jane");
		cy.get("#lastName").type("Doe");
		cy.get("#email").type("test@gmail");
		cy.get("#password").type("12345678");

		cy.get("#signUp-btn").click();

		cy.wait("@signup").then(() => {
			// Success message should be displayed
			cy.get(".success-message").should("be.visible");
		});
	});
});
