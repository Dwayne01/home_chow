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
		cy.get("#Sign in with Google").should("be.visible");
		cy.get("#Sign in with Google").contains(/Sign in with Google/i);
	});

	it("Should show sign up required error when forn is not properly field", () => {
		cy.get("#signUp-btn").click();
		cy.get(".sign-up-form").contains(/This field is required/i);
		cy.get(".sign-up-form").contains(/First Name/i);
		cy.get(".sign-up-form").contains(/Last Name/i);
		cy.get(".sign-up-form").contains(/Email/i);
		cy.get(".sign-up-form").contains(/Password/i);
	});

	it("Should show subscribe required error when forn is not properly field", () => {
		cy.get("#signUp-btn").click();

		cy.get("#signUp-btn").click();

		cy.get(".sign-up-form").contains(/This field is required/i);
	});

	it("Should show sign up required error when form is not properly field", () => {
		cy.get("#signUp-btn").click();

		cy.intercept("POST", "https://homechow.herokuapp.com/auth/signup", {
			fixture: "signup.json",
		}).as("signup");

		// Fill in the form and click on the "Sign Up" button
		cy.get("#firstName").type("Jane");
		cy.get("#lastName").type("Doe");
		cy.get("#email").type("test@gmail");
		cy.get("#password").type("12345678");

		cy.get("#signUp-btn").click();
	});
	describe("WideIconButton component", () => {
		it("should perform a click action when the button is clicked", () => {
			cy.get("#Sign in with Google")
				.contains("Sign in with Google")
				.click()
				.should("be.calledOnce");
		});

		// it('handles Google sign-in', () => {
		// 	// Create stubs for signInWithPopup and authMutateAsync
		// 	cy.window().then((win) => {
		// 	  cy.stub(firebase.auth, 'signInWithPopup').resolves({
		// 		// Simulate a successful sign-in with the necessary result data
		// 		credential: {
		// 		  idToken: 'your-id-token',
		// 		},
		// 	  });
		// 	  cy.stub(GoogleAuthProvider, 'credentialFromResult').resolves({
		// 		// Simulate a successful authentication with the token
		// 		token: 'your-auth-token',
		// 	  });
		// 	});
		// 	  cy.stub(win.authAPI, 'authMutateAsync').resolves({
		// 		// Simulate a successful authentication with the token
		// 		token: 'your-auth-token',
		// 	  });
		// 	});

		// 	cy.get('#your-button-id') // Select the button element to trigger the function
		// 	  .click(); // Simulate a click action

		// 	cy.url().should('eq', 'https://example.com/dashboard'); // Assert that the URL has changed to the dashboard

		// 	// Assert that the necessary functions were called with the correct arguments
		// 	cy.window().then((win) => {
		// 	  expect(win.firebase.auth.signInWithPopup).to.be.calledOnce;
		// 	  expect(win.authAPI.authMutateAsync).to.be.calledOnceWith({ idToken: 'your-id-token' });
		// 	});
		//   })
	});
});
